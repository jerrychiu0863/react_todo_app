import React from 'react'; 
import PropTypes from 'prop-types';

const Form = ({ isImportant, selectIsImportant, isUrgent, selectIsUrgent,  onInputChange, inputValue, onHandleSubmit}) => {
    return (
         <form onSubmit={onHandleSubmit}>
           
            <select 
               value={isImportant} 
               onChange={selectIsImportant}
            >
                <option value="important">Important</option>
                <option value="lessImportant">LessImportant</option>
            </select>
            
            <select 
               value={isUrgent} 
               onChange={selectIsUrgent}
            >
                <option value="urgent">Urgent</option>
                <option value="lessUrgent">LessUrgent</option>
            </select>
            
            <input 
                onChange={onInputChange} 
                value={inputValue} 
                placeholder="add todo list..." 
            />
            
            <button 
               type="submit" 
               onClick={onHandleSubmit} 
               className="btn btn--submit"
            >
                <i className="fas fa-plus-circle"></i>
            </button>
            
        </form>
    );
}

Form.propTypes = {
    isImportant: PropTypes.string.isRequired,
    selectIsImportant: PropTypes.func.isRequired,
    isUrgent: PropTypes.string.isRequired,
    selectIsUrgent: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    inPutValue: PropTypes.string,
    onHandleSubmit: PropTypes.func.isRequired
}

export default Form;