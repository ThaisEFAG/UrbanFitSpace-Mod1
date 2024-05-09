import { createContext, useEffect, useState } from "react";
// import PropTypes from 'prop-types';

//1º criar contexto
export const LocaisContext = createContext();

//2º criar o provider que também é uma constante, se não especificar quem vai receber deve colocar como prop parametro {children}.
export const LocaisContextProvider = ({ children }) => {
  //estado do form cadastro
  const [listLocais, setListLocais] = useState([]);
  const [listLocaisUser, setListLocaisUser] = useState([]);

  //  useEffect chama o fatch
  useEffect(() => {
    fetch("http://localhost:3000/listLocais")
      //1º then transforma de json para js
      .then((response) => response.json())
      //2º then recebe o resultado do 1º que são os dados já transformados
      .then((data) => { setListLocais(data), setPositionMark(data)})
      .catch((error) => console.error(error));
  }, []);

  //define que o usuario pode editar somente os locais que cadastrou
  const LocalStorageLogado =
    JSON.parse(localStorage.getItem("usuarioLogado")) || false;
  const LocalStorageUserid = JSON.parse(localStorage.getItem("userid"));
  const [positionMark, setPositionMark] = useState([])

  useEffect(() => {
    // Tras os locais cadastrados pelo usuario para edição
    fetch(`http://localhost:3000/listLocais?id_user=${LocalStorageUserid}`)
      .then((response) => response.json())
      .then((data) => setListLocaisUser(data)
      )
      .catch((error) => console.error(error));
  }, [LocalStorageLogado]);

  // function ReadLoc() {
  //    //O fetch faz o get

  // }

  //Function para chamar no botão de editar com o id especifico do card local para alteração dos dados
  // function ReadLocId(id) {
  //   //O fetch faz o get
  //   fetch("http://localhost:3000/listLocais/" + id)
  //   //1º then transforma de json para js
  //   .then((response) => response.json())
  //   //2º then recebe o resultado do 1º que são os dados já transformados
  //   .then((data) => setListLocais(data))
  //   .catch((error) => console.error(error));
  //  }

  function onSubmitLoc(cadForm) {
    const idForm = JSON.parse(localStorage.getItem("userid"));
    const batata = {
      ...cadForm,
      id_user: idForm,
    };
    fetch("http://localhost:3000/listLocais", {
      method: "POST",
      body: JSON.stringify(batata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("Usuário cadastrado com sucesso");
        // ReadLoc()
      })
      .then(() => lerdadoslocais())
      .catch(() => alert("Erro cadastro"));
    window.location.href = "/";
  }

  //function para mandar os dados já editados para o db.json
  function editLoc(editDados) {
    fetch("http://localhost:3000/listLocais/" + editDados.id, {
      method: "PUT", //(PUT- atualizar dados)
      body: JSON.stringify(editDados), //(dados atualizados)
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("Usuário atualizado com sucesso");
        // ReadLoc()
      })
      .catch(() => alert("Erro ao atualizar"));
    console.log(editDados);
  }

  function removeLoc(editDados) {
    fetch("http://localhost:3000/listLocais/" + editDados, {
      method: "DELETE", //(Delete- usuario)
    })
      .then(() => alert("Usuário atualizado com sucesso"))
      .then(() => lerdadoslocais())
      .catch(() => alert("Erro ao atualizar"));
  }

  function lerdadoslocais() {
    fetch("http://localhost:3000/listLocais")
      //1º then transforma de json para js
      .then((response) => response.json())
      //2º then recebe o resultado do 1º que são os dados já transformados
      .then((data) => setListLocais(data))
      .catch((error) => console.error(error));
  }

  return (
    <LocaisContext.Provider
      value={{ listLocais, onSubmitLoc, removeLoc, editLoc, listLocaisUser, positionMark }}
    >
      {children}
    </LocaisContext.Provider>
  );
  // }
  // LocaisContextProvider.propTypes = {
  //   children: PropTypes.node
};
