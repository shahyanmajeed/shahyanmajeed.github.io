document.addEventListener("DOMContentLoaded", function () {
  const postsPerPage = 4;
  let currentPage = 1;
  const totalPages = Math.ceil(
    document.querySelectorAll(".blog-post").length / postsPerPage
  );

  function showPage(page) {
    document.querySelectorAll(".blog-post").forEach((post, index) => {
      post.style.display =
        Math.floor(index / postsPerPage) + 1 === page ? "block" : "none";
    });
  }

  function updatePagination() {
    document.querySelector(".prev-page").disabled = currentPage === 1;
    document.querySelector(".next-page").disabled = currentPage === totalPages;
  }

  document.querySelector(".prev-page").addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
      updatePagination();
    }
  });

  document.querySelector(".next-page").addEventListener("click", function () {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
      updatePagination();
    }
  });

  // Show the first page on load
  showPage(currentPage);
  updatePagination();
});
