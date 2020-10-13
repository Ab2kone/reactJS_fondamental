import React from "react";
import './App.css';
import {tweets} from "../../constants";
import Tweet from "../../components/Tweet";
import Home from "../Home";
console.log(tweets);
const App = () =>(
    <main>
       <Home>
           <Tweet
               avatar={tweets[1].avatar}
               fullname={tweets[1].fullname}
               content={tweets[1].content}
           />

           <Tweet
               avatar={tweets[2].avatar}
               fullname={tweets[2].fullname}
               content={tweets[2].content}
           />
       </Home>
    </main>

);

export default App;