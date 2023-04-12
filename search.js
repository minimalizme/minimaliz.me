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


//Copy text in <code> ... </code>
document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('code').forEach(function (codeElement) {
            const copyButton = document.createElement('span');
            copyButton.textContent = 'Copier';
            copyButton.style.position = 'absolute';
            copyButton.style.top = '5px';
            copyButton.style.right = '5px';
            copyButton.style.backgroundColor = '#007ACC';
            copyButton.style.color = 'white';
            copyButton.style.padding = '2px 8px';
            copyButton.style.borderRadius = '4px';
            copyButton.style.cursor = 'pointer';
            copyButton.style.fontSize = '14px';
            copyButton.onmouseenter = function () {
                copyButton.style.backgroundColor = '#0066B3';
            };
            copyButton.onmouseleave = function () {
                copyButton.style.backgroundColor = '#007ACC';
            };
            copyButton.onclick = function () {
                const textarea = document.createElement('textarea');
                textarea.value = codeElement.textContent;
                textarea.style.position = 'absolute';
                textarea.style.left = '-9999px';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                alert('Code copié dans le presse-papiers !');
            };
            codeElement.appendChild(copyButton);
        });
    });
