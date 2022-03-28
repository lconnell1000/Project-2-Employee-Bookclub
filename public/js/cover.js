
const newFormHandler = async (event) => {
  event.preventDefault();
  // const params = new URLSearchParams(window.location.search)
  // for (const param of params) {
  //   console.log(param)
  // }



  const book_id = document.querySelector('#book-id-change').innerText
  const file_name = document.querySelector('#image').value.trim();

  if (file_name && book_id) {
    const response = await fetch(`/api/book`, {
      method: 'PUT',
      body: JSON.stringify({ book_id, file_name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace(`/review/${book_id}`);
    } else {
      alert('Failed to create book');
    }
  }
};

document.querySelector('.new-book-form').addEventListener('submit', newFormHandler);
const id = document.querySelector('#id-get')