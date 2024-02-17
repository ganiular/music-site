const formElm = document.querySelector("form");
const commentsElem = document.querySelector("#userComment");


const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}


const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const comment = {
        name: form.name.value,
        comment: form.comment.value,
    };

    if (!comment.name) {
        form.elements.name.classList.add("input__state--error");
    } else if (!comment.comment) {
        form.elements.comment.classList.add("input__state--error");
    } else {
        try {
            const resComment = await siteApi.postComment(comment);
            addComment(resComment);
            form.reset();
        }
        catch (error) {
            console.error(error);
        }
    }
}

const loadComments = async (event) => {
    try {
        const comments = await siteApi.getComments();
        comments.forEach(addComment);
    }
    catch (error) {
        console.error(error);
    }
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
    nameHeading.innerText = comment.name;

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('comment__date');
    dateDiv.innerText = formatDate(comment.timestamp);

    const bodyParagraph = document.createElement('p');
    bodyParagraph.classList.add('comment__body');
    bodyParagraph.innerText = comment.comment;

    const divider = document.createElement('div');
    divider.classList.add('divider');

    // Append elements
    head.appendChild(nameHeading);
    head.appendChild(dateDiv);

    context.appendChild(head);
    context.appendChild(bodyParagraph);

    commentsItem.appendChild(profileImage);
    commentsItem.appendChild(context);

    commentsElem.insertBefore(divider, commentsElem.firstChild);
    commentsElem.insertBefore(commentsItem, commentsElem.firstChild);
}

const removeErrorBorder = (event) => {
    const input = event.target;
    input.classList.remove('input__state--error');
}

window.addEventListener("load", loadComments);

formElm.addEventListener("submit", handleSubmit);
formElm.addEventListener("change", removeErrorBorder);
