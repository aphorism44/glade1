


logicInstructions1=
' When evaluating clues,<br> use these logic rules:';

logicInstructions2=
' MODUS PONENS<br>' +
' IF p THEN q<br>' +
' p<br>' +
' THEREFORE q';

logicInstructions3=
' MODUS TOLLENS<br>' +
' IF p THEN q<br>' +
' NOT q<br>' +
' THEREFORE NOT p';

logicInstructions4=
' ELIMINATION<br>' +
' p OR q<br>' +
' NOT p<br>' +
' THEREFORE q';

logicInstructions5=
' TRANSITIVITY<br>' +
' IF p THEN q<br>' +
' IF q THEN r<br>' +
' THEREFORE IF p THEN r';

logicInstructions6=
' CONJUNCTION<br>' +
' p<br>' +
' q<br>' +
' THEREFORE p AND q';




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
	, {'triggered':'0'}
	
	
];

var initialBattlesTriggered = [
	{'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
	, {'triggered':'0'}
];

//sets where you start when you load a game
//set this manually
var loadGameStartPoints = [
	{'loadId':'1', 'gameStage': 1, 'startMap':'2', 'startX':'19', 'startY':'22', 'startDir':'0' }
	, {'loadId':'2', 'gameStage': 2, 'startMap':'3', 'startX':'12', 'startY':'23', 'startDir':'1' }
	, {'loadId':'3', 'gameStage': 3, 'startMap':'1', 'startX':'16', 'startY':'2', 'startDir':'1' }
];


var stageMissions = [
	{'stage':1, 'mission' : 'Mission: Find the expedition survivors and discover who the wizard possessed.'}
	, {'stage':2, 'mission' : 'Mission: Escape the cave!'}
	, {'stage':3, 'mission' : 'Mission: Return to Talem\'s Glade and confront the wizard.'}
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
	, {'name': 'cavePuzzleSolved', 'status':'0'}
	, {'name': 'sawaInTown', 'status':'0'}
	, {'name': 'soldierInTown', 'status':'0'}
	, {'name': 'bowmanInTown', 'status':'0'}
	
];

//keeps track of when/which endings are triggered and triggered scene 
//0 - ENDING - too many mistakes
//1 - SCENE to stage 2
//2 - SCENE - escape the cave
var specialScenesTriggered = [
	{'status':'0', 'scene':'29'} 
	, {'status':'0', 'scene':'15'}
	, {'status':'0', 'scene':'22'}
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
	, {'scene':'0', 'action':'battle', 'enemyArray': ['Goblin','Goblin','Goblin'], 'battleId': 0 }
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
	, {'scene':'2', 'action':'restartMusic' }
	, {'scene':'3', 'action':'trigger' }
	, {'scene':'3', 'action':'toggleGameVariable', 'variable': 'helpingMizak' }
	, {'scene':'3', 'action':'popScene' }
	, {'scene':'3', 'action':'restartMusic' }
	, {'scene':'4', 'action':'popScene' }
	, {'scene':'4', 'action':'restartMusic' }
	, {'scene':'5', 'action':'trigger' }
	, {'scene':'5', 'action':'toggleGameVariable', 'variable': 'foundMizakItem' }
	, {'scene':'5', 'action':'toggleGameVariable', 'variable': 'helpingMizak' }
	, {'scene':'5', 'action':'popScene' }
	, {'scene':'5', 'action':'restartMusic' }
	, {'scene':'6', 'action':'trigger' }
	, {'scene':'6', 'action':'toggleGameVariable', 'variable': 'mizakOutside' }
	, {'scene':'6', 'action':'addCharacter', 'character': 'Mizak' }
	, {'scene':'6', 'action':'gotoMap', 'startMap': '2', 'startX': '17', 'startY': '8', 'startDir': '0' }
	, {'scene':'6', 'action':'restartMusic' }
	, {'scene':'7', 'action':'trigger' }
	, {'scene':'7', 'action':'toggleGameVariable', 'variable': 'helpingLissette' }
	, {'scene':'7', 'action':'popScene' }
	, {'scene':'7', 'action':'restartMusic' }
	, {'scene':'8', 'action':'popScene' }
	, {'scene':'9', 'action':'trigger' }
	, {'scene':'9', 'action':'addCharacter', 'character': 'Lissette' }
	, {'scene':'9', 'action':'battle', 'enemyArray': ['Highwayman', 'Highwayman', 'Highwayman'], 'battleId': 1 }
	, {'scene':'10', 'action':'trigger' }
	, {'scene':'10', 'action':'toggleGameVariable', 'variable': 'lissetteOutside' }
	, {'scene':'10', 'action':'gotoMap', 'startMap': '2', 'startX': '13', 'startY': '13', 'startDir': '' }
	, {'scene':'10', 'action':'restartMusic' }
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
	, {'scene':'15', 'action':'restartMusic' }
	, {'scene':'16', 'action':'trigger' }
	, {'scene':'16', 'action':'addCharacter', 'character': 'Mizak' }
	, {'scene':'16', 'action':'toggleGameVariable', 'variable': 'caveAvailable' }
	, {'scene':'16', 'action':'addClue', 'clueId': '15' }
	, {'scene':'16', 'action':'advanceStage' }
	, {'scene':'16', 'action':'stopMusic' }
	, {'scene':'16', 'action':'gotoMap', 'startMap': '3', 'startX': '12', 'startY': '23', 'startDir': '1' }
	, {'scene':'17', 'action':'trigger' }
	, {'scene':'17', 'action':'addClue', 'clueId': '16' }
	, {'scene':'17', 'action':'popScene' }
	, {'scene':'17', 'action':'restartMusic' }
	, {'scene':'18', 'action':'trigger' }
	, {'scene':'18', 'action':'addClue', 'clueId': '17' }
	, {'scene':'18', 'action':'popScene' }
	, {'scene':'18', 'action':'restartMusic' }
	, {'scene':'19', 'action':'trigger' }
	, {'scene':'19', 'action':'addClue', 'clueId': '18' }
	, {'scene':'19', 'action':'popScene' }
	, {'scene':'19', 'action':'restartMusic' }
	, {'scene':'20', 'action':'trigger' }
	, {'scene':'20', 'action':'addClue', 'clueId': '19' }
	, {'scene':'20', 'action':'popScene' }
	, {'scene':'20', 'action':'restartMusic' }
	, {'scene':'21', 'action':'trigger' }
	, {'scene':'21', 'action':'addClue', 'clueId': '20' }
	, {'scene':'21', 'action':'popScene' }
	, {'scene':'21', 'action':'restartMusic' }
	, {'scene':'22', 'action':'trigger' }
	, {'scene':'22', 'action':'toggleGameVariable', 'variable': 'soldierOutside' }
	, {'scene':'22', 'action':'toggleGameVariable', 'variable': 'sawaOutside' }
	, {'scene':'22', 'action':'toggleGameVariable', 'variable': 'bowmanOutside' }
	, {'scene':'22', 'action':'toggleGameVariable', 'variable': 'soldierInTown' }
	, {'scene':'22', 'action':'toggleGameVariable', 'variable': 'sawaInTown' }
	, {'scene':'22', 'action':'toggleGameVariable', 'variable': 'bowmanInTown' }
	, {'scene':'22', 'action':'advanceStage' }
	, {'scene':'22', 'action':'gotoMap', 'startMap': '1', 'startX': '16', 'startY': '1', 'startDir': '0' }
	, {'scene':'23', 'action':'trigger' }
	, {'scene':'23', 'action':'battle', 'enemyArray': ['Vampyre'], 'battleId': 3 }
	, {'scene':'24', 'action':'trigger' }
	, {'scene':'24', 'action':'popScene' }
	, {'scene':'24', 'action':'newScene', 'nextScene': '30' }
	
	, {'scene':'27', 'action':'gotoMap', 'startMap': '2', 'startX': '19', 'startY': '22', 'startDir': '0' }
	, {'scene':'28', 'action':'endGameBad' }
	, {'scene':'29', 'action':'endGameMistakes' }

	, {'scene':'30', 'action':'trigger' }
	, {'scene':'30', 'action':'endGameGood' }
];

var npcInfo = [
	{'npcName':'lemel', 'mapId':2, 'sprite':'res/lemelSprites.png', 'visible':'lemelOutside', 'xCord': 1, 'yCord':8 }
	, {'npcName':'mizak', 'mapId':2, 'sprite':'res/mizakSprites.png', 'visible':'mizakOutside', 'xCord': 18, 'yCord':8 }
	, {'npcName':'lissette', 'mapId':2, 'sprite':'res/lissetteSprites.png', 'visible':'lissetteOutside', 'xCord': 7, 'yCord':20 }
	, {'npcName':'sawa', 'mapId':1, 'sprite':'res/sawaSprites.png', 'visible':'sawaOutside', 'xCord': 17, 'yCord':8 }
	, {'npcName':'swordsman', 'mapId':1, 'sprite':'res/swordmanSprites.png', 'visible':'soldierOutside', 'xCord': 6, 'yCord':18 }
	, {'npcName':'bowman', 'mapId':1, 'sprite':'res/bowmanSprites.png', 'visible':'bowmanOutside', 'xCord': 23, 'yCord':5 }
	, {'npcName':'sawaEnd', 'mapId':2, 'sprite':'res/sawaSprites.png', 'visible':'sawaInTown', 'xCord': 20, 'yCord':6 }
	, {'npcName':'swordmanEnd', 'mapId':2, 'sprite':'res/swordmanSprites.png', 'visible':'soldierInTown', 'xCord': 19, 'yCord':7 }
	, {'npcName':'bowmanEnd', 'mapId':2, 'sprite':'res/bowmanSprites.png', 'visible':'bowmanInTown', 'xCord': 21, 'yCord':7 }
	
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
	, {'battle':'3', 'action':'trigger' }
	, {'battle':'3', 'action':'newScene', 'nextScene': '24' }
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
	, {'id': '4', 'gameStage': '1',  'available': '0', 'partner': '10', 'revealed': '11', 'wordRevealed': '', 'text': 'If the wizard possessed a monster, it was one strong one or a group of weak ones.'}
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
	, {'id': '21', 'gameStage': '2',  'available': '0', 'partner': '18', 'revealed': '22', 'wordRevealed': '', 'text': 'If the fountain stops and statue moved, the water won\'t flow and the farmer stops toiling.'}
	, {'id': '22', 'gameStage': '2',  'available': '0', 'partner': '17', 'revealed': '23', 'wordRevealed': '', 'text': 'If the fountain stops and statue moved, the petals will close'}
	, {'id': '23', 'gameStage': '2',  'available': '0', 'partner': '16', 'revealed': '24', 'wordRevealed': '', 'text': 'If the fountain stops and the statue moved, the moon rises.'}
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
	, {'mapChangeId' :'24' ,'changeType': 'gotoScene','mapId' : '3', 'x' : '10', 'y': '12 ', 'newScene':'17', 'requirement':''}
	, {'mapChangeId' :'25' ,'changeType': 'gotoScene','mapId' : '3', 'x' : '11', 'y': '1 ', 'newScene':'18', 'requirement':''}
	, {'mapChangeId' :'26' ,'changeType': 'gotoScene','mapId' : '3', 'x' : '9', 'y': '10 ', 'newScene':'19', 'requirement':''}
	, {'mapChangeId' :'27' ,'changeType': 'gotoScene','mapId' : '3', 'x' : '2', 'y': '19 ', 'newScene':'20', 'requirement':''}
	, {'mapChangeId' :'28' ,'changeType': 'gotoScene','mapId' : '3', 'x' : '4', 'y': '8 ', 'newScene':'21', 'requirement':''}
	, {'mapChangeId' :'29' ,'changeType': 'gotoScene','mapId' : '2', 'x' : '20', 'y': '6 ', 'newScene':'23', 'requirement':'sawaInTown'}
	, {'mapChangeId' :'30' ,'changeType': 'gotoScene','mapId' : '2', 'x' : '19', 'y': '7 ', 'newScene':'23', 'requirement':'soldierInTown'}
	, {'mapChangeId' :'31' ,'changeType': 'gotoScene','mapId' : '2', 'x' : '21', 'y': '7 ', 'newScene':'23', 'requirement':'bowmanInTown'}

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
	, '16' : { 'pic':'res/insideCaveBg.png', 'music': 'res/sounds/windBg.mp3'}
	, '17' : { 'pic':'res/insideCaveBg.png', 'music': ''}
	, '18' : { 'pic':'res/insideCaveBg.png', 'music': ''}
	, '19' : { 'pic':'res/insideCaveBg.png', 'music': ''}
	, '20' : { 'pic':'res/insideCaveBg.png', 'music': ''}
	, '21' : { 'pic':'res/insideCaveBg.png', 'music': ''}
	, '22' : { 'pic':'res/insideCaveBg.png', 'music': ''}
	, '23' : { 'pic':'res/graveyardBg.png', 'music': ''}
	, '24' : { 'pic':'res/graveyardBg.png', 'music': ''}

	, '27' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '28' : { 'pic':'res/prairieBg.png', 'music': ''}
	, '29' : { 'pic':'res/prairieBg.png', 'music': ''}
	
	, '30' : { 'pic':'res/tavernBg.png', 'music': ''}

}; 

//the text, bgs, and sounds for explain scene frames
//from spreadsheet
var explainData= {
	"explain0" : [ 
		{ 'bg': 'res/blackBg.png', 'text': 'The instructions for this game are very simple (click on or touch this text to continue...)', 'sound': '' }
		, { 'bg': 'res/instructScene.png', 'text': 'During a cut scene, click or tap anywhere on the screen to advance to the next frame.', 'sound': '' }
		, { 'bg': 'res/instructScene.png', 'text': 'You can press the Skip button to end the scene, but you may miss something important.', 'sound': '' }
		, { 'bg': 'res/instructTalk.png', 'text': 'In the talk screen, press the Change Topic button to pick different topic words, then press the Ask About button to choose it.', 'sound': '' }
		, { 'bg': 'res/instructTalk.png', 'text': 'Talk to as many people about as many topics as possible to advance in the game.', 'sound': '' }
		, { 'bg': 'res/instructTalk.png', 'text': 'If you hear this sound, it means you either discovered a new topic word, or a new clue.', 'sound': 'res/sounds/tone.mp3' }
		, { 'bg': 'res/instructTalk.png', 'text': 'More on the clues later….', 'sound': '' }
		, { 'bg': 'res/instructBattle.png', 'text': 'Battles are triggered at set points, or randomly while outside town. Moves are turn-based.', 'sound': '' }
		, { 'bg': 'res/instructBattle.png', 'text': 'Each round, you can choose whether to attack full out (ATT), defend full out (DEF)…', 'sound': '' }
		, { 'bg': 'res/instructBattle.png', 'text': '…balance between attack and defense (SPLIT), or run away (RUN).', 'sound': '' }
		, { 'bg': 'res/instructBattle.png', 'text': 'Not all battles include the RUN option….', 'sound': '' }
		, { 'bg': 'res/instructBattle.png', 'text': 'As long as one player is alive or successfully fled by the end, you will survive the fight, otherwise the game ends.', 'sound': '' }
		, { 'bg': 'res/instructBattle.png', 'text': 'Don\'t worry - all unconscious and wounded characters will be fully restored right afterwards!', 'sound': '' }
		, { 'bg': 'res/instructMap.png', 'text': 'On the map screen, tap on a spot to walk to it. The game will move you there automatically.', 'sound': '' }
		, { 'bg': 'res/instructMap.png', 'text': 'Be careful, as the game will move you by the shortest path, not the safest one…', 'sound': '' }
		, { 'bg': 'res/instructMap.png', 'text': 'If you click somewhere while already walking, you will stop.', 'sound': '' }
		, { 'bg': 'res/instructMap.png', 'text': 'Entering certain squares, such as open doors, NPCs, map edges, and secret locations, can lead to new scenes.', 'sound': '' }
		, { 'bg': 'res/instructMap.png', 'text': 'You can check your party stats by pressing the Status button.', 'sound': '' }
		, { 'bg': 'res/instructMap.png', 'text': 'To save your game, press the Save button. You can only have one saved game at a time, and only if your browser supports it.', 'sound': '' }
		, { 'bg': 'res/instructMap.png', 'text': 'Finally, at any time you\'re on the map screen, press the Clues button to open the clue screen.', 'sound': '' }
		, { 'bg': 'res/instructClue1.png', 'text': 'You advance through the game by solving puzzles. Clicking on a box will highlight the clue and its text.', 'sound': '' }
		, { 'bg': 'res/instructClue2.png', 'text': 'Now, when you press a second clue, both will be highlighted', 'sound': '' }
		, { 'bg': 'res/instructClue2.png', 'text': 'If you believe the clues combine logically, press the Evaluate button when both are active.', 'sound': '' }
		, { 'bg': 'res/instructClue2.png', 'text': 'If you evaluate two appropriate clues, a new clue will appear, along with this sound.', 'sound': 'res/sounds/tone.mp3' }
		, { 'bg': 'res/instructClue2.png', 'text': 'New clues will also appear as you talk to people and witness certain scenes, so check the clues often.', 'sound': '' }
		, { 'bg': 'res/instructClue2.png', 'text': 'If you evaluate incorrect clues, this sound will play. If you make 5 incorrect moves, the game ends.', 'sound': 'res/sounds/slap.mp3' }
		, { 'bg': 'res/instructClue2.png', 'text': 'You should be very careful and think logically before combining any clues.', 'sound': '' }
		, { 'bg': 'res/instructClue2.png', 'text': 'Clicking the Refresher button will pop up a reminder on how this game\'s logic works.', 'sound': '' }
		, { 'bg': 'res/blackBg.png', 'text': 'That\'s all.', 'sound': '' }

	] ,
	"explain1" : [
		{ 'bg': 'res/caveBg.png', 'text': 'The cave looked normal outside, and was a maze of rock and lava inside. At the center was the chapel.', 'sound': '' }
		, { 'bg': 'res/caveBg.png', 'text': 'It was one of the most magnificent ones I ever saw. Stained glass lit with a magical sun.', 'sound': '' }
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
		'vampyre': { 'response': 'The most powerful of undead creatures…only a special ritual can keep them at bay.', 'reveal': '', 'clueReveal': '' , 'activate':''}
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
		'vampyre': { 'response': 'I never saw one, and I can\'t say I care to.', 'reveal': '', 'clueReveal': '' , 'activate':''}
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
		'wizards': { 'response': 'I\'ve heard lots of stories about those bastards. They have to possess the living to get their power back.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Sawa': { 'response': 'He bought some arrows from me once. But he made his own bow.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'Horde wars': { 'response': 'I was barely 12 when the war started, but I joined the militia. After I was wounded, I turned to weaponmaking.', 'reveal': '', 'clueReveal': '' , 'activate':''},
		'goblins': { 'response': 'I heard wizards can possess whole groups of weak monsters, like goblins.', 'reveal': '', 'clueReveal': '4' , 'activate':''},
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
		, { 'pic': 'res/faces/westonYell.png', 'speaker': 'Weston', 'text': 'I know how to handle goblins, Donte. I was fighting them before you were born.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': '…right. And ask any travelers if they\'ve seen more goblins. Or any Grandmarchy soldiers.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'The soldiers….they\'re okay?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'I hope. Clavo, come with me.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Clavo follows the Reeve out of the Pathway Inn onto the street)', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'I need you to write two dispatches, one for the Grandmarchy and one for the League. Let them know we\'ve been attacked. And that we need more help.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'What happened in the cave? What happened to the soldiers who went with you?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'We found the cave where your map said it was. We went inside to look around.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'The wizard?', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Gone. We saw that much.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'Then the goblins came. There were too many. We agreed to split up so the goblins would have to split up too.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'You took care of the ones who followed me. As for the other two….hopefully they\'re safe.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': '…Is there anything else I can do to help?', 'sound': '' }
		, { 'pic': 'res/faces/reeveSmile.png', 'speaker': 'Reeve Donte', 'text': 'Actually, here\'s a chance to use that university training of yours for something other than figuring taxes and tariffs.', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'We need to know exactly what we\'re up against. The wizard is on the loose.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'And you know he couldn\'t do that by himself. Not unless someone…freed him…', 'sound': '' }
		, { 'pic': 'res/faces/reeveNormal.png', 'speaker': 'Reeve Donte', 'text': 'And the only way to do that is for someone to let him possess them. Yes.', 'sound': '' }
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
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Hmm…did you say there was treasure in that cave? Maybe in that rich-looking chapel?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'I don\'t know….', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Donte didn\'t say anything about taking anything, did he?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Not to my knowledge, but-', 'sound': '' }
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
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Okay, let\'s see if that old wizard was nice enough to leave behind some gold or something.', 'sound': '' }
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
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'I thought that might be it. I actually saw everyone run away afterwards. Ask away.', 'sound': '' }

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
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'So what does it say?', 'sound': '' }
		, { 'pic': 'res/faces/lissetteNormal.png', 'speaker': 'Lissette', 'text': '(reading) Hey all, I was asking the lost soldiers a few discreet questions while you were busy.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': '(reading) They all agreed on one thing - there was some type of treasure in the wizard\'s cave, probably made of silver.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': '(reading) Since the Grandmarchy will no doubt take everything when they secure the cave, I\'m heading them off tonight.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': '(reading) If you want in, meet me at the cave\'s entrance. Clavo - thanks for the map - it\'s coming in really helpful!', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'Hey! The map I drew is gone!', 'sound': '' }
		, { 'pic': 'res/faces/lemelOut.png', 'speaker': 'Lemel', 'text': 'I can\'t believe this!', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'I can! That idiot\'s going to get himself killed!', 'sound': '' }
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
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '???', 'text': 'Please make yourselves at home. Now that the sun is going down, I think I\'ll visit your charming hometown in my new body. Gis revido!', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'Damnit, we\'re trapped! Thanks a lot, Mizak!', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': 'I\'m sorry, okay? I was trying to benefit us all!', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Clavo, you\'ve been here before. Is there any other way out of this cave? We have to warn the Glade!', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'I don\'t know - but there has to be a way to open this door. We should look around.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': '…', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Mizak notices some words carved in the wall)', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Hey, I think I found a way out! Clavo, can you translate the rest of this?', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Let\'s see. Suno…luno….pordo...yes! Pordo!', 'sound': '' }
		, { 'pic': 'res/faces/mizakLaugh.png', 'speaker': 'Mizak', 'text': 'I told you it was a way out!', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'What are you talking about?', 'sound': '' }
		, { 'pic': 'res/faces/mizakTalk.png', 'speaker': 'Mizak', 'text': 'Pordo! It\'s the Portolingvo word for door. You have to know some Portolingvo to be a decent merchant, you know.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'Worry about merchanting after we get out of here alive.', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': 'C\'mon, I said I was sorry. Don\'t be like that.', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'It says - When the sun and the moon rise, the door will open!', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'This may be out way out!', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Since when does the sun and the moon rise at the same time?', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'It must be a puzzle! We need to search the cave and find things.', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Let\'s keep searching the cave. There must be something to this message!', 'sound': '' }
		],
			
	
	"scene17" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the group walks to the small altar in the center of the chapel)', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Here. This is it. Where I first encountered the wizard.', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'What happened to those stained glass windows you mentioned?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Good question.', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Well, at least your wizard had good taste. Look at this!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Mizak approaches a jewel-encrusted silver chalice on the altar)', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Mizak, you shouldn\'t touch that.', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Why not? Maybe wel\'ll get out of here rich after all!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(as Mizak\'s fingers brush the chalice, the windows light up)', 'sound': '' }
		, { 'pic': 'res/faces/mizakTalk.png', 'speaker': 'Mizak', 'text': 'Whoa!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Mizak draws away, and the lights dim)', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'That\'s it! Mizak, touch the altar again!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Mizak touches the cup again, and the windows light up again)', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Don\'t you all get it? The sun rises! When someone touches the altar the \'sun\' rises and lights them up.', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'This must be part of the puzzle!', 'sound': '' }
		, { 'pic': 'res/faces/lissetteTalk.png', 'speaker': 'Lissette', 'text': 'That\'s pretty clever!', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Ugh. Why can\'t wizards just use a key and lock like everyone else.', 'sound': '' }
		, { 'pic': 'res/faces/mizakLaugh.png', 'speaker': 'Mizak', 'text': 'Hey, if it works, it works.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Mizak picks up the silver chalice, and the windows dim again)', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Mizak, it looks like we have to just touch the altar, not steal from it.', 'sound': '' }
		, { 'pic': 'res/faces/mizakAngry.png', 'speaker': 'Mizak', 'text': 'Damn it!', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Let\'s keep looking.', 'sound': '' }
		
		],
	
	"scene18" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lissette points to a bronze statue of a large flower with wide open petals)', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'What’s this?', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Looks like another clue. Clavo?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Coming. Luno…floro…', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'It says - If the petals are closed, the moon will not rise.', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': 'Okay…so if the petals close, the moon will rise? Hey, Lemel, can you shut those petals?', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lemel examines the statue)', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'These things are welded in place. We can\'t move them here.', 'sound': '' }
		
		],

	"scene19" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(a large plaque hangs against the wall)', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Okay - another clue.', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'It says - as long as the water flows and the farmer toils, the petals will not close.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'Okay, that\'s…interesting.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': '', 'text': '…', 'sound': '' }
		
		],

	"scene20" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the sound of flowing water fills the chamber)', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': 'What\'s this - a fountain in the cave?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Looks like it…but no clues or anything.', 'sound': '' }
		, { 'pic': 'res/faces/lemelTalk.png', 'speaker': 'Lemel', 'text': 'Hey - look at this. If you pull on this lever here….', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lemel pushes the lever down, and the fountain stops)', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'So you can stop the fountain\'s water flowing…hmmm….', 'sound': '' }
		
		],

	"scene21" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(a large marble statue stands in the middle of the hall)', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': 'What\'s this?', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'Looks like the statue of a man. He\'s holding a pitchfork…', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'It\'s a farmer. Look at the plow at his feet.', 'sound': '' }
		, { 'pic': 'res/faces/mizakTalk.png', 'speaker': 'Mizak', 'text': 'What the heck is the statue of a farmer doing here?', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'Clavo, any clues?', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'Nope. Just this statue. But it has to mean something…', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lissette pokes around the statue\'s base)', 'sound': '' }
		, { 'pic': 'res/faces/lissetteNormal.png', 'speaker': 'Lissette', 'text': 'Look at this - you can tip this thing over!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lissette pushes at the statue, and the figure of the farmer slowly leans backwards)', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'Looks like he\'s lying down to take a nap! And the pitchfork stays upright.', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': '(the farmer sleeps…a sleeping farmer can\'t work…it\'s something….)', 'sound': '' }

		],

	"scene22" : [ 
		{ 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'Everyone, I figured the puzzle out! I know how to get out of the cave!', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'The sun and the moon rising - if we work together, we can do it!', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'Mizak, remember, the altar, if you go touch it, the sun will rise!', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'The fountain and the statue of the farmer! If you push that lever, the water will stop flowing.', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'And if you push the farmer on its back, he can\'t toil anymore.', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'I\'ll be damned - just like that clue said.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteNormal.png', 'speaker': 'Lissette', 'text': 'Yeah - when the farmer stops toiling and the water stops flowing, the petals close.', 'sound': '' }
		, { 'pic': 'res/faces/mizakLaugh.png', 'speaker': 'Mizak', 'text': 'And when the petals close, the moon comes up! Clavo, you\'re a genius!', 'sound': '' }
		, { 'pic': 'res/faces/lemelNormal.png', 'speaker': 'Lemel', 'text': 'I\'ll go to the fountain.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteNormal.png', 'speaker': 'Lissette', 'text': 'I\'ll go tip that statue.', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'I\'ll drop by the chapel again.', 'sound': '' }
		, { 'pic': 'res/faces/clavoNormal.png', 'speaker': 'Clavo', 'text': 'I\'ll stay up here and yell. When I do, everyone do your thing. If it works, the door should open!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the group seperates across the cave)', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'Everyone? Ready, set, go!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the door rumbles open into the night)', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'It\'s open! We\'re free!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lemel, Lissette, and Mizak run back to the cave entrance)', 'sound': '' }
		, { 'pic': 'res/faces/clavoAngry.png', 'speaker': 'Clavo', 'text': 'That vampyre is heading for Talem\'s Glade. We have to stop him!', 'sound': '' }
		, { 'pic': 'res/faces/lemelFrown.png', 'speaker': 'Lemel', 'text': 'Er…Clavo, you don\'t happen to know how to stop a vampyre, do you?', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'No…but Brother Jera does.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteAngry.png', 'speaker': 'Lissette', 'text': 'Then let\'s get going!', 'sound': '' }
		
		],
	
	"scene23" : [ 
		 { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(as the four enter town, they see Sawa and the Grandmarchy fighters already there)', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Uh, oh - looks like the party got started without us.', 'sound': '' }
		, { 'pic': 'res/faces/foremanFrown.png', 'speaker': 'Swordsman', 'text': 'Show, yourself, you cowardly vampyre!', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'At night, a vampyre cannot be seen. Look for footfalls or any other sign of movement.', 'sound': '' }
		, { 'pic': 'res/faces/aderYell.png', 'speaker': 'Longbowman', 'text': 'There! I thought I saw something move over there.', 'sound': '' }
		, { 'pic': 'res/faces/sawaYell.png', 'speaker': 'Sawa', 'text': 'Volley shot!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Sawa and the bowman fire several arrows into the dark, but hear nothing)', 'sound': '' }
		, { 'pic': 'res/faces/aderFrown.png', 'speaker': 'Longbowman', 'text': 'Sawa, buddy, you don\'t happen to have more of those silver-tipped arrows on you, huh?', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'I\'m afraid not.', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'If I can neutralize the vampyre\'s invisibility, we won\'t need silver. But I need to find him first.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(something shimmers in front of the swordsman, and he\'s thown backwards)', 'sound': '' }
		, { 'pic': 'res/faces/foremanFrown.png', 'speaker': 'Swordsman', 'text': 'Umph.', 'sound': '' }
		, { 'pic': 'res/faces/aderYell.png', 'speaker': 'Longbowman', 'text': 'Right there! I see him!', 'sound': '' }
		, { 'pic': 'res/faces/sawaNormal.png', 'speaker': 'Sawa', 'text': 'You can\'t move with that foot. Let me try.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Sawa runs towards the fallen soldier, but the shimmer returns and envelops him) ', 'sound': '' }
		, { 'pic': 'res/faces/sawaSmile.png', 'speaker': 'Sawa', 'text': 'Oh yeah? Dodge this!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Sawa throws a handful of dirt in the air before falling unconscious, and a vague figure emerges)', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'I can see him! VIDEBLA!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(out of the darkness, the vampyre emerges)', 'sound': '' }
		, { 'pic': 'res/faces/lemelAngry.png', 'speaker': 'Lemel', 'text': 'That\'s our cue. Let\'s get him!', 'sound': '' }

	],
	
	"scene24" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the figure of the vampyre dissolves into smoke)', 'sound': '' }
		, { 'pic': 'res/faces/lemelTalk.png', 'speaker': 'Lemel', 'text': '…pant…pant…it\'s over.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'I\'m not sure about that….', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the smoke forms itself into a vague figure)', 'sound': '' }
		, { 'pic': 'res/faces/clavoAngry.png', 'speaker': 'Clavo', 'text': 'The wizard!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '???', 'text': 'Heh, heh. You\'ve defeated my shell, but not me! This town will burn!', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'No, it won\'t. ELIRU! VAMPIRO, ELIRU!', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the figure begins to dissolve)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '???', 'text': 'What have you done?!?', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'Making sure you\'re no longer welcome here.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '???', 'text': 'You scrubs! I\'ll come back!', 'sound': '' }
		, { 'pic': 'res/faces/jeraNormal.png', 'speaker': 'Brother Jera', 'text': 'Not to Talem\'s Glade. Gis revido.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(the figure disappears)', 'sound': '' }
		, { 'pic': 'res/faces/lissetteFrown.png', 'speaker': 'Lissette', 'text': 'Did you kill him?', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'No, I could only banish him. But he can no longer enter this town.', 'sound': '' }
		, { 'pic': 'res/faces/jeraFrown.png', 'speaker': 'Brother Jera', 'text': 'It\'s not a perfect solution, but for now, it will have to do.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Jera turns away to help Sawa and the wounded swordsman)', 'sound': '' }
		, { 'pic': 'res/faces/widowNormal.png', 'speaker': 'Widow Starnes', 'text': 'Lemel, Clavo - you\'re safe!', 'sound': '' }
		, { 'pic': 'res/faces/reeveSmile.png', 'speaker': 'Reeve Donte', 'text': 'You kids saved the town! We\'re all in your debt!!', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': 'Well, cash is always nice…', 'sound': '' }
		, { 'pic': 'res/faces/reeveSmile.png', 'speaker': 'Reeve Donte', 'text': 'For you, Mizak, sure. I\'ll pay off your debts. You\'re now worth zero.', 'sound': '' }
		, { 'pic': 'res/faces/mizakFrown.png', 'speaker': 'Mizak', 'text': 'Thanks….I think…', 'sound': '' }
		, { 'pic': 'res/faces/lemelTalk.png', 'speaker': 'Lemel', 'text': 'Forget the money - I\'m starving! We spent all day hoofing it in the forest and the cave.', 'sound': '' }
		, { 'pic': 'res/faces/reeveSmile.png', 'speaker': 'Reeve Donte', 'text': 'Sounds like you have a lot to report. In the morning, then.', 'sound': '' }
		, { 'pic': 'res/faces/westonNormal.png', 'speaker': 'Weston', 'text': 'Well, dinner\'s on me. And today, Lissette, I\'ll serve you.', 'sound': '' }
		, { 'pic': 'res/faces/lissetteNormal.png', 'speaker': 'Lissette', 'text': '…', 'sound': '' }

	],
	
			
	"scene27" : [ 
		{ 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': '(I better not leave town unless I have four people in the party)', 'sound': '' }
	],
	
	"scene28" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(GAME OVER. The party has fallen in battle)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Try going back and starting again. The people of Talem\'s Glade need you!)', 'sound': '' }
		
	],
	"scene29" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(GAME OVER. You have exhausted all your clues and run out of time)', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Try again, and this time, review your logic better before evaluating clues!)', 'sound': '' }

	],
	
	"scene30" : [ 
		{ 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(later, at the Pathway Inn, and after several rounds of drinks…)', 'sound': '' }
		, { 'pic': 'res/faces/lemelTalk.png', 'speaker': 'Lemel', 'text': 'Ah - good! * hic * Another ale!', 'sound': '' }
		, { 'pic': 'res/faces/clavoFrown.png', 'speaker': 'Clavo', 'text': 'Don\'t you think you\'ve had enough?', 'sound': '' }
		, { 'pic': 'res/faces/lissetteNormal.png', 'speaker': 'Lissette', 'text': 'He\'s earned it. We all have.', 'sound': '' }
		, { 'pic': 'res/faces/lemelOut.png', 'speaker': 'Lemel', 'text': '* hic * So serious, Clavo, so serious. Ever since we were kids. Read this, solve that. * hic *', 'sound': '' }
		, { 'pic': 'res/faces/lissetteNormal.png', 'speaker': 'Lissette', 'text': 'You know, Clavo, I never asked - why did you stay in Talem\'s Glade after graduating from university?', 'sound': '' }
		, { 'pic': 'res/faces/lissetteNormal.png', 'speaker': 'Lissette', 'text': 'You became an expert at mathematics; now you just calculate taxes for the League.', 'sound': '' }
		, { 'pic': 'res/faces/mizakNormal.png', 'speaker': 'Mizak', 'text': '(whispering) I bet the main reason has his arm around his shoulder right now.', 'sound': '' }
		, { 'pic': 'res/faces/blankFace.png', 'speaker': '', 'text': '(Lissette stomps on Mizak\'s foot)', 'sound': '' }
		, { 'pic': 'res/faces/mizakStruggle.png', 'speaker': 'Mizak', 'text': 'Ow!', 'sound': '' }
		, { 'pic': 'res/faces/clavoTalk.png', 'speaker': 'Clavo', 'text': 'You know, I never really thought about it too much.', 'sound': '' }
	]
	
};

