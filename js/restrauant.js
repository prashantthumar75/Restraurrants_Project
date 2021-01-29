
$(document).ready(function () {

    $('#myBtn').click(function(){
        console.log('btn clicked');
    });

    // $("a").attr("href", '?fruit=' + 'apple');

$.get("http://127.0.0.1:8080/restaurants",
    function (data, status) {
        // console.log(data);
        let restrauntHtml = "";
        // data.forEach(e => {
        let e = data[2];
        let restrauntDetails =
    `<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner text-center" >
            <div class="carousel-item active">
                <img src="${e.Photo1}" class="otherImageRestro" alt="${e.restaurantName}">
                <img src="${e.Photo}" class="mainImageRestro"  alt="${e.restaurantName}">
                <img src="${e.Photo2}" class="otherImageRestro" alt="${e.restaurantName}">
            </div>
        </div>
          </div>
          <div class="container">
        <div class="d-flex justify-content-between mt-3">
            <h2>${e.restaurantName}</h2>
            <div class="d-flex justify-content-center">
                <span><i id="s1" class="fa fa-star p-2"></i></span>
                <span><i id="s2" class="fa fa-star p-2"></i></span>
                <span><i id="s3" class="fa fa-star p-2"></i></span>
                <span><i id="s4" class="fa fa-star p-2"></i></span>
                <span><i id="s5" class="fa fa-star p-2"></i></span>
            </div>
        </div>
        <p>${e.description}</p>
        <div class="d-flex">
            <h6>Restrauant Opening Hours :</h6>
            <h6 class="ms-2">${e.openingHours} </h6>
        </div>
        <div class="d-flex mt-2">
            <h6>Restrauant Address :</h6>
            <h6 class="ms-2">${e.Address}</h6>
        </div>
        <div class="d-flex mt-2">
            <textarea class="form-control" id="exampleFormControlTextarea" rows="3" placeholder="Write Your Reviews Here" required></textarea>
        </div>
    </div>
    </div>`;
        restrauntHtml += restrauntDetails;
        // });
      $('#RestoCarosal').append(restrauntHtml); 
    }
);
});