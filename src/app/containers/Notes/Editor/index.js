import React, { Component } from 'react';
import {TextField, FloatingActionButton} from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {connect} from 'react-redux';
import {addNote} from '../../../redux/modules/notes';
import './style.css';




const mapStateToProps = ({notes}) => ({
  _notes: notes.notes
});
const mapDispatchToProps = dispatch => ({
  addNote: data => dispatch(addNote(data)),
});

class Editor extends Component {
  state={
    title: '',
    text: '',
    emptyText: false,
    empty: {
      title: true,
      text: true
    }
  };

  render() {
    let {title, text, emptyText} = this.state;

    return (
      <div className="editor-wrapper">
        <h1>Editor</h1>
        <TextField
          underlineFocusStyle={{color: '#00bcd4'}}
          onChange={this.handleChange('title')}
          value={title}
          onBlur={() => this.onFieldBlur('title')}
          hintText='Note title'/>
        <TextField
          multiLine={true}
          rowsMax={4}
          underlineFocusStyle={{color: '#00bcd4'}}
          onChange={this.handleChange('text')}
          onBlur={() => this.onFieldBlur('text')}
          value={text}
          hintText='Note text'/>
        {
          emptyText &&
          <span className="editor-empty-field-msg">
            At least one of this field should be not empty
          </span>
        }
        <FloatingActionButton
          style={{marginTop: '20px'}}
          onClick={this._addNote}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }

  onFieldBlur = field => {
    if(this.state[field].length === 0){
      this.setState({
        empty: {
          ...this.state.empty,
          [field]: true
        }
      });
    } else {
      this.setState({
        empty: {
          ...this.state.empty,
          [field]: false
        }
      });
    }
  };

  handleChange = field => event => {
    this.setState({
      [field]: event.target.value,
    });
  };


  _addNote = () => {
    let {title, text, empty} = this.state;
    if(!empty.title || !empty.text){
      this.props.addNote({title, text});
      this.setState({
        title: '',
        text: '',
        emptyText: false,
        empty: {
          title: true,
          text: true
        }
      });
    } else {
      this.setState({
        emptyText: true
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
