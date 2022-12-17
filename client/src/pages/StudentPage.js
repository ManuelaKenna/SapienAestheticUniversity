
import React from "react";
// import { Card, Col, Row } from 'react-bootstrap';

// //class images 
// import ABC from '../assets/SpacePicsForArticles/space1.png';
// import CAD from '../assets/SpacePicsForArticles/space2.png';
// import BAD from '../assets/SpacePicsForArticles/space3.png';
// import SAD from '../assets/SpacePicsForArticles/space4.png';
// import CHAD from '../assets/SpacePicsForArticles/space5.png';
// import FAB from '../assets/SpacePicsForArticles/space6.png';

const StudentPage = ({classes,title,copy,image,id}) => {

  return (
    <div className= "class-list">
      <h1>{title}</h1>
      {classes.map((class) =>(
        <div className="class-preview" key {id}>
          <img>{image}</img>
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
      ))}
    </div>
  );
      }

export default StudentPage;