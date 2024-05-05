async function fetchCep(cep) {
  try {
    const resposta = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();
    return dados;
  } catch {
    return { error: "CEP inválido" };
  }
}

export default fetchCep;