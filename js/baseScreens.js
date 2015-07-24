

var titleScreen = Class.create(Scene, {
     // the title menu   
    initialize: function() {
    	this.name = "titleScreen";
        var game;
        Scene.apply(this);   
        game = Game.instance;
       
		var bg = makeBackground(game.assets['res/titleBg.png']);
		var mainTitleLabel = makeLabel("Apprentice<br><br>Wars", 50, 150, "Impact", 42, "Black", 300, 50, "", "left");
		var subTitleLabel = makeLabel("The Glade Chronicles: Chapter 1", 50, 270, "Impact", 22, "Maroon ", 300, 50, "", "left");
		var siteLink = makeLabel("an Aphorism44 game", 175, 300, "Comic Sans MS", 14, "OrangeRed", 170, 12, "", "left");
		
        var startButton = makeButton(" New Game ", 40, 350, 200, 75);
        var instructionButton = makeButton(" Instructions ", 40, 400, 200, 75);
        var loadButton = makeButton(" Load Game ", 40, 450, 200, 75);
        
        var creditsButton = makeButton(" Credits ", 200, 350, 200, 75);
        var logicButton = makeButton(" Logic Refresher ", 200, 400, 200, 75);
        
        //uncomment eraseButton lines to test HTML5 localStorage
        //var eraseButton = makeButton(" Erase ", 20, 500, 200, 75);
       // eraseButton.addEventListener(Event.TOUCH_END, function(e) {
	   //    clearSavedData();
	   //	});
        
        this.addChild(bg);   
        this.addChild(mainTitleLabel);
        this.addChild(subTitleLabel);
        this.addChild(siteLink);
        this.addChild(startButton);
        this.addChild(instructionButton);
        this.addChild(creditsButton);
        this.addChild(loadButton);
        this.addChild(logicButton);
        
       // this.addChild(eraseButton);
                
        //add event listeners
		siteLink.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://www.aphorism44.com");
		});
		startButton.addEventListener(Event.TOUCH_END, function(e) {
	      var scene = new openingScreen();
	       //var scene = new talkScreen(30);
	       //var scene = new interactScreen("jera", 1);
	       //var scene = new gameScreen(1, 4, 5, 0);
	       //game.stage++;
	       //var scene = new gameScreen(3, 12, 23, 1);
			//var scene = new clueScreen();
			//var scene = new creditScreen();
			//var playerArray = game.currentParty;
			//var enemyLevels = [1,2];
			//var enemyArray = null;
			//var isEscapable = true;
			//var maxNoOfEmemies = 3;
			//var scene = new combatScreen(playerArray, enemyArray
			//		, isEscapable, enemyLevels, maxNoOfEmemies);
			game.pushScene(scene); 
	   	});
	   	instructionButton.addEventListener(Event.TOUCH_END, function(e) {
	       var scene = new explainScreen(0);
			game.pushScene(scene); 
	   	});
	   	creditsButton.addEventListener(Event.TOUCH_END, function(e) {
	       var scene = new linkScreen(0);
			game.pushScene(scene); 
	   	});
	   	loadButton.addEventListener(Event.TOUCH_END, function(e) {
	   		loadGame();  
	   	});
	   	logicButton.addEventListener(Event.TOUCH_END, function(e) {
	   		var scene = new logicScreen();
			game.pushScene(scene); 
	   	});
		
		
    	}
	});

var linkScreen = Class.create(Scene, {
     // the links to credits   
    initialize: function() {
    	this.name = "linkScreen";
        var game;
        Scene.apply(this);
        game = Game.instance;
		var bg = makeBackground(game.assets['res/titleBg.png']);
		
		var aerinImg = makeImage(game.assets['res/aerinboy.png'], 150, 150, 25, 75);
		var bandImg = makeImage(game.assets['res/album.png'], 175, 175, 200, 75);
		
		var aerinLabel = makeLabel("AerinBoy - Artist", 25, 235, "monospace", 14, "Black", 350, 30);
		var bandLabel = makeLabel("Exit Vehicles - Music", 200, 260, "monospace", 14, "Black", 350, 30);
		
		var otherLabel = makeLabel("Also thanks to:", 50, 300, "monospace", 14, "Black", 350, 30);
		var spriteLink = makeLabel("Sprite Creator 3", 50, 340, "monospace", 14, "Black", 350, 30);
		var hyptosisLink = makeLabel("Hyptosis (OpenGameArt.org)", 50, 360, "monospace", 14, "Black", 350, 30);
		var enchantLink = makeLabel("enchant.js", 50, 380, "monospace", 14, "Black", 350, 30);
        var commonsLink = makeLabel("Wikimedia Commons", 50, 400, "monospace", 14, "Black", 350, 30);
        var soundLink = makeLabel("SoundBible, Royalty-Free Sounds", 50, 420, "monospace", 14, "Black", 350, 30);
      	var returnButton = makeButton(" Return ", 300, 500, 200, 75);
      	
        this.addChild(bg);
        this.addChild(aerinImg);
        this.addChild(bandImg);
        this.addChild(aerinLabel);
        this.addChild(bandLabel);
        this.addChild(otherLabel);   
        this.addChild(enchantLink);   
        this.addChild(commonsLink);   
        this.addChild(hyptosisLink);   
        this.addChild(soundLink); 
        this.addChild(spriteLink);    
        this.addChild(returnButton);
        
        aerinImg.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://aerinboy.deviantart.com/");
		});
		 bandImg.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://exitvehicles.bandcamp.com/");
		});
		enchantLink.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://enchantjs.com/");
		});
		commonsLink.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://commons.wikimedia.org/");
		});
		hyptosisLink.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://opengameart.org/content/lots-of-hyptosis-tiles-organized/");
		});
		soundLink.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://soundbible.com/royalty-free-sounds-1.html");
		});
		spriteLink.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("https://www.facebook.com/SpriteCreator3");
		});
		
	   	returnButton.addEventListener(Event.TOUCH_END, function(e) {
			game.popScene(); 
	   	});
		
    	}
	});

