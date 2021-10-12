$(document).ready(function () {
    latestVideos();
})


function latestVideos() {
    $('.loader2').show();
    $.ajax({
        type: 'GET',
        url: 'https://smileschool-api.hbtn.info/latest-videos',
        dataType: 'json',
        jsonp: false,
        success: function (data) {
            for (let i = 0; i < data.length; i++) {
                $(`#tutorials${i}`).html("");
                $(`#tutorials${i}`).append(
                    `<div id="img-1" class="d-flex justify-content-center align-item-center">
                            <img id="play" class="align-self-center" src="${data[i].thumb_url}" id="firstPic"
                            alt="play-btn">
                    </div>
                    <div class="card-body">
                    <h6 class="card-title text-dark d-flex justify-content-between" id="title1">${data[i].title}</h6>
                    <p class="card-text text-muted" id="text1">${data[i][`sub-title`]}</p>
                    <div class="row">
                            <img src="${data[i].author_pic_url}" class="rounded-circle" id="pro1"
                            alt="profile-pic">
                    <p class="highlightpurple ml-3" id="proname">${data[i].author}</p>
                    </div>
                    <div class="row">
                    <p class="highlightpurple ml-auto" id="time">${data[i].duration}</p>
                </div>
            </div>
        </div>
</div>`);
            },
            error: function (error) {
                console.log(error);
            },
            complete: function () {
                $('.loader1').hide();
            }
        });
}
