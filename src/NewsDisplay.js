import React from 'react'
import './NewsDisplay.css'

const NewsDisplay = ({newsItem}) => {
    
     
    return (
      
        <div className="newsDisplay">  
            <img className="newsImage"
        alt={newsItem.title}
        src={
          newsItem.urlToImage
            ? newsItem.urlToImage
            : "http://www.aaru.edu.jo/websites/aaru2/wp-content/plugins/learnpress/assets/images/no-image.png?Mobile=1&Source=%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D78b536db%252De7c7%252D45d9%252Da661%252Ddb2a2aa2fbaf%26View%3D6efc759a%252D0646%252D433c%252Dab6e%252D2f027ffe0799%26RootFolder%3D%252Fwebsites%252Faaru2%252Fwp%252Dcontent%252Fplugins%252Flearnpress%252Fassets%252Fimages%26ID%3D4786%26CurrentPage%3D1"
        }
        />

        <div className="newsText">
           
        </div>
            <div>
                 <span className="title" > 
                  {newsItem.title}
                 </span>
                 <br />
                 <span className="author">
                     <a href={newsItem.url} target= " _blank"> 
                     <b> Article  </b>
                     </a> 
                     <span className="faded"> 
                       by {newsItem.author ? newsItem.author : "unkown"}
                     </span>
                </span>

                <div className="lowerNewsTex">
                    <div className="description" >
                        {newsItem.description}
                    </div>
                    <span className="readmore"> Read more at {" "}
                    <a href={newsItem.url} target="_blank" className="source"> 
                     <b>{newsItem.source.name}</b>
                    </a>
                    </span>
                    
                </div>
            </div>  
        </div>
     
    )
}

export default NewsDisplay
