

/*
 * The hardcoded locations are:
 * 1. The pictures on this page
 * 2. the name of the saveFiles on this page at the end
 * 3. data.js and mapData.js
 * 4. playerFunctions.js, for the weird ending(s) and for leaving maps 
 * 		by walking off end
 * 5. generalJSFunctions.js - the reset function needs to be customized
 */


enchant();

window.onload = function() {
	var game = new Core(400, 560);
	game.fps = 15;
	NG.connect('41454:js6pLhex','oQ5FYPC3dwKNjPYJ7FIyNTDg1LOLiXfQ');
	
	game.spriteWidth = 25;
	game.spriteHeight = 25;
	
	game.battleSpriteWidth = 32;
	game.battleSpriteHeight = 48;
	
	game.mapXOffset = 0;
	game.mapYOffset = 50;
	
	//initialize game data
	var scenesTriggeredLoad = initialSceneTriggered;
	var specialScenesTriggeredLoad = specialScenesTriggered;
	var battlesTriggeredLoad = initialBattlesTriggered;
    var gameVariablesLoad = initialGameVariables;
    var clueDataLoad = initialClueData;
    var topicWordsLoad = initialTopicWords;
    var currentPartyLoad = ['Lemel', 'Clavo', 'Lissette', 'Mizak'];
    var stageLoad = 1;
    
	
	game.topicWords = topicWordsLoad;
	game.specialScenesTriggered = specialScenesTriggeredLoad;
	game.battlesTriggered = battlesTriggeredLoad;
	game.gameVariables = gameVariablesLoad;
	game.scenesTriggered = scenesTriggeredLoad;
	game.sceneActions = sceneActions;
	game.combatActions = combatActions;
	game.explainActions = explainActions;
	game.revealedClueActions = revealedClueActions;
	game.revealedClueTriggers = revealedClueTriggers;
	game.npcInfo = npcInfo;
	game.stage = stageLoad;
	game.wasLoaded = 0;
	
	game.currentParty = currentPartyLoad;
	
	game.availableWords = null;
	game.clueData = clueDataLoad;
	game.changeMap = changeMapData;
	
	game.clueDataA = null;
	game.clueDataB = null;
	game.highlightClueA = null;
	game.highlightClueB = null;  
	game.clueMistakesMade = 0;
	
    game.fighterData = FIGHTER_DATA;
    game.equipmentData = EQUIPMENT_DATA;
    game.fighterEquipData = FIGHTER_EQUIPMENT;
    game.lastBattleResult = -1;
	
	//asset loading
	game.preload('res/hyptosisOutside.png'
			, 'res/mapTiles.png'
			
			, 'res/lemelSprites.png'
			, 'res/clavoSprites.png'
			, 'res/lissetteSprites.png'
			, 'res/mizakSprites.png'
			, 'res/sawaSprites.png'
			, 'res/bowmanSprites.png'
			, 'res/swordmanSprites.png'
			
			, 'res/lemelFightSprites.png'
			, 'res/lissetteFightSprites.png'
			, 'res/mizakFightSprites.png'
			, 'res/clavoFightSprites.png'
			
			, 'res/goblinSprites.png'
			, 'res/highwaymanSprites.png'
			, 'res/nicorSprites.png'
			, 'res/wightSprites.png'
			, 'res/trowSprites.png'
			, 'res/vampyreSprites.png'
			
			, 'res/44Written.png'
			, 'res/44Drawn.png'
			, 'res/44Coded.png'
			
			, 'res/album.png'
			, 'res/exitvehicles.png'
			, 'res/aph.png'
			, 'res/aerinboy.png'
			, 'res/endScene.png'
			
			, 'res/titleBg.png'
			, 'res/grayBg.png'
			, 'res/blackBg.png'
			, 'res/whiteBg.png'
			, 'res/woodBg.png'
			, 'res/caveBg.png'
			, 'res/smithyBg.png'
			, 'res/insideCaveBg.png'
			
			, 'res/question.png'
			, 'res/questionHighlighted.png'
			, 'res/attackSymbol.png'
			, 'res/defendSymbol.png'
			, 'res/splitSymbol.png'
			, 'res/runSymbol.png'
			
			, 'res/openHighway1.png'
			, 'res/openHighway2.png'
			, 'res/openHighway3.png'
			, 'res/openWalk1.png'
			, 'res/openWalk2.png'
			, 'res/closeWalk1.png'
			, 'res/closeWalk2.png'
			
			, 'res/shrineBg.png'
			, 'res/tavernBg.png'
			, 'res/storeBg.png'
			, 'res/boardhouseBg.png'
			, 'res/hallBg.png'
			, 'res/prairieBg.png'
			, 'res/campBg.png'
			, 'res/graveyardBg.png'
			
			, 'res/instructMap.png'
			, 'res/instructScene.png'
			, 'res/instructTalk.png'
			, 'res/instructBattle.png'
			, 'res/instructClue1.png'
			, 'res/instructClue2.png'
			
			, 'res/clavoProfile.png'
			, 'res/lemelProfile.png'
			, 'res/lissetteProfile.png'
			, 'res/mizakProfile.png'
			, 'res/clavoWork.png'
			, 'res/lemelWork.png'
			, 'res/lissetteWork.png'
			, 'res/mizakWork.png'
			, 'res/clavoAttack.png'
			, 'res/lemelAttack.png'
			, 'res/lissetteAttack.png'
			, 'res/mizakAttack.png'
			
			, 'res/faces/clavoNormal.png'
			, 'res/faces/clavoFrown.png'
			, 'res/faces/clavoOut.png'
			, 'res/faces/clavoStruggle.png'
			, 'res/faces/clavoTalk.png'
			, 'res/faces/clavoAngry.png'
			, 'res/faces/clavoFight.png'
			
			, 'res/faces/lemelNormal.png'
			, 'res/faces/lemelFrown.png'
			, 'res/faces/lemelAngry.png'
			, 'res/faces/lemelOut.png'
			, 'res/faces/lemelStruggle.png'
			, 'res/faces/lemelTalk.png'
			, 'res/faces/lemelFight.png'
			
			, 'res/faces/lissetteNormal.png'
			, 'res/faces/lissetteAngry.png'
			, 'res/faces/lissetteTalk.png'
			, 'res/faces/lissetteFrown.png'
			, 'res/faces/lissetteStruggle.png'
			, 'res/faces/lissetteOut.png'
			, 'res/faces/lissetteFight.png'
			
			, 'res/faces/mizakNormal.png'
			, 'res/faces/mizakFrown.png'
			, 'res/faces/mizakAngry.png'
			, 'res/faces/mizakOut.png'
			, 'res/faces/mizakStruggle.png'
			, 'res/faces/mizakTalk.png'
			, 'res/faces/mizakLaugh.png'
			, 'res/faces/mizakFight.png'
			
			, 'res/faces/jeraFrown.png'
			, 'res/faces/jeraNormal.png'
			, 'res/faces/jeraSurprised.png'
			, 'res/faces/reeveFrown.png'
			, 'res/faces/reeveNormal.png'
			, 'res/faces/reeveSmile.png'
			, 'res/faces/bryceNormal.png'
			, 'res/faces/bryceAngry.png'
			, 'res/faces/bryceSmile.png'
			, 'res/faces/burtonNormal.png'
			, 'res/faces/burtonFrown.png'
			, 'res/faces/burtonLaugh.png'
			, 'res/faces/foremanNormal.png'
			, 'res/faces/foremanSmile.png'
			, 'res/faces/foremanFrown.png'
			, 'res/faces/sawaNormal.png'
			, 'res/faces/sawaSmile.png'
			, 'res/faces/sawaYell.png'
			, 'res/faces/westonFrown.png'
			, 'res/faces/westonNormal.png'
			, 'res/faces/westonYell.png'
			, 'res/faces/widowFrown.png'
			, 'res/faces/widowNormal.png'
			, 'res/faces/aderFrown.png'
			, 'res/faces/aderNormal.png'
			, 'res/faces/aderYell.png'
			
			, 'res/faces/blankFace.png'
			
			, 'res/sounds/pling.mp3'
			, 'res/sounds/tone.mp3'
			, 'res/sounds/slap.mp3'
			, 'res/sounds/natureAmbiance.mp3'
			, 'res/sounds/scaryAmbiance.mp3'
			, 'res/sounds/noSound.mp3'
			, 'res/sounds/frogsNight.mp3'
			, 'res/sounds/windBg.mp3'
			
			, 'res/sounds/opener.mp3'
			, 'res/sounds/closer.mp3'
			, 'res/sounds/battle.mp3'
			
	);
	
	game.onload = function() {
		//console.log("gamLoad: " + game);
		//start out on logo-splash screen
		var scene = new splashScreen();
		game.pushScene(scene);
		};
	
game.start();
};

