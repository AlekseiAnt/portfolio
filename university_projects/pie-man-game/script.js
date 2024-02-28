//Created in February 2024 by Aleksei Antoniukov in Visual Studio Code on Macbook Pro 13" (2017), tested in Chrome and Safari

//constants
const speed = 2; // speed of the pie man (in pixels per frame)
const interval = 11; //interval of iterating through frames
const original_time_pellet = 15000; //original lifespan of the pellet

//variables (get refreshed every time the game starts in refresh_vars function)
var count = 0; // player's current score
var direction = 'Right'; // initial direction
var images = []; // array of images

// the initial x and y coordinates, from which pieman starts
var left_coord = 10; 
var top_coord = 100;

//width and height of the browser window
var width = window.innerWidth;
var height = window.innerHeight;

//initially setting mouth to be opened, index in the images array and first id of the first pallet
var open = true;
var ind = 0;
var x = 0;
var gameover = false;

//variable for collecting user's highest score for showing it in the game-over message
var highest_score = 0;

//starting the game on click of the button
document.getElementById("startbutton").addEventListener('click', main)

//main function, gets called by the "play" button and calls the rest of the functions
function main() {
    //refreshing all the global variables, as the player can "try again" without refreshing the page
    refresh_vars();

    //setting up the game board, displaying score and the pieman itself, hiding everything else
    document.getElementById("welcome").style.display = "none"
    document.getElementById("pieman").style.display = "flex"
    document.getElementById("maindiv").style.display = "flex"
    document.getElementById("gameover").style.display = "none"

    //adding first pellet
    addpellet();


    //handling arrow keys presses, changing directions according to the key clicked.
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 38) {
          direction = "Up"
        } else if (e.keyCode === 40) {
        direction = "Down"
        } else if (e.keyCode === 37) {
            direction = "Left"
        } else if (e.keyCode === 39) {
            direction = "Right"
        }
      })

    //setting interval and calling other functions
    var interv = setInterval(() => {
        chomp(); //function handles chomping
        move(); //function handles movements
        check_gameover(); //function checks if the game is supposed to end
        check_eat(); //functions checks if the pieman is close enough to the pellet to eat it
        //updating the count variable
        $('#count_var').text(count);
        //if the game is supposed to end, stopping the interval
        if (gameover == true){
            clearInterval(interv);

        }
    }, interval);

}

/*function handles chomping, it iterates through the array of images, by changing their source (the direction
is already in the name of images, so I can distinguish them), and while 'open' is true,
it  keeps opening the mouth, and then starts closing again, finishing with the fully closed
mouth*/
function chomp() {
    images[0] = 'images/' + direction + '01.PNG';
    images[1] = 'images/' + direction + '02.PNG';
    images[2] = 'images/' + direction + '03.PNG';
    images[3] = 'images/' + direction + '04.PNG';
    images[4] = 'images/' + direction + '05.PNG';
    images[5] = 'images/' + direction + '06.PNG';
    images[6] = 'images/' + direction + '07.PNG';
    images[7] = 'images/' + direction + '08.PNG';
    images[8] = 'images/' + direction + '09.PNG';
    images[9] = 'images/' + direction + '10.PNG';
    images[10] = 'images/' + direction + '11.PNG';
    images[11] = 'images/' + direction + '12.PNG';
    if (open==true){
        if (ind == 11) {
            document.getElementById("piemanImage").src = images[ind];
            open = false;
            ind -=1;
        } else {
            document.getElementById("piemanImage").src = images[ind];
            ind+=1;
        }
    } else {
        if (ind<0){
            open=true;
            document.getElementById("piemanImage").src = "images/stopped.PNG";
            ind+=1;
        } else {
            document.getElementById("piemanImage").src = images[ind];
            ind-=1;
        }
        
    }
}

/*function handles movements, it sets "stopped" values to false by default and then
checks if pieman is close enough to the wall, that the next step will make it get out
of the window, if yes - it forbids movements in that direction. If the direction the 
player intends to move at is not forbidden, it lets them go there by adding speed value 
to the current coordinate. In the end it finally assigns updated coordinates to the pieman
object*/
function move(){
        stoppedTop = false;
        stoppedBottom = false;
        stoppedleft = false;
        stoppedRight = false;

    if ((left_coord)<=speed) {
        stoppedleft = true;
    }
    if ((left_coord)>=(width - 84 - speed)){
        stoppedRight = true;
    }
    if ((top_coord)<=speed) {
        stoppedTop = true;
    }
    if ((top_coord)>=(height - 84 - speed)) {
        stoppedBottom = true;
    } 
        
    if(direction=="Right"){
        if (!stoppedRight) left_coord += speed;
        // top coord is preserved
    } else if(direction=="Left"){
        if (!stoppedleft) left_coord -= speed;
        // top coord is preserved
    } else if(direction=="Up"){
        if (!stoppedTop) top_coord -= speed;
        // left coord is preserved
    } else if(direction=="Down"){
        if (!stoppedBottom) top_coord += speed;
        // left coord is preserved
    }
    let left_coord_style = left_coord.toString() + "px";
    let top_coord_style = top_coord.toString() + "px";

    document.getElementById("piemanImage").style.left = left_coord_style;
    document.getElementById("piemanImage").style.top = top_coord_style;

    
   
}

