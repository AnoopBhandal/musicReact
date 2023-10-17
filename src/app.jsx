import React, { useState } from "react";
import "./app.css"

export default function Musician(){

    const [likedSongs, setLikedSongs] = useState({
        Streets: false,
        Still: false,
        Anymore: false,
        "So What": false,
        Why: false,
      });
    
      const likeSong = (song) => {
        setLikedSongs((prevLikedSongs) => ({
          ...prevLikedSongs,
          [song]: !prevLikedSongs[song],
        }));
      };
    


    return (
        <>
            <h1>P Money</h1>
            <h2>Music Type: Grime</h2>
            <h3>About P Money: </h3>
            <p>P Money is South East London's grime MC known for his high octane live performances, distinctive, punchline based freestyles. He has a style that suits both Dubstep & Grime and even Drum n Bass.</p>
            <h2>Albums</h2>
            <img className="album" src={"https://f4.bcbits.com/img/a1841862943_16.jpg"}/>
            <p>Streets, Love & Other Stuff (2023) Album {likedSongs["Streets"] ? "Liked" : "Not liked"} </p>
            {/* <button><img onClick={unlikeSong} className = "heart" src={"https://thenounproject.com/api/private/icons/773080/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"}/></button>   */}
            <button className="likeButton"><img onClick={() => likeSong("Streets")} 
            className = "heart" src={"https://thenounproject.com/api/private/icons/773080/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"}/>
            {likedSongs["Streets"] ? "Liked" : "Not liked"}           
            </button>  
            {/* <button><img onClick={likeSong} className = "heart" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1024px-Heart_coraz%C3%B3n.svg.png"}/></button>   */}


            <h2>Still</h2>
            <button className="likeButton"><img  onClick={() => likeSong("Still")} 
            className = "heart" src={"https://thenounproject.com/api/private/icons/773080/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"}/>
            {likedSongs["Still"] ? "Liked" : "Not liked"}            
            </button>  
            
            
            <h2>Anymore</h2>
            <button className="likeButton"><img onClick={() => likeSong("Anymore")} 
            className = "heart" src={"https://thenounproject.com/api/private/icons/773080/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"}/>
            {likedSongs["Anymore"] ? "Liked" : "Not liked"}
            </button>  
            
            
            <h2>So What</h2>
            <button className="likeButton"><img onClick={() => likeSong("So What")} 
            className = "heart" src={"https://thenounproject.com/api/private/icons/773080/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"}/>
            {likedSongs["So What"] ? "Liked" : "Not liked" }
            </button>  
 
 
            <h2>Why</h2>
            <button className="likeButton"><img onClick={() => likeSong("Why")} 
            className = "heart" src={"https://thenounproject.com/api/private/icons/773080/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"}/>
            {likedSongs["Why"] ? "Liked" : "Not liked" }
            </button>  



        </>
    )
    }