//save game functions
//duplications needed due to XBrowser issues
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
//HARDCODEALERT begin
function saveGame() {
    var game;
    game = Game.instance;
    
    if (!supports_html5_storage() ) { 
    	var noSupport = makeLabel("Browser doesn't<br>support saving<br>data", 50, 100, "Comic Sans MS", 20, "Red", 170, 100, "", "left");
		game.currentScene.addChild(noSupport);
		 noSupport.tl.delay(30).then(function(){
		     game.currentScene.removeChild(noSupport);
		 });
    	return false; 
    	}
    try {
    localStorage.setItem('scenesTriggeredGlade1', JSON.stringify(game.scenesTriggered));	
    localStorage.setItem('specialScenesTriggeredGlade1', JSON.stringify(game.specialScenesTriggered));	
    localStorage.setItem('battlesTriggeredGlade1', JSON.stringify(game.battlesTriggered));	
    localStorage.setItem('gameVariablesGlade1', JSON.stringify(game.gameVariables));
    localStorage.setItem('clueDataGlade1', JSON.stringify(game.clueData));
    localStorage.setItem('topicWordsGlade1', JSON.stringify(game.topicWords));
    localStorage.setItem('clueMistakesMadeGlade1', JSON.stringify(game.clueMistakesMade));	
    localStorage.setItem('currentPartyGlade1', JSON.stringify(game.currentParty));	
    localStorage.setItem('gameStageGlade1', JSON.stringify(game.stage));	
    
    
    
    
    
    /*console.log("saved: ");
    console.log(JSON.stringify(game.scenesTriggered));
    console.log(JSON.stringify(game.gameVariables));
    console.log(JSON.stringify(game.clueData));
    console.log(JSON.stringify(game.topicWords));
    console.log(JSON.stringify(game.clueMistakesMade));*/
    
    return true;
    } catch(error) {
    	//console.log(error);
    	var noData = makeLabel("Couldn't save<br>on your<br>browser!", 50, 100, "Comic Sans MS", 20, "Red", 170, 100, "", "left");
		game.currentScene.addChild(noData);
		 noData.tl.delay(30).then(function(){
		     game.currentScene.removeChild(noData);
		 });
    	return false;
    }
    
}

