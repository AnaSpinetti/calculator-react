import React, { useState } from "react";
import Screen from "../screen";
import Btn from "../btn";

export default function Calculator() {
    const [screenValue, setScreenValue] = useState('');
    const [result, setResult] = useState(0);
    const [history, setHistory] = useState(0);
    const [hasOperatorSelected, setHasOperatorSelected] = useState(false);


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
            setResult('Error');
        }
    }


    return (
        <>
            <div style={cssContainer}>
                {<Screen value={screenValue} res={result} />}
                <div style={cssButtons}>
                    {<Btn label={'AC'} onClick={clearScreen} />}
                    {<Btn label={'('} onClick={() => addNumberToScreen('(')} />}
                    {<Btn label={')'} onClick={() => addNumberToScreen(')')} />}
                    {<Btn label={'/'} onClick={() => addNumberToScreen('/')} />}

                    {<Btn label={'7'} onClick={() => addNumberToScreen('7')} />}
                    {<Btn label={'8'} onClick={() => addNumberToScreen('8')} />}
                    {<Btn label={'9'} onClick={() => addNumberToScreen('9')} />}
                    {<Btn label={'*'} onClick={() => addNumberToScreen('*')} />}

                    {<Btn label={'4'} onClick={() => addNumberToScreen('4')} />}
                    {<Btn label={'5'} onClick={() => addNumberToScreen('5')} />}
                    {<Btn label={'6'} onClick={() => addNumberToScreen('6')} />}
                    {<Btn label={'-'} onClick={() => addNumberToScreen('-')} />}

                    {<Btn label={'1'} onClick={() => addNumberToScreen('1')} />}
                    {<Btn label={'2'} onClick={() => addNumberToScreen('2')} />}
                    {<Btn label={'3'} onClick={() => addNumberToScreen('3')} />}
                    {<Btn label={'+'} onClick={() => addNumberToScreen('+')} />}

                    {<Btn label={'0'} onClick={() => addNumberToScreen('0')} />}
                    {<Btn label={'.'} onClick={() => addNumberToScreen('.')} />}
                    {<Btn label={'<-'} onClick={() => operation('backspace')} />}
                    {<Btn label={'='} onClick={() => operation('=')} />}
                </div>
            </div>
        </>
    )
}

    const cssContainer = {
        display: 'flex',
        margin: '0 auto',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 330,
        border: '1px solid #f4f4f4',
        paddingTop: 20,
        borderRadius: 10,
        backgroundColor: '#000'
    }

    const cssButtons = {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 20
    }