import { createContext, useState, useEffect } from "react";
// import PropTypes from 'prop-types';


//1º criar contexto
export const LocaisContext = createContext()

//2º criar o provider que também é uma constante, se não especificar quem vai receber deve colocar como prop parametro {children}.
export const LocaisContextProvider = ({children}) => {
    //estado do form cadastro
    const [listLocais, setListLocais] = useState([]);
    console.log(listLocais)

        //  useEffect chama o fatch
  useEffect(() => {
    //O fetch faz o get
    fetch("http://localhost:3000/listLocais")
    //1º then transforma de json para js
      .then((response) => response.json())
      //2º then recebe o resultado do 1º que são os dados já transformados
      .then((data) => setListLocais(data))
      .catch((error) => console.error(error));
  }, []);

  function onSubmitLoc(cadForm) {
    fetch("http://localhost:3000/listLocais", {
        method:"POST",
        body: JSON.stringify(cadForm),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(() => alert("Usuário cadastrado com sucesso"))
    .catch(() => alert("Erro cadastro"))
  }
 
  return(
    <LocaisContext.Provider value={{listLocais, onSubmitLoc}}>
        {children}
    </LocaisContext.Provider>
  )
// }
// LocaisContextProvider.propTypes = {
//   children: PropTypes.node
 }