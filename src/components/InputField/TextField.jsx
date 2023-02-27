import React from 'react'

const TextInput = ({ borderwidth, borderColor, lebelColor, textColor, type, lebelBg, bg, placeholder, lebel, children }) => {
    return (

        <div className={`input-field-wrapper border-${borderColor}  border-${borderwidth} ${bg}`}>
            <div className="input-inner">
                <input type={type} placeholder={placeholder} className={`text-${textColor}`} />
                {children}
            </div>
            <span className={`lebel ${lebelBg} text-${lebelColor}`}>{lebel}</span>

        </div>



    )
}

export default TextInput