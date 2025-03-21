const titulo = document.getElementById("titulo");
const listaNaoOrdenada = document.getElementById("lista-nao-ordenada");
const a = document.getElementsByTagName("a")
const listaOrdenada = document.getElementById("lista-ordenada");

titulo.innerText = "Bem-vindo ao Projeto!";
a.innerText = "Visite a Proz Educação";

listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

listaOrdenada.innerHTML = `
    <li><a href="https://www.google.com" target="_blank">Google</a></li>
    <li><a href="https://www.bing.com" target="_blank">Bing</a></li>
    <li><a href="https://www.yahoo.com" target="_blank">Yahoo</a></li>
`;