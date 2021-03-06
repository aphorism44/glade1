

var gameScreen = Class.create(Scene, {
    initialize: function(mapId, startX, startY, startDir) {
        var game;
        Scene.apply(this);
        game = Game.instance;
        
		this.gameStage = new Group();
		this.gameStage.width = 400;
        this.gameStage.height = 380;
        this.gameStage.x = game.mapXOffset;
        this.gameStage.y = game.mapYOffset;
        this.gameStage.moveStack = [];
        this.gameStage.mapId = mapId;
        
        var clueButton = makeButton(" Clues ", 20, 500, 60, 30);
        var statusButton = makeButton(" Status ", 120, 500, 60, 30);
        var saveButton = makeButton(" Save ", 220, 500, 60, 30);
        
        player = new Player(startX, startY, startDir);
        
        var gameTiles = new Map(25, 25);
        
        switch(mapId) {
        	case '1': case 1:
        		//overworld
        		gameTiles.image = Game.instance.assets['res/hyptosisOutside.png'];
        		gameTiles.loadData(worldScreenMap);
        		gameTiles.collisionData = worldScreenCollision;
        		this.bgm = game.assets['res/sounds/natureAmbiance.mp3'];
        		break;
        	case '2': case 2:
        		//town: Glade
        		gameTiles.image = Game.instance.assets['res/mapTiles.png'];
        		gameTiles.loadData(townMap);
        		gameTiles.collisionData = townMapCollision;
        		this.bgm = game.assets['res/sounds/noSound.mp3'];
        		break;
        	case '3': case 3:
        		//wizard's cave
        		gameTiles.image = Game.instance.assets['res/mapTiles.png'];
        		gameTiles.loadData(caveMap);
        		gameTiles.collisionData = caveMapCollision;
        		this.bgm = game.assets['res/sounds/scaryAmbiance.mp3'];
        		break;
        	
        }
        
        //let player touch screen to move player
        this.addEventListener(Event.TOUCH_END, function(e) {
        	//find what game tile you clicked on
        if (player.isMoving) { 
        		this.gameStage.moveStack = [];
	        } else {
	        	this.gameStage.moveStack = [];
	        	cx = e.x;
	        	cy = e.y;
	        	//first get the x/y offset the center program throws off
	        	var ox = Math.min((this.gameStage.width  - 25) / 2 - player.x, 0);
			    var oy = Math.min((this.gameStage.height - 25) / 2 - player.y, 0);
			    ox = Math.max(this.gameStage.width,  ox + gameTiles.width)  - gameTiles.width;
			    oy = Math.max(this.gameStage.height, oy + gameTiles.height) - gameTiles.height;
			    ox = ox + game.mapXOffset;
			    oy = oy + game.mapYOffset;
			    //modify your click by this offset; also undo the adjustment made above
			    x = cx - ox -10;
			    y = cy - oy -10;
			    var gx = Math.round(x / game.spriteWidth);
			    var gy = Math.round(y / game.spriteHeight); 
			    //log out where you clicked
			    //console.log('clicked x: ' + gx + ', ' + x / game.spriteWidth);
				//console.log('clicked y: ' + gy + ', ' + y/ game.spriteHeight);
			    this.gameStage.moveStack = getDirectionArray((player.x / game.spriteWidth), (player.y / game.spriteHeight), gx, gy, this.gameStage.mapId);
			}
		});
        
        
        var bg = makeBackground(game.assets['res/blackBg.png']);
        //var dPad = new Pad();
        //dPad.x = 290;
        //dPad.y = 410;
        //dPad.opacity = 1;
        
		this.bgm.play();
		//loop BGM
		this.addEventListener(Event.ENTER_FRAME, function() {
        	if(this.bgm.currentTime >= this.bgm.duration ){
    			this.bgm.play();
			} 
		});
        
        this.player = player;
        this.gameTiles = gameTiles;
        this.mapId = mapId;
        
        player.addEventListener(Event.ENTER_FRAME, function() { 
        	player.move(gameTiles, mapId, game.currentScene.gameStage.moveStack);
        });
    	
        this.addEventListener(Event.ENTER_FRAME, function() { 
        	//focus map on player
        	var x = Math.min((this.gameStage.width  - 25) / 2 - player.x, 0);
		    var y = Math.min((this.gameStage.height - 25) / 2 - player.y, 0);
		    x = Math.max(this.gameStage.width,  x + gameTiles.width)  - gameTiles.width;
		    y = Math.max(this.gameStage.height, y + gameTiles.height) - gameTiles.height;
		    this.gameStage.x = x + game.mapXOffset;
		    this.gameStage.y = y + game.mapYOffset;
        });
	   	
	   	//immediately trigger scene if requirements met
	   	this.addEventListener(Event.ENTER_FRAME, function() { 
	   		var sceneId;
	   		for (var i = 0; i < game.specialScenesTriggered.length; i++) {
	   			if (game.specialScenesTriggered[i].status == 1) {
	   				sceneId = game.specialScenesTriggered[i].scene;
	   				if (game.scenesTriggered[sceneId].triggered == 0) {
	   					this.bgm.stop();
						var scene = new talkScreen(sceneId);
						game.pushScene(scene);
	   				}
	   			}
	   		}
	   	} );
	   	
	   	clueButton.addEventListener(Event.TOUCH_END, function() { 
	   		var scene = new clueScreen();
			game.pushScene(scene); 
	   		} );
	   	statusButton.addEventListener(Event.TOUCH_END, function() { 
	   		var scene = new statusScreen();
			game.pushScene(scene); 
	   		} );	 		
	   	saveButton.addEventListener(Event.TOUCH_END, function() { 
	   		saveGame();
	   		} );
	   	
        this.addChild(bg);
        this.gameStage.addChild(gameTiles);
        this.gameStage.addChild(player);
        
         //find any NPCs that are on this map and place them
        this.placeNPCs();
        
        this.addChild(this.gameStage);
        this.addChild(clueButton);
        this.addChild(saveButton);
        this.addChild(statusButton);
        //this.addChild(dPad);
    }, 
    
    restartMusic: function() {
    	this.bgm.play();
    },
    
    placePlayer: function(x, y, dir) {
    	this.player.isMoving = false;
    	this.player.x = x;
    	this.player.y = y;
    	this.player.direction = dir;
    },
    
    placeNPCs: function() {
    	var game;
   		game = Game.instance;
    	//remove and replace all NPCs
    	for (var i = 0; i < game.npcInfo.length; i++) {
			if (game.npcInfo[i].mapId == this.mapId) {
				var availableVariable = game.npcInfo[i].visible;
				var npcName = game.npcInfo[i].npcName;
				this.gameStage.removeChild(npcName);
				for (var j = 0; j < game.gameVariables.length; j++) {
					if (game.gameVariables[j].name == availableVariable && game.gameVariables[j].status == 1) {
						var newNpc = new NPC(npcName);
						this.gameStage.addChild(newNpc);
					}
				}
			}
		}
    }
     
});



