import React from 'react';

const Input = (props) => {
    return (
        <div className="m-5 text-center">
            <input type="text" placeholder="Search" onChange={props.handleChange} />
        </div>
    );
};

export default Input;