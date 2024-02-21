var galleryModal = new bootstrap.Modal(document.getElementById('loading-modal'), {
    keyboard: false
});

function modal_show(loading_text = "Connecting to the internet ..."){
    $("#loading-title").html(loading_text);
    galleryModal.show();
}

function modal_close(closing_text = "Ok", time_out = 1000){
    $("#loading-title").html(closing_text);
    setTimeout(()=>{
        galleryModal.hide();
    },time_out)
}

function modal_show_error(error_text = "An error has ocurred. Reload the page."){
    $("#loading-title").html(error_text);
    $("#modal_image").attr("src","./Assets/gifs/error.gif");
}

$(document).ready(() => {
    modal_show();
    $("#main-content-viewer").load("./Pages/home.html",(responseText,textStatus,req) => {
        if(textStatus == "error"){
            modal_show_error();
        }else{
            modal_close();
        }
    })
});