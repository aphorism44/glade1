  
  
 var combatScreen = Class.create(Scene, {
     // the links to credits   
    initialize: function(battleId, playerArray, enemyArray, isEscapable, enemyLevels, maxNoOfEnemies) {
    	
    	this.name = "combatScreen";
        var game;
        Scene.apply(this);
        game = Game.instance;
		var bg = makeBackground(game.assets['res/blackBg.png']);
		this.addChild(bg);
		this.bgm = game.assets['res/sounds/battle.mp3'];
		this.bgm.play();
		//loop BGM
		this.addEventListener(Event.ENTER_FRAME, function() {
        	if(this.bgm.currentTime >= this.bgm.duration){
    			this.bgm.play();
			} 
		});
		this.battleId = battleId;
		this.enemyArray = enemyArray;
		this.battleOn = true;
		this.battleWait = true;
		this.actionsShowing = false;
		this.actionsShowing = false;
		this.resultsShowing = false;
		this.damageShowing = false;
		this.roundOver = false;
		this.leaveScreen = false;
		
		this.combantants = [];
		this.fledCharacters = [];
		this.fighterPortraits = [];
		this.playerSprites = [];
		this.playerMeters = [];
		this.enemySprites = [];
		this.round = 1;
		this.textLabel = makeLabel("", 100, 50, "Sans Sarif", 19, "Black", 220, 100, "Wheat ");
		
		this.actionChosen = 0;
		this.actionChosenText = '';
		this.optionArray = [];
		this.currentPlayerIndex = -1;
		
		var attackSymbol = new Sprite(80, 100);
		attackSymbol.image = game.assets['res/attackSymbol.png'];
		attackSymbol.actionInt = 1;
		attackSymbol.actionText = 'Attack';
		attackSymbol.addEventListener(Event.TOUCH_START, function(e) {
			game.currentScene.actionChosen = this.actionInt;
			game.currentScene.actionChosenText = this.actionText;
		});
		this.optionArray.push(attackSymbol);
		
		var defendSymbol = new Sprite(80, 100);
		defendSymbol.image = game.assets['res/defendSymbol.png'];
		defendSymbol.actionInt = 2;
		defendSymbol.actionText = 'Defend';
		defendSymbol.addEventListener(Event.TOUCH_START, function(e) {
			game.currentScene.actionChosen = this.actionInt;
			game.currentScene.actionChosenText = this.actionText;
		});
		this.optionArray.push(defendSymbol);
		
		var splitSymbol = new Sprite(80, 100);
		splitSymbol.image = game.assets['res/splitSymbol.png'];
		splitSymbol.actionInt = 3;
		splitSymbol.actionText = 'Split';
		splitSymbol.addEventListener(Event.TOUCH_START, function(e) {
			game.currentScene.actionChosen = this.actionInt;
			game.currentScene.actionChosenText = this.actionText;
		});
		this.optionArray.push(splitSymbol);
		
		if (isEscapable) {
			var runSymbol = new Sprite(80, 100);
			runSymbol.image = game.assets['res/runSymbol.png'];
			runSymbol.actionInt = 4;
			runSymbol.actionText = 'Run';
			runSymbol.addEventListener(Event.TOUCH_START, function(e) {
				game.currentScene.actionChosen = this.actionInt;
				game.currentScene.actionChosenText = this.actionText;
			});
			this.optionArray.push(runSymbol);
		}
		
		this.beginRoundText = "";
		this.beginRoundLabel = makeLabel("", 100, 100, "Sans Sarif", 19, "Black", 220, 100, "lightblue");
		
		this.actionBar =  new IconMenu(this.optionArray);
		this.actionBar.buttonMode = true;
		this.actionBar.y = 200;
		
		this.actionBar.addEventListener(Event.ENTER_FRAME, function(element) {
			if (game.currentScene.actionChosen > 0) {
				game.currentScene.combantants[game.currentScene.currentPlayerIndex].faceLogo.y += 30;	
				game.currentScene.combantants[game.currentScene.currentPlayerIndex].action = game.currentScene.actionChosen;
				game.currentScene.actionChosen = 0;
				game.currentScene.actionChosenText = '';
				game.currentScene.actionsTaken++; 
				game.currentScene.currentPlayerIndex = -1;
				game.currentScene.removeChild(this);
				game.currentScene.battleWait = false;
			}
		});		 
		
		
		//runs when scene begins
		this.addEventListener(Event.ENTER, function() { 
			this.setUpBattleData();
			this.setUpBattleRound();
			this.beginRoundLabel.text = this.beginRoundText;
			this.actionsTaken = 0;
			this.beginRoundLabel.tl.delay(30).then(function() {
				game.currentScene.beginRoundText.text = "";
				game.currentScene.removeChild(game.currentScene.beginRoundLabel);
				game.currentScene.battleWait = false;
			});
			
			this.addChild(this.beginRoundLabel);
		});
		
		//main battle loop handler
		this.addEventListener(Event.ENTER_FRAME, function() { 
			if(!this.battleWait) {
				this.battleWait = true;
				if (this.damageShowing) {
					this.showDamage();
				} else if (this.actionsShowing) {
					this.showActions();			
				} else if (this.resultsShowing) {
					this.showResults();
				} else if (this.roundOver) {
					if (!this.battleOn) {
						if (this.leaveScreen) {
							leaveCombatScreen(game.currentScene.battleId);
						} else {
							this.showEndBattleScreen();
						}
					} else {
						this.roundOver = false;
						this.setUpBattleRound();
						this.battleWait = false;
					}
				//if are still players who need to take an action, prompt them
				} else if (this.needMorePlayerActions()) {
					this.promptNextPlayerAction();
				//if all actions are taken, get enemy actions, resolve, and show results
				} else {
					this.resolveAllActions(); //this grabs monster AI action, then resolves all the actions and results
				}	
		    }
		});
		
		//battle methods
		this.getAttackIndex = function (isTargetMonster) {
			var attackIndex;
			//players attack the first living monster;
			//monsters attack random livng player
			if (isTargetMonster) {
				for (index in this.combantants) {
					if (this.combantants[index].HP > 0 && this.combantants[index].isMonster) {
						attackIndex = index;
						break;
					}
				}
			} else {
				var foundTarget = false;
				while (!foundTarget) {
					attackIndex = Math.floor(Math.random() * this.combantants.length);
					if (this.combantants[attackIndex].HP > 0 && this.combantants[attackIndex].isMonster == isTargetMonster)
						foundTarget = true;
				}	
			}
			return attackIndex;
		};
		
		this.bothSidesStillFighting = function() {
				var enemyCount = 0, friendCount = 0;
				this.combantants.forEach(function (element) {
					if (element.HP > 0) {
							if (element.isMonster)
								enemyCount++;
							else
								friendCount++;
						}
				});
			return ((enemyCount > 0) && (friendCount > 0));	
		};
		
		this.needMorePlayerActions = function() {
			var actionCount = 0;
			this.combantants.forEach(function (element) {
				if (!element.isMonster && element.action == -1 && element.HP > 0)
					actionCount++;
				
			});
			
			return (actionCount > 0);
		};
		
		this.battleOutcome = function() {
			var outcome = 0  ;
			var partyLeft = false;
			this.combantants.forEach(function (element) {
				if (element.HP > 0 && !element.isMonster)
						partyLeft = true;
			});
			if (partyLeft) {
				outcome = 1;
			} else if (this.fledCharacters.length > 0) {
				outcome = 3;
			} else {
				outcome = 2;
			}
			
			game.lastBattleResult = outcome;
			return outcome;
		};
		
		//run this when battle is resolved
		this.showEndBattleScreen = function() {
			var battleEndText;
			switch (this.battleOutcome()) {
				case 1: battleEndText = 'The party has won!';
						this.beginRoundLabel.backgroundColor = "Violet";
						break;
				case 2:  battleEndText = 'The party has been defeated...';
						this.beginRoundLabel.backgroundColor = "SkyBlue";
						break;
				case 3:  battleEndText = 'The party ran away.';
						this.beginRoundLabel.backgroundColor = "WhiteSmoke";
						break;
				default: battleEndText = 'Something is wrong...';
						break;
			}
			this.beginRoundLabel.text = wordWrap(battleEndText, 220, 12);
			this.beginRoundLabel.tl.delay(30).then(function() {
				game.currentScene.beginRoundText.text = "";
				game.currentScene.leaveScreen = true;
				game.currentScene.battleWait = false;
				game.currentScene.removeChild(game.currentScene.beginRoundLabel);
			});
			this.addChild(this.beginRoundLabel);
		};
		
		//setup screen at beginning of each round
		this.setUpBattleData = function() {
			for (index in playerArray) {
				this.combantants.push(new Fighter(playerArray[index], null, game));
			}
			if (this.enemyArray == null) {
				var numOfMonsters = Math.ceil(Math.random() * maxNoOfEnemies);
				for (var i = 0; i < numOfMonsters; i++) {
					this.combantants.push(new Fighter('randomMonster', enemyLevels, game));
				}
			} else {
				for (index in enemyArray) {
					this.combantants.push(new Fighter(enemyArray[index]));
				}
			}
		};
		
		//set up sprites for round
		this.setUpBattleRound = function() {
			var attackingEnemiesStr = "";
			var playerCount = 0;
			
			//remove all the sprites already on screen
			this.fighterPortraits.forEach(function (element) {
				game.currentScene.removeChild(element);
			});
			this.playerSprites.forEach(function (element) {
				game.currentScene.removeChild(element);
			});
			this.playerMeters.forEach(function (element) {
				game.currentScene.removeChild(element);
			});
			this.enemySprites.forEach(function (element) {
				game.currentScene.removeChild(element);
			});
			this.fighterPortraits = [];
			this.playerSprites = [];
			this.enemySprites = [];
				
			
			//sort by character speed, then place
			this.combantants.sort(function(a, b) { return b.MOVE - a.MOVE; });
			this.combantants.forEach(function (element) {
				if (!element.isMonster) {
					element.playerPortrait = element.faceIcon;
					element.playerSpriteName = element.sprite;
					element.faceLogo = new Sprite(80, 80);
					element.faceLogo.image = game.assets[element.playerPortrait];
					element.faceLogo.x = 30 + (playerCount * 80);
					element.faceLogo.y = 400;
					element.playerSprite = new Sprite(game.battleSpriteWidth, game.battleSpriteHeight);
					element.playerSprite.image = game.assets[element.playerSpriteName];
					element.playerSprite.x = 50 + (playerCount * 80);
					element.playerSprite.y = 300;
					element.playerSprite.frame = [15,15,15,12,12,12,13,13,13,14,14,14];
					var initialHP = 'HP: ' + element.HP;
					element.hpMeter = makeLabel(initialHP, 50 + (playerCount * 80), 500, "Sans Sarif", 19, "", 80, 20, "Black");
					element.currentHP = element.HP;
					if (element.HP < (element.MaxHP / 3)) {
						element.hpMeter.color = "Red";
					} else if (element.HP < element.MaxHP) {
						element.hpMeter.color = "Yellow";
					} else {
						element.hpMeter.color = "Chartreuse";
					}
					
					game.currentScene.fighterPortraits.push(element.faceLogo);
					game.currentScene.playerSprites.push(element.playerSprite);
					game.currentScene.playerMeters.push(element.hpMeter);
					game.currentScene.addChild(element.playerSprite);
					game.currentScene.addChild(element.faceLogo);
					game.currentScene.addChild(element.hpMeter);
					playerCount++;
				}
			});
			var enemyCount = 0;
			this.combantants.forEach(function (element) {
				if (element.isMonster) {
					element.enemySpriteName = element.sprite;
					element.enemySprite = new Sprite(game.battleSpriteWidth, game.battleSpriteHeight);
					element.enemySprite.image = game.assets[element.enemySpriteName];
					element.enemySprite.x = 50 + (enemyCount * 50);
					element.enemySprite.y = 100;
					element.enemySprite.frame = [0,0,0,1,1,1,,2,2,2,3,3,3];
					game.currentScene.enemySprites.push(element.enemySprite);
					game.currentScene.addChild(element.enemySprite);
					if (enemyCount == 0)
						attackingEnemiesStr = element.name;
					else
						attackingEnemiesStr = attackingEnemiesStr + ', ' + element.name;
					enemyCount++;
					}
				});
				this.beginRoundText = 'Attacked by:<br> ' + attackingEnemiesStr;
				this.beginRoundText = wordWrap(this.beginRoundText, 220, 12);
			};
		
			this.resolveAllActions = function() {
				//get monster AI actions
				this.combantants.forEach(function (element) {
					if (element.isMonster) {
						var enemyAction = element.getAIAction(isEscapable);
						element.action = enemyAction;
						this.actionsTaken++; 
					}
				});
				this.resolveActions();
				this.damageShowing = true;
				this.battleWait = false;
			};
		
			this.promptNextPlayerAction = function() {  
				//prompt a player for their action; get enemy actions
				for (var i = 0; i < this.combantants.length; i++) {
					if (!this.combantants[i].isMonster && this.combantants[i].action == -1) {
						this.currentPlayerIndex = i;
						break;
					}
				}
				this.combantants[this.currentPlayerIndex].faceLogo.y -= 30;		
				game.currentScene.addChild(this.actionBar);
			};
				
			this.resolveActions = function() {
				//set up this rounds stats
				this.combantants.forEach(function (element) {
					
					var modAttack = element.weapon.attackMod + element.armor.attackMod;
					var modDefense = element.weapon.defenseMod + element.armor.defenseMod;
					
					if (element.action == 1) {
						element.defenseDEX = 0;
						element.attackDEX = element.DEX;
					} else if (element.action == 2) {
						element.defenseDEX = element.DEX;
						element.attackDEX = 0;
					} else if (element.action == 3) {
						element.defenseDEX = Math.floor(element.DEX / 2);
						element.attackDEX = Math.floor(element.DEX / 2);
					} else {
						element.defenseDEX = Math.floor(element.DEX / 2);
						element.attackDEX = 0;
					}
					element.attackDEX += modDefense;
					element.defenseDEX += modAttack;
				});
				
				//resolve the actions
				for (i in this.combantants) {
					if (this.combantants[i].HP > 0 && (this.combantants[i].action == 1 || this.combantants[i].action == 3)) {
						var randomAttackIndex;
						if (!this.combantants[i].isMonster) {
							randomAttackIndex = this.getAttackIndex(true);
						} else {
							randomAttackIndex = this.getAttackIndex(false);
						}
						if (this.combantants[i].action == 1) {
							//this.combantants[i].lastActionText = this.combantants[i].name +' is attacking ' + this.combantants[randomAttackIndex].name + '.';
						
						} else {
							//this.combantants[i].lastActionText  = this.combantants[i].name +' is cautiously attacking ' + this.combantants[randomAttackIndex].name + '.';
						}
						//resolve attack now
						this.combantants[i].attackText = this.combantants[randomAttackIndex].getAttackedBy(this.combantants[i]);
							
					} else if (this.combantants[i].HP > 0 && this.combantants[i].action == 2) {
						this.combantants[i].lastActionText  = this.combantants[i].name +' is defending.';
					} else if (this.combantants[i].HP > 0 && this.combantants[i].action == 4) {
						this.combantants[i].lastActionText  = this.combantants[i].name +' is trying to flee.';
					} else {
						//this.combantants[i].lastActionText  = this.combantants[i].name +' is unconscious.';
					}	
					//break loop if everyone is dead
					if (!this.bothSidesStillFighting())
						break;
				} //end each action resolve loop
			};
			
			this.showActions = function() {
				//look for next player that needs an action shown on screen
				var actionText, actionInt, isConscious = true;
				if (this.actionsLeftToShow()) {
					for (var i = 0; i < this.combantants.length; i++) {
						if (this.combantants[i].lastActionText != '')  {
							actionText = this.combantants[i].lastActionText;
							actionInt = this.combantants[i].action;
							if (this.combantants[i].HP < 1)
								isConscious = false;
							this.combantants[i].lastActionText = '';
							break;
						}
					}
					//pop up a window with the action text
					actionText = wordWrap(actionText, 220, 12);
					this.textLabel.text = actionText;
					//color of textLabel depends on action
					if (actionInt == 1) {
						this.textLabel.backgroundColor = "Violet";
					} else if(actionInt == 2) {
						this.textLabel.backgroundColor = "SpringGreen";
					} else if (actionInt == 3) {
						this.textLabel.backgroundColor = "Yellow ";
					} else {
						this.textLabel.backgroundColor = "Turquoise ";
					}
					this.textLabel.addEventListener(Event.ADDED_TO_SCENE, function () {
						this.tl.delay(30).then(function() {
							this.text = ''; 
							game.currentScene.battleWait = false;
							game.currentScene.removeChild(this);
						});
					});
					if (isConscious) {
						this.addChild(this.textLabel);
					} else {
						game.currentScene.battleWait = false;
					}
				} else {
					this.resolveResultsText();
					this.actionsShowing = false;
					this.resultsShowing = true;
					this.battleWait = false;
				}
			};
			
			this.actionsLeftToShow = function() {
				var actionsLeft = false;
				for (var i = 0; i < this.combantants.length; i++) {
						if (this.combantants[i].lastActionText != '')  {
							actionsLeft = true;
							break;
						}
					}
				return actionsLeft;
			};
			
			
			this.resolveResultsText = function() {
				//record dead or fled characters
				for (var j = this.combantants.length - 1; j >= 0; j--) {
					if (this.combantants[j].HP < 1) {
						this.combantants[j].lastResultText  = this.combantants[j].name + ' is knocked out.';
					} else if (this.combantants[j].HP > 0 && this.combantants[j].action == 4) {
						this.combantants[j].lastResultText = this.combantants[j].name + ' flees.';
					}		
				}
			};

			
			this.showResults = function() {
				//look for next player that needs a result shown on screen
				var resultText;
				var knockedOut = false;
				if (this.resultsLeftToShow()) {
					for (var i = 0; i < this.combantants.length; i++) {
						if (this.combantants[i].lastResultText != '')  {
							resultText = this.combantants[i].lastResultText;
							if (this.combantants[i].HP < 1) {
								knockedOut = true;
							}
							this.combantants[i].lastResultText = '';
							break;
						}
					}
					//color of textLabel depends on result
					if (knockedOut) {
						this.textLabel.backgroundColor = "Salmon";
					} else {
						this.textLabel.backgroundColor = "Orange ";
					}
					//pop up a window with the action text
					resultText = wordWrap(resultText, 220, 12);
					this.textLabel.text = resultText;
					this.textLabel.addEventListener(Event.ADDED_TO_SCENE, function () {
						this.tl.delay(30).then(function() {
							this.text = ''; 
							game.currentScene.battleWait = false;
							game.currentScene.removeChild(this);
						});
					});
					this.addChild(this.textLabel);
				} else {
					this.resultsShowing = false;
					this.removeCombantants();
				}
			};
			
			this.resultsLeftToShow = function() {
				var resultsLeft = false;
				for (var i = 0; i < this.combantants.length; i++) {
						if (this.combantants[i].lastResultText != '')  {
							resultsLeft = true;
							break;
						}
					}
				return resultsLeft;
			};

			this.showDamage = function() {
				//look for next player that needs a result shown on screen
				var lastDamage, lastDamageInt, currentHP;
				if (this.damageLeftToShow()) {
					for (var i = 0; i < this.combantants.length; i++) {
						if (this.combantants[i].lastDamageText.length > 0)  {
							lastDamage = this.combantants[i].lastDamageText.shift();
							lastDamageInt = this.combantants[i].lastDamageInts.shift();
							//update HP counter of players
							if (!this.combantants[i].isMonster) {
								currentHP = this.combantants[i].currentHP - lastDamageInt;
								if (currentHP < 0)
									currentHP = 0;
								this.combantants[i].hpMeter.text = 'HP: ' + currentHP;
								this.combantants[i].currentHP = currentHP;
								if (this.combantants[i].HP < (this.combantants[i].MaxHP / 3)) {
									this.combantants[i].hpMeter.color = "Red";
								} else if (this.combantants[i].HP < this.combantants[i].MaxHP) {
									this.combantants[i].hpMeter.color = "Yellow";
								} else {
									this.combantants[i].hpMeter.color = "Chartreuse";
								}
							}
							break;
						}
					}
					//pop up a window with the action text
					lastDamage = wordWrap(lastDamage, 220, 12);
					this.textLabel.text = lastDamage;
					this.textLabel.backgroundColor = "Red";
					this.textLabel.addEventListener(Event.ADDED_TO_SCENE, function () {
						this.tl.delay(30).then(function() {
							this.text = ''; 
							game.currentScene.battleWait = false;
							game.currentScene.removeChild(this);
						});
					});
					this.addChild(this.textLabel);
				} else {
					this.damageShowing = false;
					this.actionsShowing = true;
					this.battleWait = false;
				}
			};
			
			this.damageLeftToShow = function() {
				var damageLeft = false;
				for (var i = 0; i < this.combantants.length; i++) {
						if (this.combantants[i].lastDamageText.length > 0)  {
							damageLeft = true;
							break;
						}
					}
				return damageLeft;
			};


			this.removeCombantants = function() {
				
				console.log("enter removeCombat");
				var actionJustTaken;
				//remove who's dead or fled; end game if necessary
				
				for (var j = this.combantants.length - 1; j >= 0; j--) {
					actionJustTaken = this.combantants[j].action;
					this.combantants[j].action = -1;
			
					if (this.combantants[j].HP < 1) {
						this.combantants.splice(j, 1);
					} else if (this.combantants[j].HP > 0 && actionJustTaken == 4) {
						if (!this.combantants[j].isMonster) {
							this.fledCharacters.push(this.combantants.splice(j, 1));
						} else {
							this.combantants.splice(j, 1);	
						}
					}	
				}	
				//check if battle is over
				if (!this.bothSidesStillFighting()) {
					this.battleOn = false;
				} else {
					this.round++;
				}
				
				this.roundOver = true;
				this.battleWait = false;
			};
			
    	} //end scene initialization
    	
    	
	}); //end scene object


