Created in April 2024 by Aleksei Antoniukov in Visual Studio Code on Macbook Pro 13" (2017), tested in Chrome with a server ran through XAMPP

This web-application consists of four php files: 
    - index.php - a default page welcoming the user
    - add.php - a page that lets the user add a new student and their grades, it validates the grades entries making and if everything is fine - adds the data to data.txt file
    - show.php - a page that displays the list of students in the database, students' names are hyperlinks, clicking on them brings the user to the 'search' file
    - search.php - a page that displays the detailed information about a student by entering their ID, or if the user was redirected from the 'show' page

, one html file:
    - navbar.html - navigation bar that is identical on every page, so I desided to reuse this piece of code without copying it, enforsing the DRY(Don't Repeat Yourself) programming principle.

, four css files:
    - mainstyle.css - reusable styling that is used on every page
    - addstyle.css - styling for add page
    - showdstyle.css - styling for show page
    - searchstyle.css - styling for search page

, two txt files:
    - data.txt - a simple analog of a database, used for storing student data
    - README.txt - this file.

-------IMPORTANT!-------
Before running this application on your machine, please make sure that data.txt is a writable file (NOT READ-ONLY).
Checking for writability is crucial, as, otherwise, php won't be able to open the file in "a" mode, I've come across this problem while
developing the application. To solve it on macOS - in finder right click on data.txt, open file properties, click on "permissions" and 
make sure "read and write" is allowed to everybody. To solve on Linux - please right-click on the file data.txt in
finder, select "properties" --> "permissions" --> and make sure "read and write" is allowed to everybody.  To check the writability of the 
file inside the php code, run the "is_writable()" function and pass the file name as a string parameter, the function returns a boolean. 
