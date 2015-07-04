

 var NPC = Class.create(Sprite, {
    initialize: function(npcName) {
    	var game;
    	game = Game.instance;
        this.npcName = npcName;
        
        Sprite.apply(this,[game.spriteWidth, game.spriteHeight]);
  		
        //grab NPC info
        for (var i = 0; i < game.npcInfo.length; i++) {
        	if (game.npcInfo[i].npcName == this.npcName) {
        		this.image = Game.instance.assets[game.npcInfo[i].sprite];
        		this.x = game.npcInfo[i].xCord * game.spriteWidth;
        		this.y = game.npcInfo[i].yCord * game.spriteHeight;
				this.frame = [0,0,0,1,1,1,2,2,2];
        	}
        }
    }
});



