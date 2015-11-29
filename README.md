# glade1

This is an updated version of my enchant.js RPG, a step up from the version found in the gladePrologue repository.

After getting feedback on the first game, I included the following updates:
1. Automatic character movement. Instead of using arrow keys or a directional game pad, players can simply click/touch a spot on the screen, and the player icon will move there. Because all game maps had obstacles, I used the A* path algorithm for implementation.
2. I added a very simple turn-based combat system, as well as a status screen with stats and the current goal. This was more for show than actual RPG fighting, as the interface is extemely simple.
3. NPC sprites can appear on the game map.
4. There can be multiple puzzles in a single game. All data - including NPC dialogue and clues - are stored in JSON format, which makes creating new games much simpler.

It can be played online here: http://www.newgrounds.com/portal/view/661204.

However, this is the last game I made using the enchant.js library. The library has not been updated since Sept. 2013, and this caused an older enchant game to break. Also, began to study JavaScript in more depth since finishing this game.



