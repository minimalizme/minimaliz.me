    document.addEventListener("DOMContentLoaded", function() {
      const searchInput = document.getElementById("search");
      const postsContainer = document.getElementById("posts-container");

      searchInput.addEventListener("input", function(event) {
        const searchTerm = event.target.value.toLowerCase();

        Array.from(postsContainer.children).forEach(function(post) {
          const postTitle = post.querySelector("h2").textContent.toLowerCase();
          const postContent = post.querySelector("p").textContent.toLowerCase();

          if (postTitle.includes(searchTerm) || postContent.includes(searchTerm)) {
            post.style.display = "block";
          } else {
            post.style.display = "none";
          }
        });
      });
    });
