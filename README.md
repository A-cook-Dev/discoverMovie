# Software-Engineer-take-home

## Installation:

After cloning repo navigate to the directory hosting the repo and run 

```
npm install
```

This project requires an .env file at project root, an example is shown below. An .env-example file is also provided in the root directory.

```
PORTNUM=3000
BEARERTOKEN=bearer_token_here
```

## Starting API service:

To run the api service use 
```
npm start
```

## Function testing:
To perform functional jest test run
```
npm run test
```

## API Discover Movie by year:

Perform a GET HTTP method to

```
http://localhost:3000/api/v1/discovermovie/YYYY

Replace YYYY with a 4 digit number from 0000-9999 

```

## test page

Navigating to http://localhost:3000 will redirect to http://localhost:3000/index.html which is a basic static HTML testing form page. 
