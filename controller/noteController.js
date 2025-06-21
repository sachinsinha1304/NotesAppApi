const Note = require('../models/notesModel');

exports.getAll = async (req, res) => {
  const [rows] = await Note.getAllNotes();
  res.json(rows);
};

exports.getById = async (req, res) => {
  const [rows] = await Note.getNoteById(req.params.id);
  rows.length ? res.json(rows[0]) : res.status(404).send('Note not found');
};

exports.create = async (req, res) => {
  const { title, content } = req.body;
  const [result] = await Note.createNote(title, content);
  res.status(201).json({ id: result.insertId, title, content });
};

exports.update = async (req, res) => {
  const { title, content } = req.body;
  await Note.updateNote(req.params.id, title, content);
  res.send('Note updated');
};

exports.delete = async (req, res) => {
  await Note.deleteNote(req.params.id);
  res.send('Note deleted');
};