function loadGame() {
    var game;
    game = Game.instance;
    
    if (!supports_html5_storage() ) { 
    	var noSupport = makeLabel("Browser doesn't<br>support saving<br>data", 50, 100, "Comic Sans MS", 20, "Red", 170, 100, "", "left");
		game.currentScene.addChild(noSupport);
		 noSupport.tl.delay(30).then(function(){
		     game.currentScene.removeChild(noSupport);
		 });
    	return false; 
    	}
    try {
	    var scenesTriggeredLoad = JSON.parse(localStorage.getItem('scenesTriggeredGlade1'));	
	    var specialScenesTriggeredLoad = JSON.parse(localStorage.getItem('specialScenesTriggeredGlade1'));
		var battlesTriggeredLoad = JSON.parse(localStorage.getItem('battlesTriggeredGlade1'));	
		var gameVariablesLoad = JSON.parse(localStorage.getItem('gameVariablesGlade1'));
		var clueDataLoad = JSON.parse(localStorage.getItem('clueDataGlade1'));
		var topicWordsLoad = JSON.parse(localStorage.getItem('topicWordsGlade1'));
		var clueMistakesMadeLoad = JSON.parse(localStorage.getItem('clueMistakesMadeGlade1'));
		var currentPartyLoad = JSON.parse(localStorage.getItem('currentPartyGlade1'));
		var stageLoad = JSON.parse(localStorage.getItem('gameStageGlade1'));
		

		
		if (scenesTriggeredLoad != null) {
			
			game.scenesTriggered = scenesTriggeredLoad;
			game.battlesTriggered = battlesTriggeredLoad;
		    game.gameVariables = gameVariablesLoad;
		    game.clueData = clueDataLoad;
		    game.topicWords = topicWordsLoad;
		    game.clueMistakesMade = clueMistakesMadeLoad;
		    game.specialScenesTriggered = specialScenesTriggeredLoad;
		    game.currentParty = currentPartyLoad;
		    game.stage = stageLoad;
		    game.wasLoaded = 1;
		    
		    //start game at set point for stage
		    var startMap = loadGameStartPoints[game.stage - 1].startMap;
		   	var startX = loadGameStartPoints[game.stage - 1].startX;
			var startY = loadGameStartPoints[game.stage - 1].startY;
			var startDir = loadGameStartPoints[game.stage - 1].startDir;
		    
			var scene = new gameScreen(startMap, startX, startY, startDir);
			game.replaceScene(scene); 
			
			/*console.log("loaded: ");
		    console.log(JSON.stringify(game.scenesTriggered));
		    console.log(JSON.stringify(game.gameVariables));
		    console.log(JSON.stringify(game.clueData));
		    console.log(JSON.stringify(game.topicWords));
		    console.log(JSON.stringify(game.clueMistakesMade));*/
			 
			return true;
		} else {
			var noData = makeLabel("No game data!", 50, 100, "Comic Sans MS", 20, "Red", 170, 100, "", "left");
			game.currentScene.addChild(noData);
			 noData.tl.delay(30).then(function(){
				game.currentScene.removeChild(noData);
			 });
			return false;
		}
	
	} catch(error) {
		var noData = makeLabel("No game data!", 50, 100, "Comic Sans MS", 20, "Red", 170, 100, "", "left");
		game.currentScene.addChild(noData);
		 noData.tl.delay(30).then(function(){
		     game.currentScene.removeChild(noData);
		 });
		return false;
	}
    
}

