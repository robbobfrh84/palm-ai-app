# 🏝️ Colors A.I. 🎨
🚨 **NOTE: this application was originally built using Google's Palm API. However, in October 2024, I updated it to use Google's Gemini API, because Palm was discontinued.** 

🔥 Also NOTE: this domain is NOT set to auto-renew (expires: Aug 9, 2025)

- I didn't change this repo name or other links because they've been shared and I don't want those links to be broken links. 

An application built using the ~~PaLM API~~ (Update to Gemini API), the App is a fun color generator game that associates "Things" with "colors" by utilizing a trained AI Large Language Model to generate responses. 


##### Live Links 🎙️

- Front-end Web Application: [colorai.farm](https://colorai.farm)
  - Re-routed from: https://robbobfrh84.github.io/palm-ai-app/
- Server: https://gemini-api-437519.wl.r.appspot.com/

##### Where Code is Hosted 🍦

- Front End Web App from this repo on GitHub: https://github.com/robbobfrh84/palm-ai-app
- Back End API on Google Cloud Developer's App Engine: https://console.cloud.google.com/appengine?project=gemini-api-437519&serviceId=default

----

# 🏗️ Development 🏗️
##### Setting Up & Adding Dependancies:

- `cd server`
- `npm install` 

##### Running the Back End Locally:

- `cd server`
- `npm start`, Or: `npm run dev` for hot reload.

##### Running the Front End Locally:

- `cd client`
- Open `index.html`
- If you're using VS Code you can install "Live Server" extention and click "Go Live" on the bottom nav bar in VS Code to hot reload your front end. 

NOTE: the default API url is `http://localhost:8080/`. If you'd like to use the production API url, add `#prod` to your **client** url. 
- For example: `http://127.0.0.1:5500/#prod`

----

# 🚀 Deployment 🚀
This project uses Google App Engine. I wrote this [blog post](https://medium.com/@bobmain49/node-js-app-engine-with-google-cli-getting-started-guide-2023-556a4805cebd) about setting that up. Also, see this [blog post](https://medium.com/@bobmain49/dealing-with-sh-gcloud-command-not-found-after-setting-up-gcloud-cli-5e11b9290e6) if you're having issues with the `gcloud` command not being found. Once that's set up all you'll need to do is run these commands to deploy. 

NOTE: To get your API URL run the following command to open the URL in the browser.
- `gcloud app browse`

##### Deploying Front End 

This app is setup to deploy from the `client` subfolder. And, the branch `gh-pages` was made to handle that. So pushing to the main branch **will not** deploy changes to the front end. You'll need to run this command to do that. Which will trigger Github's actions to update your code and deploy the changes.

- `git subtree push --prefix client origin gh-pages`
  - Live URL:  https://robbobfrh84.github.io/palm-ai-app/

##### Deploying Back End API

- `cd server`
- `gcloud app deploy` 
  - Live URL: https://gemini-api-437519.wl.r.appspot.com/

- Then, you can run `gcloud app browse` to open the root url in a browser window.
- And, you can even watch the live logs with `gcloud app logs tail -s default`

----


# 🥽 Tests 🧪 

### Client: app.js configs 
To generate Hard Coded Results to add to examples.js
- Just set `_getHardCoded` to true. 

If you want to see all tests and examples
- Just set `_showTests` to true. 

### Server: Mac OS Command-line test commands
You can add a string after `npm start` to force a specific input and join words with `-` to be more specfic...
- Example: `node app/test.js bear`

- Example: `node app/test.js polar-bear`

### Mac OS Command-line test commands
### Mac OS Command-line test commands



----

# ☕️ Resources ☕️
- Prompt best practices: https://developers.generativeai.google/guide/prompt_best_practices
- Live Server Extention: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
