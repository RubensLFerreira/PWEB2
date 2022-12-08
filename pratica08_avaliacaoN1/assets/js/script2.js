// Resposta
const URL_BASE = "https://6388fbf0a4bb27a7f796c4f7.mockapi.io";

// armazena os usuários
let dataUser = [];
// armazena os posts
let dataPosts = [];

// função pega as informações da API
const getDataFromApi = function (endpoint) {
  const url = URL_BASE + endpoint;

  const ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      dataUser = data;
      // findPosts(4);
    }
  };
  ajax.open("GET", url, true);
  ajax.send();
};

const getDataFromApi2 = function (endpoint) {
  const url = URL_BASE + endpoint + "/1/posts";

  const ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      dataPosts = data;
      console.log(dataPosts);
      findPosts(4);
    }
  };
  ajax.open("GET", url, true);
  ajax.send();
};

const findPosts = function (total) {
  for (let i = 1; i <= total; i++) {
    createPost(dataPosts[i], dataUser[i]);
  }
};

const createPost = function (post, user) {
  const paginationDiv = document.querySelector(".pagination");
  paginationDiv.insertAdjacentHTML(
    "beforebegin",
    `
    <article class="box post post-excerpt">
          <header>
            <h2><a href="#">${post ? post.titlePost : "Teste"}</a></h2>
            <p>${post ? post.captionPost : "Teste"}</p>
          </header>
          <div class="info">
            <span class="date"><span class="month">Dez</span> <span class="day">01</span><span class="year">,
                2022</span></span>
            <ul class="stats">
              <li><a href="#" class="icon fa-comment">86</a></li>
              <li><a href="#" class="icon fa-heart">99</a></li>
              <li><a href="#" class="icon brands fa-twitter">21</a></li>
              <li><a href="#" class="icon brands fa-facebook-f">21</a></li>
            </ul>
          </div>
          <a href="#" class="image featured"><img src="https://loremflickr.com/640/480/business" alt="" /></a>
          <p>
            ${post ? post.textPost : "Teste"}
          </p>
          <p class="author-avatar">
            <strong>Create by</strong>
            ${user.userName}
            <img src="${user.avatar}" />
          </p>
        </article>
  `
  );
};

const carregarMais = document.querySelector("#carregar-mais");
carregarMais.addEventListener("click", function () {
  getDataFromApi(`/user`);
  getDataFromApi2(`/user`);
});
