import React, { useEffect, useState } from 'react'
import  alanBtn from '@alan-ai/alan-sdk-web'
import './App.css';
import NewsCards from './components/newscards/NewsCards'

const  App = () => {
  const alankey = '6ebb81234f7a4c1735ae61af79b3d02e2e956eca572e1d8b807a3e2338fdd0dc/stage'
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({command, articles}) => {
        if(command === 'newHeadlines'){
         setNewsArticles(articles)
        }
      }
    })
  },[newsArticles])    
  return (
    <div className="App">
       <h1>VOICE AI RUNNING</h1>
       <NewsCards articles={newsArticles}/>
    </div>
  );
}

export default App;
