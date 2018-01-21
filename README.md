# cors test example

## set up

0. run `npm i` to get the deps
1. (optional) change region in package.json
2. run `npm run create` to deploy a test lambda
3. run `npm run serve` to run the web site on port 8080

## change the test

* change the lambda code in `api.js` and run `npm run update` to redeploy
* change the web site code in `web.js` and re-run `npm run serve` to recompile the javascript

## clean up after test

4. `npm run destroy` to remove the API
