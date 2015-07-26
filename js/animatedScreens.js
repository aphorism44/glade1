var openingScreen = Class.create(Scene, {
    initialize: function() {
    	this.name = "openingScreen";
        var game;
        Scene.apply(this);
        game = Game.instance;
        
        this.bgm = game.assets['res/sounds/opener.mp3'];
        this.bgm.play();
        
        var bg = makeBackground(game.assets['res/blackBg.png']);
        
        var open1 = makeImage(game.assets['res/openWalk1.png'], 362, 345, 18, 100);
        open1.opacity = 0;
        var open2 = makeImage(game.assets['res/openWalk2.png'], 362, 345, 18, 100);
        open2.opacity = 0;
        
        var high1 = makeImage(game.assets['res/openHighway1.png'], 362, 560, 18, 0);
        high1.opacity = 0;
        var high2 = makeImage(game.assets['res/openHighway2.png'], 362, 560, 18, 0);
        high2.opacity = 0;
        var high3 = makeImage(game.assets['res/openHighway3.png'], 362, 560, 18, 0);
        high3.opacity = 0;
        
        var clavoImage = makeImage(game.assets['res/clavoProfile.png'], 137, 400, 20, 20);
        clavoImage.opacity = 0;
        var clavoWorkImage = makeImage(game.assets['res/clavoWork.png'], 252, 200, 125, 300);
        clavoWorkImage.opacity = 0;
        var lemelImage = makeImage(game.assets['res/lemelProfile.png'], 156, 500, 180, 40);
        lemelImage.opacity = 0;
        var lemelWorkImage = makeImage(game.assets['res/lemelWork.png'], 149, 200, 20, 20);
        lemelWorkImage.opacity = 0;
        var lissetteImage = makeImage(game.assets['res/lissetteProfile.png'], 155, 450, 20, 80);
        lissetteImage.opacity = 0;
        var lissetteWorkImage = makeImage(game.assets['res/lissetteWork.png'], 266, 200, 125, 20);
        lissetteWorkImage.opacity = 0;
        var mizakImage = makeImage(game.assets['res/mizakProfile.png'], 183, 450, 20, 20);
        mizakImage.opacity = 0;
        var mizakWorkImage = makeImage(game.assets['res/mizakWork.png'], 220, 200, 220, 300);
        mizakWorkImage.opacity = 0;
        
        var clavoTextA = "Did you find a map on me the night I…I died?";
        var clavoBannerA = makeLabel(clavoTextA + ' ' + clavoTextA, 50, 400, "monospace", 24, "White", 5000, 35);
        clavoBannerA.opacity = 0;;
        var clavoNameLabel= makeLabel("Clavo", -200, -200, "Times New Roman", 24, "White", 5000, 35);
        var clavoTitleLabel1 = makeLabel("scholar", -200, -200, "Times New Roman", 24, "DarkViolet", 200, 35);
        var clavoTitleLabel2 = makeLabel("town clerk", -200, -200, "Times New Roman", 24, "DarkViolet", 200, 35);
        clavoNameLabel.opacity = 0;
        
        var lemelTextA = "Come on, Clavo, not after all this!";
        var lemelBannerA = makeLabel(lemelTextA + ' ' + lemelTextA, 50, 380, "monospace", 24, "White", 5000, 35);
        lemelBannerA.opacity = 0;
        var lemelNameLabel= makeLabel("Lemel", -200, -200, "Times New Roman", 24, "White", 5000, 35);
        var lemelTitleLabel1 = makeLabel("apprentice", -200, -200, "Times New Roman", 24, "Turquoise", 200, 35);
        var lemelTitleLabel2 = makeLabel("blacksmith", -200, -200, "Times New Roman", 24, "Turquoise", 200, 35);
        lemelNameLabel.opacity = 0;
        
        var lissetteTextA = "How about if I slam you in the head with this tankard? That ought to put you to sleep.";
        var lissetteBannerA = makeLabel(lissetteTextA + ' ' + lissetteTextA, 50, 350, "monospace", 24, "White", 5000, 35);
        lissetteBannerA.opacity = 0;
        var lissetteNameLabel= makeLabel("Lissette", -200, -200, "Times New Roman", 24, "White", 200, 35);
        var lissetteTitleLabel1 = makeLabel("bartender", -200, -200, "Times New Roman", 24, "DarkRed", 200, 35);
        var lissetteTitleLabel2 = makeLabel("waitress", -200, -200, "Times New Roman", 24, "DarkRed", 200, 35);
        lissetteNameLabel.opacity = 0;
        
        var mizakTextA = "C'mon, I said I was sorry. Don't be like that.";
        var mizakBannerA = makeLabel(mizakTextA + ' ' + mizakTextA, 50, 400, "monospace", 24, "White", 5000, 35);
        mizakBannerA.opacity = 0;
        var mizakNameLabel= makeLabel("Mizak", -200, -200, "Times New Roman", 24, "White", 200, 35);
        var mizakTitleLabel1 = makeLabel("shopkeep", -200, -200, "Times New Roman", 24, "ForestGreen", 200, 35);
        var mizakTitleLabel2 = makeLabel("merchant", -200, -200, "Times New Roman", 24, "ForestGreen", 200, 35);
        mizakNameLabel.opacity = 0;
        
        var textLabel = makeLabel("", 40, 245, "16px monospace", 58, "White", 320, 120, "", "left");
        
        var close1 = makeImage(game.assets['res/closeWalk1.png'], 362, 325, 18, 100);
        close1.opacity = 0;
        var close2 = makeImage(game.assets['res/closeWalk2.png'], 362, 325, 18, 100);
        close2.opacity = 0;
        
		var skipButton = makeButton(" Skip ", 300, 500, 200, 75);
		
		skipButton.addEventListener(Event.TOUCH_END, function(e) {
	       	game.currentScene.bgm.stop();
	       	game.popScene();       
			var scene = new explainScreen(1);
			game.pushScene(scene);   
		});
        
        //opening, 0 -100
        open1.tl.delay(0).fadeIn(5).delay(38).fadeOut(5);
        open2.tl.delay(25).fadeIn(5).delay(8).fadeOut(5);
        
        high1.tl.delay(50).fadeIn(5).delay(40).fadeOut(5);
        high2.tl.delay(60).fadeIn(5).delay(30).fadeOut(5);
        high3.tl.delay(72).fadeIn(5).delay(18).fadeOut(5);
        
        //clavo intro, 105 - 207
        clavoImage.tl.delay(105).fadeIn(5).delay(97).fadeOut(5);
        clavoWorkImage.tl.delay(105).fadeIn(5).delay(97).fadeOut(5);
        clavoBannerA.tl.delay(105).fadeIn(5).moveBy(-600, 0, 102).fadeOut(5);
        clavoNameLabel.tl.delay(105).fadeIn(0).moveBy(380, 449, 5).moveBy(40, -40, 97).fadeOut(5); 
        clavoTitleLabel1.tl.delay(105).fadeIn(0).moveBy(350, 300, 5).moveBy(-40, 40, 97).fadeOut(5); 
        clavoTitleLabel2.tl.delay(105).fadeIn(0).moveBy(250, 650, 5).moveBy(40, -40, 97).fadeOut(5); 
        
        //lemel intro, 207 - 301
        lemelImage.tl.delay(207).fadeIn(5).delay(89).fadeOut(5);
        lemelWorkImage.tl.delay(207).fadeIn(5).delay(89).fadeOut(5);
        lemelBannerA.tl.delay(207).fadeIn(5).moveBy(-600, 0, 94).fadeOut(5);
        lemelNameLabel.tl.delay(207).fadeIn(0).moveBy(340, 440, 5).moveBy(-40, 40, 89).fadeOut(5);
        lemelTitleLabel1.tl.delay(207).fadeIn(0).moveBy(350, 600, 5).moveBy(-40, 40, 89).fadeOut(5); 
        lemelTitleLabel2.tl.delay(207).fadeIn(0).moveBy(450, 250, 5).moveBy(40, -40, 89).fadeOut(5); 
        
        //lissette intro, 301 - 398
        lissetteImage.tl.delay(301).fadeIn(5).delay(92).fadeOut(5);
        lissetteWorkImage.tl.delay(301).fadeIn(5).delay(92).fadeOut(5);
        lissetteBannerA.tl.delay(301).fadeIn(5).moveBy(-600, 0, 97).fadeOut(5);
        lissetteNameLabel.tl.delay(301).fadeIn(0).moveBy(380, 440, 5).moveBy(40, 40, 92).fadeOut(5);
        lissetteTitleLabel1.tl.delay(301).fadeIn(0).moveBy(300, 650, 5).moveBy(-40, 40, 92).fadeOut(5); 
        lissetteTitleLabel2.tl.delay(301).fadeIn(0).moveBy(450, 450, 5).moveBy(40, -40, 92).fadeOut(5); 
        
        //mizak intro, 398 - 495
        mizakImage.tl.delay(398).fadeIn(5).delay(87).fadeOut(5);
        mizakWorkImage.tl.delay(398).fadeIn(5).delay(87).fadeOut(5);
        mizakBannerA.tl.delay(398).fadeIn(5).moveBy(-600, 0, 92).fadeOut(5);
        mizakNameLabel.tl.delay(398).fadeIn(0).moveBy(350, 400, 5).moveBy(40, 40, 87).fadeOut(5);
        mizakTitleLabel1.tl.delay(398).fadeIn(0).moveBy(500, 250, 5).moveBy(-40, 40, 87).fadeOut(5); 
        mizakTitleLabel2.tl.delay(398).fadeIn(0).moveBy(250, 550, 5).moveBy(40, -40, 87).fadeOut(5); 
		
		//end, 495-585
		close1.tl.delay(495).fadeIn(5).delay(20).fadeOut(5);
        close2.tl.delay(501).fadeIn(5).delay(40).fadeOut(5);
		
		this.addEventListener(Event.ENTER_FRAME, function() {
			if (this.age > 585) {
				game.popScene();       
				var scene = new explainScreen(1);
				game.pushScene(scene);                                                                
			}
		});
       
        this.addChild(bg);
        this.addChild(textLabel);
        
        this.addChild(open1);
        this.addChild(open2);
        this.addChild(high1);
        this.addChild(high2);
        this.addChild(high3);
        
        this.addChild(clavoImage);
        this.addChild(lemelImage);
        this.addChild(lissetteImage);
        this.addChild(mizakImage);
        this.addChild(clavoWorkImage);
        this.addChild(lemelWorkImage);
        this.addChild(lissetteWorkImage);
        this.addChild(mizakWorkImage);
        
        this.addChild(clavoBannerA);
        this.addChild(lemelBannerA);
        this.addChild(lissetteBannerA);
        this.addChild(mizakBannerA);
        this.addChild(clavoNameLabel);
        this.addChild(lemelNameLabel);
        this.addChild(lissetteNameLabel);
        this.addChild(mizakNameLabel); 
        
        this.addChild(clavoTitleLabel1);
        this.addChild(clavoTitleLabel2);
        this.addChild(lemelTitleLabel1);
        this.addChild(lemelTitleLabel2);
        this.addChild(lissetteTitleLabel1);
        this.addChild(lissetteTitleLabel2);
        this.addChild(mizakTitleLabel1);
        this.addChild(mizakTitleLabel2);
        
        this.addChild(close1);
        this.addChild(close2);
        
        //this.addChild(skipButton);
        
    }
	
});

