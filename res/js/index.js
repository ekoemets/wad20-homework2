$(document).ready(function() {
    fetchPosts()
        .then((res) => {
            let posts = res.map(pst => createPostDiv(pst));
            $('#posts-container').html(posts.map(pst => pst.html));
            posts.forEach(pst => {
                let id = '#' + pst.id
                $(id).click(function() {
                    let btn = $(this);
                    if (btn.hasClass('liked')) {
                        btn.removeClass('liked');
                        btn.text(pst.likes);
                    } else {
                        btn.addClass('liked');
                        btn.text(pst.likes);
                    }
                })
            });
        })
        .catch(() => {
            alert("Could not load posts")
        })
});

function fetchPosts() {
    return $.get({
        url: 'https://private-anon-0209b8bde9-wad20postit.apiary-mock.com/posts',
        success: function(response) {
            return response;
        },
        error: function() {
            console.log("Failed to load data")
        }
    });
}


function createPostDiv(post) {
    let id = `${post.author.firstname.toLowerCase()}-${post.author.lastname.toLowerCase()}-${String(Math.round(Math.random() * 100))}`
    return {
        id: id,
        html: `
        <div class="post">
            <div class = "post-author">
                <div class = "post-author-info">
                    <img src="${post.author.avatar}" alt="Image not found">
                    <small>${post.author.firstname} ${post.author.lastname}</small>
                </div>
                <small>${post.createTime}</small>
            </div>
            
            <div class=${ post.media ? "post-image" : "non-ex"}>
                <${ post.media ? post.media.type : "img"} src="${ post.media ? post.media.url : ''}" alt="" ${ post.media ? post.media.type = "video" ? "controls" : "" : ""}>
            </div>

            <div class = "post-title">
                <h3>${ post.text ? post.text : ''}</h3>
            </div>
            <div class = "post-actions">
                <button class = "like-button" id="${id}">${post.likes}</button>
            </div>
            
        </div>
        `
    }
}
