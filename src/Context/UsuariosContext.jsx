//centralizar os dados e separar regras= context 
//dia 28/03 também não assisti aula pois tava no aviã
//fabricadecodigo/jsonserver

//O contexto da a possibilidade de acessar os dados em qualquer arquivo após definir o provider (provedor ou delimitador) para dizer quem vai conseguir acessar os dados e quais dados serão compartilhados

// aqui vamos guardar os locais em estado começando setandmo o estado inicial e fazer uma função para add os locais em uma lista

import { createContext, useState, useEffect } from "react";



export const UsuariosContext = createContext()

//estado do form cadastro

export const UsuariosContextProvider = ({children}) => {

    const [listUsuarios, setListUsuarios] = useState([])

// useEffect(() => {
//     fetch("http://localhost:3000/listUsuarios")
//     .then(response => response.json())
//     .then(dados => setListUsuarios(dados))
//     .catch(erro => console.log(erro))
// }, [])
  

  
    

    return(
        <UsuariosContext.Provider value={{listUsuarios, setListUsuarios}}>
        {children}
        </UsuariosContext.Provider>
    )

}