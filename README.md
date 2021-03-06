# Residence APP

![CircleCI](https://circleci.com/gh/VeronicaM/residence.svg?style=svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/977320be-b0be-4de0-a79d-89aa3f57916a/deploy-status)](https://app.netlify.com/sites/residence-veram/deploys)

See a heatmap of residences by number of Residents. 
Add new residence entry. 

![Screenshot1](https://user-images.githubusercontent.com/2241065/104815510-ade9ab00-581d-11eb-9cbd-a10a10989d8b.png)


Made using

- Google Maps API through [google-maps-react](https://www.npmjs.com/package/google-maps-react) npm package
- [React](https://reactjs.org/) with hooks
- [Prop-types](https://www.npmjs.com/package/prop-types) for typing 
- [Sass](http://sass-lang.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Netlify](https://www.netlify.com/) for deployment
- [JSON-server](https://github.com/typicode/json-server) for a fake dummy API 
- [Circle CI](https://circleci.com/) for running tests automattically on every PR
- BEM notation
- Functional Components

## Requirements

- Node v12.16.1
- Yarn 1.22.4

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
- Clone this repo
- CD into the root directory
- Run yarn

## Running in dev mode
- Fill in your REACT_APP_GOOGLE_MAPS_API_KEY value in .env.local
- run `yarn start:dev`

Runs a json-server with dummy data in parallel with the create react app client in the development mode.
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Running the production build
- Fill in your REACT_APP_GOOGLE_MAPS_API_KEY value in .env.local
- run `yarn start`
The app will be build for production and the build folder will be served at [http://localhost:3001](http://localhost:3001)
It also runs the json-server with dummy data in parallel

## Other Available Scripts

In the project directory, you can run:

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`

Runs eslint 

### `yarn lint:format`

Formats files using prettier 

### `yarn test:coverage` 

Displays statistics about amount of tests available for the codebase

### `yarn build` 

Generates HTML and CSS files as static assets.


## Technical choices and tradeoffs

**Strong points**: 

- Meets requirements
    - Form with 5 fields (latitude, longitude, nomber of Residents, number and zip code) with the needed validation 
    - JSON server with dummy residence data
    - Can add new residence through the form
    - Can see residence data on a heat map based on latitude, longitude and number of residents
    - The heat map updates after a new residence is added to reflect new point
    - Developed using React
  
- Cross browser companibile ( Tested on latest versions of Chrome, Safari, Mozzila on A MacOS 11.1 system)
- Test coverage
- Google maps API key protection
- Modular and clean code
- Clear git workflow with [PRs](https://github.com/VeronicaM/residence/pulls?q=is%3Apr+is%3Aclosed) for each main feature 
- CI/CD for build, running tests and static assets deployment

**Create React App** to generate the initial structure of the app.
I have made this choice for the ease of setup of React with Babel 7 config as well as all the other plugins like class-properties.
It also sets up Jest, Sass and Webpack. **Trade-off:s** This is very fast and convinient setup for prototyping but it has a lot of unnecessary complexity. If I had enough time I would do a proper setup from scratch and I would include only what it's necessary for the project.

**Google Maps API Key** I have protected the api key from being stored in repository by passing it as env variable
I have also protected it from being used unreasonably by restricting its HTTP referrer to currently deployed to domain https://residence-veram.netlify.app/ and to http://localhost:3001 for testing purposes. Another option for protecting the API key would have been to have the app server side rendered so that the API key request doesn't appear on the client side.

**JSON-Server** I have used JSON-server only for development purposes. **Trade-offs:** For a production ready app, I would have used a MongoDB or GraphQL database with serverless approach for the backend. 

**Deployment only in dev mode** The app has been deployed as a pre-production ready step on Netlify. This only serves the static assets unfortunately as the json-server is not made available as well. **Trade-offs:**  For a production ready app, I would have stored the static assets in a S3 bucket configured as a Cloudfront distribution to act as a CDN and ensure best loading times across the world. 
    
**Test coverage**  Main functionality of the app is tested: the form validation, data fetching and app rendering. **Trade-offs:**
   Test coverage is low and there's an [issue](https://github.com/VeronicaM/residence/issues/6) with the setup. 

**Other improvements** 
- UI/UX is very minimalistic. 
- Scallability: the app has not been tested for large amount of data. It might require improvements in how the data is loaded on the map (possibly requesting data based on current center point on the map)


