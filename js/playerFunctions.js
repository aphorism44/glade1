

 var Player = Class.create(Sprite, {
    initialize: function(startX, startY, startDirection) {
    	var game;
    	game = Game.instance;
        
        Sprite.apply(this,[game.spriteWidth, game.spriteHeight]);
        this.image = Game.instance.assets['res/clavoSprites.png']; 
        //movement variables
        //there are 12 player sprites, 3 each: down, left, right, up
		this.spriteOffset = 0;  
		this.startingX = startX;
		this.startingY = startY;
		this.x = (this.startingX * game.spriteWidth);
		this.y = (this.startingY * game.spriteHeight);
		//where player is facing at first
		this.direction = startDirection;
		//boolean on whether player is walking or not
		this.walk = 0;
		//where frame is drawn
		this.frame = this.spriteOffset + this.direction;
		//player data
        this.checkTile = false;
        //animation variables       
        this.animationDuration = 0;
    },
	
	move : function(map, mapId, moveStack) {
		var game;
    	game = Core.instance;
    	var scene = game.currentScene;
		
		//sometimes moveStack is null...
		
		//there are 3 frames per direction
		this.frame = this.spriteOffset + this.direction * 3 + this.walk;
		//if the player is moving...
		if (this.isMoving) {
			//moveBy is enchant function; 
			this.moveBy(this.xMovement, this.yMovement);
			//if frame is even, stop moving
			if (!(game.frame % 2)) {
				this.walk++;
				this.walk %= 2;
				this.checkTile = true;
			}
			//if in direct center of a square and intended movement, walk and stop
			if ((this.xMovement && this.x % 25 === 0) || (this.yMovement && this.y % 25=== 0)) {
				this.isMoving = false;
				this.walk = 1;
			}
		} else{
			//x,yMovement initialized to 0
			this.xMovement = 0;
			this.yMovement = 0;
			
			//process the movement array
			if (moveStack.length > 0) {
				var dir = moveStack.shift();
				//console.log("movestack is now " + moveStack);
				if (dir == 3) {
					this.direction = 3;
					this.yMovement = -5;
				} else if (dir == 2) {
					this.direction = 2;
					this.xMovement = 5;
				} else if (dir == 1) {
					this.direction = 1;
					this.xMovement = -5;
				} else if (dir == 0) {
					this.direction = 0;
					this.yMovement = 5;
				}
			}
			
			//if there's intended motion, x or y set to current player position plus sprite width
			if (this.xMovement || this.yMovement) {
				var x = this.x + (this.xMovement ? this.xMovement / Math.abs(this.xMovement) * 25 : 0);
				var y = this.y + (this.yMovement ? this.yMovement / Math.abs(this.yMovement) * 25 : 0);
				//check if you're in map bound, and if tile is passsable
				if (0 <= x && x < map.width && 0 <= y && y < map.height && !map.hitTest(x,y) ) {
					this.isMoving = true;
					this.move();
				} 
			}
		}  
		
		if (x != null) {
			//logout where you are
			//console.log('mapId: ' + mapId);
			//console.log('main x: ' + x / game.spriteWidth);
			//console.log('main y: ' + y / game.spriteHeight);
			//check tile
			if (this.checkTile == true) {
				checkCurrentMapBox(mapId, scene, x, y);
				this.checkTile = false;
			}
		}   		

	}
	
	
});

function checkCurrentMapBox(mapId, scene, x, y) {
		var game;
     	game = Game.instance;
		
		//HARDCODEALERT begin
		//leaving the town - this can't go into JSON since are many possible squares
		if (mapId == 2 && ((x / game.spriteWidth) < 1 || (x / game.spriteWidth) > 23
						|| (y / game.spriteHeight) < 1 || (y / game.spriteHeight) > 23  ) ) {
				scene.bgm.stop();
				var newScene = new gameScreen(1, 7, 13, 0);
				game.replaceScene(newScene); 
			}
		//HARDCODEALERT end
		
		//there's a small chance (1 %) of being attacked outside of town
		var randomEncounter = false;
		if (mapId != 2) {
			var randNum = Math.floor(Math.random() * 101);
			//console.log(randNum);
			if (randNum == 50) {
				randomEncounter = true;
			}
		}
		//first give random encounter if needed
		if (randomEncounter) {
			var battleId = -1;
			var ememyLevels =  [1,2,3,4];
			var enemyArray =  null;
			var isEscapable =  true;
			var maxNoOfEmemies =  4;
			var scene = new combatScreen(battleId, game.currentParty, enemyArray
				, isEscapable, ememyLevels, maxNoOfEmemies);
			game.pushScene(scene);
		} else {
			//loop through game.changeMap JSON to check current spot
			for (var i = 0; i < game.changeMap.length; i++) {
				
				//check if it's available
				var sceneAvailable = false;
				var sceneRequirement = game.changeMap[i].requirement;
				if  (sceneRequirement != undefined && sceneRequirement.length > 0) {
					for (var j = 0; j < game.gameVariables.length; j++) {
						if (game.gameVariables[j].name == sceneRequirement && game.gameVariables[j].status == 1) {
							sceneAvailable = true;
						}
					}
				} else {
					sceneAvailable = true;
				}
				
				if (game.changeMap[i].mapId == mapId 
					&& game.changeMap[i].x == x / game.spriteWidth 
					&& game.changeMap[i].y ==  y / game.spriteHeight && sceneAvailable) {
					
					//console.log('in available');
					
					var mapChangeId = Math.floor(game.changeMap[i].mapChangeId);
					var changeType = game.changeMap[i].changeType;
					var newMap, newX, newY, newDir, newScene, sceneRequirement, sceneAvailable, npcName;
					
					if (changeType == 'mapChange') {
						newMap = game.changeMap[i].newMap;
						newX = game.changeMap[i].newX;
						newY = game.changeMap[i].newY;
						newDir = game.changeMap[i].newDir;
						scene.bgm.stop();
						var newScene = new gameScreen(newMap, newX, newY, newDir);
						game.replaceScene(newScene);
					}
					if (changeType == 'gotoScene') {
						newScene = game.changeMap[i].newScene;
						if (game.scenesTriggered[newScene].triggered == 0) {
							scene.bgm.stop();
							var scene = new talkScreen(newScene);
							game.pushScene(scene);
						}	
					}
					if (changeType == 'npc') {
						npcName = game.changeMap[i].name;
						scene.bgm.stop();
						var newScene = new interactScreen(npcName, 1);
						game.pushScene(newScene);
					}		
				}
			}
			
		}
	}


