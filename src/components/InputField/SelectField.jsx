import React, { useState } from 'react'

const SelectTwoField = ({ ListData, headerColor, itemColor, borderwidth, borderColor, lebelColor, lebelBg, bg, lebel }) => {

    const [from, setFrom] = useState(ListData[0])
    const [to, setto] = useState(ListData[1])
    const [handleLing, sethandleLing] = useState('from')
    const [selectStatus, setselectStatus] = useState('down')
    const swapDir = () => {
        setto(from)
        setFrom(to)

    }

    return (

        <div className={`select-field-wrapper border-${borderColor}  border-${borderwidth} ${bg}`}>
            <div className="select-header">
                <div className="from-to-wrapper"><div className="from-to" onClick={() => selectStatus === 'down' ? setselectStatus('up') : setselectStatus('down')}>
                    <button className={`select-value text-${headerColor}`} onClick={() => sethandleLing('from')}>{from}</button>
                    <p className={`select-value text-${headerColor}`}>-</p>
                    <button className={`select-value text-${headerColor}`} onClick={() => sethandleLing('to')}>{to}</button>
                </div></div>
                <button onClick={swapDir}>                <i class={`fi fi-sr-exchange text-${headerColor}`}></i>
                </button>
            </div>
            <span className={`lebel ${lebelBg} text-${lebelColor}`}>{lebel}</span>
            <div className={`select-body ${selectStatus} border-${borderColor}  border-${borderwidth} ${bg}`}>
                <ul className="select__item-menu">
                    {
                        ListData.map(element => <li className={`border-${borderColor} ${(handleLing === 'from' && element === to) ? 'display-none' : ''} ${(handleLing === 'to' && element === from) ? 'display-none' : ''} select__item text-${itemColor}`} onClick={() => { setselectStatus('down'); handleLing === 'from' ? setFrom(element) : setto(element) }}>{element}</li>)

                    }
                </ul>
            </div>
        </div >



    )
}

export default SelectTwoField;




export const SelectSingleField = () => {
    return (
        <div>SelectField</div>
    )
}

