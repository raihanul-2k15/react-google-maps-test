import React from 'react';

const styles = {
    root: {
        padding: '0',
        width: '400px',
        fontSize: '14px',
        backgroundColor: 'white',
    },
    form: {
        width: '80%',
        padding: '10px',
        margin: '0 auto',
    },
    input: {
        width: '100%',
        height: '30px',
        margin: '10px 0',
        borderStyle: 'none',
        backgroundColor: '#d4d4d4',
        padding: '0',
    },
    button: {
        width: '100%',
        height: '40px',
        backgroundColor: '#1976d2',
        borderRadius: '5px',
        margin: '10px 0 20px 0',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

function Form({ coordinates, name }) {
    const onClick = e => {
        e.preventDefault();
        console.log(
            `Coordinates: { Lat: ${coordinates.lat}, Lng: ${coordinates.lng} }`
        );
        console.log(`Name: ${name}`);
    };

    return (
        <div style={styles.root}>
            <form style={styles.form} onSubmit={e => e.preventDefault()}>
                <h3 style={{ textAlign: 'center' }}>Log to Console</h3>
                <label htmlFor="coordinates">Coordinates:</label>
                <br />
                <input
                    readOnly={true}
                    style={styles.input}
                    id="coordinates"
                    type="text"
                    value={`Lat: ${coordinates.lat}, Lng: ${coordinates.lng}`}
                />
                <br />
                <label htmlFor="name">Name: </label>
                <br />
                <input
                    readOnly={true}
                    style={styles.input}
                    id="name"
                    type="text"
                    value={`${name}`}
                />
                <br />
                <button style={styles.button} onClick={onClick}>
                    Log To Console
                </button>
            </form>
        </div>
    );
}

export default Form;
