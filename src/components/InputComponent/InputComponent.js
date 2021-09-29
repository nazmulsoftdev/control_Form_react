import React from 'react'

function InputComponent({type,name,value,required,autoComplete,placeholder,handleInput}) {
    return (
        <>
            <input type={type} name={name} value={value} required={required}
                onChange={handleInput} autoComplete={autoComplete} placeholder={placeholder} />
        </>
    )
}

export default InputComponent
