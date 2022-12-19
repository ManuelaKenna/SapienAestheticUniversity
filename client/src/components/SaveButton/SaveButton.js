import React, {useState,useEffect} from 'react';
import { useMutation } from "@apollo/client";
import { SAVE_CONTENT } from '../../utils/Mutations';
import './SaveButton.css';

function SaveButton(props) {


    const [saveContent, { error }] = useMutation(SAVE_CONTENT);
    
    
    // if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
     // create function to handle to our database
  const handleSave = async (event) => {
    console.log(event)
    // const courseToSave = searchedBooks.find((book) => book.bookId === bookId);
    //write function to get ID of the course
   
    try {
    //   const {data} = await saveContent({variables:event.target.value});
    //     console.log(data)

      // if book successfully saves to user's account, save book id to state
      
    } catch (err) {
      console.error(err);
    }
  };

    console.log(props.id);
    return (

        <button className="material-symbols-outlined" value={props.id} onClick={handleSave}>
            <span>favorite</span>
        </button>
    )
}

export default SaveButton;