// criar butão com evento onlick="nome do evento"
const getGitHubInfo = function () {
  // pega input
  let username = document.querySelector("#usuario-github");
  // pega a url da API
  let url = `https://api.github.com/users/${username.value}`;
  // instância do objeto
  let xhr = new XMLHttpRequest();
  // metodo open para criar requisição
  xhr.open("GET", url, true);

  // a propriedade onreadystatechange dispara as requisições
  xhr.onreadystatechange = function () {
    // verificação da requisição
    if (xhr.readyState == 4 && xhr.status == 200) {
      // transformar os dados recebeidos em json()
      let xhr = JSON.parse(this.responseText);
      // vamos pegar as informações da API e preencher no HTML
      document.querySelector("#nameUser").innerHTML = xhr.name;
      document.querySelector("#seguindo").innerHTML = xhr.following;
      document.querySelector("#seguidores").innerHTML = xhr.followers;
      document.querySelector("#repositorios").innerHTML = xhr.public_repos;

      // buscando foto e add src na tag img
      let imagePerfil = document.querySelector(".image-perfil");
      // criando atributo e add valor
      imagePerfil.setAttribute("src", xhr.avatar_url + "&amp;s=80");
      // add tag img dentro do elemento pai
      document.querySelector(".avatar").appendChild(imagePerfil);

      // add links as urls dos seguidores, seguindo e repositorios
      let repositoriosLink = document.querySelector("#repositorios-link");
      repositoriosLink.setAttribute("href", "https://github.com/RubensLFerreira?tab=repositories");
      document.querySelector("#repositorio-url").appendChild(repositoriosLink);

      // add links as urls dos seguidores, seguindo e repositorios
      let seguindoLink = document.querySelector("#seguindo-link");
      seguindoLink.setAttribute("href", "https://github.com/RubensLFerreira?tab=following");
      document.querySelector("#seguindo-url").appendChild(seguindoLink);

      // add links as urls dos seguidores, seguindo e repositorios
      let seguidoresLink = document.querySelector("seguidores-link");
      seguidoresLink.setAttribute("href", "https://github.com/RubensLFerreira?tab=followers");
      document.querySelector("#seguidores-url").appendChild(seguidoresLink);
    }
  };
  xhr.send();
};
