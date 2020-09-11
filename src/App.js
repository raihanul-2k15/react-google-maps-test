import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import Modal from './Modal';
import Form from './Form';

// I don't have a credit card so no API key :(
// Otherwise would have read the key from a .env file
// const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

// This allows the map to load with placeholder tiles
const GOOGLE_MAPS_API_KEY = undefined;

const mapStyles = {
    height: '100vh',
    width: '100%',
};

const myName = 'Raihanul Islam';
const myLocation = {
    lat: 22.896807,
    lng: 89.508878,
};

const App = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={10}
                    center={myLocation}
                >
                    <Marker
                        position={myLocation}
                        onClick={() => setModalOpen(true)}
                    />
                </GoogleMap>
            </LoadScript>
            {modalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                    <Form coordinates={myLocation} name={myName} />
                </Modal>
            )}
        </div>
    );
};

export default App;
