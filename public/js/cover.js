const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#book-title').value.trim();
    const author = document.querySelector('#book-author').value.trim();
    const genre = document.querySelector('#book-genre').value.trim();
  
    if (title && author && genre) {
      const response = await fetch(`/api/book`, {
        method: 'POST',
        body: JSON.stringify({ title, author, genre }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/cover');
      } else {
        alert('Failed to create book');
      }
    }
  };
  
  
  document
    .querySelector('.new-book-form')
    .addEventListener('submit', newFormHandler);