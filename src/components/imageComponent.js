import React from 'react';
import ReactDOM from 'react-dom';

export class ImageComponent extends React.Component{
    render(){
        console.log("Image component called")
        return (
            <div className="ImageContainer"> 
                <img src="../slambook.png" />
                <input type="button" value="Sign with GMAIL" />
            </div>
        )
    }
}
//export default ImageComponent;