import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { LatLngTuple } from "leaflet";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const position: LatLngTuple = [23.77348693964641, 90.36108286227207];

const MapComponent = () => {
  return (
    <section className="my-10 z-10">
      <MapContainer
        className="mx-auto rounded h-[300px] w-full lg:h-[400px]"
        center={position}
        zoom={12}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>OUTEQ, Dhaka, Bangladesh</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default MapComponent;
