import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const mapStyles = { height: "400px", width: "100%" };
  const defaultCenter = { lat: 35.6895, lng: 139.6917 }; // Example: Tokyo

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={10}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