/*when done testing set goblin CON = 9*/
var FIGHTER_DATA = [
  	  {'name' : 'Lemel' , 'title':'Blacksmith', 'isMonster' : false , 'faceIcon' : 'res/faces/lemelFight.png' , 'sprite' : 'res/lemelFightSprites.png' , 'attackIcon' : 'res/faces/lemelAttack.png' , 'DEX' : 16 , 'CON' : 15 , 'POW' : 5 , 'level' :  1}
  	 , {'name' : 'Clavo' , 'title':'Clerk' , 'isMonster' : false , 'faceIcon' : 'res/faces/clavoFight.png' , 'sprite' : 'res/clavoFightSprites.png' , 'attackIcon' : 'res/faces/clavoAttack.png' , 'DEX' : 9 , 'CON' : 6 , 'POW' : 17 , 'level' : 1}
	 , {'name' : 'Lissette' , 'title':'Bartender' , 'isMonster' : false , 'faceIcon' : 'res/faces/lissetteFight.png' , 'sprite' : 'res/lissetteFightSprites.png' , 'attackIcon' : 'res/faces/lissetteAttack.png' , 'DEX' : 15 , 'CON'  :  10 , 'POW' : 10 , 'level' :  1}
	 , {'name' : 'Mizak'  , 'title':'Shopkeep' , 'isMonster' : false , 'faceIcon' : 'res/faces/mizakFight.png' , 'sprite' : 'res/mizakFightSprites.png' , 'attackIcon' : 'res/faces/mizakAttack.png' , 'DEX' : 15 , 'CON' : 8 , 'POW' : 7 , 'level'  :  1}
	
	 , {'name' : 'Goblin' , 'isMonster' : true , 'faceIcon' : '' , 'sprite' : 'res/goblinSprites.png' , 'attackIcon' : '' , 'DEX' : 10 , 'CON' : 9 , 'POW' : 4 , 'level'  : 1}
	 , {'name' : 'Highwayman' , 'isMonster' : true , 'faceIcon' : '' , 'sprite' : 'res/highwaymanSprites.png' , 'attackIcon' : '' , 'DEX' : 12 , 'CON' : 12 , 'POW' : 7 , 'level'  : 2}
	 , {'name' : 'Barrow-Wight' , 'isMonster' : true , 'faceIcon' : '' , 'sprite' : 'res/wightSprites.png' , 'attackIcon' : '' , 'DEX' : 6 , 'CON' : 16 , 'POW' : 1 , 'level'  : 2}
	 , {'name' : 'Trow' , 'isMonster' : true , 'faceIcon' : '' , 'sprite' : 'res/trowSprites.png' , 'attackIcon' : '' , 'DEX' : 10 , 'CON' : 20 , 'POW' : 6 , 'level'  : 3}
	 , {'name' : 'Nicor' , 'isMonster' : true , 'faceIcon' : '' , 'sprite' : 'res/nicorSprites.png' , 'attackIcon' : '' , 'DEX' : 18 , 'CON' : 18 , 'POW' : 10 , 'level'  : 4}
	 , {'name' : 'Vampyre' , 'isMonster' : true , 'faceIcon' : '' , 'sprite' : 'res/vampyreSprites.png' , 'attackIcon' : '' , 'DEX' : 20 , 'CON' : 35 , 'POW' : 30 , 'level'  : 5}
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

