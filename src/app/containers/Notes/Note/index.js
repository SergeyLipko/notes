import React from 'react';
import {FloatingActionButton} from 'material-ui';
import BorderColor from 'material-ui/svg-icons/editor/border-color';
import './style.css';


const styles = {
  button: {
    marginRight: '10px'
  }
};

const Note = ({note, onClick}) => {
  return (
    <div className="note-wrapper">
      <span className="note-title">{note.title}</span><br/>
      <span className="note-text">{note.text}</span><br/>
      <div className="note-buttons-wrapper">
        <FloatingActionButton
          style={styles.button}
          mini={true}
          secondary={true}
          onClick={onClick}>
          <span className="note-close-icon">x</span>
        </FloatingActionButton>
        <FloatingActionButton
          backgroundColor='#78909C'
          style={styles.button}
          mini={true}>
          <BorderColor />
        </FloatingActionButton>
      </div>
    </div>
  )
};

export default Note;