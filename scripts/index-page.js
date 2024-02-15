const comments = [
    {
        username: "Victor Pinto",
        date: "11/02/2023",
        body: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        username: "Christina Cabrera",
        date: "10/28/2023",
        body: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        username: "Isaac Tadesse",
        date: "10/20/2023",
        body: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
];

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

    const comment = {
        username: form.name.value,
        body: form.comment.value,
        date: formatDate(new Date()),
    };

    if (!comment.username) {
        form.elements.name.classList.add("input__state--error");
    } else if (!comment.body) {
        form.elements.comment.classList.add("input__state--error");
    } else {
        form.reset();

        addComment(comment);
    }
}

const loadComments = (event) => {
    // reverse comments order and add each to page
    comments.reverse().forEach(addComment);
}

const addComment = (comment) => {
    // Create elements
    const commentsItem = document.createElement('div');
    commentsItem.classList.add('comment');

    const profileImage = document.createElement('div');
    profileImage.classList.add('comment__image');

    const context = document.createElement('div');
    context.classList.add('comment__context');

    const head = document.createElement('div');
    head.classList.add('comment__head');

    const nameHeading = document.createElement('h3');
    nameHeading.classList.add('comment__name');
    nameHeading.innerText = comment.username;

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('comment__date');
    dateDiv.innerText = comment.date;

    const bodyParagraph = document.createElement('p');
    bodyParagraph.classList.add('comment__body');
    bodyParagraph.innerText = comment.body;

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

const handleChange = (event) => {
    const input = event.target;
    input.classList.remove('input__state--error');
}

window.addEventListener("load", loadComments)

formElm.addEventListener("submit", handleSubmit);
formElm.addEventListener("change", handleChange);
