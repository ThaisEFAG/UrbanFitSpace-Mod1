import { createContext, useEffect, useState } from "react";
// import PropTypes from 'prop-types';

//1º criar contexto
export const LocaisContext = createContext();

//2º criar o provider que também é uma constante, se não especificar quem vai receber deve colocar como prop parametro {children}.
export const LocaisContextProvider = ({ children }) => {
  //estado do form cadastro
  const [listLocais, setListLocais] = useState([]);
  console.log(listLocais);

  //  useEffect chama o fatch
  useEffect(() => {
   readUser()
  }, []);

  function readUser() {
     //O fetch faz o get
     fetch("http://localhost:3000/listLocais")
     //1º then transforma de json para js
     .then((response) => response.json())
     //2º then recebe o resultado do 1º que são os dados já transformados
     .then((data) => setListLocais(data))
     .catch((error) => console.error(error));
  }

  function onSubmitLoc(cadForm) {
    fetch("http://localhost:3000/listLocais", {
      method: "POST",
      body: JSON.stringify(cadForm),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => alert("Usuário cadastrado com sucesso"))
      .catch(() => alert("Erro cadastro"));
  }

  function editUser(editDados, id) {
    fetch("http://localhost:3000/listLocais/" + id, {
      method: "PUT", //(PUT- atualizar dados)
      body: JSON.stringify(editDados), //(dados atualizados)
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => alert("Usuário atualizado com sucesso"))
      .catch(() => alert("Erro ao atualizar"));
  }

  
  function removeUser(id) {
    fetch("http://localhost:3000/listLocais/" + id, {
      method: "DELETE", //(Delete- usuario)
    })
      .then(() => alert("Usuário atualizado com sucesso"))
      .catch(() => alert("Erro ao atualizar"));
  }

  return (
    <LocaisContext.Provider value={{ listLocais, onSubmitLoc, editUser, removeUser }}>
      {children}
    </LocaisContext.Provider>
  );
  // }
  // LocaisContextProvider.propTypes = {
  //   children: PropTypes.node
};
