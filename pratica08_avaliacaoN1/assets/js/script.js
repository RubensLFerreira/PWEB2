const btnNext = function () {
  let url = `https://6388fbf0a4bb27a7f796c4f7.mockapi.io/user/1/posts`;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let xhr = JSON.parse(this.responseText);
      console.log(xhr[0].imagePost);

      let articlesPost = document.querySelector("#articles-posts");

      let newPost = `
      <article id="articles-posts" class="box post post-excerpt">
        <header>
          <h2><a id="titulo" href="#">${xhr[0].titlePost}</a></h2>
          <p class="descricao">
            Quibusdam voluptatem fugit commodi minus consequuntur similique
            maxime beatae.
          </p>
        </header>
        <div class="info">
          <span class="date"
            ><span class="month">Dez</span> <span class="day">01</span
            ><span class="year">, 2022</span></span
          >
          <ul class="stats">
            <li><a href="#" class="icon fa-comment">86</a></li>
            <li><a href="#" class="icon fa-heart">99</a></li>
            <li><a href="#" class="icon brands fa-twitter">21</a></li>
            <li><a href="#" class="icon brands fa-facebook-f">21</a></li>
          </ul>
        </div>
        <a href="#" id="imagem" class="image featured"
          ><img src="${xhr[0].imagePost}" alt=""
        /></a>
        <p id="texto">${xhr[0].textPost}
        </p>
        <p class="author-avatar">
          <strong>Create by</strong>
          @Keagan90
          <img
            src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1067.jpg"
          />
        </p>
      </article>`;
      articlesPost.insertAdjacentHTML("afterbegin", newPost);
    }
  };
  xhr.send();
};
