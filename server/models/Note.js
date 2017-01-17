import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const NoteSchema = new Schema({
  title: String,
  text: String,
  color: String,
  priority: String,
  date: String,
  time: String,
});

const Note = mongoose.model('Note', NoteSchema);
