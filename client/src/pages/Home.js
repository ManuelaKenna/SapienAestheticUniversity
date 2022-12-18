import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_CONTENT } from '../utils/Queries';
import { SAVE_CONTENT } from '../utils/Mutations';
import { saveContent, deleteBook } from '../utils/API';
import Auth from '../utils/Auth';
import HeroCarousel from '../components/HeroCarousel';
import SaveButton from "../components/SaveButton/SaveButton";

function ClassPage() {
  const [userData, setUserData] = useState({});
  const handleSaveContent = async (contentId) => {
    // const token = Auth.loggedIn() ? Auth.getToken() : null;

    // if (!token) {
    //   return false;
    // }

    // try {
    console.log(`${contentId} made it here!`)
    saveContent(contentId);

    //   // upon success, remove book's id from localStorage
    // } catch (err) {
    //   console.error(err);
    // }
  };

    // console.log(`${contentId} made it here!`)
    // const [savedContent, { loadingMutation, errorMutation, dataMutation }] = useMutation(SAVE_CONTENT);

    // if (loadingMutation) return 'Loading...';
    // if (errorMutation) return `Error! ${errorMutation.message}`;


  const { loading, error, data } = useQuery(QUERY_ALL_CONTENT);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data.AllContent.map((element) => {
        return (
          <Row xs={1} md={3} className="g-4 py-3">

            <Col>
              <Card key={element._id}>
                <Card.Img variant="top" src={require("../assets/SpacePicsForArticles/space" + element.image + ".png")} />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>

                    {element.description}

                  </Card.Text>
                  <div key={element._id} onClick={() => handleSaveContent({ variables: {_id: element._id} })}>
                  <SaveButton/>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )
      }
      )}
    </div>
  )
}

export default ClassPage;