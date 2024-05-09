import { useContext, useEffect, useState } from "react";
import Mapa from "../../Components/Mapa/Mapa";
import Cardcomponents from "../../Components/cardLocaisExercicio";
import { LocaisContext } from "../../Context/LocaisContext";

import "./style.css";

function Home() {
  const { listLocais, positionMark } = useContext(LocaisContext);
  const [coordenadas, setCoordenadas] = useState([]);
  useEffect(() => {
      setCoordenadas(() => {
        return positionMark.map((locais) => {
          return {
            localizacao_latitude: locais.localizacao_latitude,
            localizacao_longitude: locais.localizacao_longitude
          };
        });
      });
  },[positionMark]) 
  return (
    <>
      <div className="mapa" style={{ width: "400px", height: "400px" }}>
        <Mapa
        position={[-27.5194647, -48.649684]}
        markers={coordenadas} 
        style={{ width: "400px", height: "400px" }} />
      </div>
      {/* dupla !! verifica se é diferente de undefined, null ou array vazio, se a resposta for sim ele executa o que está a direita se a resposta for não ele não executa nada */}

      {!!listLocais &&
        listLocais.map(
          (local) => (
            <Cardcomponents key={local.id} localprop={local}>
              {" "}
            </Cardcomponents>
          )
          //  (<Cardcomponents key={listLocais.id} nomeLocal = {local.nome_local}>  </Cardcomponents>)
        )}
    </>
  );
}

export default Home;
