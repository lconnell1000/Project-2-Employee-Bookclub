const newFormHandler = async (event) => {
    event.preventDefault();
  
    const review_text = document.querySelector('#review-text').value.trim();
    const star_rating = document.querySelector('#star-rating').value.trim();
    const book_id = document.querySelector('#id-get').innerHTML;
    const book_title = document.querySelector('#title-get').value.trim();
   
    if ( review_text && star_rating && book_id && book_title) {
      const response = await fetch(`/api/bookreview`, {
        method: 'POST',
        body: JSON.stringify({ review_text, star_rating, book_id, book_title }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        let body = await response.json();
        document.location.replace('/profile');
      } else {
        alert('Failed to create book review');
      }
    }
  };
  
  
  document.querySelector('.new-review-form').addEventListener('submit', newFormHandler);