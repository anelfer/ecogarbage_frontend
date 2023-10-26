import {Placemark, Map, YMaps} from "@pbe/react-yandex-maps";
import {useEffect, useState} from "react";
import $api from "../../API/axios";

export default function MapComponent() {
    const [points, setPoints] = useState([]);

    const getPoints = async () => {
        try {
            const result = await $api.get("/points");
            setPoints(result.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getPoints();
    }, []);

    return (
        <div className="container">
            <div className="block-map">
                <YMaps query={{apikey: "875f4f09-ea86-4d79-a31d-feffe87468ec"}}>
                    <Map width={1000} height={500} defaultState={{center: [47.204842, 38.943960], zoom: 16}}>
                        {points.map((point, index) => (<Placemark key={index} geometry={[point.lat, point.lng]} />))}
                    </Map>
                </YMaps>
            </div>
        </div>
    );
}
