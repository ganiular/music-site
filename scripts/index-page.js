const formElm = document.querySelector("form");

const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;


    const username = form.name.value;
    const comment = form.comment.value;
    const date = new Date();


    if (!username) {
        console.log(username);
        form.elements.name.classList.add("input__state--error");
    } else if (!comment) {
        form.elements.comment.classList.add("input__state--error");
    } else {
        form.reset();
        handleChange(event);

        const html = `
        <div class="comments__item">
        <div class="profile__image--small"></div>
        <div class="context">
        <div class="head">
        <h3 class="name">${username}</h3>
        <div class="date">${formatDate(date)}</div>
        </div>
        <p class="body">${comment}</p>
        </div>
        </div>`;

        const commentsElem = document.querySelector(".comments");
        commentsElem.insertAdjacentHTML('afterbegin', html); // Append the first child of the created element
    }
}

const handleChange = (event) => {
    const form = event.target;
    form.name.classList.remove('input__state--error');
    form.comment.classList.remove('input__state--error');
}

formElm.addEventListener("submit", handleSubmit);
formElm.addEventListener("change", handleChange);
