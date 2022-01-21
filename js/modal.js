$(document).ready(function () {
    $('#modal_grid').on('show.bs.modal', function (e) {
        var image = $(e.relatedTarget).attr('src');
        $(".img-responsive").attr("src", image);
    });
});
// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementsByClassName("Modal_Image");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// var showModal = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     captionText.innerHTML = this.alt;
// }

// for (var i = 0; i < img.length; i++) {
//     img[i].addEventListener('click', showModal);
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }

// // Get the <span> element that closes the modal
// var modal = document.getElementsByClassName("modal")[0];

// // When the user clicks on <span> (x), close the modal
// modal.onclick = function() { 
//   modal.style.display = "none";
// }




