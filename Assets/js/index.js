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
                "title": "Project Splatwars",
                "date": "2019 - 2024",
                "desc": "Project splatwars is a 2D demake of certain popular online shooter. It supports up to 8 players in a lobby. As of 2024 no support will be given to this software.",
                "respon": "Game Design and Programming.",
                "tech": "Gamemaker Studio 2, .NET 6"
            },
            {
                "title": "Coopcar (Academy)",
                "date": "2022",
                "desc": "Coopcar is a Web App that allows car-sharing on user-created routes in a city.",
                "respon": "Fullstack programming, UI & UX",
                "tech": "ASP.NET 5.2.7, SQL Server 2019, jQuery 3.6.0, Bootstrap 5.1.3, VS 2022, Azure DevOps"
            },
            {
                "title": "IdeaBuffet (Academy)",
                "date": "2022",
                "desc": "IdeaBuffet is  a Web App that allows students to present their ideas to colleagues in online campus.",
                "respon": "Fullstack programming, UI & UX",
                "tech": "Blazor WebAssembly, SQL Server 2019, .NET 6, Havit Components 3.0.1, VS2022, Azure DevOps"
            },
            {
                "title": "Beauty Blends (Academy)",
                "date": "2023",
                "desc": "Beauty Blends is the name given to an association of bussiness that work together to give the user several health/beauty related services.",
                "respon": "Scrum Master, Infraestructure Planning, Network Services Deployment",
                "tech": "Cisco Routers, Cisco Switches, Bind 9, Ubuntu Server 22.04, Dovecot, Postfix, Asterisk, Squid Proxy, Windows Server 2022 DHCP, FileZilla FTPs"
            },
            {
                "title": "Space Soccer (In Production)",
                "date": "2023",
                "desc": "Online VS game for 2 players over the internet. Score 10 goals to win! As of 2024 is has 2,021 plays over: <a href=" + "https://gx.games/games/umuk93/space-soccer/" + ">Play Space Soccer!</a>",
                "respon": "Game Design, Game Development, Marketing",
                "tech": "Gamemaker Studio 2: Beta Networking"
            },
            {
                "title": "Redclazz's Home (In Production)",
                "date": "2024",
                "desc": "Hi! You're using this project right now!",
                "respon": "Fullstack programming",
                "tech": "HTML, CSS & JS, .NET 6"
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
                modal_show_error("No available projects. Reload page.");
            }
        }
    })
}

$(document).ready(() => {
    load_home();
});

$("#button-home").on("click", load_home);
$("#button-projects").on("click", load_projects);