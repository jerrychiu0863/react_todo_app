import React from 'react'; 
import PropTypes from 'prop-types';



const List = ({lists, onDismiss, children, getClassName}) => {
    return(
        <div>
        <span>{children}</span>
        <ul className="list">
           {lists.map( list => 
            <li key={list.id} className={getClassName(lists)}><span>{list.content}</span> 
             <button onClick={() => onDismiss(lists, list.id)}>Dismiss</button>
            </li>
            )
           }
        </ul>
        
        </div>
    );
}

List.porpTypes = {
    lists: PropTypes.array.isRequired,
    onDismiss: PropTypes.func.isRequired
}

export default List;