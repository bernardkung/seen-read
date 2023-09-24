import React, { useState, useEffect } from 'react';

import './App.css';


function App() {
  const [mediaJson, setMediaJson] = useState([])
  // const [showForm, setShowForm] = useState(false)

  // Functions
  function loadMedia(res){

    var testData = require('./testlist.json')
    setMediaJson(testData)
  }

  useEffect(()=>{
    loadMedia()
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>Seen/Read</p>
      </header>

      <div className="entryForm">
        <p>Entry Form</p>
      </div>
      
      <div className="listContainer">
        <p>The List</p>
        {
          mediaJson.map((jsonMediaItem)=>{
            return (
              <div className="medium">
                <span className="date">{jsonMediaItem.date}</span>
                <span className="mediaList">                
                  {jsonMediaItem.media.map((medium, m)=>{
                    return (
                      <p key={m} class={medium.type}>
                        {medium.name}{medium.count>1 ? ` (${medium.count})` : ""}{m < jsonMediaItem.media.length-1 ? ", " : ""}
                      </p>
                    )
                  })}
                </span>

              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
