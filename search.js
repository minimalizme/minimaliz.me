$(document).ready(function () {
  // Cache les éléments du DOM
  const $posts = $(".post");
  const $search = $("#search");

  // Filtre les posts en fonction du texte de recherche et du tag sélectionné
  function filterPosts() {
    const query = $search.val().toLowerCase();
    const selectedTag = window.location.hash.substring(1);

      $posts.each(function () {
          const $post = $(this);
          const postContent = $post.text().toLowerCase();
          //... (Code précédent)
                const postTags = $post.find("a").map((_, el) => $(el).text()).get();
                const matchesQuery = !query || postContent.includes(query);
                const matchesTag = !selectedTag || postTags.includes(selectedTag);

                if (matchesQuery && matchesTag) {
                  $post.show();
                } else {
                  $post.hide();
                }
              });
            }

            // Gère l'événement de saisie dans le champ de recherche
            $search.on("input", function () {
              window.location.hash = '';
              filterPosts();
            });

            // Gère l'événement de clic sur un tag
            $(".tag-list a").on("click", function (event) {
              event.preventDefault();
              const tag = $(this).text();
              window.location.hash = tag;
              filterPosts();
            });

            // Applique le filtrage initial en fonction du hash de l'URL
            filterPosts();
          });
