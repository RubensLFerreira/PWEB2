const input_twitter = document.querySelector("#inputTwitter");
const btnAddTwitter = document.querySelector("#btn-add");
const postTwitter = document.querySelector("#post-twitter");
const twitterBox = document.querySelector(".tweetBox");
let idPost = 0;

btnAddTwitter.onclick = function (e) {
  e.preventDefault();

  const newPostTwitter = `
  <div class="post">
        <div class="post__avatar">
          <img
            src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
            alt=""
          />
        </div>

        <div class="post__body">
          <div class="post__header">
            <div class="post__headerText">
              <h3>
                Somanath Goudar
                <span class="post__headerSpecial"
                  ><span class="material-icons post__badge"> verified </span
                  >@somanathg</span
                >
                <button
                  onclick="btnDeleteTwitter(this)"
                  id="deleteTwitter"
                  type="submit"
                  click="btnAddTwitterDelete()"
                  class="editar"
                >
                  <span class="material-icons"> delete </span>
                </button>
                <button
                  onclick="btnEditTwitter(this)"
                  id="editTwitter"
                  type="submit"
                  class="editar"
                >
                  <span class="material-icons"> edit </span>
                </button>
                <button
                  onclick="exibirAlert(), editBtnName(this)"
                  type="submit"
                  class="editar"
                >
                  <span class="material-icons"> save </span>
                </button>
              </h3>
            </div>
            <div class="post__headerDescription">
              <p>${input_twitter.value}</p>
            </div>
          </div>
          <div class="post__footer">
            <span class="material-icons"> repeat </span>
            <span class="material-icons"> favorite_border </span>
            <span class="material-icons"> publish </span>
          </div>
        </div>
      </div>
  `;

  postTwitter.insertAdjacentHTML("afterbegin", newPostTwitter);
  input_twitter.value = "";
  idPost++;
};

const btnDeleteTwitter = function (e) {
  e.closest(".post").remove();
};

const btnEditTwitter = function (e) {
  const post = e.closest(".post");
  post.querySelector("p").setAttribute("contentEditable", true);
  post.querySelector("p").focus();
};

const editBtnName = (elemento) => {
  elemento.textContent = "Salvo";
};
