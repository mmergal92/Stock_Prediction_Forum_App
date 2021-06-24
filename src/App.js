import './App.css';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

// Pages Import 

import About from './pages/About';
import Home from './pages/Home';
import HomeIn from './pages/HomeIn';
import NotFound404 from './pages/NotFound404';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SingleStock from './pages/SingleStock';
import Support from './pages/Support';
import UserProfile from './pages/UserProfile';
import StockList from './pages/StockList';
import Privacy from './pages/Privacy';

// Components Import

// Dashboard
// import Chart from './components/Dashboard/Chart';
// import CommentBox from './components/Dashboard/CommentBox';
// import LikeDislike from './components/Dashboard/LikeDislike';
// import StockTweets from './components/Dashboard/StockTweets';

// // Footer
// import AboutComponent from './components/Footer/AboutComponent';
// import SocialMedia from './components/Footer/SocialMedia';
// import SupportComponent from './components/Footer/SupportComponent';

// // Header
// import SearchBar from './components/Header/SearchBar';
// import SignUpComponent from './components/Header/SignUpComponent';
// import SignInComponent from './components/Header/SignInComponent';

// Sidebar


// Bootstrap


function App() {
  const URL = "https://stock-prediction-forum-backend.herokuapp.com/"

  //Switch renders the first route that matches.
  //Router is what makes the URL paramter pass as props to the single stock
  //In the route for singlestock page
    //we define "symbol" and this uses that URL segment as props...
    //we render the single stock component for all urls in that directoy path

  return (

   <div className="App">
     <Switch>
      
      <Route exact path="/stocks" > 
        
        <StockList url={URL}/>

      </Route>

      <Route 
      path="/stocks/:symbol"
      render={(routerProps)=><SingleStock{...routerProps}/>}
      url={URL}>

      </Route>

      <Route path="/SignUp"> 
        
        <SignUp/>

      </Route>
      
      <Route path="/SignIn"> 
        
        <SignIn URL={URL}/>

      </Route>

      <Route path="/About"> 
        
        <About/>

      </Route>
      
      <Route path="/Support"> 
        
        <Support/>

      </Route>

      <Route path="/privacy"> 
        
        <Privacy/>

      </Route>

      
      <Route exact path="/"> 
        
        <Home/>

      </Route>


      <Route path="*"> 
        
        <NotFound404/>

      </Route>
      </Switch>
    </div>

    
  );
}

export default App;
