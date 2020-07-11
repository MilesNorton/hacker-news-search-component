# Hacker News search component

[![Netlify Status](https://api.netlify.com/api/v1/badges/6e099a52-a57e-439c-b5ac-6ac8fc74e46f/deploy-status)](https://app.netlify.com/sites/nifty-lalande-12f84c/deploys)

## Description

The idea for this repository is to create a working single micro-frontend (using single-spa) application. This single micro-frontend application is set up to have its' own store as having a shared store defeat's the purpose of isolated micro-frontend's for development.

Styled components was selected over using css files as importing css files to the micro-frontend manager would cause headaches. I suggest using any css in js framework here.

[https://single-spa.js.org/](https://single-spa.js.org/) was used as the micro-frontend framework.
This projects single-spa root config (I refer to it is the manager) can be found here: [https://github.com/MilesNorton/hacker-news-manager](https://github.com/MilesNorton/hacker-news-manager)

## Try It

If you want try this repo, just clone it and follow the commands:

1.  `npm install`
2.  `npm start`
3.  It will now be running on port 8080.
4.  Follow this video for local development [https://www.youtube.com/watch?v=vjjcuIxqIzY&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=5&t=0s](https://www.youtube.com/watch?v=vjjcuIxqIzY&list=PLLUD8RtHvsAOhtHnyGx57EYXoaNsxGrTU&index=5&t=0s)
5.  Once you get the above set up you can use my managers website to inject the local module [https://cocky-ride-310246.netlify.app](https://cocky-ride-310246.netlify.app)
