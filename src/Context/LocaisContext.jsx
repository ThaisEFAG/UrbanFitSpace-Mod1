import { createContext, useEffect, useState } from 'react';



export const ContextLocais = createContext();


function CardLocaisExercicios({children}) {

        const [ locais, setLocais ] = useState([]);
    
    //   useEffect(() => {
    //       fetch("http://localhost:3000/listLocais")
    //       .then(response => response.json())
    //       .then(dados => setLocais(dados), console.log(dados))
    //       .catch(erro => console.log(erro))
    //   }, [])

    

    return(
     

<LocaisContext.Provider value={{locais, setLocais}}>
        {children}
    </LocaisContext.Provider>
    )
}

export default CardLocaisExercicios;