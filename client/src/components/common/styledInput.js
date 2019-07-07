import React from 'react';

const StyledInput = (props) => {
  return(
    <div>
      <input
        onChange={props.onChange}
        onKeyPress={props.onKeyPress}
        type={props.inputType}
        placeholder={props.label}
        className={props.inputStyle}
        />
    </div>
  )
}

export default StyledInput;
