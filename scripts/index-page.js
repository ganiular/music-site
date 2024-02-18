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
    commentsItem.id = comment.id;

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

    const commentActions = document.createElement('p');
    commentActions.classList.add('comment__actions');

    const likeButton = document.createElement('button');
    likeButton.classList.add('comment__icon');
    likeButton.addEventListener('click', function (e) { handleLike(e, comment.id) });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('comment__icon');
    deleteButton.addEventListener('click', function (e) { handleDelete(e, comment.id) });

    const likeImg = document.createElement('img');
    likeImg.src = "./assets/icons/svg/icon-like.svg";

    const deleteImg = document.createElement('img');
    deleteImg.src = "./assets/icons/svg/icon-delete.svg";

    const likeCount = document.createElement('span');
    likeCount.classList.add('like__count');
    likeCount.innerText = ' LIKES ' + comment.likes;

    const deleteText = document.createElement('span');
    deleteText.innerText = ' DELETE';

    const divider = document.createElement('div');
    divider.classList.add('divider');

    // Append elements
    head.appendChild(nameHeading);
    head.appendChild(dateDiv);

    likeButton.append(likeImg, likeCount);
    deleteButton.append(deleteImg, deleteText);

    commentActions.appendChild(likeButton);
    commentActions.appendChild(deleteButton);

    context.appendChild(head);
    context.appendChild(bodyParagraph);
    context.appendChild(commentActions);

    commentsItem.appendChild(profileImage);
    commentsItem.appendChild(context);

    commentsElem.insertBefore(divider, commentsElem.firstChild);
    commentsElem.insertBefore(commentsItem, commentsElem.firstChild);
}

const handleLike = async (event, id) => {
    try {
        const comment = await siteApi.likeComment(id);
        const commentElm = document.getElementById(id);
        const likeCount = commentElm.querySelector('.like__count');
        likeCount.innerText = ' LIKES ' + comment.likes;
    } catch (error) {
        console.error(error);
    }
}

const handleDelete = async (event, id) => {
    try {
        const comment = await siteApi.deleteComment(id);
        const commentElm = document.getElementById(comment.id);

        // Remove divider and the comment element
        const divider = commentElm.nextSibling;
        commentElm.parentElement.removeChild(divider);
        commentElm.parentElement.removeChild(commentElm);
    } catch (error) {
        console.error(error);
    }
}

const removeErrorBorder = (event) => {
    const input = event.target;
    input.classList.remove('input__state--error');
}

window.addEventListener("load", loadComments);

formElm.addEventListener("submit", handleSubmit);
formElm.addEventListener("change", removeErrorBorder);
