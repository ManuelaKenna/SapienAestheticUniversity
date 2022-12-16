import React, {useState} from "react";
import ReactPlayer from 'react-player';

// import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//class images 
import ABC from '../assets/SpacePicsForArticles/space1.png';
import CAD from '../assets/SpacePicsForArticles/space2.png';
import BAD from '../assets/SpacePicsForArticles/space3.png';
import SAD from '../assets/SpacePicsForArticles/space4.png';
import CHAD from '../assets/SpacePicsForArticles/space5.png';
import FAB from '../assets/SpacePicsForArticles/space6.png';

function Portfolio(props) {

  return (

    <Row xs={1} md={3} className="g-4">

      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={ABC} />
            <Card.Body>
              <Card.Title>Laser Hair Reduction</Card.Title>
              <Card.Text>
              If you're unhappy with shaving, tweezing, or waxing to remove unwanted hair and especially if you have sensitive skin laser hair removal may be an option worth considering. With its high degree of accuracy and minimal pain, laser hair removal can remove unwanted hair in a fraction of the time it takes other methods.
              </Card.Text>
              <Card.Link href="#">Add to curriculum</Card.Link>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
   <Col>
          <Card>
            <Card.Img variant="top" src={CAD} />
            <Card.Body>
              <Card.Title>Scars and stretch marks</Card.Title>
              <Card.Text>
              Fractional laser is designed to treat surgical and acne scars on any area of the body, including the face. It can be safely used on most skin types. During your consultation, we will determine if you are a good candidate for the procedure based on a variety of factors. 
              </Card.Text>
              <Card.Link href="#">Add to curriculum</Card.Link>
             
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={BAD} />
            <Card.Body>
              <Card.Title>Microneeding Facial</Card.Title>
              <Card.Text>
              This service is a Treatment Facial PLUS Microneedling to stimulate the top layers of the skin which release of natural growth factors naturally encouraging rebuilding your own collagen and elastin in order to improve fine lines, wrinkles, sagging skin, texture & tone. Multiple treatments and home-care are recommended for optimal results and 3-5 days downtime is typical.

              Client is required to bring their own UPF protection to the appointment as sunscreen cannot be applied after needling and light exposure can damage the freshly needled skin. Bluestone shields are available to purchase at your appointment time..
              </Card.Text>
              <Card.Link href="#">Add to curriculum</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={SAD} />
            <Card.Body>
              <Card.Title>Lash Lift and Brow Lamination</Card.Title>
              <Card.Text>
                This was a project created during my coursework for University of Washington Coding bootcamp. This website is a place where you can search for a good book and a brewery. Future development is creating a virtual library and book club. 
              </Card.Text>
              <Card.Link href="#">Add to curriculum</Card.Link>
              
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={CHAD} />
            <Card.Body>
              <Card.Title>Laser Resurfacingp</Card.Title>
              <Card.Text>
              Laser resurfacing facial is a revolutionary cosmetic procedure that uses laser beams to improve the look of your skin. This non-surgical treatment works by targeting damaged or wrinkled areas and eliminates dead cells, resulting in a diminished appearance of fine lines, wrinkles, enlarged pores and acne scars. *All new clients must book a consultation prior to making any booking for laser services. 
              </Card.Text>
              <Card.Link href="#">Add to curriculum</Card.Link>
              
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={FAB} />
            <Card.Body>
              <Card.Title>Photofacial / IPL</Card.Title>
              <Card.Text>
              Intense pulsed light (IPL) therapy, aka photofacial, is a way to improve the color and texture of your skin without surgery. It can undo some of the visible damage caused by sun exposure — called photoaging. You may notice it mostly on your face, neck, hands, or chest where your skin has been exposed to light the most.

              IPL is indicated if you have red, brown, or splotchy skin and have relatively fair skin.. 
              </Card.Text>
              <Card.Link href="#">Add to curriculum</Card.Link>
              
            </Card.Body>
          </Card>
        </Col>
    </Row>
    
  );
}

export default Portfolio;