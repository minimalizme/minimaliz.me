//Pagination + search bar and tag filter
const postsPerPage = 5;
let currentPage = 1;
let allPosts = $('.post');

function updatePosts() {
    allPosts.hide();
    let startIndex = (currentPage - 1) * postsPerPage;
    let endIndex = startIndex + postsPerPage;
    allPosts.slice(startIndex, endIndex).show();

    // Gestion des boutons de pagination
    if (startIndex === 0) {
        $('#prev').hide();
    } else {
        $('#prev').show();
    }

    if (endIndex >= allPosts.length) {
        $('#next').hide();
    } else {
        $('#next').show();
    }
}


function filterPosts() {
let searchQuery = $('#search-input').val().toLowerCase();
let checkedTags = $('input[type=checkbox]:checked').map(function() {
    return this.value;
}).get();

let filteredPosts = allPosts.filter(function() {
    let postTags = $(this).data('tags').split(' ');
    let hasTag = checkedTags.length === 0 || checkedTags.some(tag => postTags.includes(tag));
    let postTitle = $(this).find('.article-title').text().toLowerCase();
    let searchMatch = searchQuery === "" || postTitle.includes(searchQuery);

    return hasTag && searchMatch;
});

if (searchQuery !== "" || checkedTags.length > 0) {
    $('.pagination').hide();
    allPosts.hide();
    filteredPosts.show();
} else {
    $('.pagination').show();
    updatePosts();
}
}

$(document).ready(function() {
    // Affiche les articles initiaux en fonction de la pagination
    updatePosts();

    // Handlers d'événements
    $('#search-input').on('input', filterPosts);
    $('input[type=checkbox]').on('change', filterPosts);

    $('#prev').on('click', function(e) {
        e.preventDefault();
        currentPage--;
        updatePosts();
    });

    $('#next').on('click', function(e) {
        e.preventDefault();
        currentPage++;
        updatePosts();
    });
});


//Hide first image in Post page layout
document.addEventListener("DOMContentLoaded", function() {
    var post = document.querySelector("post");
    var firstImage = post.querySelector("img");

    if (firstImage) {
      firstImage.style.display = "none";
    }
});

//Init Hightlight.js and add copy button
document.addEventListener("DOMContentLoaded", function(event) {
            // Initialisez Highlight.js
            hljs.highlightAll();

            function copyToClipboard(element) {
                const tempTextArea = document.createElement("textarea");
                tempTextArea.value = element.textContent;
                document.body.appendChild(tempTextArea);
                tempTextArea.select();
                document.execCommand("copy");
                document.body.removeChild(tempTextArea);
                alert("Code copié dans le presse-papiers !");
            }

            document.querySelectorAll('pre.hljs').forEach(function (codeElement) {
                const copyButton = document.createElement('button');
                copyButton.className = 'copyButton';
                copyButton.textContent = 'Copy';
                copyButton.addEventListener('click', function () {
                    copyToClipboard(codeElement.querySelector('code'));
                });
                codeElement.style.position = 'relative';
                codeElement.appendChild(copyButton);
            });
});
