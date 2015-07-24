
var talkScreen = Class.create(Scene, {
     // the visual novel-like screens
    initialize: function(sceneId) {
    	this.name = "talkScreen";
    	this.sceneId = sceneId;
        var game;
        Scene.apply(this);
        game = Game.instance;
        
        var bgName = sceneMedia[this.sceneId].pic;
		
		if (sceneMedia[this.sceneId].music != '') {
			this.bgm = game.assets[sceneMedia[this.sceneId].music];
			this.bgm.play();
			//loop BGM
			this.addEventListener(Event.ENTER_FRAME, function() {
	        	if(this.bgm.currentTime >= this.bgm.duration ){
	    			this.bgm.play();
				} 
			});
		}
		
		var bg = makeBackground(game.assets[bgName]);
		
		var faceLogo = new Sprite();
		faceLogo.x = 100;
		faceLogo.y = 80;
		faceLogo.width = 200;
		faceLogo.height = 200;
		
		var speakerLabel = makeLabel('', 40, 280, 'monospace', '16', 'rgb(255,255,255)', 320, 40, 'rgba(0,0,0,0.6)');
		var textLabel = makeLabel('', 40, 340, 'monospace', '16', 'rgb(255,255,255)', 320, 160, 'rgba(0,0,0,0.6)');
		
		var skipButton = makeButton(" Skip ", 300, 510, 100, 35);
		
		skipButton.addEventListener(Event.TOUCH_END, function(e) {
			var scene = new skipTalkScreen(game.currentScene.sceneId);
			game.pushScene(scene);
		});
		
		this.i = 0;
		
		var sceneName = "scene" + this.sceneId;
		
		faceLogo.image = game.assets[sceneDialog[sceneName][this.i].pic];
		speakerLabel.text = sceneDialog[sceneName][this.i].speaker;
		textLabel.text = wordWrap(sceneDialog[sceneName][this.i].text, textLabel.width, 16);
		
		this.addEventListener(Event.TOUCH_END, function() {
			this.i++;
			if (this.i < sceneDialog[sceneName].length) {
				faceLogo.image = game.assets[sceneDialog[sceneName][this.i].pic];
				speakerLabel.text = sceneDialog[sceneName][this.i].speaker;
				textLabel.text = wordWrap(sceneDialog[sceneName][this.i].text, textLabel.width, 16);
				if (sceneDialog[sceneName][this.i].sound != '') {
					game.assets[sceneDialog[sceneName][this.i].sound].play();
				}
			}	else {
				leaveTalkScreen(game.currentScene.sceneId);
			}	
		});
		
       	this.addChild(bg);   
        this.addChild(faceLogo);  
        this.addChild(speakerLabel);      
        this.addChild(textLabel);
        this.addChild(skipButton);
        	
    	}
	});


function leaveTalkScreen(sceneId) {
    var game;
    game = Game.instance;
    var action, newScene, newClue, startX, startY, startDir, startMap, gameVariable, addCharacter, removeCharacter;
    for (var i = 0; i < game.sceneActions.length; i++) {
    	if (game.sceneActions[i].scene == sceneId) {
    		action = game.sceneActions[i].action;
    		if (action == 'trigger') {
    			game.scenesTriggered[sceneId].triggered = '1';
    		}
    		if (action == 'toggleGameVariable') {
    			gameVariable = game.sceneActions[i].variable;
    			toggleGameVariable(gameVariable);
    		}
    		if (action == 'addCharacter') {
    			addCharacter = game.sceneActions[i].character;
    			game.currentParty.push(addCharacter);
    		}
    		if (action == 'removeCharacter') {
    			removeCharacter = game.sceneActions[i].character;
    			removeFromArray(game.currentParty, removeCharacter);
    		}
    		if (action == 'stopMusic') {
    			game.currentScene.bgm.stop();
    		}
    		if (action == 'newScene') {
    			newScene = game.sceneActions[i].nextScene;
    			var scene = new talkScreen(newScene);
				game.popScene();
				game.pushScene(scene);
    		}
    		if (action == 'addClue') {  
    			newClue = game.sceneActions[i].clueId;
    			updateClueAvailability(newClue);
    		}
    		if (action == 'advanceStage') {
    			game.stage++;
    		}
    		if (action == 'popScene') {
    			game.popScene();
    		}
    		if (action == 'restartMusic') {
    			game.currentScene.restartMusic();
    		}
    		if (action == 'endGameMistakes') {
				game.popScene();
				game.popScene();
				resetGameVariables();
    		}
    		if (action == 'endGameBad') {
				game.popScene();
				game.popScene();
				resetGameVariables();
    		}
    		if (action == 'endGameGood') {
				game.popScene();
				resetGameVariables();
				var scene = new creditScreen();
				game.pushScene(scene);
    		}
    		if (action == 'gotoMap') {
    			startMap = game.sceneActions[i].startMap;
    			startX = game.sceneActions[i].startX;
				startY = game.sceneActions[i].startY;
				startDir = game.sceneActions[i].startDir;
				
				var scene = new gameScreen(startMap, startX, startY, startDir);
				game.replaceScene(scene);
    		}
    		if (action == 'gotoTalkScene') {
    			var npc = game.sceneActions[i].npc;
    			var scene = new interactScreen(npc, 1);
				game.popScene();
				game.pushScene(scene);
    		}
    		if (action == 'battle') {
    			var battleId = game.sceneActions[i].battleId;
    			var ememyLevels =  [];
				var enemyArray =  game.sceneActions[i].enemyArray;
				var isEscapable =  false;
				var maxNoOfEmemies =  0;
				var scene = new combatScreen(battleId, game.currentParty, enemyArray
					, isEscapable, ememyLevels, maxNoOfEmemies);
				game.popScene();
				game.pushScene(scene);
    		}
    		
    	}
    }
}



