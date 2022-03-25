const newFormHandler = async (event) => {
    event.preventDefault();
  
    const review_text = document.querySelector('#review-text').value.trim();
    const star_rating = document.querySelector('#star-rating').value.trim();
  
    if ( review_text && star_rating) {
      const response = await fetch(`/api/bookreview`, {
        method: 'POST',
        body: JSON.stringify({ review_text, star_rating }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create book review');
      }
    }
  };
  
  
  document
    .querySelector('.new-review-form')
    .addEventListener('submit', newFormHandler);