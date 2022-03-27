const delButtonHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/book/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/library');
    } else {
      alert('Failed to delete book');
    }
  }
};

document
  .querySelector('#delete-card')
  .addEventListener('click', delButtonHandler);

