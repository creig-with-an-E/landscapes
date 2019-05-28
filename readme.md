
## PHP (Laravel) RESTful api with React.js implementation

Application is created as part of the testing phase

### Hosting
- application is hosted on Heroku on the following url:
- https://safe-sands-57880.herokuapp.com/

### Challenges
- Setting up the environment. Does anything ever work when its go time. Spent 8hrs reinstalling resources. from PHP, Composer, Laravel to Xcode.
- running migrations and seeder on heroku

### Easy Part
- Hosting on Heroku, using CLI the process was a breeze, database integration was an additional 15mins but all ended well without ever being Heroku's site.
- working with php felt amazing, for too long I have been working with Javascript. but there was something going back to first programming language I learnt.


### what I got from this experience
- this was a fun challenge, making me consider me wonder whether Laravel REST API might actually be better than a Node.js one.
- Node.js has express, but there is a whole lot more that comes out the box with Laravel, and well I enjoyed this more than I thought i would.

### Running application

- *npm start* - this will following commands "npm run dev" and "php artisan serve"

### API end points
#### Photographer

 - [ GET ] **"./api/photographer"** - get all photographers in the system
 - [ GET ] **"./api/photographer/{id}"** - get specific photographer and their images, photographer has to be passed as part of query string (url)
 - [ POST ] **"./api/photographer"** - adds new photographer, following params expected as part of form data
 
 #### status codes
 - *200* = success
 - *404* = no found
 
 ### Additional comments
 - double clicking the card changes the like status
 
 ### Technologies and Tools used
 
 ##### Backend
 - laravel
 
 ##### Frontend
 - React
    - React hooks (first time using react hooks)
 - Bootstrap 4
 
 ##### Other
 - Github
 
 ##### Project duration
 - 3days