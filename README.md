# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) GA London React Template

## Using NPM

`npm run start` or `npm run dev`  to run the development server

`npm run build` to create a build directory

## Using Yarn

`yarn start` or `yarn dev`  to run the development server

`yarn build` to create a build directory

### ⚠️

To prevent the `failed-to-compile` issue for linter errors like `no-unsed-vars`, rename the `.env.example` to `.env` and restart your development server. Note this will only change the behaviour of certain linter errors to now be warnings, and is added just to allow your code to compile in development. These errors should still be fixed and other errors will still result in the code being unable to compile

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

###

Team name: Pneumonoultramicroscopicsilicovolcanoconiosis

Plan: Build a Dictionary

- Main Search - DONE
  • Searchbar.
  • Get data from api.
  • Process Data from api.
  • Style page.
  • Add links to every word.
    • Make sentences start with capital and end with full stop.
    • Make links highlight yellow on mouse over.
    • Make failed link searches highlight red.
  • Add audio for pronounciations.

- History page - DONE
  • Add Back, Forward and History buttons.
  • Store clicked links history.
  • Make clicking a new link afte going back remove forward history.
  • Style page.

- Split into components - DONE

- Add Header - DONE
