import  {FirstName} from './signup';

console.log(FirstName);

// for start rating 
$(document).ready(function () {

    // $(".s1").click(function () {
    //     $(".s1").css("color", "yellow");
    //     $(".s2, .s3, .s4, .s5").css("color", "#ccc");
    // });
    // $(".s2").click(function () {
    //     $(".s1, .s2").css("color", "yellow");
    //     $(".s3, .s4, .s5").css("color", "#ccc");
    // });
    // $(".s3").click(function () {
    //     $(".s1, .s2, .s3").css("color", "yellow");
    //     $(".s4, .s5").css("color", "#ccc");
    // });
    // $(".s4").click(function () {
    //     $(".s1, .s2, .s3, .s4").css("color", "yellow");
    //     $(".s5").css("color", "#ccc");
    // });
    // $(".s5").css("color", "yellow");

    // function RedirectInfo() {
    //     console.log('this is info restro');
    // }


    function getResturantData(callback) {
        $.get("http://127.0.0.1:8080/restaurants", function (data, success) {
            callback(data);
        })
    }
    // let ele = document.getElementById("imgesRestro");
    // typeof ele !== "undefined" && typeof ele !== 'null' && ele.addEventListener("click", () => { console.log("Hello") })
    $.get("http://127.0.0.1:8080/restaurants",
        function (data, status) {
            let restrauntHtml = "";
            let backgroundColor = 'green';
            data.forEach(e => {
                switch (e.avgRating) {
                    case 5:
                        backgroundColor = 'green'
                        break;
                    case 4:
                        backgroundColor = 'green'
                        break;
                    case 3:
                        backgroundColor = 'orange'
                        break;
                    case 2:
                        backgroundColor = 'red'
                        break;
                    case 1:
                        backgroundColor = 'red'
                        break;
                }

                let restrauntPhoto =
                    `<div class="col-md-3 text-center mt-5" id="signleRestarant">
            <img class="img-fluid restrauantImg" src="${e.Photo}" alt="">
            <div id="imgesRestro">
                <p class="p-1 ps-1">${e.restaurantName}</p>
         </div>
            <div class="d-flex justify-content-center">
                <span><i class="fa fa-star p-2" style="color: ${e.avgRating >= 1 ? backgroundColor : '#CCC'}"></i></span>
                <span><i class="fa fa-star p-2" style="color: ${e.avgRating >= 2 ? backgroundColor : '#CCC'}"></i></span>
                <span><i class="fa fa-star p-2" style="color: ${e.avgRating >= 3 ? backgroundColor : '#CCC'}"></i></span>
                <span><i class="fa fa-star p-2" style="color: ${e.avgRating >= 4 ? backgroundColor : '#CCC'}"></i></span>
                <span><i class="fa fa-star p-2" style="color: ${e.avgRating == 5 ? backgroundColor : '#CCC'}"></i></span>
            </div>
        </div>`;
                restrauntHtml += restrauntPhoto;
            });
            $('#restrauantPhotoList').append(restrauntHtml);
        }
    );

    // filter search result 
    function onKeyup(e) {
        const Searchvalue = e.target.value.toLowerCase();
        getResturantData(function (data) {
            // console.log(data);
            const filteredArray = data.filter((char) => {
                return (
                        char.Address.toLowerCase().includes(Searchvalue) || char.restaurantName.toLowerCase().includes(Searchvalue)
                );
            });
            if(filteredArray.length === 0) {
                // debugger;
                $('#restrauantPhotoList').css('display','none');
                $('#noResult').css('display','block');
            }
            else {
                $('#restrauantPhotoList').css('display','flex');
                $('#signleRestarant').css('display','block');
                $('#noResukt').css('display','none');
            }
            console.log(filteredArray);
            console.log(Searchvalue)
        })
    }
    $('#searchBtn').on('keyup', onKeyup);

});