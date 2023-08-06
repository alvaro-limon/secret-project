import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ address }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '150px',
  };

  const center = {
    lat: 20.68633022416052, // Replace with the latitude of the address
    lng: -103.39158881534057, // Replace with the longitude of the address
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAvWWHtFkKTzjEShz2SONI9gDpDr5mLKtI">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;