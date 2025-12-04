import React, { useEffect } from "react";
import * as Location from "expo-location";

export default function AutoLocation({ onLocationFetched }) {
  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          alert("Location permission denied");
          return;
        }

        const loc = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = loc.coords;

        const geocode = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        let readableAddress = "";
        if (geocode.length > 0) {
          const place = geocode[0];
          readableAddress = [
            place.name,
            place.street,
            place.district,
            place.city,
            place.subregion,
            place.region,
            place.postalCode,
            place.country,
          ]
            .filter((v) => v && !v.includes("+")) // remove plus code
            .join(", ");
        }

        onLocationFetched({ latitude, longitude, address: readableAddress });
      } catch (err) {
        console.log("Error fetching location:", err);
      }
    };

    getLocation();
  }, []);

  return null;
}
