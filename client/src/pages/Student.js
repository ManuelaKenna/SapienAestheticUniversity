import React from "react";
import { Card, Col, Row } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_CONTENT } from '../utils/Queries';
import SaveButton from "../components/SaveButton/SaveButton";

function Student() {
  const { loading, error, data } = useQuery(QUERY_ALL_CONTENT);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <Row xs={1} md={3} className="g-4 py-3">
        {data.AllContent.map((element) => {
          console.log(element._id)
          return (
            <Col>
              <Card id={element._id} key={element._id} >
                <Card.Img variant="top" src={require("../assets/SpacePicsForArticles/space" + element.image + ".png")} />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>
                    {element.description}
                  </Card.Text>
                  <SaveButton id={element._id}/>
                </Card.Body>
              </Card>
            </Col>
          )
        }
        )}
      </Row>
    </div>
  )
}

export default Student;