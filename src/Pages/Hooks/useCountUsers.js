//arquivo js: usado quando não retorna HTML
//arquivos jsx: usado quando retorna HTML

import { useState } from "react";

function useCounterUsers() {
  const [countUsers, setCountUsers] = useState();

  function incrementUsers() {
    setCountUsers((c) => c + 1);
  }

  //retornando um array com 2 indices 1° estado e o 2º o nome da função do setCoubterUsers
  //se usuário logado incrementar aqui, se usuário não logado decrementar aqui.... onClick login passar onClick{() => addUserLogin()}
  return [countUsers, incrementUsers];
}

export default useCounterUsers;

//USAR ESSE HOOK A PRINCÍPIO PARA TRAZER A QUANTIDADE DE PESSOAS LOGADAS