var explainScreen = Class.create(Scene, {
     // explanation screens/instructions
    initialize: function(explainId) {
    	this.name = "explainScreen";
        var game;
        Scene.apply(this);
        game = Game.instance;
		
		var bg = makeBackground('res/grayBg.png');
		var textLabel = makeLabel('', 40, 375, 'monospace', '16', 'rgb(255,255,255)', 320, 200, 'rgba(0,0,0,0.6)');
		var skipButton = makeButton(" Skip ", 300, 500, 100, 35);
		
		skipButton.addEventListener(Event.TOUCH_END, function(e) {
	       	var scene = new skipExplainScreen(explainId);
			game.pushScene(scene);
		});
		
		this.i = 0;
		var sceneName = "explain" + explainId;
		bg.image = game.assets[explainData[sceneName][this.i].bg];
		textLabel.text = wordWrap(explainData[sceneName][this.i].text, textLabel.width, 16);
		
		this.addEventListener(Event.TOUCH_END, function() {
			this.i++;
			if (this.i < explainData[sceneName].length) {
				bg.image = game.assets[explainData[sceneName][this.i].bg];
				textLabel.text = wordWrap(explainData[sceneName][this.i].text, textLabel.width, 16);
				if (explainData[sceneName][this.i].sound != '') {
					game.assets[explainData[sceneName][this.i].sound].play();
				}
				
			}	else {
				leaveExplainScreen(explainId);
			}
			
		});
		
       	this.addChild(bg);  
        this.addChild(textLabel);
        this.addChild(skipButton);	
    	}
	});

function leaveExplainScreen(explainId) {
    var game;
    game = Game.instance;
    
    var action;
    for (var i = 0; i < game.explainActions.length; i++) {
    	if (game.explainActions[i].explain == explainId) {
    		action = explainActions[i].action;
	    	if (action == 'return') {
	    		game.popScene();
	    	}
	    	if (action == 'newScene') {
	    		newScene = game.explainActions[i].nextScene;
	    		var scene = new talkScreen(newScene);
				game.popScene();
				game.pushScene(scene);
	    	}
	    }
    }	
}
	