/*function adds a new ppellet, by creating a new element and assigning it an id which
gets incremented with every new pellet. It assigns the pellet random coordinates according
to the player's browser window size and makes some space not to place items half-outside of
the window. Then it sets up a timeout to remove the pellet after a certain amount of time. 
I need id for checking on pellet removal step, if the pellet has already been eaten and the function 
will try to remove it and will not find the object, it will still run but will throw an error to the 
console. By using individual id's for each pellet I prevented those errors. */ 
function addpellet(){
    var pellet = document.createElement("img");
    pellet.alt = "pellet";
    pellet.className = "pellet";
    pellet.id = x;
    pellet.src = "images/stopped.PNG";
    rand_left = Math.floor(Math.random() * (width-50));
    rand_top = Math.floor(Math.random() * (height-50));
    pellet.style.left = rand_left.toString() + "px";
    pellet.style.top = rand_top.toString() + "px";
    document.body.appendChild(pellet);
    setTimeout(() => {
        if (document.contains(pellet)){
            document.body.removeChild(pellet);
        }
    }, time_pellet);

    x++;
}

/* functions checks if the pieman is close enough to the pellet, so it can eat it. It creates variables for pieman's coordinates
and an array for all the pellets currently on the screen. It iterates through the array and checks if any of the pellets is close,
by comparing the coordinates between pellet and pieman, checks if it is greater than 0 but less than width of the objects. 
Coordinates are calculated not from the center but from the top let corner, so I had to add different values for left and right, as 
well as top vs bottom. If pieman eats the pellet, the finction removes that pellet object, changes the pellets' lifespan and adds
two more pellets, as well as increments the player's score. */
function check_eat() {
    pieman = document.getElementById("piemanImage");
    pellets = document.getElementsByClassName("pellet");
    var pieman_left = pieman.style.left;
    pieman_left = parseInt(pieman_left.replace("px", ""));
    var pieman_top = pieman.style.top;
    pieman_top = parseInt(pieman_top.replace("px", ""));

    for (let i = 0; i<pellets.length; i++){
        var pellet_left = pellets[i].style.left;
        pellet_left = parseInt(pellet_left.replace("px", ""));
        var pellet_top = pellets[i].style.top;
        pellet_top = parseInt(pellet_top.replace("px", ""));
        if (
                    (((pellet_left - pieman_left <= 60)
                    &&
                    (pellet_left - pieman_left >=0)) 
                || 
                    ((pieman_left - pellet_left <=29)
                    &&
                    (pieman_left - pellet_left >=0))) 
            && 
                    (((pellet_top - pieman_top <= 60)
                    &&
                    (pellet_top - pieman_top >=0)) 
                || 
                    ((pieman_top - pellet_top <=29)
                    &&
                    (pieman_top - pellet_top >=0)))
            ) {
            count+=1;
            document.body.removeChild(pellets[i]);
            time_pellet = time_pellet*0.95;
            addpellet();
            addpellet();
            
        }
    }
}

/*check if the game is supposed to stop (there are no pellets left), and if yes, turn gameover variable to true 
hide the gameboard and display the gameover message, but before that - update the count variable and check if the 
current score is greater than the previous higher score, if yes - set the new highest score. The function also
adds event listener to the refresh button, if it is clicked, the game starts over, but the page does not get
refreshed, so the highest score value is saved.*/
function check_gameover(){
    pellets = document.getElementsByClassName("pellet");
    if (pellets.length == 0){
        gameover = true;

        if(count > highest_score) highest_score=count;
        $('#final_count').text(count);
        $('#highest_score').text(highest_score);

        document.getElementById("gameover").style.display = "block"
        document.getElementById("pieman").style.display = "none"
        document.getElementById("maindiv").style.display = "none"
        document.getElementById("restartbutton").addEventListener('click', main)
    }
}

//refreshing variables at the beginning of each game (needed for starting game again but preserving highest score)
function refresh_vars() {
    count = 0;
    time_pellet = original_time_pellet;
    direction = 'Right';
    images = [];
    left_coord = 10;
    top_coord = 100;
    width = window.innerWidth;
    height = window.innerHeight;
    open = true;
    ind = 0;
    x = 0;
    gameover = false;
}





