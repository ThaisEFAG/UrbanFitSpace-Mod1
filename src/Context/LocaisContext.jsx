import { useState, createContext } from 'react';
import listLocais from "../../data/db-locais.json";

export const contextLocais = createContext(listLocais);

function locaisContext({children}) {

    const [ locais, setListLocais] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3000/listLocais")
      .then(response => response.json())
      .then(dados => setListLocais(dados))
      .catch(erro => console.log(erro))
  }, [])
    

    return(
        {!!locais && listUsuarios.map(usuario => (
            <h3 key={usuario.id}>{usuario.nome}</h3>
           ))}
    <contextLocais.Provider value={{locais, setLocis}}>
        {children}
    </contextLocais.Provider>
    )
}

export default locaisContext;