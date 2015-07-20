
function makeLabel(text, x, y, fontType, fontSize, textColor, width, height, bgColor, alignment) {
	
	var label = new Label();
	label.text = text;
	label.width = width;
	label.height = height;
	label.x = x;
	label.y = y;
	label.backgroundColor = bgColor;
	label.color = textColor;
	label.font = fontSize + "px " + fontType;
	label.textAlign = alignment;


    return label;
}

function makeButton(text, x, y, width, height) {
	var newButton = new Button(text, "", width, height);
	newButton.x = x;
	newButton.y = y;
	
	return newButton;
}

//Background creation
function makeBackground(image) {
	var bg = new Sprite(400, 560);
	bg.image = image;
	return bg;
}

function makeImage(image, width, height, x, y) {
	var im = new Sprite();
	im.width = width;
	im.height = height;
	im.x = x;
	im.y = y;
	im.image = image;
	return im;
}


function getAvailableWords() {
	 var game;
     game = Game.instance;
	
	var availableWords = [];
		for (var i = 0; i < game.topicWords.length; i++) {
			if (game.topicWords[i].available == 1)
				availableWords.push(game.topicWords[i].word);
		}
		
	return availableWords;
}


function updateAvailableWords(newWord) {
	var game;
    game = Game.instance;
     
	for (var i = 0; i < game.topicWords.length; i++) {
			if (game.topicWords[i].word == newWord && game.topicWords[i].available == 0) {
				game.topicWords[i].available = '1';
				game.assets['res/sounds/tone.mp3'].play();
			}
		}
}


function getAvailableClues() {
	 var game;
     game = Game.instance;
	
	var availableClues = [];
		for (var i = 0; i < game.clueData.length; i++) {
			if (game.clueData[i].gameStage == game.stage)
				availableClues.push(game.clueData[i]);
		}
	return availableClues;
}

function updateClueAvailability(clueId) {
	var game;
     game = Game.instance;
	
	var allClues = [];
		for (var i = 0; i < game.clueData.length; i++) {
			if (game.clueData[i].available == "0" && game.clueData[i].id == clueId) {
				game.clueData[i].available = '1';
				game.assets['res/sounds/tone.mp3'].play();
				//sometimes updating clues can update available words
				if (game.clueData[i].wordRevealed.length > 0) {
					updateAvailableWords(game.clueData[i].wordRevealed);
				}
			}
		}
		
		//some clues enabled through talking trigger game events
		var gameVariable;
		for (var j = 0; j < game.revealedClueActions.length; j++) {
			if (game.revealedClueActions[j].clueId == clueId)	{
				if (game.revealedClueActions[j].action == 'activateGameVariable') {
					gameVariable = game.revealedClueActions[j].gameVariable;
					activateGameVariable(gameVariable);
					game.assets['res/sounds/tone.mp3'].play();
				}
			}
		}
		
}

function activateGameVariable(variable) {
	var game;
    game = Game.instance;
	for (var i = 0; i < game.gameVariables.length; i++) {
		if (game.gameVariables[i].name == variable) {
			game.gameVariables[i].status = 1;
			//check if that variable triggers special scenes
			for (var j = 0; j < variableTrigger.length; j++) {
				if (variableTrigger[j].triggerVariable == variable) {
					var triggerIndex = variableTrigger[j].triggerIndex;
					game.specialScenesTriggered[triggerIndex].status = 1;
				}
			}
		}
	}
}

function toggleGameVariable(variable) {
	var game;
    game = Game.instance;
	for (var i = 0; i < game.gameVariables.length; i++) {
		if (game.gameVariables[i].name == variable) {
			var temp = game.gameVariables[i].status;
			game.gameVariables[i].status = (temp == 1? 0: 1);
			break;
		}
	}
}

function isVariableActive(variable) {
	var game;
    game = Game.instance;
    var temp = 0;
	for (var i = 0; i < game.gameVariables.length; i++) {
		if (game.gameVariables[i].name == variable) {
			temp = game.gameVariables[i].status;
			break;
		}
	}
	if (temp == 1)
		return true;
	else
		return false;
}


function wordWrap (str, widthInPixels, fontSize) {
   var textArray = str.split(" ");
   var wrappedText = " ";
   var currentLineLength = widthInPixels;

    // use below chart or make a guess
    var letterPixelLength = 14;


   for (var i = 0; i < textArray.length; i++) {

       if ((textArray[i].length * letterPixelLength) >  currentLineLength) {
             wrappedText += "<br> ";
           currentLineLength = widthInPixels;
           wrappedText += textArray[i];
           wrappedText += " ";
           currentLineLength -= textArray[i].length * letterPixelLength;
       } else if (textArray[i] == '<br> ') {
       		wrappedText += "<br><p><br> ";
       		currentLineLength = widthInPixels;
       } else {
           wrappedText += textArray[i];
             wrappedText += " ";
           currentLineLength -= textArray[i].length * letterPixelLength;

       }
   }
   return wrappedText;
}

function resetGameVariables() {
	var game;
     game = Game.instance;
	
	for (var i = 0; i < game.scenesTriggered.length; i++) {
		game.scenesTriggered[i].triggered = '0';
	}
	
	
	for (var k = 0; k < game.specialScenesTriggered.length; k++) {
		game.specialScenesTriggered[k].status = '0';
	}  
	
	game.stage = 1; 
	
	//HARDCODEALERT begin
	game.currentParty = ['Lemel', 'Clavo', 'Lissette', 'Mizak'];
	
	for (var j = 0; j < game.gameVariables.length; j++) {
		var variable = game.gameVariables[j].name;
		if (variable == 'lemelOutside' || variable == 'lissetteOutside' || variable == 'mizakOutside')
			game.gameVariables[j].status = 1;
		else
			game.gameVariables[j].status = 0;
	}
	
	for (var l = 0; l < game.topicWords.length; l++) {
		if(game.topicWords[l].word == 'cave')
			game.topicWords[l].available = 1;
		else
			game.topicWords[l].available = 0;
	}
	
	for (var m = 0; m < game.clueData.length; m++) {
		if (game.clueData[m].id == 1)
			game.clueData[m].available = 1;
		else
			game.clueData[m].available = 0;
	}
	
	//HARDCODEALERT end
	
	game.clueDataA = null;
	game.clueDataB = null;
	game.highlightClueA = null;
	game.highlightClueB = null;
	game.clueMistakesMade = 0;
	
}

function filter(array, test) {
	var passed=[];
	for (var i = 0; i < array.length; i++) {
		if (test(array[i]))
			passed.push(array[i]);
	}
	return passed;
}

function map(array, transform) {
	var mapped=[];
	for(var i = 0; i < array.length; i++)
		mapped.push(transform(array[i]));
	return mapped;
}

function arrayContains(array, value) {
	for (var i = 0; i < array.length; i++) {
		if(array[i] === value) {
			return value;
		}
	}
	return false;
}

function removeFromArray(array, item) {
    for(var i in array){
        if(array[i]==item){
            array.splice(i,1);
            break;
            }
    }
}


