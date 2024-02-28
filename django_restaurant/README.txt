<h1>Django Restaurant App</h1>
This is my first full stack project in Django. 

<h2> Please watch the video review that I created for this project: https://youtu.be/9In6k1h4bJs </h2>

The front-end of the restaurant app contains of:

	1) Home page:
		A simple heading, slogan and a picture. It also includes buttons to navigate across 		
		the app

	2) Menu model
		Every Item has its own div - a card that includes a picture, a title and a price, a 
		user is able to click on any menu item to see its own page.

	3) Single menu item model:
		Item's own page, that contains of a large picture, item title, description and price

	4) Booking model:
		A form that collects the user's information for the purpose of making a reservation 
		at the restaurant

	5) Contact_us model:
		A form that collects user's feedback.

	All the pages also contain a navigation bar at the top.

The back-end is written in Django framework. A Django administration panel was set up for the restaurant employees to look through, add and modify menu items (the items automatically show up on the menu page), look through customer feedback and reservation, view their details, and confirm them.

All the backend information is located in a mySQL database.

To run the project on a local network, you will need:
	- python installed
	- virtual environment (pipenv shell) installed and activated
	- mysql server running
	- to run the server locally, use a shell command "python3 manage.py runserver"
	- to run the server and give other machines in the same network access to the website, run "python3 manage.py run server 0.0.0.0:8000" and use your machine's IP address instead of 0.0.0.0 when proceeding to the website from another machine in the same network).

You might also need to use the following shell commands if the server is not running on your machine:
	(you need to have pip or pip3 for these commands)
	- pip3 install django
	- pip3 install djangorestframework
	- pip3 install mysqlclient
	- python -m pip install Pillow
	- pip install whitenoise





The project was created by Aleksei Antoniukov in February 2024. To develop it, I used my knowledge and experience gained from completing the "Coursera Meta Back End Developer Professional Certificate". For the front-end part I also watched guides and applied techniques developed by https://youtube.com/@javascriptmastery

If you have any questions, don't hesitate to contact me through aantoniukov@gmail.com
