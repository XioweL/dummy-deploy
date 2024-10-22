// Membuat Event Click untuk submit button
document.getElementById("articleForm").addEventListener("submit", (event) => {
  event.preventDefault();

  // Mengambil Data Dari Form
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const content = document.getElementById("content").value;

  // Membuat Element Content
  const articleDiv = document.createElement("div");
  articleDiv.className = "card mb-3";

  articleDiv.innerHTML = `
   
    <div class="card">
        <div class="row g-0">
            <div class="col-md-2">
                <img src="${image}" alt="Content Images" class="img-fluid rounded-start article-img">
            </div>
            <div class="col-md-10">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text"><small>Published at: <span id="publishTime"></span></small></p>
                    <p class="card-text">${content}</p>
                    <button class="btn btn-danger delete-btn">Delete</button>
                </div>
            </div>
        </div>
    </div>
    `;

  // Menambahkan artikel ke dalam section
  document.getElementById("article-section").appendChild(articleDiv);

  // Mencetak tanggal dan waktu saat ini
  const now = new Date();
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const formattedTime = now.toLocaleDateString("id-ID", options);

  // Menampilkan waktu di elemen dengan id "publishTime"
  document.getElementById("publishTime").textContent = formattedTime;

  //Reset Form Setelah Submit
  event.target.reset();

  // Sembunyikan form setelah submit
  document.getElementById("articleForm").classList.add("d-none");

  // Menambahkan event listener untuk tombol Delete
  articleDiv.querySelector(".delete-btn").addEventListener("click", (event) => {
    articleDiv.remove();
  });
});

// Membuat variable untuk btn article form
let createArticleButton = document.getElementById("btn-article");
let articleForm = document.getElementById("articleForm");

// Menambahkan Event click pada button "Create New Article"
createArticleButton.addEventListener("click", (event) => {
  // Show/Hide ArticleForm
  articleForm.classList.toggle("d-none");
});
