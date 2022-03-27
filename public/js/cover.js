// // const newFormHandler = async (event) => {
// //     event.preventDefault();
  
// //     const title = document.querySelector('#book-title').value.trim();
    
// //     if (title && author && genre) {
// //       const response = await fetch(`/api/book`, {
// //         method: 'POST',
// //         body: JSON.stringify({ title, author, genre }),
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //       });
  
// //       if (response.ok) {
// //         document.location.replace('/cover');
// //       } else {
// //         alert('Failed to create book');
// //       }
// //     }
// //   };
  
  
// //   document
// //     .querySelector('.new-book-form')
// //     .addEventListener('submit', newFormHandler);

// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/book/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete book');
//       }
//     }
//   };
  
  
//   document
//     .querySelector('.book-list')
//     .addEventListener('click', delButtonHandler);
  
  