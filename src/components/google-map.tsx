// components/Map.tsx
import styles from "@/styles";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const center = useMemo(() => ({ lat: 40.7128, lng: -74.006 }), []); // Нью-Йорк

  return (
    <section className={`w-full ${styles.sectionPadding}`}>
      {!isLoaded ? (
        <div className="w-full h-[600px] flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="w-full h-[600px]"
        >
          <Marker position={center} />
        </GoogleMap>
      )}

      
    </section>

  );
};

export default Map;

