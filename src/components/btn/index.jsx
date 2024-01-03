import React from "react"

export default function Btn({label, onClick}){

    const btnColor = (label) => {
        if(isNaN(label) && label !== '.' && label !== '<-'){
            return cssBtnSymbols
        }

        return cssBtn;
    }

    return (
        <button style={btnColor(label)} onClick={onClick}>
            {label}
        </button>
    )
}

const cssBtn = {
    fontSize: 30,
    height: 75,
    width: 75,
    padding: 20,
    backgroundColor: '#DACEC2',
    borderRadius: 50,
    border: 'none',
    marginRight: 5,
    color: '#fff',
    textAlign: 'center',
    outline: 'none',
    cursor: 'pointer'
}

const cssBtnSymbols = {
    fontSize: 30,
    height: 75,
    width: 75,
    padding: 20,
    backgroundColor: '#FCA146',
    borderRadius: 50,
    border: 'none',
    marginRight: 5,
    marginBottom: 5,
    marginTop: 5,
    color: '#fff',
    textAlign: 'center',
    outline: 'none',
    cursor: 'pointer'
}