var creditScreen = Class.create(Scene, {
    initialize: function() {
        var game;
        Scene.apply(this);
        game = Game.instance;
        this.name = "creditScreen";
        this.bgm = game.assets['res/sounds/closer.mp3'];
        this.bgm.play();
        
        var bg = makeBackground(game.assets['res/blackBg.png']);
        bg.tl.setTimeBased();
        
        var endScene = makeImage(game.assets['res/endScene.png'], 1159, 560, 0, 0);
		endScene.opacity = 0;
        endScene.tl.setTimeBased();
        endScene.tl.fadeIn(4000).moveBy(-759, 0, 39250).fadeOut(2000);
		
		var aphorismImage = makeImage(game.assets['res/aph.png'], 150, 150, 150, 75);
        aphorismImage.opacity = 0;
        aphorismImage.tl.setTimeBased();
        var artistImg = makeImage(game.assets['res/aerinboy.png'], 150, 150, 150, 75);
        artistImg.opacity = 0;
        artistImg.tl.setTimeBased();
        var bandImg = makeImage(game.assets['res/exitvehicles.png'], 141, 141, 150, 75);
        bandImg.opacity = 0;
        bandImg.tl.setTimeBased();
        
        var textLabel = makeLabel('', 40, 245, 'monospace', '16', 'white', 320, 75, '', '');
        textLabel.tl.setTimeBased();
        textLabel.tl.opacity = 0;
        
        var finalDialogue1 = 'Clavo: I don\'t think I have a real reason. I just wanted to come home.';
        var finalDialogue2 = 'Lissette: A good enough reason - for now....';
        var dialogueLabel = makeLabel(wordWrap(finalDialogue1, 320, 16), 40, 340, 'monospace', '16', 'rgb(255,255,255)', 320, 80, 'rgba(0,0,0,0.6)');
		dialogueLabel.tl.setTimeBased();
		dialogueLabel.tl.cue( {
			9000: function() {
				dialogueLabel.text = wordWrap(finalDialogue2, dialogueLabel.width, 16);
			},
			17000: function() {
				dialogueLabel.tl.fadeOut(500);
			}
		});
		
        aphorismImage.tl.delay(17000).fadeIn(500).delay(6000).fadeOut(500);
        artistImg.tl.delay(24000).fadeIn(500).delay(5250).fadeOut(500);
        bandImg.tl.delay(30250).fadeIn(500).delay(5750).fadeOut(500);
        
        
		
		textLabel.tl.cue( {
			17000: function() {
				textLabel.tl.fadeIn(500);
			},
			17500: function() {
				textLabel.backgroundColor = 'rgba(0,0,0,0.6)';
				textLabel.text = wordWrap('Aphorism44: game engine design, JavaScript and enchant.js coding, dialogue'
					, textLabel.width, 16);
			},
			24000: function() {
				textLabel.text = wordWrap('AerinBoy: atrwork, character design'
					, textLabel.width, 16);
			},
			30250: function() {
				textLabel.text = wordWrap('Exit Vehicles: music, Unplugged track'
					, textLabel.width, 16);
			},
			37000: function() {
				textLabel.text = wordWrap('Public domain art and sounds: Hyptosis, Sprite Creator 3, Wikimedia Commons, and SoundBible.'
					, textLabel.width, 16);
			},
			43250: function() {
				textLabel.tl.fadeOut(7250);
				textLabel.text = wordWrap('All rights, including copyright in the overall game design, art and audio, are owned and controlled by the respective listed parties.'
					, textLabel.width, 16);
			}
		});
		
		this.addEventListener(Event.ENTER_FRAME, function() {
			/*don't ask me why, can't get the screen to work as if it's time-based */
			if (this.age > 825) {
				game.popScene();
				if (game.wasLoaded == 0) {
					var scene = new titleScreen();
					game.pushScene(scene);  
				}                                                              
			}
		});	
		
        this.addChild(bg);
        this.addChild(endScene);
        this.addChild(dialogueLabel);
        this.addChild(aphorismImage);
        this.addChild(artistImg);
        this.addChild(bandImg);
        this.addChild(textLabel);
    }
	
});

