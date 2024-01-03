import React, { useState } from "react";

export default function Calculator() {
    const [screenValue, setScreenValue] = useState('');
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState(0);
    const [hasOperatorSelected, setHasOperatorSelected] = useState(false);

    // FUNCOES
    const addNumberToScreen = (btnValue) => {
        if (['+', '-', '*', '/'].includes(btnValue) && hasOperatorSelected) {
            setHasOperatorSelected(false)
            setScreenValue(result + btnValue)
            return;
        }

        if (hasOperatorSelected) {
            setScreenValue(btnValue)
            setHasOperatorSelected(false)
            return
        }

        const num = screenValue + btnValue
        setScreenValue(num)
    }

    const clearScreen = () => {
        setScreenValue('')
        setHasOperatorSelected(false)
        setResult(0)
        setHistory(0)

        return
    }

    const operation = (operation) => {
        if (operation === 'backspace') {
            let vScreen = screenValue
            vScreen = vScreen.substring(0, (vScreen.length - 1))
            setScreenValue(vScreen)
            setHasOperatorSelected(false)
        }

        try {

            // O Eval vai avaliar a expressão que concatenei e realizar o calculo
            const result = eval(screenValue)
            setHistory(result)
            setResult(result)
            setHasOperatorSelected(true)

        } catch (error) {
            console.log(error)
            setResult('Erro ao realizar calculo');
        }
    }

    // COMPONENTES
    const Screen = (value, res) => {
        return (
            <>
                <div style={cssScreen}>
                    <span style={cssScreenOperation}>{value}</span>
                    <span style={cssScreenResult}>{res}</span>
                </div>
            </>
        )
    }

    const Btn = (label, onClick) => {
        return (
            <button style={cssBtn} onClick={onClick}>
                {label}
            </button>
        )
    }

    // ESTILOS
    const cssContainer = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 300,
        border: '1px solid #000',

    }

    const cssButtons = {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

    const cssScreen = {
        display: 'flex',
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#444',
        flexDirection: 'column',
        width: 260
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

    const cssBtn = {
        fontSize: 30,
        height: 75,
        width: 75,
        padding: 20,
        backgroundColor: '#000',
        color: '#fff',
        borderColor: '#000',
        textAlign: 'center',
        outline: 'none'
    }

    return (
        <>
            <div style={cssContainer}>
                <h3>Calculadora</h3>
                {Screen(screenValue, result)}
                <div style={cssButtons}>
                    {Btn('AC', clearScreen)}
                    {Btn('(', () => addNumberToScreen('('))}
                    {Btn(')', () => addNumberToScreen(')'))}
                    {Btn('/', () => addNumberToScreen('/'))}

                    {Btn('7', () => addNumberToScreen('7'))}
                    {Btn('8', () => addNumberToScreen('8'))}
                    {Btn('9', () => addNumberToScreen('9'))}
                    {Btn('*', () => addNumberToScreen('*'))}

                    {Btn('4', () => addNumberToScreen('4'))}
                    {Btn('5', () => addNumberToScreen('5'))}
                    {Btn('6', () => addNumberToScreen('6'))}
                    {Btn('-', () => addNumberToScreen('-'))}

                    {Btn('1', () => addNumberToScreen('1'))}
                    {Btn('2', () => addNumberToScreen('2'))}
                    {Btn('3', () => addNumberToScreen('3'))}
                    {Btn('+', () => addNumberToScreen('+'))}

                    {Btn('0', () => addNumberToScreen('0'))}
                    {Btn('.', () => addNumberToScreen('.'))}
                    {Btn('<-', () => operation('backspace'))}
                    {Btn('=', () => operation('='))}

                </div>
            </div>
        </>
    )
}