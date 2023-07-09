import React from 'react'
import "./news.css"
const News = () => {
    return (
        
        <div id='newsParent'>
           <div id='newstag'>
            <p style={{color:"lightgreen"}}>Our Articles!</p><br />
             <h2>Articles from Tasking</h2>

           </div>
           <div id="news">
      
      <div className="card">
        <div className="imgbox">
          <img
            src="https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="News Image"
          />
        </div>

        <div className="content">
          <h3>Heading back to the gym? Here's how to avoid injury after coronavirus isolation.</h3><br />
          <p>
          Keen to get back to the gym? Be careful. It's easy to get injured if you've been inactive.
          </p><br />
          
          <h6 style={{color:"purple"}}>By Molly Miles</h6>
        </div>
      </div>
      <div className="card">
        <div className="imgbox">
          <img
            src="https://images.unsplash.com/photo-1546817372-628669db4655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
            alt="News Image"
          />
        </div>

        <div className="content">
          <h3>Gym membership: how to get the most out of it, according to a sports scientist.</h3><br />
          <p>
          Gym memberships spike as people make their New Year's resolutions but very few people will.
          </p>
          <h6 style={{color:"purple"}}>By Molly Miles</h6>
        </div>
      </div>
      <div className="card">
        <div className="imgbox">
          <img
            src="https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="News Image"
          />
        </div>

        <div className="content">
          <h3>Can coffee improve your workout? The science of caffeine and exercise.</h3><br />
          <p>
          Drinking coffee before exercising could make you run faster and lift heavier if you've the right.
          </p>
          
          <h6 style={{color:"purple"}}>By Molly Miles</h6>
        </div>
      </div>
    </div>
        </div>



    
    );
  };
  
  export default News;
  