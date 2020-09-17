
import React, { Component } from 'react';
import './App.css'
import ListItems from './components/ListItems';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentItem:{
        text:'',
        key: ''
      }
    }
  }

  setUpdate= (text,key) =>{
    const items = this.state.items;
    items.map((item) =>{
      if(item.key===key){
        item.text = text;
      }
    } )
    this.setState({
      items: items
    })
   
}

  deleteItem = (key) => {
    this.setState({
    items: this.state.items.filter(function(item){
     return item.key !== key
    })
  })
  }

  inputHandler= (event) =>{
    this.setState({
      currentItem:{
        text: event.target.value,
        key: Date.now()
      }
    })
  }
  

  addItem = (event)=>{
    event.preventDefault();
    // console.log(this.state.currentItem);
    const newItem = this.state.currentItem;
    if(newItem.text !== ""){
      const items = [...this.state.items, newItem];
    
    this.setState({
      items: items,
      // items: [...this.state.items, this.state.currentItem],
      currentItem :{
        text:'',
        key:''
      }
      })
    }
  }

  render(){
    return(
      <div className="App">
        <form className ="app__form">
        <input placeholder ="Enter your text here" value ={this.state.currentItem.text}
        onChange={this.inputHandler}/>
        <button onClick={this.addItem}>Add</button>
        </form>

        <ListItems setUpdate={this.setUpdate} deleteItem={this.deleteItem} items ={this.state.items}/>
      </div>
    );
  }
}

export default App;