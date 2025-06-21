const db = require('../configs/db');

exports.getAllNotes = () => db.query("SELECT * FROM notes");

exports.getNoteById = (id) => db.query("SELECT * FROM notes WHERE id = ?", [id]);

exports.createNote = (title, content) =>
  db.query("INSERT INTO notes (title, content) VALUES (?, ?)", [title, content]);

exports.updateNote = (id, title, content) =>
  db.query("UPDATE notes SET title = ?, content = ? WHERE id = ?", [title, content, id]);

exports.deleteNote = (id) =>
  db.query("DELETE FROM notes WHERE id = ?", [id]);
