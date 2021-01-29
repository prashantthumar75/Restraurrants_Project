// for start rating 
$(document).ready(function () {

    $("#s1").click(function () {
        $("#s1").css("color", "yellow");
        $("#s2, #s3, #s4, #s5").css("color", "#ccc");
    });
    $("#s2").click(function () {
        $("#s1, #s2").css("color", "yellow");
        $("#s3, #s4, #s5").css("color", "#ccc");
    });
    $("#s3").click(function () {
        $("#s1, #s2, #s3").css("color", "yellow");
        $("#s4, #s5").css("color", "#ccc");
    });
    $("#s4").click(function () {
        $("#s1, #s2, #s3, #s4").css("color", "yellow");
        $("#s5").css("color", "#ccc");
    });
    $("#s5").click(function () {
        $("#s1, #s2, #s3, #s4, #s5").css("color", "yellow");
    });

    // ajax get request 

    let stroredData = {};
    $.get("http://127.0.0.1:8080/restaurants",
        function (data, status) {
            // console.log(data);
            stroredData = data;
            let restrauntHtml = "";
            data.forEach(e => {
                let restrauntPhoto = `
            <div class="col-md-3 text-center mt-5">
                <a href="./html/restrauant.html">
          <img class="img-fluid restrauantImg" src="${e.Photo}" alt="">
                <p class="p-1 ps-1">${e.restaurantName}</p>
                </a>
            <div class="d-flex justify-content-center">
                <span><i id="s1" class="fa fa-star p-2"></i></span>
                <span><i id="s2" class="fa fa-star p-2"></i></span>
                <span><i id="s3" class="fa fa-star p-2"></i></span>
                <span><i id="s4" class="fa fa-star p-2"></i></span>
                <span><i id="s5" class="fa fa-star p-2"></i></span>
            </div>
            <p>${e.avgRating} </p>
        </div>`;
                restrauntHtml += restrauntPhoto;
            });
            $('#restrauantPhotoList').append(restrauntHtml);
        }
    );

    // filter search result 
    $('#searchBtn').on('keyup', function () {
        var Searchvalue = $(this).val()
        console.log(Searchvalue)
    });
});