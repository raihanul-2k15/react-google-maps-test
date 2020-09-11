import React from 'react';

const MY_MODAL_ID = 'my-modal-id';

const styles = {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    backgroundColor: '#38383890',
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
