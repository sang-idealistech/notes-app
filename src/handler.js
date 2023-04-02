// require nanoid func and notes object
const { nanoid } = require("nanoid");
const notes = require("./notes");

// make func handler create or update notes (adding notes)
const addNoteHandler = (request, h) => {
    // title, tags, body : added by client
    const { title, tags, body } = request.payload;

    // id, createdAt, updatedAt : added manually
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    // push all properties to newNote obj
    const newNote = { title, tags, body, id, createdAt, updatedAt };
    notes.push(newNote);

    // make isSuccess variable
    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    // conditional isSuccess condition
    if (isSuccess) {
        const response = h.response({
            status: "success",
            message: "data berhasil ditambahkan",
            data: {
                noteId: id,
            },
        });

        response.code = 201;
        return response;
    }

    const response = h.response({
        status: "failed",
        message: "catatan gagal ditambahkan",
    });

    response.code = 500;

    return response;
};

// make func to read display of all notes
// ? why use ()?
const getAllNotesHandler = () => ({
    status: "success",
    data: {
        notes,
    },
});

const getNoteByIdHandler = (request, h) => {
    // get id value
    const { id } = request.params;

    const note = notes.filter((n) => n.id === id)[0];

    if (note !== undefined) {
        return {
            status: "success",
            data: {
                note,
            },
        };
    }

    const response = h.response({
        status: "failed",
        message: "can't found the note",
    });

    response.code(404);
    return response;
};

module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIdHandler };
