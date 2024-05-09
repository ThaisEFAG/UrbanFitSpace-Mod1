import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Mapa(props) {
  const { position, markers } = props;
  if (!markers) return null;
  if(markers === 0) {
    console.log(markers)
  }
  return (
    <MapContainer
      center={position}
      zoom={10}
      scrollWheelZoom={false}
      {...props}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((locaisMap, index) => {
       return <Marker key={index} position={[Number(locaisMap.localizacao_latitude), Number(locaisMap.localizacao_longitude)]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>;
      })}
    </MapContainer>
  );
}
export default Mapa;
