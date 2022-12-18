// save content data for a logged in user
export const saveContent = (contentId) => { //, token
    console.log(`${contentId} made it here!`)
    return fetch(`/api/content/saveContent`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(contentId),  
    }
    );
  };

  // remove saved content data for a logged in user
export const deleteBook = (bookId, token) => {
    return fetch(`/api/content/:${bookId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  };