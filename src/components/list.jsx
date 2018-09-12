import React from 'react'; 
import PropTypes from 'prop-types';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';



const List = ({lists, onDismiss, children, getClassName, handleGoUp, handleGoDown}) => {
    return(
        <div>
        <span>{children}</span>
        <ul className="list">
           
           {lists.map( list => 
            <li key={list.id} className={getClassName(lists)}><span>{list.content}</span> 
             <button onClick={() => onDismiss(lists, list.id)}>Dismiss</button>
              <button onClick={() => handleGoUp(lists, list.id)}>Up</button>
              <button onClick={() => handleGoDown(lists, list.id)}>Down</button>
            </li>
            )
           }
            
        </ul>
        
        </div>
    );
}

List.porpTypes = {
    lists: PropTypes.array.isRequired,
    onDismiss: PropTypes.func.isRequired,
    children: PropTypes.node,
    getClassName: PropTypes.func.isRequired,
    handleGoUp: PropTypes.func.isRequired,
    handleGoDown: PropTypes.func.isRequired
}

export default List;