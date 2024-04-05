<!-- Created in April 2024 by Aleksei Antoniukov in Visual Studio Code on Macbook Pro 13" (2017), tested in Chrome-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Student Marks</title>
    <style><?php include 'mainstyle.css'; include 'addstyle.css';?></style>
    <!-- the traditional way of including stylesheet via <link> did not work -->
</head>
<body>
    <!-- navigation bar -->
    <?php include "navbar.html"?>

    <h1 class="msg">Enter the student marks</h1>

    <!-- form that asks for all the information from the user -->
    <div class="adddiv">
        <form class="addform" method="POST">

            <label for="name">Enter the name of the student:</label>
            <input type="text" id="name" name="name"required/>
            <label for="date">Date of birth:</label>
            <input type="date" id="date" name="date" required/>

            <label for="year">Year at the University:</label>
            <select id="year" name="year">
                <option value="First Year">First Year</option>
                <option value="Second Year">Second Year</option>
                <option value="Third Year">Third Year</option>
                <option value="Fourth Year">Fourth Year</option>
            </select>

            <label for="c1">Name of the first course:</label>
            <input type="text" id="c1" name="c1" required/>
            <label for="cm1">First course marks:</label>
            <input type="text" id="cm1" name="cm1" required/>
            
            <label for="c2">Name of the second course:</label>
            <input type="text" id="c2" name="c2" required/>
            <label for="cm2">Second course marks:</label>
            <input type="text" id="cm2" name="cm2" required/>

            <label for="c3">Name of the third course:</label>
            <input type="text" id="c3" name="c3" required/>
            <label for="cm3">Third course marks:</label>
            <input type="text" id="cm3" name="cm3" required/>

            <label for="c4">Name of the fourth course:</label>
            <input type="text" id="c4" name="c4" required/>
            <label for="cm4">Fourth course marks:</label>
            <input type="text" id="cm4" name="cm4" required/>
            
            <input id="but" type="submit" name="submit" />
        </form>
    </div>


    <?php
        //running the code only when the form was submitted
        if ($_SERVER["REQUEST_METHOD"] == "POST"){
            //generating the ID based on the current timestamp, removing the decimals, and saving all the data
            $id = round(microtime(true));
            $name = $_POST['name'];
            $date = $_POST['date'];
            $year = $_POST['year'];
            $c1 = $_POST['c1'];
            $cm1 = $_POST['cm1'];
            $c2 = $_POST['c2'];
            $cm2 = $_POST['cm2'];
            $c3 = $_POST['c3'];
            $cm3 = $_POST['cm3'];
            $c4 = $_POST['c4'];
            $cm4 = $_POST['cm4'];

            //validating the marks, making sure they make sense, only then writing the data in the file
            if(
                (is_numeric($cm1) && $cm1 >= 0 && $cm1 <= 100) &&
                (is_numeric($cm2) && $cm2 >= 0 && $cm2 <= 100) &&
                (is_numeric($cm3) && $cm3 >= 0 && $cm3 <= 100) &&
                (is_numeric($cm4) && $cm4 >= 0 && $cm4 <= 100)
            ){
                //line that I add to the fikle
                $str = "$id, $name, $date, $year, $c1, $cm1, $c2, $cm2, $c3, $cm3, $c4, $cm4\n";
                //opening the file in the mode that lets me append, if the file cannot be opened, stop the program and display the error message
                $myfile = fopen("data.txt", "a") or die("<p class='msg err'>Unable to access the dataset</p>");
                    //writing the string to the file, if it can't be written - letting the user know
                    if (fwrite($myfile, $str) == FALSE){
                        echo "<p class='msg err'>Unable to save the data. Please, try again</p>";
                    } else {
                        echo "<p class='msg suc'>Student has been added successfully!</p>";
                    }
                    //closing the file
                fclose($myfile);
                } else{
                    //if the marks were invalid - no data is added to the file
                    echo "<p class='msg err'>Sorry, you entered invalid marks, data was not saved. Please, try again.</p>";
            }
        }
    ?>

</body>
</html>