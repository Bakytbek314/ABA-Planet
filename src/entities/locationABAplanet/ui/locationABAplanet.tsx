import {useEffect} from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import DG from "2gis-maps";

const LocationABAplanet = () => {

    useEffect( () => {
        let map;
        // eslint-disable-next-line prefer-const
        map = DG.map("ourContacts-container", {
            center: [40.509942, 72.811327],
            zoom: 16,
        })

        DG.marker([40.510023, 72.811259]).addTo(map)

        return () => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            map && map.remove();
        }
    }, [] );

    return (
        <div id={"ourContacts-container"} style={{ width: "100%", height: "100%", borderRadius: "30px" }}></div>
    );
};

export default LocationABAplanet;