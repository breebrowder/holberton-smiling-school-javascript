$(document).ready(function () {
    pricingQuotes();
})


function pricingQuotes() {
    $('.loader3').show();
    $.ajax({
        type: 'GET',
        url: 'https://smileschool-api.hbtn.info/quotes',
        dataType: 'json',
        jsonp: false,
        success: function (data) {
            $("#quote1").html("");
            $("#quote1").append(
                `<div class="row justify-content-around" id="quote1">
                    <div class="col-sm-2">
                        <img class="rounded-circle mx-auto mt-3 mb-3 d-block"  id="profile" src="${data[0].pic_url}"
                        width="150" height="150" alt="slide">
                    </div>
                    <div class="col-sm-6 ml-3 mr-3 float-left text-white" id="testimonial1">
                    <p>${data[0].text}</p>
                    <p><span class="text-white font-weight-bold" id="name">${data[0].name}</span><br>
                    <span class="text-white font-italic" id="weatherman">${data[0].title}</span>
                    </p>
                </div>
            </div>
        </div>
</div>`);
            $("#quote2").html("");
            $("#quote2").append(
                ` <div class="row justify-content-around text-white" id="quote2">
                  <div class="col-sm-2">
                    <img class="rounded-circle mx-auto mt-3 mb-3 d-block" id="profile1" src="${data[1].pic_url}"
                    width="150" height="150" alt="slide">
                  </div>
            <div class="col-sm-6 ml-3 mr-3 float-left" id="testimonial2">
            <p>${data[1].text}</p>
            <p><span class="text-white font-weight-bold" id="name1">${data[1].name}</span><br>
            <span class="text-white font-italic" id="weatherman1">${data[1].title}</span>
            </p>
        </div>
    </div>
</div>`);
        },
        error: function (error) {
            console.log(error);
        },
        complete: function () {
            $('.loader3').hide();
        }
    });
}
