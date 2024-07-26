import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

function Card(props) {
     
    const [imgSource, setImgSource] = useState ('');
    const [isOpen, setViewImg] = useState(false);


    const getImg = (source) => {
       setImgSource(source);
       setViewImg(true);
    }
    


    return (
        <>
          <div className={isOpen ? "model open" : "model"}>
                 <img src={imgSource} alt="viewImage" />
                 {/* <NavigateBeforeIcon className="preview" onClick={() => setImgSource()}/> */}
                 <CancelIcon className="cancel" onClick={() => setViewImg(false)} />
                 {/* <NavigateNextIcon className="next" onClick={() => setImgSource()} /> */}
                 <div className="modelText">{props.title}</div>
                 <p className="description">{props.description}</p>  
                 
          </div>
          <div className="card" onClick={() => getImg(props.source)}>
             <img 
             className="card-img" 
             src={props.source}
             alt="menu"/>
             <div className="text">{props.title}</div>
          </div>
        </>
    )
}

export default Card;