var splashScreen = Class.create(Scene, {
     // the opening splashscreen   
    initialize: function() {
    	var game;
        Scene.apply(this);
        //console.log("gameInstance: " + Game.instance);
        game = Game.instance;
    	this.name = "splashScreen";
		var bg = makeBackground(game.assets['res/blackBg.png']);
		var equationLogo = makeImage(game.assets['res/44Written.png'], 200, 140, 20, 30);
		equationLogo.opacity = 0;
        
        var diagramLogo = makeImage(game.assets['res/44Drawn.png'], 300, 168, 30, 50);
		diagramLogo.opacity = 0;
		
		var codeLogo = makeImage(game.assets['res/44Coded.png'], 300, 328, 50, 60);
		codeLogo.opacity = 0;
        
        var mainTitleLabel = makeLabel("Aphorism44", 20, 150, "Comic Sans MS", 42, "Orange", 300, 50, "", "left");
        mainTitleLabel.opacity = 0;
        
        equationLogo.tl.delay(10).fadeIn(10).delay(20).fadeOut(10);
        diagramLogo.tl.delay(30).fadeIn(10).delay(20).fadeOut(10);
        codeLogo.tl.delay(50).fadeIn(10).delay(20).fadeOut(10);
        mainTitleLabel.tl.delay(70).fadeIn(10);
        
        this.addChild(bg);  
        this.addChild(equationLogo); 
        this.addChild(diagramLogo);  
        this.addChild(codeLogo);  
        this.addChild(mainTitleLabel);  
             
		this.addEventListener(Event.ENTER_FRAME, function() {
			if (this.age > 100) {
				var scene = new titleScreen();
				game.pushScene(scene);                                                                                  
			}
		});
			
		this.addEventListener(Event.TOUCH_END, function(e) {
	       	window.open("http://www.aphorism44.com");
		});
    	}
	});
	
