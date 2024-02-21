var galleryModal = new bootstrap.Modal(document.getElementById('loading-modal'), {
    keyboard: false
});

//#region Modal Functions
function modal_show(loading_text = "Connecting to the internet ...") {
    $("#loading-title").html(loading_text);
    galleryModal.show();
}

function modal_close(closing_text = "Ok", time_out = 1000) {
    $("#loading-title").html(closing_text);
    setTimeout(() => {
        galleryModal.hide();
    }, time_out)
}

function modal_show_error(error_text = "An error has ocurred. Reload the page.") {
    $("#loading-title").html(error_text);
    $("#modal_image").attr("src", "./Assets/gifs/error.gif");
}
//#endregion

function load_home() {
    modal_show();
    $("#main-content-viewer").load("./Pages/home.html", (responseText, textStatus, req) => {
        if (textStatus == "error") {
            modal_show_error();
        } else {
            modal_close();
        }
    })
}

function load_projects() {
    modal_show("Downloading projects data ...");
    //Get the projects from any source
    var project_data = {
        "projects": [
            {
                "title": "Project 1",
                "date": "2024",
                "desc": "A new test project.",
                "respon": "My work.",
                "tech": "My Work."
            }
        ]
    }

    //Get the main Project's view
    $("#main-content-viewer").load("./Pages/projects.html", (responseText, textStatus, req) => {
        //Got the View OK?
        if (textStatus == "error") {
            modal_show_error();
        } else {
            //Get the project's card template
            console.log(project_data["projects"]);
            if (project_data["projects"].length > 0) {
                $.get("./Templates/project-card.html", function (data, status) {
                    if (status == "error") {
                        //Failed??
                        modal_show_error();
                    } else {
                        project_data["projects"].forEach((project) => {
                            let response = data; //Iterate through all rooms and draw them to screen
                            let placeholders = {
                                "{{Title}}": project["title"],
                                "{{Date}}": project["date"],
                                "{{Description}}": project["desc"],
                                "{{Respon}}": project["respon"],
                                "{{Tech}}": project["tech"],
                            };
                            //Replace in template
                            for (let placeholder in placeholders) {
                                if (placeholders.hasOwnProperty(placeholder)) {
                                    response = response.replace(placeholder, placeholders[placeholder]);
                                }
                            }
                            $('#projects-row').append(response);//Finally append in html
                        });

                        modal_close();
                    }
                })
            }else{
                modal_show_error("No available projects.");
            }
        }
    })
}

$(document).ready(() => {
    load_home();
});


$("#button-home").on("click", load_home);
$("#button-projects").on("click", load_projects);