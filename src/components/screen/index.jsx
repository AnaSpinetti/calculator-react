import React from "react"

export default function Screen({value, res}) {
    return (
        <>
            <div style={cssScreen}>
                <span style={cssScreenOperation}>{value}</span>
                <span style={cssScreenResult}>{res}</span>
            </div>
        </>
    )
}

// ESTILO
const cssScreen = {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#999',
    flexDirection: 'column',
    width: 280,
    borderRadius: 8
}

const cssScreenOperation = {
    fontSize: 25,
    color: '#fff',
    height: 20,
}

const cssScreenResult = {
    fontSize: 50,
    color: '#fff',
}