import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ onHandleActiveKey, activeKey }) => {
    return(
        <div className="list__nav">
           
            <a 
                href="#imAndUrgLists" 
                onClick={() => onHandleActiveKey(1)} 
                className={activeKey === 1 ? 'active' : null}
            >
                Importance <sup>+</sup> &nbsp; Urgency<sup>+</sup>
            </a>
            <a 
                href="#lessImAndUrgLists" 
                onClick={() => onHandleActiveKey(2)} 
                className={activeKey === 2 ? 'active' : null}
            >
                Importance<sup>-</sup> &nbsp; Urgency<sup>+</sup>
            </a>
            <a 
                href="#imAndLessUrgLists" 
                onClick={() => onHandleActiveKey(3)} 
                className={activeKey === 3 ? 'active' : null}
            >
                Importance<sup>+</sup> &nbsp; Urgency<sup>-</sup>
            </a>
            <a 
                href="#lessImAndLessUrgLists" 
                onClick={() => onHandleActiveKey(4)} 
                className={activeKey === 4 ? 'active' : null}
            >
                Importance<sup>-</sup> &nbsp; Urgency<sup>-</sup>
            </a>
            
        </div>
    );
}

Nav.propType = {
    onHandleActiveKey: PropTypes.func.isRequired,
    activeKey: PropTypes.number.isRequired
}

export default Nav;