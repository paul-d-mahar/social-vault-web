# Prototype

The purpose of this page is to give the use the option of providing access for an automated system to post to Facebook and LinkedIn. 

The use will recieve an email with a link to the page. The link with contain a clientId as a query parameter. 

On load, the page checks to see if the clientId is present, if not show a page with message "Unkown client ID, please contact Immersive Inteligace for assistance with a link to the immersivei.com. 

If the clientId is present, the page makes an API call to verify that the client is known. If not, show same message as if no clientId.

If clientId is valid, show two options, "Allow Posting to LinkedIn" and "Allow Posting to Facebook and Instegram". Clicking either option opens the approriate login/confirmation as provided by each platforms API. 

When permission is granted, the page calls the approprite PUT API to save the token and changes to option to a message. "Thank for granting Emmersive Intelligance permission to post to <platform>".

If an error occurs during the post, show message, "Unable to grant permission at this time."

## index.html 
Contains all javascript and html to show 2 buttons, one for Facebook and another for LinkedIn. 

## app.js
Simple node.js app for running an HTTP server. It always returns index.html regardless of the URL request. It only runs on https using port 53935.

## Known issue
At this time the Facebook button fails due to an invalid facebook ID. 
