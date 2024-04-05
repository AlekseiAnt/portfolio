<!-- Created in April 2024 by Aleksei Antoniukov in Visual Studio Code on Macbook Pro 13" (2017), tested in Chrome-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show List of Students</title>
    <style><?php include 'mainstyle.css'; include 'showstyle.css';?></style> 
    <!-- the traditional way of including stylesheet via <link> did not work -->
</head>
<body>
    <!-- navigation bar -->
    <?php include "navbar.html"?>  
    <h2 class="msg lft">List of all students</h2>
    <?php 
        //opening the file in a reading mode or if unable, displaying the message
        $myfile = fopen("data.txt", "r") or die("<p class='msg'>Unable to access the dataset</p>");
        //index is needed to display the list of students, this is the alternative to traditional ordered list in html.
        $index = 0;
        //iterating through the lines of the file, to print out the name of each student
        while(! feof($myfile)){
            //variable for each line and explode - making this line an array of data
            $line = fgets($myfile);
            $linearr = explode(",", $line);
            //checking if the item exists and has data, or it is just the last line
            //i need it because I always have an empty line in the end, because each new student data is added and followed by \n
            if($linearr[0]){
                $index += 1;
                echo "<a href='/304Lab5Aleksei/search.php?id=$linearr[0]&submit=Submit' class='list lft'>$index. $linearr[1]</a><br/>";
                
            }
        }
        //including the total number of students and closing the file in the end
        echo "<h3 class='msg lft'>Total number of students: $index</h3>";
        fclose($myfile);
    ?>
</body>
</html>