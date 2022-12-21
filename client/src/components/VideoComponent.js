import React from "react";
// import ReactPlayer from 'react-player'
import MyVideo from "../assets/videos/Kristen-Antioxidants.mp4";

class MyVideoComponent extends React.Component {
    render() {
      return (
        <video width="50%" height="50%" preload="auto">
          <ReactPlayer src={MyVideo} type="video/mp4" />
          controls='true'
        </video>
      );
    }
  }
  
  export default MyVideoComponent;