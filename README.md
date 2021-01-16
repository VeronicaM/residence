# Residence APP

[![CircleCI](https://circleci.com/gh/VeronicaM/residence.svg?style=svg)

See a heatmap of residences by number of Residents. 
Add new residence entry. 

![Screenshot1](https://user-images.githubusercontent.com/2241065/104815510-ade9ab00-581d-11eb-9cbd-a10a10989d8b.png)


Made using

- Google Maps API through [google-maps-react](https://www.npmjs.com/package/google-maps-react) npm package
- [React] with hooks (https://reactjs.org/)
- [Prop-types](https://www.npmjs.com/package/prop-types) for typing 
- [Sass](http://sass-lang.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Netlify](https://www.netlify.com/) for deployment
- [JSON-server](https://github.com/typicode/json-server) for a fake dummy API 
- [Circle CI](https://circleci.com/) for running tests automattically on every PR

## Requirements

- Node v12.16.1
- Yarn 1.22.4

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instalation
- Clone this repo
- CD into the root directory
- Run yarn

## Running in dev mode
- Fill in your REACT_APP_GOOGLE_MAPS_API_KEY value in .env.local
- run `yarn start`

Runs a json-server with dummy data in parallel with the create react app client in the development mode.
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Other Available Scripts

In the project directory, you can run:

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`

Runs eslint 

### `yarn lint:format`

Formats files using prettier 


## Technical choices and tradeoffs

**Create React App** to generate the initial structure of the app.
I have made this choice for the ease of setup of React with Babel 7 config as well as all the other plugins like class-properties.
It also sets up Jest, Sass and Webpack.

**Tradeoffs**
This is very fast and convinient setup for prototyping but it has a lot of unnecessary complexity
If I had enough time I would do a proper setup from scratch and I would include only what it's necessary for the project.

