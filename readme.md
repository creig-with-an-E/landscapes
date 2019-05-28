
## PHP (Laravel) REST api with React.js implementation

Application is created as part of the testing phase

### Challenges
- Setting up the environment. Does anything ever work when its go time. Spent 8hrs reinstalling resources. from PHP, Composer, Laravel to Xcode.

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