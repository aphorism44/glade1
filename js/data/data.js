

//the array value = sceneId
//fill this manually
var initialSceneTriggered = [
	{'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	
	
];

var initialBattlesTriggered = [
	{'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
];

//sets where you start when you load a game
//set this manually
var loadGameStartPoints = [
	{'loadId':'1', 'gameStage': 1, 'startMap':'2', 'startX':'19', 'startY':'22', 'startDir':'0' }
];

//action that happens after an explain scene
//set this manually
var explainActions = [
	{'explain':'0', 'action':'return'}
	, {'explain':'1', 'action':'newScene', 'nextScene': '0' }
];

//list of game variables that can be set
//from spreadsheet
var initialGameVariables = [
	{'name': 'sawaAvailable', 'status':'0'}
	, {'name': 'soldierAvailable', 'status':'0'}
	, {'name': 'bowmanAvailable', 'status':'0'}
	, {'name': 'caveAvailable', 'status':'0'}
	, {'name': 'exitCaveAvailable', 'status':'0'}
	, {'name': 'lemelOutside', 'status':'1'}
	, {'name': 'lissetteOutside', 'status':'1'}
	, {'name': 'mizakOutside', 'status':'1'}
	, {'name': 'helpingMizak', 'status':'0'}
	, {'name': 'helpingLissette', 'status':'0'}
	, {'name': 'foundMizakItem', 'status':'0'}
	, {'name': 'beatLissetteEnemies', 'status':'0'}
	, {'name': 'soldierOutside', 'status':'0'}
	, {'name': 'sawaOutside', 'status':'0'}
	, {'name': 'bowmanOutside', 'status':'0'}
];

//keeps track of when/which endings are triggered and triggered scene 
//0 - ENDING - too many mistakes
//1 - SCENE to stage 2
//2 - SCENE - escape the cave
//3 - ENDING - best
var specialScenesTriggered = [
	{'status':'0', 'scene':'29'} 
	, {'status':'0', 'scene':'15'}
	, {'status':'0', 'scene':'22'}
	, {'status':'0', 'scene':'30'}
];


//certain variables trigger the above scenese
var variableTrigger = [
	{'triggerVariable':'caveAvailable', 'triggerIndex':1}
	, {'triggerVariable':'cavePuzzleSolved', 'triggerIndex':2 }
];

//any special actions triggered by revealing clues
//from spreadsheet
var revealedClueTriggers = [

];


//the actions taken when player finishes a scene
//from spreadsheet
var sceneActions = [
	{'scene':'0', 'action':'trigger' }
	, {'scene':'0', 'action':'battle', 'enemyArray': ['Goblin'], 'battleId': 0 }
	, {'scene':'1', 'action':'trigger' }
	, {'scene':'1', 'action':'removeCharacter', 'character': 'Lemel' }
	, {'scene':'1', 'action':'removeCharacter', 'character': 'Lissette' }
	, {'scene':'1', 'action':'removeCharacter', 'character': 'Mizak' }
	, {'scene':'1', 'action':'popScene' }
	, {'scene':'1', 'action':'gotoMap', 'startMap': '2', 'startX': '19', 'startY': '22', 'startDir': '0' }
	, {'scene':'2', 'action':'trigger' }
	, {'scene':'2', 'action':'toggleGameVariable', 'variable': 'lemelOutside' }
	, {'scene':'2', 'action':'addCharacter', 'character': 'Lemel' }
	, {'scene':'2', 'action':'gotoMap', 'startMap': '2', 'startX': '2', 'startY': '8', 'startDir': '0' }
	, {'scene':'3', 'action':'trigger' }
	, {'scene':'3', 'action':'toggleGameVariable', 'variable': 'helpingMizak' }
	, {'scene':'3', 'action':'popScene' }
	, {'scene':'4', 'action':'popScene' }
	, {'scene':'5', 'action':'trigger' }
	, {'scene':'5', 'action':'toggleGameVariable', 'variable': 'foundMizakItem' }
	, {'scene':'5', 'action':'toggleGameVariable', 'variable': 'helpingMizak' }
	, {'scene':'5', 'action':'popScene' }
	, {'scene':'6', 'action':'trigger' }
	, {'scene':'6', 'action':'toggleGameVariable', 'variable': 'mizakOutside' }
	, {'scene':'6', 'action':'addCharacter', 'character': 'Mizak' }
	, {'scene':'6', 'action':'gotoMap', 'startMap': '2', 'startX': '17', 'startY': '8', 'startDir': '0' }
	, {'scene':'7', 'action':'trigger' }
	, {'scene':'7', 'action':'toggleGameVariable', 'variable': 'helpingLissette' }
	, {'scene':'7', 'action':'popScene' }
	, {'scene':'8', 'action':'popScene' }
	, {'scene':'9', 'action':'trigger' }
	, {'scene':'9', 'action':'addCharacter', 'character': 'Lissette' }
	, {'scene':'9', 'action':'battle', 'enemyArray': ['Highwayman', 'Highwayman', 'Highwayman'], 'battleId': 1 }
	, {'scene':'10', 'action':'trigger' }
	, {'scene':'10', 'action':'toggleGameVariable', 'variable': 'lissetteOutside' }
	, {'scene':'10', 'action':'gotoMap', 'startMap': '2', 'startX': '13', 'startY': '13', 'startDir': '' }
	, {'scene':'11', 'action':'trigger' }
	, {'scene':'11', 'action':'toggleGameVariable', 'variable': 'sawaOutside' }
	, {'scene':'11', 'action':'gotoTalkScene', 'npc': 'sawa' }
	, {'scene':'12', 'action':'trigger' }
	, {'scene':'12', 'action':'toggleGameVariable', 'variable': 'bowmanOutside' }
	, {'scene':'12', 'action':'toggleGameVariable', 'variable': 'bowmanAvailable' }
	, {'scene':'12', 'action':'gotoTalkScene', 'npc': 'bowman' }
	, {'scene':'13', 'action':'trigger' }
	, {'scene':'13', 'action':'battle', 'enemyArray': ['Goblin', 'Goblin', 'Goblin', 'Goblin', 'Goblin'], 'battleId': 2 }
	, {'scene':'14', 'action':'trigger' }
	, {'scene':'14', 'action':'toggleGameVariable', 'variable': 'soldierOutside' }
	, {'scene':'14', 'action':'toggleGameVariable', 'variable': 'soldierAvailable' }
	, {'scene':'14', 'action':'gotoTalkScene', 'npc': 'soldier' }
	, {'scene':'15', 'action':'trigger' }
	, {'scene':'15', 'action':'removeCharacter', 'character': 'Mizak' }
	, {'scene':'15', 'action':'popScene' }
	, {'scene':'16', 'action':'trigger' }
	, {'scene':'16', 'action':'addCharacter', 'character': 'Mizak' }
	, {'scene':'16', 'action':'toggleGameVariable', 'variable': '' }
	, {'scene':'16', 'action':'gotoMap', 'startMap': '3', 'startX': '12', 'startY': '23', 'startDir': '1' }

	, {'scene':'27', 'action':'gotoMap', 'startMap': '2', 'startX': '19', 'startY': '22', 'startDir': '0' }
	, {'scene':'28', 'action':'endGameBad' }
	, {'scene':'29', 'action':'endGameBad' }


];

var npcInfo = [
	{'npcName':'lemel', 'mapId':2, 'sprite':'res/lemelSprites.png', 'visible':'lemelOutside', 'xCord': 1, 'yCord':8 }
	, {'npcName':'mizak', 'mapId':2, 'sprite':'res/mizakSprites.png', 'visible':'mizakOutside', 'xCord': 18, 'yCord':8 }
	, {'npcName':'lissette', 'mapId':2, 'sprite':'res/lissetteSprites.png', 'visible':'lissetteOutside', 'xCord': 7, 'yCord':20 }
	, {'npcName':'sawa', 'mapId':1, 'sprite':'res/sawaSprites.png', 'visible':'sawaOutside', 'xCord': 17, 'yCord':8 }
	, {'npcName':'swordsman', 'mapId':1, 'sprite':'res/swordmanSprites.png', 'visible':'soldierOutside', 'xCord': 6, 'yCord':18 }
	, {'npcName':'bowman', 'mapId':1, 'sprite':'res/bowmanSprites.png', 'visible':'bowmanOutside', 'xCord': 23, 'yCord':5 }
];

var combatActions = [
	{'battle':'0', 'action':'trigger' }
	, {'battle':'0', 'action':'newScene', 'nextScene': '1' }
	, {'battle':'1', 'action':'trigger' }
	, {'battle':'1', 'action':'trigger' }
	, {'battle':'1', 'action':'toggleGameVariable', 'variable': 'helpingLissette' }
	, {'battle':'1', 'action':'toggleGameVariable', 'variable': 'beatLissetteEnemies' }
	, {'battle':'1', 'action':'newScene', 'nextScene': '10' }
	, {'battle':'2', 'action':'trigger' }
	, {'battle':'2', 'action':'newScene', 'nextScene': '14' }
];
//actions taken when a particular clue is revealed
//from spreadsheet
var revealedClueActions = [
 	{'clueId':'25', 'action':'activateGameVariable', 'gameVariable':'cavePuzzleSolved'}
];

//definitions of clues, how they match, what other clues/topics they reveal
//from spreadsheet
var initialClueData = [  
	{'id': '1', 'gameStage': '1',  'available': '1', 'partner': '9', 'revealed': '10', 'wordRevealed': '', 'text': 'The wizard possessed either a human or a monster.'}
	, {'id': '2', 'gameStage': '1',  'available': '0', 'partner': '7', 'revealed': '9', 'wordRevealed': '', 'text': 'If the wizard possessed a human, they needed a blood sacrifice.'}
	, {'id': '3', 'gameStage': '1',  'available': '0', 'partner': '0', 'revealed': '0', 'wordRevealed': '', 'text': 'A being possessed by a wizard can command monsters.'}
	, {'id': '4', 'gameStage': '1',  'available': '0', 'partner': '10', 'revealed': '11', 'wordRevealed': '', 'text': 'If the wizard possessed a monster, it was one strong monster or a group of weak ones.'}
	, {'id': '5', 'gameStage': '1',  'available': '0', 'partner': '8', 'revealed': '12', 'wordRevealed': '', 'text': 'If the wizard possessed a group of monsters, he would manifest as a ghost.'}
	, {'id': '6', 'gameStage': '1',  'available': '0', 'partner': '13', 'revealed': '14', 'wordRevealed': '', 'text': 'The only single monster that could survive possession is a vampyre.'}
	, {'id': '7', 'gameStage': '1',  'available': '0', 'partner': '2', 'revealed': '9', 'wordRevealed': '', 'text': 'Nobody performed a blood sacrifice.'}
	, {'id': '8', 'gameStage': '1',  'available': '0', 'partner': '5', 'revealed': '12', 'wordRevealed': '', 'text': 'There were no ghosts in the cave.'}
	, {'id': '9', 'gameStage': '1',  'available': '0', 'partner': '1', 'revealed': '10', 'wordRevealed': '', 'text': 'The wizard didn\'t posess a human.'}
	, {'id': '10', 'gameStage': '1',  'available': '0', 'partner': '4', 'revealed': '11', 'wordRevealed': '', 'text': 'The wizard possessed a monster.'}
	, {'id': '11', 'gameStage': '1',  'available': '0', 'partner': '12', 'revealed': '13', 'wordRevealed': '', 'text': 'The wizard possessed either one strong monster or a group of weak ones.'}
	, {'id': '12', 'gameStage': '1',  'available': '0', 'partner': '11', 'revealed': '13', 'wordRevealed': '', 'text': 'The wizard didn\'t possess a group of weak monsters.'}
	, {'id': '13', 'gameStage': '1',  'available': '0', 'partner': '6', 'revealed': '14', 'wordRevealed': '', 'text': 'The wizard possessed a single monster.'}
	, {'id': '14', 'gameStage': '1',  'available': '0', 'partner': '0', 'revealed': '0', 'wordRevealed': 'vampyre', 'text': 'The wizard possessed a vampyre.'}
	
	, {'id': '15', 'gameStage': '2',  'available': '1', 'partner': '24', 'revealed': '25', 'wordRevealed': '', 'text': 'When the sun and the moon rise, the door will open.'}
	, {'id': '16', 'gameStage': '2',  'available': '0', 'partner': '23', 'revealed': '24', 'wordRevealed': '', 'text': 'When the altar is touched, the sun rises.'}
	, {'id': '17', 'gameStage': '2',  'available': '0', 'partner': '22', 'revealed': '23', 'wordRevealed': '', 'text': 'If the petals are not closed, the moon will not rise.'}
	, {'id': '18', 'gameStage': '2',  'available': '0', 'partner': '21', 'revealed': '22', 'wordRevealed': '', 'text': 'While the water flows or the farmer toils, the petals will not close.'}
	, {'id': '19', 'gameStage': '2',  'available': '0', 'partner': '20', 'revealed': '21', 'wordRevealed': '', 'text': 'If the fountain is stopped, the water will not flow.'}
	, {'id': '20', 'gameStage': '2',  'available': '0', 'partner': '19', 'revealed': '21', 'wordRevealed': '', 'text': 'If the statue of the farmer is moved, the farmer will stop toiling.'}
	, {'id': '21', 'gameStage': '2',  'available': '0', 'partner': '18', 'revealed': '22', 'wordRevealed': '', 'text': 'If the fountain stops and the statue moved, the water won\'t flow and the farmer stops toiling.'}
	, {'id': '22', 'gameStage': '2',  'available': '0', 'partner': '17', 'revealed': '23', 'wordRevealed': '', 'text': 'If the fountain stops and the statue moved, the petals will close'}
	, {'id': '23', 'gameStage': '2',  'available': '0', 'partner': '16', 'revealed': '24', 'wordRevealed': '', 'text': 'If the fountain is stopped and the statue moved, the moon rises.'}
	, {'id': '24', 'gameStage': '2',  'available': '0', 'partner': '15', 'revealed': '25', 'wordRevealed': '', 'text': 'If the altar is touched, the fountain stopped, and statue moved, the sun and moon rise.'}
	, {'id': '25', 'gameStage': '2',  'available': '0', 'partner': '0', 'revealed': '0', 'wordRevealed': '', 'text': 'If the altar is touched, the fountain stopped, and statue moved, the door opens.'}
	
	];

//actions taken when you enter certain map squares, with other conditionals
//from spreadsheet
var changeMapData = [
	{'mapChangeId' :'1' ,'changeType': 'mapChange','mapId' : '1', 'x' : '7', 'y': '12', 'newMap':'2',  'newX':'19', 'newY':'22', 'newDir':'1'}
	, {'mapChangeId' :'2' ,'changeType': 'gotoScene','mapId' : '1', 'x' : '17', 'y': '8', 'newScene':'11', 'requirement':'sawaAvailable'}
	, {'mapChangeId' :'3' ,'changeType': 'gotoScene','mapId' : '1', 'x' : '6', 'y': '18', 'newScene':'13', 'requirement':'soldierAvailable'}
	, {'mapChangeId' :'4' ,'changeType': 'gotoScene','mapId' : '1', 'x' : '23', 'y': '5', 'newScene':'12', 'requirement':'bowmanAvailable'}
	, {'mapChangeId' :'5' ,'changeType': 'npc','mapId' : '2', 'x' : '20', 'y': '5 ', 'newScene':'', 'requirement':'', 'name': 'jera'}
	, {'mapChangeId' :'6' ,'changeType': 'npc','mapId' : '2', 'x' : '2', 'y': '19 ', 'newScene':'', 'requirement':'', 'name': 'widow'}
	, {'mapChangeId' :'7' ,'changeType': 'npc','mapId' : '2', 'x' : '15', 'y': '20 ', 'newScene':'', 'requirement':'', 'name': 'weston'}
	, {'mapChangeId' :'8' ,'changeType': 'npc','mapId' : '2', 'x' : '11', 'y': '11 ', 'newScene':'', 'requirement':'', 'name': 'reeve'}
	, {'mapChangeId' :'9' ,'changeType': 'npc','mapId' : '2', 'x' : '20', 'y': '11 ', 'newScene':'', 'requirement':'', 'name': 'burton'}
	, {'mapChangeId' :'10' ,'changeType': 'npc','mapId' : '2', 'x' : '2', 'y': '11 ', 'newScene':'', 'requirement':'', 'name': 'bryce'}
	, {'mapChangeId' :'11' ,'changeType': 'npc','mapId' : '1', 'x' : '20', 'y': '19 ', 'newScene':'', 'requirement':'', 'name': 'sawa'}
	, {'mapChangeId' :'12' ,'changeType': 'gotoScene','mapId' : '2', 'x' : '1', 'y': '8 ', 'newScene':'2', 'requirement':'lemelOutside'}
	, {'mapChangeId' :'13' ,'changeType': 'gotoScene','mapId' : '2', 'x' : '18', 'y': '8 ', 'newScene':'3', 'requirement':'mizakOutside'}
	, {'mapChangeId' :'14' ,'changeType': 'gotoScene','mapId' : '2', 'x' : '7', 'y': '20 ', 'newScene':'7', 'requirement':'lissetteOutside'}
	, {'mapChangeId' :'15' ,'changeType': 'gotoScene','mapId' : '2', 'x' : '18', 'y': '8 ', 'newScene':'4', 'requirement':'helpingMizak'}
	, {'mapChangeId' :'16' ,'changeType': 'gotoScene','mapId' : '2', 'x' : '7', 'y': '20 ', 'newScene':'8', 'requirement':'helpingLissette'}
	, {'mapChangeId' :'17' ,'changeType': 'gotoScene','mapId' : '2', 'x' : '9', 'y': '3 ', 'newScene':'5', 'requirement':'helpingMizak'}
	, {'mapChangeId' :'18' ,'changeType': 'gotoScene','mapId' : '2', 'x' : '18', 'y': '8 ', 'newScene':'6', 'requirement':'foundMizakItem'}
	, {'mapChangeId' :'19' ,'changeType': 'gotoScene','mapId' : '2', 'x' : '13', 'y': '14 ', 'newScene':'9', 'requirement':'helpingLissette'}
	, {'mapChangeId' :'20' ,'changeType': 'npc','mapId' : '1', 'x' : '17', 'y': '8 ', 'newScene':'', 'requirement':'sawaOutside', 'name': 'sawa'}
	, {'mapChangeId' :'21' ,'changeType': 'npc','mapId' : '1', 'x' : '23', 'y': '5 ', 'newScene':'', 'requirement':'bowmanOutside', 'name': 'bowman'}
	, {'mapChangeId' :'22' ,'changeType': 'npc','mapId' : '1', 'x' : '6', 'y': '18 ', 'newScene':'', 'requirement':'soldierOutside', 'name': 'soldier'}
	, {'mapChangeId' :'23' ,'changeType': 'gotoScene','mapId' : '1', 'x' : '16', 'y': '1 ', 'newScene':'16', 'requirement':'caveAvailable'}

]; 

//npc info for interaction scenes
//from spreadsheet
var npcNames = {
	'jera': { 'fullname': 'Brother Jera', 'mainpic': 'res/faces/jeraNormal.png', 'npcId': '1', 'mainBg': 'res/shrineBg.png' }
	, 'reeve': { 'fullname': 'Reeve Donte', 'mainpic': 'res/faces/reeveNormal.png', 'npcId': '2', 'mainBg': 'res/hallBg.png' }
	, 'weston': { 'fullname': 'Weston', 'mainpic': 'res/faces/westonNormal.png', 'npcId': '3', 'mainBg': 'res/tavernBg.png' }
	, 'widow': { 'fullname': 'Widow Starnes', 'mainpic': 'res/faces/widowNormal.png', 'npcId': '4', 'mainBg': 'res/boardhouseBg.png' }
	, 'burton': { 'fullname': 'Burton', 'mainpic': 'res/faces/burtonNormal.png', 'npcId': '5', 'mainBg': 'res/storeBg.png' }
	, 'bryce': { 'fullname': 'Bryce', 'mainpic': 'res/faces/bryceNormal.png', 'npcId': '6', 'mainBg': 'res/smithyBg.png' }
	, 'sawa': { 'fullname': 'Sawa', 'mainpic': 'res/faces/sawaNormal.png', 'npcId': '7', 'mainBg': 'res/campBg.png' }
	, 'soldier': { 'fullname': 'Swordsman', 'mainpic': 'res/faces/foremanNormal.png', 'npcId': '8', 'mainBg': 'res/prairieBg.png' }
	, 'bowman': { 'fullname': 'Longbowman', 'mainpic': 'res/faces/aderNormal.png', 'npcId': '9', 'mainBg': 'res/prairieBg.png' }
};

//the topic words for interaction screens
//from spreadsheet
var initialTopicWords = [  
	{ 'word': 'cave', 'available': '1'}
	, { 'word': 'wizards', 'available': '0'}
	, { 'word': 'Sawa', 'available': '0'}
	, { 'word': 'Horde wars', 'available': '0'}
	, { 'word': 'goblins', 'available': '0'}
	, { 'word': 'blood', 'available': '0'}
	, { 'word': 'vampyre', 'available': '0'}
];

//bgs and music for different scenes
//from spreadsheet
var sceneMedia = {
	'0' : { 'pic':'res/tavernBg.png', 'music': ''}
	, '1' : { 'pic':'res/tavernBg.png', 'music': ''} 
	, '2' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '3' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '4' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '5' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '6' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '7' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '8' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '9' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '10' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '11' : { 'pic':'res/campBg.png', 'music': 'res/sounds/frogsNight.mp3'}
	, '12' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '13' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '14' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '15' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '16' : { 'pic':'res/prairieBg.png', 'music': 'res/sounds/windBg.mp3'}
	
	
	, '27' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '28' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '29' : { 'pic':'res/prairieBg.png', 'music': ''}

}; 

//the text, bgs, and sounds for explain scene frames
//from spreadsheet
var explainData= {
	"explain0" : [ 
	{ 'bg': 'res/blackBg.png', 'text': 'The instructions for this game are very simple (click on or touch this text to continue...)', 'sound': '' }
	, { 'bg': 'res/instructScene.png', 'text': 'During scenes, click or touch in the dialogue box to advance to the next step.', 'sound': '' }
	, { 'bg': 'res/instructScene.png', 'text': 'Be careful, as if you click through too fast, you might miss something important.', 'sound': '' }
	, { 'bg': 'res/instructTalk.png', 'text': 'In the talk screen, press the Change Topic button to pick different topic words, then press the Ask About button to choose it.', 'sound': '' }
	, { 'bg': 'res/instructTalk.png', 'text': 'If you hear this sound, it means you either discovered a new topic word, or a new clue. Both are instantly available.', 'sound': 'res/sounds/tone.mp3' }
	, { 'bg': 'res/instructTalk.png', 'text': 'More on the clues shortly….', 'sound': '' }
	, { 'bg': 'res/instructMap.png', 'text': 'On the map screen, tap on a spot to walk to it. Certain doors and other locations can lead to scenes or talk screens.', 'sound': '' }
	, { 'bg': 'res/instructMap.png', 'text': 'To save your game, press the Save button. You can only have one saved game at a time. This uses HTML5 localStorage, if your browser supports it.', 'sound': '' }
	, { 'bg': 'res/instructMap.png', 'text': 'Finally, at any time you\'re on the map screen, press the Clues button to open the clue screen.', 'sound': '' }
	, { 'bg': 'res/instructClues.png', 'text': 'If you press any clue, it will turn yellow and its text will appear in one of the below windows.', 'sound': '' }
	, { 'bg': 'res/instructClues.png', 'text': 'You can create more clues by choosing two clues, then pressing the Evaluate button at the bottom.', 'sound': '' }
	, { 'bg': 'res/instructClues.png', 'text': 'If you evaluate two appropriate clues, a new clue will appear, along with this sound.', 'sound': 'res/sounds/tone.mp3' }
	, { 'bg': 'res/instructClues.png', 'text': 'New clues will also appear as you talk to people and witness certain scenes, so check the clues often.', 'sound': '' }
	, { 'bg': 'res/instructClues.png', 'text': 'If you evaluate incorrect clues, this sound will play. If you make too many incorrect moves, the game ends.', 'sound': 'res/sounds/slap.mp3' }
	, { 'bg': 'res/blackBg.png', 'text': 'That\'s all.', 'sound': '' 
 }
	] ,
	"explain1" : [
	 { 'bg': 'res/caveBg.png', 'text': 'The cave looked normal outside, but inside was a rich chapel. I was underground, but sunlight shot through the stained glass.', 'sound': '' }
	, { 'bg': 'res/caveBg.png', 'text': 'The altar was up near the front. The most magnificent one I ever saw. Gold candle holders encrusted with jewels flanked it.', 'sound': '' }
	, { 'bg': 'res/caveBg.png', 'text': 'And then, in front of me: a man? A shadow? I dont know. But it must have been the wizard.', 'sound': '' }
	, { 'bg': 'res/caveBg.png', 'text': 'He never spoke a word, just stared at me, and images filled my head. Telepathy, I suppose.', 'sound': '' }
	, { 'bg': 'res/caveBg.png', 'text': 'I saw myself wearing royal robes, or sitting amidst mounds of gold. He was trying to make a deal. ', 'sound': '' }
	, { 'bg': 'res/caveBg.png', 'text': 'All I had to do was free him, he was trying to explain, and all these things could me mine.', 'sound': '' }
	, { 'bg': 'res/caveBg.png', 'text': 'But there\'s only one way to free a wizard from his sanctuary - you have to let him possess you, body and soul.', 'sound': '' }
	, { 'bg': 'res/caveBg.png', 'text': 'I shook my head, started to back out. Then he raised his arm and there was a flash of light….', 'sound': '' }
	]
}; 

//the responses NPCs give to different topics
//from spreadsheet
var npcResponses = {
	"jera" : {
		'cave': { 'response': 'I\'ve heard a lot about the wizard\'s cave. It must have housed some foul magic.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'wizards': { 'response': 'Before a human can be possessed by a wizard, they have to make a blood sacrifice first.', 'reveal': 'blood', 'clueReveal': '2' , 'activate':''},
		'Sawa': { 'response': 'He\'s been keeping out of trouble since Donte made him the local ranger.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Horde wars': { 'response': 'I served as a healer with the Grandmarchy during the final year. But I never saw any fighting.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'goblins': { 'response': 'This week, I had to treat several travelers who were wounded by goblins. This isn\'t good.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'blood': { 'response': 'Once the wizard possesses someone, he can control monsters. Like goblins, unfortunately.', 'reveal': '', 'clueReveal': '3' , 'activate':''},
		'vampyre': { 'response': 'The most powerful of undead creatures…only a special ritual using herbs can keep them at bay.', 'reveal': '', 'clueReveal': '' , 'activate':''}
			},
	
	"reeve" : {
		'cave': { 'response': 'There was no wizard there, only monsters.', 'reveal': 'wizards', 'clueReveal': '' , 'activate':''},
		'wizards': { 'response': 'After they die, wizards are immobile, unless they possess someone or something.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Sawa': { 'response': 'I appointed him as ranger. He enjoys his solitude - I don\'t see him much anymore.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Horde wars': { 'response': 'They ended 20 years ago, and Talem\'s Glade could have been wiped out.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'goblins': { 'response': 'Since the wars ended, they fled to the caves and we rarely saw them. Until last week.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'blood': { 'response': 'I\'m no magician; I have no idea how magic works.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'vampyre': { 'response': 'So the wizard possessed a vampyre! Good work, Clavo! I\'ll notify the Grandmarchy at once.', 'reveal': '', 'clueReveal': '' , 'activate':'caveAvailable'}
			},
	
	"weston" : {
		'cave': { 'response': 'Keep away from that place, kids! No good will come of it.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'wizards': { 'response': 'I fought in the Horde wars, and we never came up against a being that powerful.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Sawa': { 'response': 'Ever since he took up his ranger post, he stopped drinking. Good for him, even if it\'s bad for business.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Horde wars': { 'response': 'I\'m one of the few veterans left. I\'m afraid most of your parents didn\'t survive…', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'goblins': { 'response': 'I heard our new ranger Sawa saw a few. He easily dispatched them, though.', 'reveal': 'Sawa', 'clueReveal': '' , 'activate':''},
		'blood': { 'response': 'Damned wizards and their magic. Even their spells are bloody.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'vampyre': { 'response': 'Some of the horde chiefs were probably vampyres. Ran away when their minions got massacred.', 'reveal': '', 'clueReveal': '' , 'activate':''}
			},
	
	"widow" : {
		'cave': { 'response': 'Stay away from that horrible place! You nearly died the last time you went there!', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'wizards': { 'response': 'This is terrible! If a wizard controls enough monsters, this could be the Horde wars all over again!', 'reveal': 'Horde wars', 'clueReveal': '' , 'activate':''},
		'Sawa': { 'response': 'He\'s not a nice young man. Never says hello when I see him in town. Which isn\'t often.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Horde wars': { 'response': 'It seems like yesterday. The goblin hordes killed your great-uncle, Lemel. And your parents, Clavo.', 'reveal': 'goblins', 'clueReveal': '' , 'activate':''},
		'goblins': { 'response': 'Beastly little green men! Talem\'s Glade lost a third of its people to them during the war.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'blood': { 'response': 'Sounds awful. These wizards aren\'t nice men, are they?', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'vampyre': { 'response': 'I never say one, and I can\'t say I care to.', 'reveal': '', 'clueReveal': '' , 'activate':''}
		},
			
	"burton" : {
		'cave': { 'response': 'I wonder if any treasure was left behind - Mizak mentioned there might be…', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'goblins': { 'response': 'They\'re attacking a lot of caravans, but not stealing anything. What are they up to?', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'wizards': { 'response': 'This guy is bad for business - all the merchants are avoiding the Glade now.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Sawa': { 'response': 'The last I heard, he was staying in the northwest forest. Good base for a ranger.', 'reveal': '', 'clueReveal': '' , 'activate':'sawaAvailable'},
		'Horde wars': { 'response': 'I came here 10 years after the war ended. But the scars will never leave.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'blood': { 'response': 'Sounds like a magic ritual. Did you talk to Jera about that?', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'vampyre': { 'response': 'Just great - more monsters to scare away our customers…', 'reveal': '', 'clueReveal': '' , 'activate':''}
	},
	"bryce": {
		'cave': { 'response': 'I wish they would just blast that place shut before anything else bad comes out of there.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'wizards': { 'response': 'I\'ve heard lots of stories about those bastards. They have to posess the living to get their power back.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Sawa': { 'response': 'He bought some arrows from me once. But he made his own bow.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Horde wars': { 'response': 'I was barely 12 when the war started, but I joined the militia. After I was wounded, I turned to weaponmaking.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'goblins': { 'response': 'I heard wizards can posess whole groups of weak monsters, like goblins.', 'reveal': '', 'clueReveal': '4' , 'activate':''},
		'blood': { 'response': 'Who in their right mind would want to be possessed?', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'vampyre': { 'response': 'Sounds nasty. And I don\'t have much silver to use in the weapons.', 'reveal': '', 'clueReveal': '' , 'activate':''}
			},
	"sawa": {
		'cave': { 'response': 'The Grandmarchy bowman fled east from the cave, towards the ocean.', 'reveal': '', 'clueReveal': '' , 'activate':'bowmanAvailable'},
		'wizards': { 'response': 'It\'s hard to fight an enemy who could be lurking in a different body.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Sawa': { 'response': 'Yes?', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Horde wars': { 'response': 'I think that Grandmarchy footman was a veteran. He fled towards the sourthwest plains.', 'reveal': '', 'clueReveal': '' , 'activate':'soldierAvailable'},
		'goblins': { 'response': 'If the wizard somehow possessed a bunch of gobilns,  his ghost would be stuck in his cave.', 'reveal': '', 'clueReveal': '5' , 'activate':''},
		'blood': { 'response': 'The only single monster strong enough to survive a spiritual possession is a vampyre.', 'reveal': '', 'clueReveal': '6' , 'activate':''},
		'vampyre': { 'response': 'I have some silver-tipped arrows just for them. Bring it on!', 'reveal': '', 'clueReveal': '' , 'activate':''}
	},
	"soldier": {
		'cave': { 'response': 'Those stained glass windows were creepy! An underground sun!', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'wizards': { 'response': 'If that\'s what we\'re up against, the League better send more soldiers.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Sawa': { 'response': 'Yeah, I saw that ranger. I didn\'t need him. A bow\'s no match for a blade.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Horde wars': { 'response': 'Another war, eh? Looks like I choose the right time to enlist.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'goblins': { 'response': 'Individually they\'re weak, but when they band together, they can sure put up a fight.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'blood': { 'response': 'That couldn\'t have happened - there wasn\'t a drop of blood in the entire cave.', 'reveal': '', 'clueReveal': '7' , 'activate':''},
		'vampyre': { 'response': 'If I ever saw one, I\'d run away.', 'reveal': '', 'clueReveal': '' , 'activate':''}
	},
	"bowman": {
		'cave': { 'response': 'The goblins were guarding that place, but there was nothing inside! I don\'t get it.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'wizards': { 'response': 'A ghost? No, I didn\'t see the wizard\'s ghost in the cave.', 'reveal': '', 'clueReveal': '8' , 'activate':''},
		'Sawa': { 'response': 'Short guy with a bow? I saw him. He shot at a few goblins but missed.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Horde wars': { 'response': 'I didn\'t enlist to fight in a war! Maybe I should go for veteran\'s disability before another starts…', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'goblins': { 'response': 'Weak little buggers. They wouldn\'t dare attack unless someone was leading them.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'blood': { 'response': 'I wasn\'t looking for blood. Maybe someone else did.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'vampyre': { 'response': 'A bloodsucker? I\'m a solder, not a priest-man. Let them handle it.', 'reveal': '', 'clueReveal': '' , 'activate':''}
	}
		
};

//the dialogue and art (and, if necessary, sound) for scene frames
//from spreadsheet
var sceneDialog = { 
	"scene0" : [ 
		{ 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'And what happened then?', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'I don\'t know. The spell must have hit me. The next thing I knew, you were pulling me out of my own grave.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'And the Reeve just headed to that cave this morning to investigate. Sounds way too dangerous.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Some troops from the Grandmarchy went with him.', 'sound': '' }
		, { 'pic': 'res/faces/mizakTalk.png', 'speaker': 'Mizak', 'text': 'Yeah - two whole soldiers. What the hell is the Grandmarchy thinking?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'This village is just the boondocks to them. The Reeve said we\'re lucky they even responded.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'Well I think they need to get their act together and-', 'sound': '' }
		, { 'pic': 'res/faces/westonYell.png', 'speaker': 'Weston', 'text': 'Lissette! Customers!', 'sound': '' }
		, { 'pic': 'res/faces/lissetteNormal.png', 'speaker': 'Lissette', 'text': 'I have to go. Want anything when I come back?', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'Another mug of ale sounds good.', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Just some ginger beer.', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'A glass of that cherry wine.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'No, you\'ll have water. Your tab\'s up to fifteen thalers, and I\'m not baling you out again.', 'sound': '' }
		, { 'pic': 'res/faces/mizakTalk.png', 'speaker': 'Mizak', 'text': 'C\'mon, I need something to help me sleep. Just be a good girl and bring the wine, okay?', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'Don\'t talk to me like that! How about if I chuck a tankard at your head? That\'ll put you to sleep right away!', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': '…water\'s fine.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'You’re the new town clerk, Clavo. Didn\'t you try to talk any sense into Donte?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Yeah, but he\'s still not listening. He blames me for getting us into this mess in the first place.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the door to the inn bursts open, and the Reeve staggers in)', 'sound': '' }
		, { 'pic': 'res/faces/reeveFrown.png', 'speaker': 'Reeve Donte', 'text': '…pant…pant….Goblins!', 'sound': '' }
		, { 'pic': 'res/faces/westonYell.png', 'speaker': 'Weston', 'text': 'What the hell?!?', 'sound': '' }
		, { 'pic': 'res/faces/reeveFrown.png', 'speaker': 'Reeve Donte', 'text': '…followed me back…damn it…', 'sound': '' }
		, { 'pic': 'res/faces/clavoAngry.png', 'speaker': 'Clavo', 'text': 'We can handle this, Donte.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'It takes more than goblins to scare the Glade.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/mizakAngry.png', 'speaker': 'Mizak', 'text': 'Here they come!', 'sound': '' }

	], 
	"scene1" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the handful of goblins lie unconscious on the floor)', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Good work, kids.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Clavo, are you alright? You looked like you were having trouble there.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'I\'m okay.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Are you sure? Let\'s run over to Brother Jera to make sure you\'re not hurt anywhere.', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'How touching...the big guy\'s overprotective love for his surrogate younger brother….', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': '(hissing) Mizak!', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Seriously, Lemel, I\'m fine.', 'sound': '' }
		, { 'pic': 'res/faces/westonYell.png', 'speaker': 'Weston', 'text': 'What\'s this all about? We haven\'t seen any goblins here since the Horde Wars!', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'I know. Lemel! Get back to the smithy right now. Tell Bryce I\'ll be over in a few minutes to talk to him. We\'ll need more weapons.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '….yes, sir.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Mizak! Get back to the shop and tell Burton to stock up on essentials as quick as possible. Because-', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': 'Because the traders might start having trouble getting through. I know. I\'m on it.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Weston, Lissette, tie these creatures up. Be careful with them.', 'sound': '' }
		, { 'pic': 'res/faces/westonYell.png', 'speaker': 'Weston', 'text': 'I know how to handle goblins, Donte. I was fighting them before you drank your first beer.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': '…right. And ask any travelers if they\'ve seen more goblins. Or any Grandmarchy soldiers.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'The soldiers….they\'re okay?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'I hope. Clavo, come with me.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Clavo follows the Reeve out of the Pathway Inn onto the street)', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'I need you to write two dispatches, one for the Grandmarchy and one for the League. Let them know we\'ve been attacked. And that we need more help.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'What happened in the cave? What happened to the soldiers who went with you?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'We found the cave where you said it was. We went inside to look around.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'The wizard?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Gone. We saw that much.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Then the goblins came. There were too many. We agreed to split up so the goblins would have to split up too.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'You took care of the ones who followed me. As for the other two….hopefully they\'re safe.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': '…Is there anything else I can do to help?', 'sound': '' }
		, { 'pic': 'res/faces/reeveSmile.png', 'speaker': 'Reeve Donte', 'text': 'Actually, here\'s a chance to use that university training of yours for something other than figuring taxes and tariffs.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'We need to know exactly what we\'re up against. The wizard is on the loose.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'And you know he couldn\'t do that by himself. Not unless someone…freed him…', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'And the only way to do that is for someone to let him posess them. Yes.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'We don\'t know where - or who - the wizard is. You need to find out.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Was it some human explorer? A random monster? The wizard is wearing someone else\'s flesh now.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Find out who. Then we\'ll know what we\'re up against, and the League will at least know who they\'re fighting.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'I bet Sawa knows something, since I appointed him ranger. But he hasn\'t been in town for awhile.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'It\'s not going to be easy leaving town - monsters are popping up all over the place.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Don\'t leave town until those three friends of yours go with. You should be able to fight off anything then.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Right.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'And when you figured it out, come and tell me.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Sure.', 'sound': '' }

	],
	"scene2" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lemel rummages through some scrap iron near the smithy)', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Hey Lemel.', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'Hey. Find out anything else about the wizard\'s cave.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'He escaped. And possessed somebody - or something. We don\'t know.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Per Donte\'s orders, I need to figure it out. And…', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'And?', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': '…I need help, okay? There\'s monsters all over the place, and I need help getting around.', 'sound': '' }
		, { 'pic': 'res/faces/lemelTalk.png', 'speaker': 'Lemel', 'text': 'No sweat! I\'m always here for you. HEY BOSS!', 'sound': '' }
		, { 'pic': 'res/faces/bryceNormal.png', 'speaker': 'Bryce', 'text': 'Ya?', 'sound': '' }
		, { 'pic': 'res/faces/lemelTalk.png', 'speaker': 'Lemel', 'text': 'Clavo needs some help; I\'m going to go with him.', 'sound': '' }
		, { 'pic': 'res/faces/bryceNormal.png', 'speaker': 'Bryce', 'text': 'You know - Donte also needs all the weapons he can get. And you\'re my only apprentice.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'And Donte wouldn\'t have put Clavo on this mission if it wasn\'t important.', 'sound': '' }
		, { 'pic': 'res/faces/bryceSmile.png', 'speaker': 'Bryce', 'text': '…fine. It\'s not like you to let your little friend go off by himself. Just finish up and return to the anvil as soon as you can.', 'sound': '' }
		, { 'pic': 'res/faces/lemelTalk.png', 'speaker': 'Lemel', 'text': 'Sure thing! Okay, Clavo, let\'s go.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lemel joins the party)', 'sound': '' }

	],
	"scene3" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Mizak hastily scribbles an inventory of the goods piled up next to the store)', 'sound': '' }
		, { 'pic': 'res/faces/mizakStruggle.png', 'speaker': 'Mizak', 'text': 'Not enough. Not enough by far.', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Mizak, what are you up to?', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': 'Trying to keep the store open. After word of the goblin attack got out, all the merchants cancelled their visits.', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': 'So, we\'re cut off from the rest of the League. If this keeps up, Talem\'s Glade will become a ghost town.', 'sound': '' }
		, { 'pic': 'res/faces/mizakAngry.png', 'speaker': 'Mizak', 'text': 'Damnit, why didn\'t the Grandmarchy send us more troops?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'I don\'t know, but we\'re on our own for now. And I\'m not waiting for more troops to help out.', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Oh? What are you up to? Did the Reeve assign something to you?', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Yeah - I\'m trying to find out who released the wizard from the cave. I\'ve gotten some clues, but I need to leave town to find out more.', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'And monsters are roaming all over the countryside. The more people travelling together, the better.', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Hmm…you said there was gold in that cave? And jewels?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Well, yeah….', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Donte didn\'t say anything about taking that, did he?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Not to my knowledge, but some monsters or a thief could have gotten to them.', 'sound': '' }
		, { 'pic': 'res/faces/mizakLaugh.png', 'speaker': 'Mizak', 'text': 'Nothing ventured, nothing gained, old friend. I\'m game.', 'sound': '' }
		, { 'pic': 'res/faces/burtonFrown.png', 'speaker': 'Burton', 'text': 'No you\'re not. We\'re missing an entire chest of tea leaves. Where did you put it?', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': 'Well, I sorta…misplaced….', 'sound': '' }
		, { 'pic': 'res/faces/burtonFrown.png', 'speaker': 'Burton', 'text': 'That stuff\'s expensive. You\'re not leaving here until the inventory\'s complete. It may be a long time before we can buy more.', 'sound': '' }
		, { 'pic': 'res/faces/mizakLaugh.png', 'speaker': 'Mizak', 'text': '…Clavo…buddy…pal…', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'They say one hand washes the other, huh? Can you find that chest? I left it behind one of the warehouses.', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'The ones directly north of city hall, with the yellow bricks. If you can find those, I\'m in!', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': '…Okay.', 'sound': '' }

	],
	"scene4" : [ 
		{ 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Find that chest yet?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Not…quite.', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Remember - behind one of the northern warehouses, the ones with yellow brick.', 'sound': '' }

	],
	"scene5" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Clavo finds a small chest of tea behind the warehouse)', 'sound': '' }
	, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'I better bring this back to Mizak.', 'sound': '' }

	],
	"scene6" : [ 
		 { 'pic': 'res/faces/mizakLaugh.png', 'speaker': 'Mizak', 'text': 'Well done, Clavo! Just what I needed.', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'You upheld your side of the bargain, so let\'s be off.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Mizak joins the party)', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Okay, let\'s see if that old wizard was nice enough to leave behind some of that gold.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'First we need to find out exactly who released the wizard. This isn\'t a treasure hunt.', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Of course…of course…first things first…', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': '…', 'sound': '' }

	],
	"scene7" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lissette crouches by the side of the Pathway Inn\'s stable).', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Hey Lissette-', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'Shhhh!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lissette points to three men on the other side of the stable yard)', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': '(whispering) Those strangers - they stayed here last night, drank almost a gallon of ale each…', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': '…and I think they\'re trying to run away without paying!', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Oh…er…okay, what should we do?', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'I\'ve got this main entrance covered.  There\'s four barrels behind the inn.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'Hide behind the one closest to the stable yard. Then wait for my signal and charge those thieves.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Isn\'t that dangerous? Maybe we should just contact the Reeve.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'Ha! By then they\'d be long gone. We can handle this.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': '(Sometimes I wonder who\'s worse - Lissette or Mizak…)', 'sound': '' }

	],
	"scene8" : [ 
		{ 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'Behind the inn, stand behind the barrel closest to the stable yard.', 'sound': '' }

	],
	"scene9" : [ 
	 { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Clavo stoops behind the old barrel)', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'What\'s taking her so long?', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(suddenly, a commotion rises from the stable yard)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Clavo peeks up and sees three men fleeing towards him)', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Crap.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(before he can move, one of the thieves runs into the barrel, leaving both of them sprawled on the ground)', 'sound': '' }
		, { 'pic': 'res/faces/clavoStruggle.png', 'speaker': 'Clavo', 'text': 'Ah…ouch…', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'Nice block! Now to finish this!', 'sound': '' }

	],
	"scene10" : [ 
		{ 'pic': 'res/faces/lissetteNormal.png', 'speaker': 'Lissette', 'text': 'This inn\'s seen more fighting in the last day than we usually see in a month.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lissette grabs the coin purse from one of the unconscious thieves)', 'sound': '' }
		, { 'pic': 'res/faces/lissetteNormal.png', 'speaker': 'Lissette', 'text': 'And, that should cover his bill.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteNormal.png', 'speaker': 'Lissette', 'text': 'By the way, what did you want to ask me? Before the fight and everything.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'I need to find out who freed the wizard. But I\'m going to leave town to find out more.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteNormal.png', 'speaker': 'Lissette', 'text': 'I see. Well, I\'m sure me and my twin rapiers will come in handy if we run into monsters, right?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Right…', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lissette joins the party)', 'sound': '' }

	],
	"scene11" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lemel glances around the clearing in the middle of the forest)', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'The last time I saw Sawa, he was camping right here. Where did he go?', 'sound': '' }
		, { 'pic': 'res/faces/mizakTalk.png', 'speaker': 'Mizak', 'text': 'You sure he\'s still here?  He used to always come into town to buy things, but I haven\'t seen him since the last incident. ', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'What does he have against Talem\'s Glade anyways?', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'Too many people.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(all four apprentices jump as Sawa appears right behind them)', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': '..pant…pant…What was that for?', 'sound': '' }
		, { 'pic': 'res/faces/sawaSmile.png', 'speaker': 'Sawa', 'text': 'Hey - I\'m a ranger now. I need to practice my skills when I can.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'So what brings you kids here?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'The wizard in the cave - the one we uncovered. He\'s been set free, and we need to know who did it.', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'I thought that might be it. Ask away.', 'sound': '' }

	],
	"scene12" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the four reach the ocean\'s beach and walk onto the sand)', 'sound': '' }
		, { 'pic': 'res/faces/lemelTalk.png', 'speaker': 'Lemel', 'text': 'Man, I can\'t remember the last time we came out here. We should take a swim!', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'Well, you might want to keep your pants on until we\'re done dealing with that guy.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lissette points to  a man sitting on the sand. A longbow lays across his shoulders)', 'sound': '' }
		, { 'pic': 'res/faces/aderNormal.png', 'speaker': 'Longbowman', 'text': 'Hey! You guys from Talem\'s Glade?', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Yes - sent by Reeve Donte. What are you doing here?', 'sound': '' }
		, { 'pic': 'res/faces/aderNormal.png', 'speaker': 'Longbowman', 'text': 'So Donte\'s okay? That\'s great to hear. As for me:', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the bowman shifts his weight, showing off a broken ankle)', 'sound': '' }
		, { 'pic': 'res/faces/aderFrown.png', 'speaker': 'Longbowman', 'text': 'I completely outran those damn goblins, only to slip and cripple myself after I was safe.', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': 'Ouch! That doesn\'t look comfortable. We\'ll need Brother Jera to heal that for you.', 'sound': '' }
		, { 'pic': 'res/faces/aderNormal.png', 'speaker': 'Longbowman', 'text': 'So what\'s up? I don\'t know what happened since I was at the cave.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Clavo fills in the bowman on everything up to now)', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'So, we just have some questions for you, if you\'re up to it.', 'sound': '' }
		, { 'pic': 'res/faces/aderNormal.png', 'speaker': 'Longbowman', 'text': 'As long as you don\'t need me to stand up, I\'m up to anything.', 'sound': '' }

	],
	"scene13" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(in the distance of the plains, several monsters surround a burly man holding a claymore)', 'sound': '' }
		, { 'pic': 'res/faces/foremanFrown.png', 'speaker': 'Swordsman', 'text': 'C\'mon, you scared? Come get some!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the soldier swings his sword, and the goblins back out of reach)', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Damn - are those the same goblins that chased you out of the cave?', 'sound': '' }
		, { 'pic': 'res/faces/foremanFrown.png', 'speaker': 'Swordsman', 'text': 'You know it.', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': 'Probably waiting for you to fall asleep.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'It\'s time to end this stalemate.', 'sound': '' }

	],
	"scene14" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(with a grim smile, the soldier plants his sword in the ground and sits down)', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Swordsman', 'text': 'Man, I\'m tired. I\'ve spent all day holding them off. I could sleep for a week!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the soldier seems to notice the group for the first time)', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Swordsman', 'text': 'And where\'d you come from?', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'From Talem\'s Glade - Donte Kenhos sent us.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Swordsman', 'text': 'So your Reeve survived - good. Good. Listen, it\'s been a whole day and-', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lemel pulls out his canteen and gives it to the tired soldier)', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'Drink slow so you don\'t get sick.', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Swordsman', 'text': 'Thanks. Good stuff.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'I know you\'re tired, but we\'re on a mission to find out as much as possible about the wizard. Are you up to a few questions?', 'sound': '' }
		, { 'pic': 'res/faces/foremanNormal.png', 'speaker': 'Swordsman', 'text': 'I\'m game.', 'sound': '' }
	],
	"scene15" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(after talking with Reeve Donte, Clavo goes outside to find Lemel)', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'So what\'s going to happen?', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Now that we know who the wizard possessed, the League will have something to go on.', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'In a few days, we should get some more troops for protection.', 'sound': '' }
		, { 'pic': 'res/faces/lemelTalk.png', 'speaker': 'Lemel', 'text': 'That\'s a relief.', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'Tell me about it. This adventuring is hard work. I almost can\'t wait to get back to my ledgers.', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'Let\'s tell Lissette. We should at least get a drink out of the town for doing all their dirty work.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(inside the Pathway Inn, the tavern is empty of customers)', 'sound': '' }
		, { 'pic': 'res/faces/lissetteTalk.png', 'speaker': 'Lissette', 'text': 'Hey what\'s up, guys?', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'I told Donte everything, and we should get some help within a few days.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteNormal.png', 'speaker': 'Lissette', 'text': 'Great! That calls for a drink or two on the house.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Hey - where\'s Mizak?', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'We should get him. He\'d never forgive us if he missed a chance to get something for free.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(at the item store, Burton stands sweeping the front walk)', 'sound': '' }
		, { 'pic': 'res/faces/burtonNormal.png', 'speaker': 'Burton', 'text': 'Hey, kids. What\'s up?', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Have you seen Mizak around?', 'sound': '' }
		, { 'pic': 'res/faces/burtonNormal.png', 'speaker': 'Burton', 'text': 'Oh, yeah - he just left a few minutes ago. He left a note for you.', 'sound': '' }
		, { 'pic': 'res/faces/burtonLaugh.png', 'speaker': 'Burton', 'text': 'He said he had an idea to make some money, and that you guys might want in.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Why doesn\'t that surprise me?', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Burton tosses the note to Lissette before heading back inside)', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'Just great. The last time I listened to one of his moneymaking ideas, I lost a month\'s worth of tips.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Lemel', 'text': 'So what does it say?', 'sound': '' }
		, { 'pic': 'res/faces/lissetteNormal.png', 'speaker': 'Lissette', 'text': '(reading) Hey all, I was asking the lost soldiers a few discreet questions while you were busy.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': '(reading) They all agreed on one thing - there was some type of treasure in the wizard\'s cave, probably made of silver.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': '(reading) Since the Grandmarchy will no doubt take everything when they secure the cave, I\'m heading them off tonight.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': '(reading) If you want in, meet me at the cave\'s entrance. Clavo - thanks for the map - it\'s coming in really helpful!', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'Hey! The map I drew is gone!', 'sound': '' }
		, { 'pic': 'res/faces/lemelOut.png', 'speaker': 'Lemel', 'text': 'I can\'t believe this!', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'I can! That idiot\'s going to get himself killed trying to get rich!', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'If he avoids the monsters, he should be safe…', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Yeah, right. Mizak\'s clothes were tailored to announce his presence.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'That goddamned moron…only thinking of himself….', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'What are we going to do?', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'Go after him, of course! What else can we do? Either monsters will kill him, or the Grandmarchy will arrest him.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'I hate to admit it, but you\'re right.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Clavo, do you remember how to find the cave without the map?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'If we walk along the edge of the north mountains, I\'ll be able to recognize it.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Let\'s find him before the goblins do.', 'sound': '' }
			],
	"scene16" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(as dusk approaches, the trio finds Mizak standing in the opening of the cave)', 'sound': '' }
		, { 'pic': 'res/faces/mizakLaugh.png', 'speaker': 'Mizak', 'text': 'My friends, thanks for coming! I see you got my letter.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'Mizak, get back here before I pound the shit out of you. We\'re heading back to town right now.', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'C\'mon, you\'re not turning back now, are you? A few minutes inside, maybe a goblin or two, and we\'ll grab the treasure!', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Lissette\'s, right, Mizak, we\'re leaving now and you\'re coming with. For all we know, the wizard returned.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'When I went in there, I barely escaped with my life. The same for the Reeve and the soldiers.', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'But they came out alive - that\'s the point. Can\'t you imagine how this might change your lives?', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Lissette - enough money to set up your own inn! I know that\'s your dream.', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Lemel - imagine completing your apprenticeship with enough to buy your own forge!', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Clavo - you can dump that lowly government clerkship and live like a true scholar!', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': 'You guys can go back. I\'m going in. I\'ll finally have the break I need to start my own trading firm!', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'No you\'re not. We\'re going back. Now.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lissette runs forward and tackles Mizak, and they both fall backwards into the cave)', 'sound': '' }
		, { 'pic': 'res/faces/mizakStruggle.png', 'speaker': 'Mizak', 'text': 'Hey!', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'I\'m right beside you!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lemel straddles Mizak and pins him to the ground)', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'Now, are you coming home with us, or do we have to carry you?', 'sound': '' }
		, { 'pic': 'res/faces/mizakStruggle.png', 'speaker': 'Mizak', 'text': 'Damnit, this is our future you\'re throwing away!', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Mizak, I really don\'t think there\'d be any treasure in here. I-', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(a strong force pushes Clavo forward into the cave)', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'Hey, what the-', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(at the mouth of the cave, a wall of stone crashes down)', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'Oh no! We\'re trapped!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lemel runs to the stone door and pushes at it until his muscles bulge out)', 'sound': '' }
		, { 'pic': 'res/faces/lemelStruggle.png', 'speaker': 'Lemel', 'text': 'Urghh….no use….', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(from somewhere in the darkness a strange voice rises)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '???', 'text': 'Welcome to my humble cave, kids.', 'sound': '' }
		, { 'pic': 'res/faces/clavoAngry.png', 'speaker': 'Clavo', 'text': 'You! The wizard!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '???', 'text': 'Ah, my little scholar. The one who threw away his chance at glory.', 'sound': '' }
		, { 'pic': 'res/faces/clavoAngry.png', 'speaker': 'Clavo', 'text': 'You tried to kill me!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '???', 'text': 'Only when you refused your destiny. I\'ve spent a thousand years trapped in this cave; now it\'s your turn!', 'sound': '' }
		, { 'pic': 'res/faces/clavoAngry.png', 'speaker': 'Clavo', 'text': '…grrrrr….', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '???', 'text': 'Please make yourselves at home. Now that the sun is going down, I think I\'ll visit your charming hometown in my new body. Gis!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lissette pulls out a small lantern and looks around)', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'Damnit, we\'re trapped! Thanks a lot, Mizak!', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': 'I\'m sorry, okay? I was trying to benefit us all!', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Clavo, you\'ve been here before. Is there any other way out of this cave? We have to warn the Glade!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(at the mouth of the cave, a wall of stone crashes down)', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'Oh no! We\'re trapped!', 'sound': '' }
		],
	
	"scene27" : [ 
		{ 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': '(I better not leave town unless I have four people in the party)', 'sound': '' }
	],
	
	"scene28" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the party has fallen in battle)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(GAME OVER.  You\'ve reached the third ending, which is also the worst ending)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Try going back and trying again. The people of Talem\'s Glade need you!)', 'sound': '' }
	
	],
	"scene29" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the reeve runs over to the party)', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': ' Have you found out anything about the wizard?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Afraid not. If we could have a few more days-', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'We don\'t have days. The goblins will be at the Glade by evening!', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'What are we waiting for then? Let\'s get back and fight!', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'How can we fight against something we know nothing about? The wizard must be controlling those goblins.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'First things first, Clavo. At least we know where the goblins are.', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': 'Yeah - about to besiege the Glade! And there\'s only a handful of us!', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'The Glade survived the Horde Wars, and we didn\'t have many people then either.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'If we can hold out until the Grandmarchy sends troops, we’ll be okay. Until then we need all the hands we can get.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the reeve and the party head back to their goblin-surrounded hometown)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(GAME OVER. This was neither the best nor worst ending. Try again.)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Don\'t forget - read over your clues carefully before trying to analyze them.)', 'sound': '' }

	]
	
};

/*when done testing set goblin CON = 9*/
var FIGHTER_DATA = [
  	  {'name' : 'Lemel' , 'title':'Blacksmith', 'isMonster' : false , 'faceIcon' : 'res/faces/lemelFight.png' , 'sprite' : 'res/lemelFightSprites.png' , 'attackIcon' : 'res/faces/lemelAttack.png' , 'DEX' : 16 , 'CON' : 15 , 'POW' : 5 , 'level' :  1}
  	 , {'name' : 'Clavo' , 'title':'Clerk' , 'isMonster' : false , 'faceIcon' : 'res/faces/clavoFight.png' , 'sprite' : 'res/clavoFightSprites.png' , 'attackIcon' : 'res/faces/clavoAttack.png' , 'DEX' : 9 , 'CON' : 6 , 'POW' : 17 , 'level' : 1}
	 , {'name' : 'Lissette' , 'title':'Bartender' , 'isMonster' : false , 'faceIcon' : 'res/faces/lissetteFight.png' , 'sprite' : 'res/lissetteFightSprites.png' , 'attackIcon' : 'res/faces/lissetteAttack.png' , 'DEX' : 15 , 'CON'  :  10 , 'POW' : 10 , 'level' :  1}
	 , {'name' : 'Mizak'  , 'title':'Shopkeep' , 'isMonster' : false , 'faceIcon' : 'res/faces/mizakFight.png' , 'sprite' : 'res/mizakFightSprites.png' , 'attackIcon' : 'res/faces/mizakAttack.png' , 'DEX' : 15 , 'CON' : 8 , 'POW' : 7 , 'level'  :  1}
	
	 , {'name' : 'Goblin' , 'isMonster' : true , 'faceIcon' : '' , 'sprite' : 'res/goblinSprites.png' , 'attackIcon' : '' , 'DEX' : 10 , 'CON' : 1 , 'POW' : 4 , 'level'  : 1}
	 , {'name' : 'Highwayman' , 'isMonster' : true , 'faceIcon' : '' , 'sprite' : 'res/highwaymanSprites.png' , 'attackIcon' : '' , 'DEX' : 12 , 'CON' : 12 , 'POW' : 7 , 'level'  : 2}
	 , {'name' : 'Barrow-Wight' , 'isMonster' : true , 'faceIcon' : '' , 'sprite' : 'res/wightSprites.png' , 'attackIcon' : '' , 'DEX' : 6 , 'CON' : 16 , 'POW' : 1 , 'level'  : 2}
	 , {'name' : 'Trow' , 'isMonster' : true , 'faceIcon' : '' , 'sprite' : 'res/trowSprites.png' , 'attackIcon' : '' , 'DEX' : 10 , 'CON' : 20 , 'POW' : 6 , 'level'  : 3}
	 , {'name' : 'Nicor' , 'isMonster' : true , 'faceIcon' : '' , 'sprite' : 'res/nicorSprites.png' , 'attackIcon' : '' , 'DEX' : 18 , 'CON' : 18 , 'POW' : 10 , 'level'  : 4}
	 , {'name' : 'Vampyre' , 'isMonster' : true , 'faceIcon' : '' , 'sprite' : 'res/vampyreSprites.png' , 'attackIcon' : '' , 'DEX' : 25 , 'CON' : 25 , 'POW' : 16 , 'level'  : 5}
];

var EQUIPMENT_DATA = [
  {'name': 'staff', 'type': 'weapon', 'sprite': '', 'attackMod': 1, 'defenseMod': 2}
	, {'name': 'hammer', 'type': 'weapon', 'sprite': '', 'attackMod': 2, 'defenseMod': 0}
	, {'name': 'rapier', 'type': 'weapon', 'sprite': '', 'attackMod': 2, 'defenseMod': 1}
	, {'name': 'martial arts', 'type': 'weapon', 'sprite': '', 'attackMod': 2, 'defenseMod': 2}
	
	, {'name': 'clothes', 'type': 'armor', 'sprite': '', 'attackMod': 0, 'defenseMod': 1}
	, {'name': 'cape', 'type': 'armor', 'sprite': '', 'attackMod': 0, 'defenseMod': 2}
	, {'name': 'leather armor', 'type': 'armor', 'sprite': '', 'attackMod': 0, 'defenseMod': 2}
	, {'name': 'chainmail', 'type': 'armor', 'sprite': '', 'attackMod': 0, 'defenseMod': 3}
	
	, {'name': 'club', 'type': 'weapon', 'sprite': '', 'attackMod': 1, 'defenseMod': 0}
	, {'name': 'crushing hands', 'type': 'weapon', 'sprite': '', 'attackMod': 4, 'defenseMod': 0}
	, {'name': 'fangs', 'type': 'weapon', 'sprite': '', 'attackMod': 3, 'defenseMod': 2}
	
	, {'name': 'scales', 'type': 'armor', 'sprite': '', 'attackMod': 0, 'defenseMod': 2}
	, {'name': 'tough skin', 'type': 'armor', 'sprite': '', 'attackMod': 0, 'defenseMod': 2}
	, {'name': 'magic cape', 'type': 'armor', 'sprite': '', 'attackMod': 1, 'defenseMod': 3}
	
	, {'name': 'none', 'type': 'armor', 'sprite': '', 'attackMod': 0, 'defenseMod': 0}
	, {'name': 'none', 'type': 'weapon', 'sprite': '', 'attackMod': 0, 'defenseMod': 0}
	
	
];

var FIGHTER_EQUIPMENT = [
	{'fighter': 'Lemel', 'weapon': 'hammer', 'armor': 'leather armor'}
	, {'fighter': 'Clavo', 'weapon': 'staff', 'armor': 'clothes'}
	, {'fighter': 'Lissette', 'weapon': 'rapier', 'armor': 'clothes'}
	, {'fighter': 'Mizak', 'weapon': 'martial arts', 'armor': 'cape'}

	, {'fighter': 'Goblin', 'weapon': 'club', 'armor': 'leather armor'}
	, {'fighter': 'Highwayman', 'weapon': 'rapier', 'armor': 'leather armor'}
	, {'fighter': 'Barrow-Wight', 'weapon': 'crushing hands', 'armor': 'none'}
	, {'fighter': 'Trow', 'weapon': 'crushing hands', 'armor': 'tough skin'}
	, {'fighter': 'Nicor', 'weapon': 'club', 'armor': 'scales'}
	, {'fighter': 'Vampyre', 'weapon': 'fangs', 'armor': 'magic cape'}
];

