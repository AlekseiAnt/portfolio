Created in February 2024 by Aleksei Antoniukov in Visual Studio Code on MacBook Pro 13" (2017)

PIE-MAN

This project is a version of pie-man game, where the player can control the pie-man's directions by pressing arrow keys on the keyboard. Pieman chomps its mouth and eats the pellets. Once it eats a pellet - two more are created, but pellets' lifespan gets shorter by 5% every time. The movements are limited by the user's browser window - pie-man cannot go out of the browser window, so when it approaches the edge - it stops but keeps chomping its mouth.

HTML:
The structure consists of three main parts: game board itself, welcome message and game-over message. Welcome message has the message itself and a start button, which runs the main() function in the script file. Game board consists of the pieman and the score displayed at the top left corner, and the game over message has a message, user's score and highest score, and a restart button - that does not refresh the page, but starts a new game, preserving the value of the high score in the current session. 

CSS:
Css file contains basic styling. Sets the positions and z-indexes, to have items anywhere I want them on the screen and set which items should be in front of others in case they overlap. It also sets the size of the pellet and pieman.

Javascript:
Starts with constants, that can be changed by the user - speed, interval and original pellet lifespan. It is followed by the rest of the variables, but these ones are refreshed every time the game starts, as they are being modified throughout the game and when the game restarts need to be refreshed.
When the start or restart button is clicked - main() function calls a function to refresh the variable(needed to start the game again after losing), shows the game board and hides the messages, adds the first pellet and listens to keyboard arrow keys presses, sets interval to call functions to chomp(iterates up and down through the frames in the images folder), move(adds speed value to the current coordinates in the right direction), check if the game is over(no pellets left on the screen) or if the pieman is supposed to eat the pellet(if it is close enough).


If you wish to modify speed, interval and original pellet lifespan - go to script js file (constants are at the very top). Speed also depends on interval as it is equal to pixels per interval, so if you want to make pieman chomp faster but preserve the speed - increase interval but decrease speed by the same percentage. If you wish to change the size of the pellet or pieman - go to style css file and find their width properties.
