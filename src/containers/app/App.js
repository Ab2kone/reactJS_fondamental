import React from "react";
import './App.css';
import {tweets} from "../../constants";
import Tweet from "../../components/Tweet";
import TweetBox from "../../components/TweetBox/TweetBox";
import Home from "../Home";
console.log(tweets);

const App = () =>(
    <main>
       <Home>
           <TweetBox/>
           {tweets.map((tweet, index) => (
               <Tweet
                   key={index}
                   {...tweet}
                  />
               ))}
       </Home>
    </main>

);

export default App;