import { useState } from 'react'
import CardLocaisExercicios from "../../Components/CardLocaisExercicios"
import listUsuarios from "../../../Data/db-user.json"



function home() {

    const stringUser = JSON.stringify(listUsuarios);
    console.log(stringUser)

    const listUser = stringUser.map((itemAtual) => {

    })

  return (
    <>
    {listUsuarios.map((itemAtual) => {

    })}
    </>
  )
}

export default App