var interactScreen = Class.create(Scene, {
     // screen where you converse with NPCs  
    initialize: function(characterName, locationId) {
    	this.name = "interactScreen";
        var game;
        Scene.apply(this);
        game = Game.instance;
        var bgName = npcNames[characterName].mainBg;
        
		var bg = makeBackground(game.assets[[bgName]]);
		var faceLogo = new Sprite();
		
		faceLogo.x = 100;
		faceLogo.y = 80;
		faceLogo.width = 200;
		faceLogo.height = 200;
		
		var speakerLabel = makeLabel('', 100, 280, 'monospace', '20', 'rgb(255,255,255)', 200, 40, 'rgba(0,0,0,0.6)');
		var wordListLabel = makeLabel('', 40, 375, 'monospace', '20', 'rgb(255,255,255)', 160, 40, 'rgba(0,0,0,0.6)');
		var responseTextLabel = makeLabel('', 220, 340, 'monospace', '16', 'rgb(255,255,255)', 180, 180, 'rgba(0,0,0,0.6)');
		
		var toggleButton = makeButton(" Change Topic ", 20, 440, 100, 35);	
		var askButton = makeButton(" Ask About ", 20, 500, 100, 35);
		var returnButton = makeButton(" Leave ", 280, 520, 100, 35);
		
		this.npc = characterName;
		this.npcId = npcNames[this.npc].npcId;
		speakerLabel.text = npcNames[this.npc].fullname;
		faceLogo.image = game.assets[npcNames[this.npc].mainpic];
		
		game.availableWords = getAvailableWords();
		
		wordListLabel.chosenWord = 0;
		
		wordListLabel.text = game.availableWords[wordListLabel.chosenWord];
		
		toggleButton.addEventListener(Event.TOUCH_END, function() {
			if (wordListLabel.chosenWord < (game.availableWords.length - 1)) {
				wordListLabel.chosenWord++;
			} else {
				wordListLabel.chosenWord = 0;
			}
			wordListLabel.text = game.availableWords[wordListLabel.chosenWord];
			game.assets['res/sounds/pling.mp3'].play();
		});                              
		
		askButton.addEventListener(Event.TOUCH_END, function() {
				responseTextLabel.text = wordWrap(
					npcResponses[game.currentScene.npc][game.availableWords[wordListLabel.chosenWord]].response
					, responseTextLabel.width, 16);
					
					var revealedWord = npcResponses[game.currentScene.npc][game.availableWords[wordListLabel.chosenWord]].reveal;
					
				if (revealedWord != "") {
					updateAvailableWords(revealedWord);
					game.availableWords = [];
					game.availableWords = getAvailableWords();
				}
				//enable (don't toggle) any game variables
				var activatedVar = npcResponses[game.currentScene.npc][game.availableWords[wordListLabel.chosenWord]].activate;
				if (activatedVar.length > 0) {
					activateGameVariable(activatedVar);
					game.assets['res/sounds/tone.mp3'].play();
				}
				
				var revealedClueId= npcResponses[game.currentScene.npc][game.availableWords[wordListLabel.chosenWord]].clueReveal;
				//also update the clues and variables if possible
				if (revealedClueId.length > 0) {
					updateClueAvailability(revealedClueId);
				}
				
			});
		
		returnButton.addEventListener(Event.TOUCH_END, function(e) {
			var npc = game.currentScene.npc;
			var startX, startY;
			for (var i = 0; i < changeMapData.length; i++) {
				if (changeMapData[i].changeType == 'npc') {
					if (changeMapData[i].name == npc) {
						startX = changeMapData[i].x;
						startY = changeMapData[i].y;
					}
				}
			}
			game.popScene();
			game.currentScene.restartMusic();
			game.currentScene.placeNPCs();
			game.currentScene.placePlayer(startX * 25, startY * 25 + 25, 0);
	   	});
		
       	this.addChild(bg);   
        this.addChild(faceLogo);
        this.addChild(speakerLabel);
        this.addChild(wordListLabel);    
        this.addChild(responseTextLabel);
        this.addChild(wordListLabel);
        this.addChild(toggleButton);
        this.addChild(askButton);
        this.addChild(returnButton);
    	}
	});


var skipTalkScreen = Class.create(Scene, {
     // the links to credits   
    initialize: function(sceneId) {
    	this.name = "skipScene]";
        var game;
        Scene.apply(this);
        game = Game.instance;
		var bg = makeBackground(game.assets['res/blackBg.png']);
       
		var question = makeLabel("Skip scene?", 75, 75, "Times New Roman", 48, "White", 300, 50, "", "left");
		
		var noSkip = makeButton(" No ", 175, 250, 100, 35);	
		var yesSkip = makeButton(" Yes ", 175, 350, 100, 35);	
		
		noSkip.addEventListener(Event.TOUCH_END, function(e) {
	    	game.popScene();
		});
		
		
		yesSkip.addEventListener(Event.TOUCH_END, function(e) {
	    	game.popScene();
	    	leaveTalkScreen(sceneId);
		});
		
		this.addChild(bg);  
		this.addChild(question);
		this.addChild(yesSkip);
		this.addChild(noSkip); 
		
    	}
	});
	
var skipExplainScreen = Class.create(Scene, {
     // the links to credits   
    initialize: function(explainId) {
    	this.name = "skipExplain]";
        var game;
        Scene.apply(this);
        game = Game.instance;
		var bg = makeBackground(game.assets['res/blackBg.png']);
       
		var question = makeLabel("Skip scene?", 75, 75, "Times New Roman", 48, "White", 300, 50, "", "left");
		
		var noSkip = makeButton(" No ", 175, 250, 100, 35);	
		var yesSkip = makeButton(" Yes ", 175, 350, 100, 35);	
		
		noSkip.addEventListener(Event.TOUCH_END, function(e) {
	    	game.popScene();
		});
		
		yesSkip.addEventListener(Event.TOUCH_END, function(e) {
	    	game.popScene();
	    	leaveExplainScreen(explainId);
		});
		
		this.addChild(bg);  
		this.addChild(question);
		this.addChild(yesSkip);
		this.addChild(noSkip); 
		
    	}
	});

