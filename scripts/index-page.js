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

        // Create elements
        const commentsItem = document.createElement('div');
        commentsItem.classList.add('comments__item');

        const profileImage = document.createElement('div');
        profileImage.classList.add('profile__image--small');

        const context = document.createElement('div');
        context.classList.add('context');

        const head = document.createElement('div');
        head.classList.add('head');

        const nameHeading = document.createElement('h3');
        nameHeading.classList.add('name');
        nameHeading.innerText = username;

        const dateDiv = document.createElement('div');
        dateDiv.classList.add('date');
        dateDiv.innerText = formatDate(date);

        const bodyParagraph = document.createElement('p');
        bodyParagraph.classList.add('body');
        bodyParagraph.innerText = comment;

        const divider = document.createElement('div');
        divider.classList.add('divider');

        // Append elements
        head.appendChild(nameHeading);
        head.appendChild(dateDiv);

        context.appendChild(head);
        context.appendChild(bodyParagraph);

        commentsItem.appendChild(profileImage);
        commentsItem.appendChild(context);

        const commentsElem = document.querySelector(".comments");
        commentsElem.insertBefore(divider, commentsElem.firstChild);
        commentsElem.insertBefore(commentsItem, commentsElem.firstChild);
    }
}


const handleChange = (event) => {
    const input = event.target;
    input.classList.remove('input__state--error');
}

formElm.addEventListener("submit", handleSubmit);
formElm.addEventListener("change", handleChange);
