# Clinician Scheduling Widget

I'm documenting the hell out of this experience since I've never actually built an ember app from scratch that uses data models (I only ever made them to practice setting up typescript in Ember). There are a lot of personal firsts happening here.

## Basic architectural diary

1. Installed `ember-cli@3.28` as a compromise between personal familiarity with ember octane, the current LTS, and a version currently in use by SimplePractice
2. Established a node version for team consistency (I also use a script to automatically change versions while swapping between modern and legacy apps)
3. Added `ember-cli-dotenv` for the application params (and later the google maps api key)
4. Set up convenience tooling for cleanliness (lint, prettier, etc) - Didn't allocate time to figure out why templates still use single quotes even though it frustrated me (not relevant to the assignment)
5. Created skeletal framework to drop in a constructor function to pull the clinician data (for setting up ember-data)
6. Spent an entire evening figuring out my very first proxy to get past CORS (not even `ember serve --proxy="url" would work`)
7. Build out models once data started flowing
8. Build components and styling progressively starting from top-down
9. Install google maps because why not, I haven't played with that package since coding boot camp in 2018
10. Write basic unit & rendering tests; refactored a couple of mistakes called to my attention by test failures (mostly boolean type coersion)
11. Install mirage and write an integration test for the whole workflow (leaner than an acceptance test)
12. Refactor component structure and clean up

## Installation

- `git clone https://github.com/robertpbaxter/schewidge.git`
- `cd schewidge`
- `yarn install`
- Create a `.env` file and add the clinician id, base URL, and maps API key (the app will not run without the first two)

## Running / Development

- `yarn start`
- Visit your app at [http://localhost:4200](http://localhost:4200).
- Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

- `yarn test`