function clearSavedData() {
	var game;
    game = Game.instance;
    
	if (!supports_html5_storage() ) { 
		var noSupport = makeLabel("No save<br>data support", 50, 100, "Comic Sans MS", 20, "Red", 170, 100, "", "left");
		game.currentScene.addChild(noSupport);
		 noSupport.tl.delay(30).then(function(){
		     game.currentScene.removeChild(noSupport);
		 });
    	return false; 
    	}
    	
	try {
		localStorage.removeItem('scenesTriggeredGlade1');
		localStorage.removeItem('specialScenesTriggeredGlade1');
		localStorage.removeItem('battlesTriggeredGlade1');
		localStorage.removeItem('gameVariablesGlade1');
		localStorage.removeItem('clueDataGlade1');
		localStorage.removeItem('topicWordsGlade1');
		localStorage.removeItem('clueMistakesMadeGlade1');
		localStorage.removeItem('currentPartyGlade1');
		localStorage.removeItem('gameStageGlade1');		
		
		return true;
	} catch(error) {
		var noData = makeLabel("No game data!", 50, 100, "Comic Sans MS", 20, "Red", 170, 100, "", "left");
		game.currentScene.addChild(noData);
		 noData.tl.delay(30).then(function(){
		     game.currentScene.removeChild(noData);
		 });
		return false;
	}
	
}
//HARDCODEALERT end