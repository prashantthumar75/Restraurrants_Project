
$(document).ready(function () {

    $.get("http://127.0.0.1:8080/restaurants",
        function (data, status) {
            let restrauntHtml = "";
            let backgroundColor = 'green';
            data.forEach(e => {
                // console.log("i am id of restr",e.restaurant_id);
            if(e.restaurant_id == 11){
                console.log("i am id two 2nd",e.restaurant_id);

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
                `<div class="container">
                <div id="carouselExampleControls" class="carousel slide container" data-bs-ride="carousel">
                     <div class="carousel-inner">
                      <div class="carousel-item active">
                          <img src="${e.Photo}" class="d-block" alt="...">
                       </div>
                       <div class="carousel-item">
                          <img src="${e.Photo1}" class="d-block" alt="...">
                        </div>
                <div class="carousel-item">
                    <img src="${e.Photo2}" class="d-block" alt="...">
                </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
            <div class="container">
                <div class="d-flex justify-content-between mt-3">
                    <h2>${e.restaurantName}</h2>
                    <div class="d-flex justify-content-center">
                    <span><i class="fa fa-star p-2" style="color: ${e.avgRating >= 1 ? backgroundColor : '#CCC'}"></i></span>
                    <span><i class="fa fa-star p-2" style="color: ${e.avgRating >= 2 ? backgroundColor : '#CCC'}"></i></span>
                    <span><i class="fa fa-star p-2" style="color: ${e.avgRating >= 3 ? backgroundColor : '#CCC'}"></i></span>
                    <span><i class="fa fa-star p-2" style="color: ${e.avgRating >= 4 ? backgroundColor : '#CCC'}"></i></span>
                    <span><i class="fa fa-star p-2" style="color: ${e.avgRating == 5 ? backgroundColor : '#CCC'}"></i></span>    
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
                <form>
                <form action="">
                <div class="d-flex mt-2">
                    <textarea class="form-control" id="exampleFormControlTextarea" rows="3"
                        placeholder="Write Your Reviews Here" required></textarea>
                </div>
                <div class="mt-2">
                    <button type="submit" class="btn btn-primary">Review Post</button>
                </div>
            </form>
            </div>
        </div>`;
                restrauntHtml += restrauntPhoto;
            }
            });
            $('#RestoCarosal').append(restrauntHtml);
        }
        
    );
});