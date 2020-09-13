import React from "react";
import PropTypes from 'prop-types';

const App = ({greet, sub}) => {
    return (
        <>
            <h1>{greet}</h1>
            <p>{sub}</p>
        </>
    )
}

App.propTypes = {
    greet: PropTypes.string.isRequired
}
App.defaultProps = {
    sub: 'Sub default'
}

export default App;
