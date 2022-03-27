const params = new URLSearchParams(window.location.search)
for (const param of params) {
    console.log(param)
}

document.querySelector('#book-name-change').innerText = params;