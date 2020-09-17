import React from 'react';

const MY_MODAL_ID = 'my-modal-id';

const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    margin: 0,
    backgroundColor: '#2f2f2f90',
    width: '100%',
    height: '100vh',
};

function Modal({ onClose, children }) {
    const modalClose = e => {
        if (typeof onClose === 'function' && e.target.id === MY_MODAL_ID) {
            onClose(e);
        }
    };

    return (
        <div id={MY_MODAL_ID} style={styles} onClick={modalClose}>
            {children}
        </div>
    );
}

export default Modal;
