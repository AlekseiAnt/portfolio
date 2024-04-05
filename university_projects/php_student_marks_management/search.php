<!-- Created in April 2024 by Aleksei Antoniukov in Visual Studio Code on Macbook Pro 13" (2017), tested in Chrome-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Marks of Particular Student</title>
    <style><?php include 'mainstyle.css'; include 'searchstyle.css';?></style> 
    <!-- the traditional way of including stylesheet via <link> did not work -->
</head>
<body>
    <!-- navigation bar -->
    <?php include "navbar.html"?>

    <!-- welcome message and form that takes the student ID, I use the GET method here, because I dont need to hide any info, and I can easily see ID in the url and
    do requests from the show page by clicking on a student name-hyprelink in the list -->
    <h2 class='msg lft'>Search for a student</h2>
    <form class="lft" action="search.php" method="GET">
        <p>Enter the student ID: 
        <input type="textbox" name="id" />
        <input id="button" type="submit" name="submit" /></p>
    </form>

    <?php
    
        $id = $_GET['id'];
        //checking if I actually received the ID from the user
        if ($id){
            $id = trim($id);
            //opening the file in a reading mode or if unable, letting the user know
            $myfile = fopen("data.txt", "r") or die("<p class='msg'>Unable to access the dataset</p>");
            $studentfound = FALSE;
            //iterating through the lines of the file, exploding each line into an array, and checking if the 0 index, which is ID matches the desired ID
            while(! feof($myfile)){
                //variable for each line and explode - making this line an array of data
                $line = fgets($myfile);
                $linearr = explode(",", $line);
                $linearr[0] = trim($linearr[0]);

                //calculate the age
                /*used the following source for learning how to calculate age precisely, not just the year difference: 
                https://phpgurukul.com/how-to-calculate-age-from-date-of-birth-in-php/
                */
                $birthday = new DateTime($linearr[2]);
                $today = new DateTime();
                $age = $birthday->diff($today)->y;
                
                
                //calculate the total average grade
                $gradetotal = (((intval($linearr[5]))+(intval($linearr[7]))+(intval($linearr[9]))+(intval($linearr[11])))*100/400);

                //if the id matches, I display the table that contains all the desired information, it is already in the linearr array, so I access it by indeces
                if ($linearr[0] == $id){
                    $studentfound = TRUE;

                    echo "<table class='studinf lft'>
                        <tr>
                        <th colspan='2' class='head'>Personal Information</th>
                        </tr>
                        <tr>
                        <td>Student ID</td>
                        <td>$linearr[0]</td>
                        </tr>
                        <tr>
                        <td>Student name</td>
                        <td>$linearr[1]</td>
                        </tr>
                        <tr>
                        <td>Date of birth</td>
                        <td>$linearr[2]</td>
                        </tr>
                        <tr>
                        <td>Age</td>
                        <td>$age</td>
                        </tr>
                        <tr>
                        <th colspan='2'class='head'>Marks</th>
                        </tr>
                        <tr>
                        <td>$linearr[4]</td>
                        <td>$linearr[5]</td>
                        </tr>
                        <tr>
                        <td>$linearr[6]</td>
                        <td>$linearr[7]</td>
                        </tr>
                        <tr>
                        <td>$linearr[8]</td>
                        <td>$linearr[9]</td>
                        </tr>
                        <tr>
                        <td>$linearr[10]</td>
                        <td>$linearr[11]</td>
                        </tr>
                        <tr>
                        <th colspan='2' class='head'>Final</th>
                        </tr>
                        <tr>
                        <td>Percentage</td>
                        <td>$gradetotal %</td>
                        </tr>
                    </table>";
                    break;
                }

                }
                //if there is no ID that matches the desired one, display that this student is not in the file
                if($studentfound == FALSE){
                    echo "<p class='msg lft err'>Unable to find a student with this ID. Please, try again.</p>";
                }
                fclose($myfile);
            }
    ?>
</body>
</html>