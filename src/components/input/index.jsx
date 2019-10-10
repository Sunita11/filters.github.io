import React from 'react';

import * as style from './style.scss';

const Input = (props) => {
    const { id, onFocus, maxLength, min, max, pattern, required, type, value, onInvalid, onInput, onChange} = props;
    return (
        <input
            type={type}
            id={id}
            name={name}
            onFocus={onFocus}
            value={value}
            pattern={pattern}
            onInvalid={onInvalid}
            maxLength={maxLength}
            min={min}
            max={max}
            onInput={onInput}
            onChange={onChange}
            required={required}
        />
    )
}

export default Input;