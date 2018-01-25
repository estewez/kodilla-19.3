import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text, user) {
    return {
        type: ADD_COMMENT,
        id: uuid.v4(),
        text,
        user
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    }
}

function thumbUpComment(id, upVotes) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        thumbUps: upVotes + 1
    }
}

function thumbDownComment(id, downVotes) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        thumbDowns: downVotes + 1
    }
}