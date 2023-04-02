const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require("./handler");

// making routes and set the handler
const routes = [
    {
        method: "post",
        path: "/notes",
        handler: addNoteHandler,
    },
    {
        method: "GET",
        path: "/notes",
        handler: getAllNotesHandler,
    },
    {
        method: "GET",
        path: "/notes/{id}",
        handler: getNoteByIdHandler,
    },
];

module.exports = routes;
