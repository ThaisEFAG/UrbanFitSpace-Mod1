//centralizar os dados e separar regras= context 
//dia 28/03 também não assisti aula pois tava no aviã
//fabricadecodigo/jsonserver

//O contexto da a possibilidade de acessar os dados em qualquer arquivo após definir o provider (provedor ou delimitador) para dizer quem vai conseguir acessar os dados e quais dados serão compartilhados

// aqui vamos guardar os locais em estado começando setandmo o estado inicial e fazer uma função para add os locais em uma lista

import { createContext, useState } from "react";
import db from "../../data/db.json"


export const UsuariosContext = createContext()

//estado do form cadastro

export const UsuariosContextProvider = ({children}) => {
    const [usuarios, setUsuarios] = useState([db
        // {
        //     nome: "Thais",
        //     email: "thais@email.com"
        // },
        // {
        //     nome: "Mario",
        //     email: "thais@email.com"
        // },
        // {
        //     nome: "Valdenie",
        //     email: "thais@email.com"
        // }
    ]);

    

    return(
        <UsuariosContext.Provider value={{usuarios, setUsuarios}}>
        {children}
        </UsuariosContext.Provider>
    )

}