import React, {useState} from "react";
import PropTypes from 'prop-types';


const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState(value);

    const handleOnClick = () => {

        console.log('Click')
        setCounter(counter + 1)
    }

    const handleSubtract = () => {

        setCounter(counter - 1)
    }

    const handleReset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleOnClick}> + 1</button>
            <button onClick={handleReset}> Reset</button>
            <button onClick={handleSubtract}> - 1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

export default CounterApp;
