import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import { REMOVE_CONTENT } from '../../utils/Mutations';
import './DeleteButton.css';

function DeleteButton({props}) {
    console.log(props)
    const handleDeleteContent = async (contentId) => {
    const [RemoveContent, { loading, error, data }] = useMutation(REMOVE_CONTENT);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
        await RemoveContent({
            variable: {contentId}
        });
};
    return (

        <div className="material-symbols-outlined" id={props.data} onClick={() => REMOVE_CONTENT(props.data)}>
            <span>close</span>
        </div>
    )
}

export default DeleteButton;