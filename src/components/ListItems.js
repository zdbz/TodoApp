import React,{Component} from 'react';
import './ListItems.css';
import FlipMove from 'react-flip-move';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


const ListItems = ({items, deleteItem, setUpdate}) =>{

    const completeItem=(item)=>{
        document.getElementById(item.key).style.textDecoration = "line-through";
      }
    return(
        <div>
            <FlipMove duration ={300} easing="ease-in-out">
            {      
            items.map((item) => (
                <div className="listitem__list" key ={item.key}>
                <p>
                    <input id= {item.key} type="text"
                     value={item.text}
                     onChange={
                         (e)=>{
                             setUpdate(e.target.value, item.key)
                         }
                     }
                     /> 
                <span className="listitem__delete" 
                onClick ={()=> deleteItem(item.key)}>
                    <DeleteIcon/>
                </span>
                <div className="listitem__completed" onClick ={()=> completeItem(item)}><CheckBoxIcon/> </div>
                </p>
                
                </div>
            ))
            }
            </FlipMove>
        </div>
    );
}
export default ListItems;