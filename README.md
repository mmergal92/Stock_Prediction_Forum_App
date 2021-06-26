
# Stock Prediction Forum App
## Project III | By Jorge Caridad, Chris San Filippo, and Maria Mergal

### About this project

The stock forum app provides insights into stock prices for several very active companies. Logged-in users can interact with the app and leave comments and predictions for other logged-in users to view, as well.

### Features

 - General App features:
	 - A user that is not logged in can only access the Home page and footer support pages. The main "Stocks" page of the app can only be accessed when a user is logged in. This allows us to keep track of the users actions and monitor who can leave comments and vote on the stocks. 
	 - On the Stocks page, there a few components that load automatically through React. There is a stocks chart that displays the latest price information for each stock. There is also a forum section where users can leave comments and vote for whether they think the stock price will increase or decrease the next day. Lastly, there is a Twitter component that displays the recent Tweets of the CEO of each company (or the company Twitter, if the CEO did not have a public account). 
	 - Our app also includes Google authentication that allows users to login using their Google credentials. We are able to allow users to have access to certain features and to store their information throughout the site. 
	 - The stock prediction algorithm compares the stock price for the last three days. When the stock price for the last days has increased we predict the stock price will increase. When the stock price has decreased for two days in a row we predict that the stock price will decrease. When the stock price has both increased and decreased over the past two days we predict that the stock price will not change.
	 
 - Forum feature:
	 - The forum features are only accessible when the user is logged in. 
	 - Users can create and delete comments. These comments get pushed to the database to be then fetched in React so that they are displayed as soon as they are posted.
	 - The user can also choose whether the price of the stock will go up or go down. They can only vote once a day and their vote is displayed with a function that keeps a tally of everyone that voted and the percentage of people that voted up or down. 
   
### Tech

Project III used the following technologies and services in order to perform correctly!

-   [Node.JS]
-   [Express]
-   MongoDB Atlas
-   Mongoose
-   React
-   Backend and Frontend are deployed on Heroku: [Heroku Project III URL](https://stock-prediction-forum-app.herokuapp.com/) 
-   Charts.js
-   Stock API 
-   Twitter feed library

### General Logic of Project III

Chart here.

###  Challenges

Getting the charts to display was a challenge because many of the chart libraries were difficult to customize. The news sentiment analysis was a complex challenge that involved many hurdles. Creating a design in popular design/UX tools and converting it to React/CSS proved to be a challenge as well.

###  Stretch Goals

The news sentiment analysis and stock prediction scoring algorithm were both stretch goals which we accomplished. We had identified additional "super stretch" goals in our initial planning but later decided those featured were not where we wanted to focus.
