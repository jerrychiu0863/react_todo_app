import React, { Component } from 'react';

import './App.css';
import List from './components/list';
import Form from './components/form';
import uniqid from 'uniqid';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

/*
const sliderStyle = {
    position: 'relative',
  width: '100%',
  height: 80,
  border: '1px solid steelblue',
}

const railStyle = {
     position: 'absolute',
  width: '100%',
  height: 10,
  marginTop: 35,
  borderRadius: 5,
  backgroundColor: '#8B9CB6',
}

*/

const lists = ['abe', 'cegsa', 'gge5'];

class App extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
          inputValue: '',
          activeKey: 1,
          isImportant: 'important',
          isUrgent: 'urgent',
          imAndUrgLists: [],
          imAndLessUrgLists: [],
          lessImAndUrgLists: [],
          lessImAndLessUrgLists: []
      }
  }
    
  onInputChange = e => {
      this.setState({ inputValue: e.target.value
                    });
  }
       
  onHandleSubmit = (e) => {
      const { inputValue, isImportant, isUrgent, imAndUrgLists, imAndLessUrgLists, lessImAndUrgLists,  lessImAndLessUrgLists } = this.state;
      
      if(inputValue.length === 0 ) {
        alert('Please add somthing!!')
      } else {
          if(isImportant === 'important' && isUrgent === 'urgent') {
       
          this.setState({imAndUrgLists: [...imAndUrgLists, {content: inputValue, id: uniqid()}] });
          
      
          } else if (isImportant === 'important' && isUrgent === 'lessUrgent') {

              this.setState({ imAndLessUrgLists: [...imAndLessUrgLists, {content: inputValue, id: uniqid()}] });

          } else if (isImportant === 'lessImportant' && isUrgent === 'urgent') {

              this.setState({lessImAndUrgLists: [...lessImAndUrgLists, {content: inputValue, id: uniqid()}]});

          } else {

              this.setState({lessImAndLessUrgLists: [...lessImAndLessUrgLists, {content: inputValue, id: uniqid()}]});

          }
      }
          
      this.setState({inputValue: ''});
      e.preventDefault();
  }
  
  selectIsImportant = e => {
      this.setState({ isImportant: e.target.value });
  }
  
  selectIsUrgent = e => {
      this.setState({ isUrgent: e.target.value });
  }
  
  onHandleActiveKey(key) {
      this.setState({ activeKey: key });
  }

  renderList = () => {
      const { activeKey, imAndUrgLists, lessImAndUrgLists, imAndLessUrgLists, lessImAndLessUrgLists } = this.state;
      
      if(activeKey === 1) {
          return <List 
                    lists={imAndUrgLists} 
                    onDismiss={this.onDismiss} 
                    getClassName={this.getClassName} 
                    handleGoUp={this.handleGoUp} 
                    handleGoDown={this.handleGoDown}>
                 </List>
      } else if (activeKey === 2) {
          return <List lists={lessImAndUrgLists} onDismiss={this.onDismiss} getClassName={this.getClassName} handleGoUp={this.handleGoUp} handleGoDown={this.handleGoDown}></List>
      } else if (activeKey === 3) {
          return   <List lists={imAndLessUrgLists} onDismiss={this.onDismiss} getClassName={this.getClassName} handleGoUp={this.handleGoUp} handleGoDown={this.handleGoDown}></List>
      } else {
          return  <List lists={lessImAndLessUrgLists} onDismiss={this.onDismiss} getClassName={this.getClassName} handleGoUp={this.handleGoUp} handleGoDown={this.handleGoDown}></List>
      }
  }
  
  onDismiss = (lists, listId) => {
      
      const {imAndUrgLists, imAndLessUrgLists, lessImAndUrgLists} = this.state;
      const updatedLists = lists.filter(list => listId !== list.id); 
      
      if(lists === imAndUrgLists) {
          this.setState({imAndUrgLists: updatedLists});
      } else if (lists === imAndLessUrgLists) {
          this.setState({imAndLessUrgLists: updatedLists})
      } else if (lists === lessImAndUrgLists) {
          this.setState({lessImAndUrgLists: updatedLists})
      } else {
          this.setState({lessImAndLessUrgLists: updatedLists});
      }

  }
  
  getClassName = (lists) => { 
    const { imAndUrgLists, imAndLessUrgLists, lessImAndUrgLists, lessImAndLessUrgLists } = this.state;  
      
    let className="list__item list__item-";
    console.log(lists);
    if(lists === imAndUrgLists) {
        className += "first";
    } else if(lists === lessImAndUrgLists) {
          className += "second";
    } else if(lists === imAndLessUrgLists) {
        className += "third"
    } else {
        className += "fourth"
    }
    return className;
     
  }
  
  handleGoUp = (lists, listId) => {
      
      const index = lists.map(list => list.id).indexOf(listId);
      const moveItem = (from, to) => {
          var updatedList = lists.splice(from, 1)[0];
          lists.splice(to, 0, updatedList)
          
      }
      
      if(index !== 0) {
        const newLists = moveItem(index, index - 1);
        this.setState({lists: newLists});
      }
        
  }
  
  handleGoDown = (lists, listId) => {
      
      const index = lists.map(list => list.id).indexOf(listId);
      const moveItem = (from, to) => {
          var updatedList = lists.splice(from, 1)[0];
          lists.splice(to, 0, updatedList)
          
      }
      const newLists = moveItem(index, index + 1);
      this.setState({lists: newLists});
      
  }
  
  render() {
      const { inputValue, isImportant, isUrgent, imAndUrgLists,
          imAndLessUrgLists, lessImAndUrgLists, lessImAndLessUrgLists, activeKey } = this.state;
  
    return (
      <div className="App">
        <Form 
            isImportant= {isImportant} 
            selectIsImportant={this.selectIsImportant}
            isUrgent={isUrgent}
            selectIsUrgent={this.selectIsUrgent}
            onInputChange={this.onInputChange}
            inputValue={inputValue}
            onHandleSubmit={this.onHandleSubmit}
        
        />
        <div className="list__container">
        
            <div className="list__nav">
                <a href="#" onClick={() => this.onHandleActiveKey(1)} className={activeKey === 1 ? 'active' : null}>Imp and UGT</a>
                <a href="#" onClick={() => this.onHandleActiveKey(2)} className={activeKey === 2 ? 'active' : null}>LessImp and UGT</a>
                <a href="#" onClick={() => this.onHandleActiveKey(3)} className={activeKey === 3 ? 'active' : null}>Imp and LessUGT</a>
                <a href="#" onClick={() => this.onHandleActiveKey(4)} className={activeKey === 4 ? 'active' : null}>LEssImp and LessUGT</a>
            </div>
                
            <div>
                {this.renderList()}
            </div>
                 
        </div>
        
      </div>
    );
  }
}
 

export default App;
