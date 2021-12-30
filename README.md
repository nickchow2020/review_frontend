# Getting Started with Dog Park&Hospital Review App
this application is for dog lover, who like to take care of them, having fun with them. User able to add any comments and pictures under the existing parks and hospitals. 

## Before Start
1. download the repository from github 
2. run npm install 
3. create .env file on root directory of React app
4. Get a google map API KEY from google map
5. Inside .env file create three variables and define it's value as a string value.
   1. REACT_APP_GOOGLE_MAP_API_KEY
   2. REACT_APP_AWS_ACCESS_KEY
   3. REACT_APP_AWS_SECRET_KEY
6. For AWS_ACCESS_KEY and AWS_SECRET_KEY email me at shumin_z@yahoo.com
7. before run npm start, making sure the backend server is on first
8. start backend server
9. npm start


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Installation
```bash
npm install
```

## Usage
- Register or Login
- Review Dog Parks or Dog Hospitals
- Review Park or Hospital
- add comment or add photo
- like comments


## API
Google map API:
   App use google API, if you like to run in your local machine just making sure you having a google map API ready.
   if you like to register a new one register at [Get free google map API](https://developers.google.com/maps/documentation/javascript/get-api-key)

AWS S3:
   also this app need access to AWS S3 bucket, you need to email me at "smz1680@gmail.com" to receive Access Key and Secret Key for AWS S3 bucket.

To use API key:
   create a file call keys.js on the root directory. Inside of key.js file
   ```javascript
         const REACT_APP_GOOGLE_MAP_API_KEY = "your key";
         const REACT_APP_AWS_ACCESS_KEY = "your key";
         const REACT_APP_AWS_SECRET_KEY = "your key";
         export {
         REACT_APP_GOOGLE_MAP_API_KEY,
         REACT_APP_AWS_ACCESS_KEY,
         REACT_APP_AWS_SECRET_KEY
         }
   ```





