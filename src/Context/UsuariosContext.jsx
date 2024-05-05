//centralizar os dados

//O contexto da a possibilidade de acessar os dados em qualquer arquivo após definir o provider (provedor ou delimitador) para dizer quem vai conseguir acessar os dados e quais dados serão compartilhados


import { createContext, useState, useEffect } from "react";


//1º criar contexto
export const UsuariosContext = createContext()

//2º criar o provider que também é uma constante, se não especificar quem vai receber deve colocar como prop parametro {children}.
export const UsuariosContextProvider = ({children}) => {
    // const { usuarios, setUsuarios} = useContext(UsuariosContext)
    //estado do form cadastro
    const [listUsuarios, setListUsuarios] = useState([]);

         //useEffect chama o fatch
  useEffect(() => {
    //O fetch faz o get (uso para renderizar na home e na lista de edição)
    fetch("http://localhost:3000/listUsuarios")
    //1º then transforma de json para js
      .then((response) => response.json())
      //2º then recebe o resultado do 1º que são os dados já transformados
      .then((data) => setListUsuarios(data))
      .catch((error) => console.error(error));
  }, []);

//function de CADASTRO DE USUARIO
  function onSubmitUser(cadFormUser) {
    //Faz op envio do formulario para o db.json
    fetch("http://localhost:3000/listUsuarios", {
        method:"POST",
        body: JSON.stringify(cadFormUser),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(() => alert("Usuário cadastrado com sucesso"))
    .catch(() => alert("Erro cadastro"))
  }

        return(
            //Provider criado (delimitador de arquivos para acesso de dados)
            //No value a primeira chave indica JS e a segunda um objeto
            <UsuariosContext.Provider value={{listUsuarios, onSubmitUser}}>
            {/* O children como prop da função indica que independente do arquivo que for passado aqui dentro do provider, terá acesso aos dados */}
                {children}
            </UsuariosContext.Provider>
        )
}