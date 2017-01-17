import React from 'react';
import {connect} from 'react-redux';
import {notesRequest, removeNote} from '../../redux/modules/notes';
import Editor from './Editor';
import Note from './Note';
import './style.css';





const mapStateToProps = ({notes}) => ({
  _notes: notes.notes
});
const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(notesRequest()),
  removeNote: id => dispatch(removeNote(id)),
});

class Notes extends React.Component {
  componentWillMount(){
    this.props.loadData();
  };

  render(){
    return (
      <div className="app-wrapper">
        <Editor />
        <div className="content">
          {this.props._notes.map(this.renderNote)}
        </div>
      </div>
    )
  }


  renderNote = (note, key) => {
    return (
      <Note
        key={key}
        note={note}
        onClick={() => this._removeNote(key)}
      />
    )
  };

  _removeNote = index => {
    let id = this.props._notes[index]._id;
    this.props.removeNote(id);
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Notes);