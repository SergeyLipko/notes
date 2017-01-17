import React from 'react';
import {Drawer, FloatingActionButton, MenuItem} from 'material-ui';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {connect} from 'react-redux';
import {logOut} from './redux/modules/users';


const styles = {
  menuButton: {
    position: 'absolute',
    top: '15px',
    right: '15px'
  }
};


const mapDispatchToProps = dispatch => ({
  _logOut: () => dispatch(logOut())
});

class App extends React.Component {
  state = {
    open: false
  };

  render() {
    let {open} = this.state;
    return (
      <div className="App">
        <Drawer
          containerClassName='drawer-wrapper'
          width={200}
          open={this.state.open}>
          <MenuItem
            onClick={this.onMenuItemClick(this.props._logOut)}
            primaryText="Log Out"/>

        </Drawer>
        <FloatingActionButton
          mini={true}
          onClick={() => this.setState({open: !open})}
          style={styles.menuButton}>
          <Menu />
        </FloatingActionButton>
        {this.props.children}
      </div>
    );
  }



  onMenuItemClick = callback => () => {
    callback();
    this.setState({
      open: !this.state.open
    })
  }
}

export default connect(null, mapDispatchToProps)(App);

