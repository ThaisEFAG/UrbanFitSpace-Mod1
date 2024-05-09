//centralizar os dados

//O contexto da a possibilidade de acessar os dados em qualquer arquivo após definir o provider (provedor ou delimitador) para dizer quem vai conseguir acessar os dados e quais dados serão compartilhados

import { createContext, useEffect, useState } from "react";

//1º criar contexto
export const UsuariosContext = createContext();

//2º criar o provider que também é uma constante, se não especificar quem vai receber deve colocar como prop parametro {children}.
export const UsuariosContextProvider = ({ children }) => {
  // const { usuarios, setUsuarios} = useContext(UsuariosContext)
  //estado do form cadastro
  const [listUsuarios, setListUsuarios] = useState([]);
  const [userLogout, setUserLogout] = useState([]);

  //useEffect chama o fatch
  useEffect(() => {
    lerUsuarios();
  }, []);

  function lerUsuarios() {
    //O fetch faz o get (uso para renderizar na home e na lista de edição)
    fetch("http://localhost:3000/listUsuarios")
      //1º then transforma de json para js
      .then((response) => response.json())
      //2º then recebe o resultado do 1º que são os dados já transformados
      .then((data) => setListUsuarios(data))
      .catch((error) => console.error(error));
  }

  //function de CADASTRO DE USUARIO
  function onSubmitUser(cadFormUser) {
    const verificacao = listUsuarios.find(
      (user) => user.email === cadFormUser.email || user.cpf === cadFormUser.cpf
    );
    if (verificacao) {
      alert("Usuário já cadastrado!");
      return;
    }
    const potato = {
      ...cadFormUser,
      isLogado: false,
    };
    //Faz op envio do formulario para o db.json
    fetch("http://localhost:3000/listUsuarios", {
      method: "POST",
      body: JSON.stringify(potato),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        alert("Usuário cadastrado com sucesso");
        lerUsuarios();
      })
      .catch(() => alert("Erro cadastro"));
  }

  async function loginUser(formLogin) {
    try {
      const userLog = listUsuarios.find(
        (user) =>
          user.email == formLogin.email && user.password == formLogin.password
      );
      setUserLogout(userLog);
      if (!!userLog) {
        localStorage.setItem("usuarioLogado", true);
        localStorage.setItem("userid", JSON.stringify(userLog.id));
        const potato = { ...userLog, isLogado: true };
        fetch(`http://localhost:3000/listUsuarios/${potato.id}`, {
          method: "PUT",
          body: JSON.stringify(potato),
          headers: {
            "Content-Type": "application/json",
          },
        });
        window.location.href = "/";
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function logout() {
    try {
      const userLogout = JSON.parse(localStorage.getItem("userid"));
      const res = await fetch(
        `http://localhost:3000/listUsuarios/${userLogout}`
      );
      const data = await res.json();
      const potato = { ...data, isLogado: false };
      await fetch(`http://localhost:3000/listUsuarios/${userLogout}`, {
        method: "PUT",
        body: JSON.stringify(potato),
        headers: {
          "Content-Type": "application/json",
        },
      });

      localStorage.clear();
      window.location.href = "/login";
    } catch (error) {
      console.error(error);
    }
  }

  return (
    //Provider criado (delimitador de arquivos para acesso de dados)
    //No value a primeira chave indica JS e a segunda um objeto
    <UsuariosContext.Provider
      value={{ listUsuarios, onSubmitUser, loginUser, logout }}
    >
      {/* O children como prop da função indica que independente do arquivo que for passado aqui dentro do provider, terá acesso aos dados */}
      {children}
    </UsuariosContext.Provider>
  );
};