//objects for battle screen
function Fighter(name, levelArray, game) {
	var game;
    game = Game.instance;
    
	var allFighterData = game.fighterData;
	var equipment = game.equipmentData;
	var allEquipData = game.fighterEquipData;
	
	//constructor
	if (name != 'randomMonster') {
		for (var i in allFighterData) {
			if (allFighterData[i].name == name) {
				this.name = allFighterData[i].name;
				this.DEX = allFighterData[i].DEX;
				this.HP = allFighterData[i].CON;
				this.MaxHP = allFighterData[i].CON;
				this.POW = allFighterData[i].POW;
				this.level = allFighterData[i].level;
				this.faceIcon = allFighterData[i].faceIcon;
				this.sprite = allFighterData[i].sprite;
				this.attackIcon = allFighterData[i].attackIcon;
				this.isMonster = allFighterData[i].isMonster;
			}
		}
	} else {
		var dataLength = allFighterData.length;
		var monsters = filter(allFighterData, function(monster) { return monster.isMonster && arrayContains(levelArray, monster.level); });
		var numOfMonsters = monsters.length;
		var randomNum = Math.floor(Math.random() * numOfMonsters);
		this.name = monsters[randomNum].name;
		this.DEX = monsters[randomNum].DEX;
		this.HP = monsters[randomNum].CON;
		this.MaxHP = monsters[randomNum].CON;
		this.POW = monsters[randomNum].POW;
		this.level = monsters[randomNum].level;
		this.sprite = monsters[randomNum].sprite;
		this.isMonster = monsters[randomNum].isMonster;
	}
	
	for (var j in allEquipData) {
		if (allEquipData[j].fighter == this.name) {
			this.weaponName = allEquipData[j].weapon;
			this.armorName = allEquipData[j].armor;
			break;
		}
	}
	for (var k in equipment) {
		if (equipment[k].type == 'weapon' &&  this.weaponName == equipment[k].name)
			this.weapon = equipment[k];
		else if (equipment[k].type == 'armor' &&  this.armorName == equipment[k].name)
			this.armor = equipment[k];
	}
	
	this.wasAttacked = false;
	this.defenseDEX = 0;
	this.attackDEX = 0;
	this.action = -1;
	this.lastActionText = '';
	this.lastResultText = '';
	this.lastDamageText = [];
	this.lastDamageInts = [];
	
	if (this.DEX < 4)
		this.MOVE = 5;
	else if (this.DEX < 6)
		this.MOVE = 6;
	else if (this.DEX < 8)
		this.MOVE = 7;
	else if (this.DEX < 13)
		this.MOVE = 8;
	else if (this.DEX < 16)
		this.MOVE = 9;
	else if (this.DEX < 18)
		this.MOVE = 10;
	else if (this.DEX < 20)
		this.MOVE = 11;
	else
		this.MOVE = 12;
	
	//methods
	this.getAIAction = function (isEscapable) {
		if (isEscapable && this.HP < this.MaxHP / 3) {
			return 4;
		} else {
			return Math.ceil(Math.random() * 3);
		}
	};
	
	this.getAttackedBy = function (attacker) {
		var lostHP = attacker.attackDEX - this.defenseDEX;
		if (!this.wasAttacked) {
			this.wasAttacked = true;
			this.defenseDEX = Math.ceil(this.defenseDEX / 2);
		}
		if (lostHP > this.HP)
			lostHP = this.HP;
		else if (lostHP < 0)
			lostHP = 0;
		this.HP -= lostHP;
		this.lastDamageInts.push(lostHP);
		this.lastDamageText.push(this.name + ' was attacked by ' + attacker.name + ' for ' + lostHP + ' damage.');
	};
	
};

function leaveCombatScreen(battleId) {
    var game;
    game = Game.instance;
    game.currentScene.bgm.stop();
    
    var action, newScene, newClue, startX, startY, startDir, startMap;
    for (var i = 0; i < game.combatActions.length; i++) {
    	if (game.combatActions[i].battle == battleId) {
    		action = game.combatActions[i].action;
    		if (action == 'trigger') {
    			game.battlesTriggered[battleId].triggered = '1';
    		}
    	}
    	if (action == 'newScene') {
    			newScene = game.combatActions[i].nextScene;
    			var scene = new talkScreen(newScene);
				game.popScene();
				game.pushScene(scene);
    		}
    	}
  }