Created on Feb 6, 2024 by Aleksei Antoniukov in Visual Studio Code on Macbook Pro 13" (2017)

To explore this project please download all the files in the current directory and open an 
index.html file in your browser.

The structure contains 3 main div's - starter, board and endgame. When the user inputs 
the username(which is required), and clicks the button, the starter gets hidden and the 
gameboard is revealed, the script function gets called. At the same time, the username
gets stored in a variable, and will be displayed at the end. The board consists of 9 cells,
each of them is accessible by id and is present in the 'cells' array, can be accessed by 
index as well. There is styling for hover, as well as the outside borders are also hidden.
When the game starts, the function creates eventListeners for each cell and when the cell 
is clicked, the function for handling clicks is called. It adds X to the classname of the 
cell, which automatically adds X into the cell, as it is written in the stylesheet. After that,
the function checks if the game is not supposed to stop(there are no 3 in a row - so nobody
won and not all the cells are occupied - so there is no draw), if the game is allowed to 
continue, it calls a function that makes the computer's random move, which picks a random
index and checks if that move is legal. If not, it picks another number. Once the computer's
move is done, the function checks if the game is ended again, and if not, the user is free 
to make another move. If the game ends, the final message is displayed along with the 
restart button which simply refreshes the page, hover or clicking is not available for the
unoccupied cells after the game is ended.