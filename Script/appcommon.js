function getupcomming() {
 
    var ht = '<div class="carousel-item active">' +
        ' <div class="card">' +
        ' <div class="img-wrapper customcardbody">' +
        ' <img src="Image/Upcomming/1.jpeg" alt="..."  />' +
        ' </div>' +
        ' <div class="card-body customcardbody">' +
      
        '  <p class="card-text">' +

        ' </p>' +
        ' <a href="#" class="btn btn-primary">Explore</a>' +
        '  </div>' +
        '  </div>' +
        ' </div > ';
    for (var i = 2; i <= lengthdetails.upcomming; i++) {
        ht = ht+'<div class="carousel-item">' +
            ' <div class="card">' +
            ' <div class="img-wrapper customcardbody">' +
            ' <img src="Image/Upcomming/' + i +'.jpeg" alt="..." />' +
            ' </div>' +
            ' <div class="card-body customcardbody">' +
          
            '  <p class="card-text">' +

            ' </p>' +
            ' <a href="#" class="btn btn-primary">Explore</a>' +
            '  </div>' +
            '  </div>' +
            ' </div > ';
    }
    $('#upcommingimage').html(ht);
}

function getMainBannerImage(currentfolder) {
    var sd = '<button type="button" data-bs-target="#carouselHomewrapperIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>';

    var ht = '<div class="carousel-item active" >' +
        '<img src="./Image/' + currentfolder +'/MainBanner/1.jpg" alt="Travel for wildLife" style="width:100%;height:650px">' +
        '</div>';
    for (var i = 0; i < lengthdetails[currentfolder]; i++) {
        ht = ht + '<div class="carousel-item" >' +
            '<img src="./Image/' + currentfolder + '/MainBanner/'+i+'.jpg" alt="Travel for wildLife" style="width:100%;height:650px">' +
            '</div>';
        sd = sd + '<button type="button" data-bs-target="#carouselHomewrapperIndicators" data-bs-slide-to="'+(i+1)+'"   aria-label="Slide 1"></button>';
    }
    $('#Mainbanner').html(ht);
    $('#slider').html(sd);
    
}
function getLeftSideBar(act) {
    var left = '<ul id="ulsideBar">' +
        '<li id="headerlist" > <a>Wildlife Tours</a></li>' +
        '<li> <a href="tadoba.html">Tadoba Tour</a></li > ' +
        '<li> <a href="pench.html">Pench Tour</a></li > ' +
        '<li> <a href="ranthambor.html">Ranthambor Tour</a></li > ' +
        '<li> <a href="tippeshwar.html">Tippeshwar Tour</a></li > ' +
        '<li> <a href="kanha.html">Kanha Tour</a></li > ' +
        '<li> <a href="corbett.html">Corbett Tour</a></li > ' +
        '<li> <a href="dudhwa.html">Dudhwa Tour</a></li > ' +
        '<li> <a href="nagzira.html">Nagzira Tour</a></li > ' +
        '<li> <a href="panna.html">Panna Tour</a></li > ' +
       
        '<li><a href="jawai.html">Jawai Tour</a></li>' +
        '</ul > ';
    $('#sideLeft').html(left);
    var allchild = $('#ulsideBar').children('li');
    $(allchild[act]).addClass('activetour');

}

function getHeader() {
    var ht = '<nav class="navbar navbar-expand-lg navbar-light bg-dark">' +
        '<div class="container-fluid" >' +
        '<a href="#" class="navbar-brand">' +
        '<img src="./src/Travelforwildlife.png" height="60" />' +
        ' </a>' +
        ' <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">' +
        ' <span class="navbar-toggler-icon"></span>' +
        ' </button>' +
        '<div class="collapse navbar-collapse" id="navbarCollapse">' +
        '<div class="navbar-nav" id="test">' +
        '<a href="./AboutUs.html" class="nav-item nav-link active">About Us</a>' +
        '<a href="./Pench.html" class="nav-item nav-link">Wildlife Tours</a>' +

        '<a href="./Gallery.html" class="nav-item nav-link">Gallery</a>' +
        '<a href="./Contact Us.html" class="nav-item nav-link">Contact US</a>' +
        '<a href="#" class="nav-item nav-link">Review</a>' +
        ' </div>' +

        '</div>' +
        '</div >' +
        ' </nav > ';
    $('.header').html(ht);
}