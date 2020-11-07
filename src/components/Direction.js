import React from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px'
};
 
const location = {
  lat: 23.732743, lng: 90.429040
};

function Direction({origin, destination}) {
  const [directionResponse, setDirectionResponse] = useState(null);
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDzS9YcSBpjDqunij1wOfU_j9wExzDJYHA"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={16}
      >

        {
          origin !== '' && destination !== '' &&<DirectionsService
          options={{
            destination: destination,
            origin:origin,
            travelMode: 'DRIVING'
          }}
          callback={res => {
            if (res !== null) {
              setDirectionResponse(res);
            }
          }}

        />
        }

        {
          directionResponse && <DirectionsRenderer
            options={{ 
              directions: directionResponse
            }}
          />
        }
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Direction)