var logicScreen = Class.create(Scene, {
     // the links to credits   
    initialize: function() {
    	this.name = "logicScreen";
        var game;
        Scene.apply(this);
        game = Game.instance;
		var bg = makeBackground(game.assets['res/woodBg.png']);
		
		
		var logic1Label = makeLabel('', 25, 20, 'monospace', '16', 'rgb(255,255,255)', 300, 40, 'rgba(0,0,0,0.6)');
		var logic2Label = makeLabel('', 25, 70, 'monospace', '16', 'rgb(255,255,255)', 300, 75, 'rgba(0,0,0,0.6)');
		var logic3Label = makeLabel('', 25, 150, 'monospace', '16', 'rgb(255,255,255)', 300, 75, 'rgba(0,0,0,0.6)');
		var logic4Label = makeLabel('', 25, 240, 'monospace', '16', 'rgb(255,255,255)', 300, 75, 'rgba(0,0,0,0.6)');
		var logic5Label = makeLabel('', 25, 320, 'monospace', '16', 'rgb(255,255,255)', 300, 75, 'rgba(0,0,0,0.6)');
		var logic6Label = makeLabel('', 25, 400, 'monospace', '16', 'rgb(255,255,255)', 300, 75, 'rgba(0,0,0,0.6)');
		
		
		logic1Label.text =logicInstructions1;
		logic2Label.text =logicInstructions2;
		logic3Label.text =logicInstructions3;
		logic4Label.text =logicInstructions4;
		logic5Label.text =logicInstructions5;
		logic6Label.text =logicInstructions6;
		
      	var returnButton = makeButton(" Return ", 300, 485, 200, 75);
      	
      	this.addChild(bg);
        this.addChild(logic1Label);
        this.addChild(logic2Label);
        this.addChild(logic3Label);
        this.addChild(logic4Label);
        this.addChild(logic5Label);    
        this.addChild(logic6Label); 
        this.addChild(returnButton);
        
	   	returnButton.addEventListener(Event.TOUCH_END, function(e) {
			game.popScene(); 
	   	});
		
    	}
	});


var statusScreen = Class.create(Scene, {
     // the links to credits   
    initialize: function() {
    	this.name = "statusScreen";
        var game;
        Scene.apply(this);
        game = Game.instance;
		var bg = makeBackground(game.assets['res/blackBg.png']);
		
		var returnButton = makeButton(" Return ", 300, 500, 200, 75);
      	
        this.addChild(bg);  
        this.addChild(returnButton);
		
		
		var allFighterData = game.fighterData;
		//show all players/stats in your party
		for (var i = 0; i < game.currentParty.length; i++) {
			var name = game.currentParty[i];
			var player = new Fighter(name, null, game);
			var playerFace = makeImage(game.assets[player.faceIcon], 80, 80, 25, 25 + (100 * i));
			var nameLabel = makeLabel(player.name, 125, 25 + (100 * i), "monospace", 14, "White", 50, 20);
			var titleLabel = makeLabel(player.title, 250, 25 + (100 * i), "monospace", 14, "White", 90, 20);
			var conLabel = makeLabel('CON: ' + player.HP, 125, 45 + (100 * i), "monospace", 14, "White", 50, 20);
			var dexLabel = makeLabel('DEX: ' + player.DEX, 250, 45 + (100 * i), "monospace", 14, "White", 50, 20);
			var weaponLabel = makeLabel('Weapon: ' + player.weaponName, 125, 65 + (100 * i), "monospace", 14, "White", 200, 20);
			var armorLabel = makeLabel('Armor: ' + player.armorName, 125, 85 + (100 * i), "monospace", 14, "White", 200, 20);
			
			this.addChild(playerFace);
			this.addChild(nameLabel);
			this.addChild(titleLabel);
			this.addChild(conLabel);
			this.addChild(dexLabel);
			this.addChild(weaponLabel);
			this.addChild(armorLabel);
		}
		
		var missionLabel = makeLabel('', 25, 450, "monospace", 14, "White", 350, 50);
		missionLabel.text = wordWrap(stageMissions[game.stage - 1].mission, 350, 14);
		
		this.addChild(missionLabel);
		
	   	returnButton.addEventListener(Event.TOUCH_END, function(e) {
			game.popScene(); 
	   	});
		
    	}
	});
