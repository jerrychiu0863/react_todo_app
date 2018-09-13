import React, { Component } from 'react';

import './App.css';
import List from './components/list';
import Form from './components/form';
import Nav from './components/nav';

import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
          inputValue: '',
          activeKey: 1,
          isImportant: 'important',
          isUrgent: 'urgent',
          imAndUrgLists: [{content: 'Pay Bills', id: uniqid()}],
          imAndLessUrgLists: [],
          lessImAndUrgLists: [],
          lessImAndLessUrgLists: []
      }
  }
    
  onInputChange = e => {
      this.setState({ 
                        inputValue: e.target.value
                    });
  }
       
  onHandleSubmit = (e) => {
      const { inputValue, isImportant, isUrgent, imAndUrgLists, imAndLessUrgLists, lessImAndUrgLists,  lessImAndLessUrgLists } = this.state;
      
      if(inputValue.length === 0 ) {
        alert('Please add somthing!!')
      } else {
          if(isImportant === 'important' && isUrgent === 'urgent') {
       
          this.setState({ imAndUrgLists: [...imAndUrgLists, {content: inputValue, id: uniqid()}] });
          
      
          } else if (isImportant === 'important' && isUrgent === 'lessUrgent') {

              this.setState({ imAndLessUrgLists: [...imAndLessUrgLists, {content: inputValue, id: uniqid()}] });

          } else if (isImportant === 'lessImportant' && isUrgent === 'urgent') {

              this.setState({ lessImAndUrgLists: [...lessImAndUrgLists, {content: inputValue, id: uniqid()}] });

          } else {

              this.setState({lessImAndLessUrgLists: [...lessImAndLessUrgLists, {content: inputValue, id: uniqid()}]});

          }
      }
          
      this.setState({ inputValue: '' });
      e.preventDefault();
  }
  
  selectIsImportant = e => {
      this.setState({ isImportant: e.target.value });
  }
  
  selectIsUrgent = e => {
      this.setState({ isUrgent: e.target.value });
  }
  
  onHandleActiveKey = (key) => {
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
                    handleGoDown={this.handleGoDown}
                    handleClearList={this.handleClearList}
                 >
                 </List>
      } else if (activeKey === 2) {
          return <List 
                    lists={lessImAndUrgLists} 
                    onDismiss={this.onDismiss} 
                    getClassName={this.getClassName} 
                    handleGoUp={this.handleGoUp} 
                    handleGoDown={this.handleGoDown}
                    handleClearList={this.handleClearList}
                 >
                 </List>
      } else if (activeKey === 3) {
          return <List 
                    lists={imAndLessUrgLists} 
                    onDismiss={this.onDismiss} 
                    getClassName={this.getClassName} 
                    handleGoUp={this.handleGoUp} 
                    handleGoDown={this.handleGoDown}
                    handleClearList={this.handleClearList}
                 >
                 </List>
      } else {
          return <List 
                    lists={lessImAndLessUrgLists} 
                    onDismiss={this.onDismiss} 
                    getClassName={this.getClassName} 
                    handleGoUp={this.handleGoUp} 
                    handleGoDown={this.handleGoDown}
                    handleClearList={this.handleClearList}
                 >
                 </List>
      }
  }
  
  onDismiss = (lists, listId) => {
      
      const { imAndUrgLists, imAndLessUrgLists, lessImAndUrgLists } = this.state;
      const updatedLists = lists.filter(list => listId !== list.id); 
      
      if(lists === imAndUrgLists) {
          this.setState({ 
                          imAndUrgLists: updatedLists
                       });
      } else if (lists === imAndLessUrgLists) {
          this.setState({ 
                          imAndLessUrgLists: updatedLists 
                       });
      } else if (lists === lessImAndUrgLists) {
          this.setState({ 
                          lessImAndUrgLists: updatedLists 
                       });
      } else {
          this.setState({ 
                          lessImAndLessUrgLists: updatedLists 
                       });
      }

  }
  
  getClassName = (lists) => { 
    const { imAndUrgLists, imAndLessUrgLists, lessImAndUrgLists } = this.state;  
      
    let className="list__item list__item-";
    
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
          
      };
      
      const newLists = moveItem(index, index + 1);
      this.setState({lists: newLists});
      
  }
  
  handleClearList = (lists) => {
      const { imAndUrgLists, imAndLessUrgLists, lessImAndUrgLists } = this.state;  
       
      if(lists === imAndUrgLists) {
          this.setState({ 
                            imAndUrgLists: [] 
                        });
      } else if(lists === imAndLessUrgLists){
          this.setState({ 
                          imAndLessUrgLists: [] 
                       });
      } else if(lists === lessImAndUrgLists) {
          this.setState({ 
                          lessImAndUrgLists: [] 
                       })
      } else {
          this.setState({ 
                          lessImAndLessUrgLists: [] 
                       });
      }
  }
  
  render() {
      const { inputValue, isImportant, isUrgent, activeKey } = this.state;
  
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
        
            <Nav onHandleActiveKey={this.onHandleActiveKey} activeKey={activeKey} />
                
            <div>
                {this.renderList()}
            </div>
                 
        </div>
        
      </div>
    );
  }
}
 

export default App;
