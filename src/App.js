import React, { useState, useEffect } from 'react';
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

const myName = 'Raihanul Islam Refat';

const App = () => {
    const [locationInfo, setLocationInfo] = useState({
        location: null,
        status: '',
    });
    const [modalOpen, setModalOpen] = useState(false);

    const locationSuccessCallback = loc => {
        setLocationInfo({
            location: {
                lat: loc.coords.latitude,
                lng: loc.coords.longitude,
            },
            status: 'Location found',
        });
    };

    const locationErrorCallback = err => {
        setLocationInfo({ location: null, status: err.message });
    };

    useEffect(() => {
        if (navigator.geolocation === undefined) {
            setLocationInfo({
                location: null,
                status: 'Geolocation is unavailable in your browser',
            });
            return;
        }
        setLocationInfo({
            ...locationInfo,
            status: 'Requesting permission...',
        });
        navigator.geolocation.getCurrentPosition(
            locationSuccessCallback,
            locationErrorCallback,
            {
                timeout: 30000,
            }
        );
    }, []);

    return (
        <div>
            {locationInfo.location !== null ? (
                <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={10}
                        center={locationInfo.location}
                    >
                        <Marker
                            position={locationInfo.location}
                            onClick={() => setModalOpen(true)}
                        />
                    </GoogleMap>
                </LoadScript>
            ) : (
                <h4>{locationInfo.status}</h4>
            )}
            {modalOpen && (
                <Modal onClose={() => setModalOpen(false)}>
                    <Form coordinates={locationInfo.location} name={myName} />
                </Modal>
            )}
        </div>
    );
};

export default App;
