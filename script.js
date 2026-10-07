// ==========================================
// PAVANI.OS - BOOT SYSTEM
// ==========================================

const bootScreen =
    document.getElementById("bootScreen");

const bootProgress =
    document.getElementById("bootProgress");

const bootStatus =
    document.getElementById("bootStatus");

const mainOS =
    document.getElementById("mainOS");

const recruiterModeBtn =
    document.getElementById("recruiterModeBtn");


let progress = 0;


const bootMessages = [
    "Initializing system...",
    "Loading developer profile...",
    "Loading projects...",
    "Loading skills...",
    "Starting PAVANI.OS...",
    "SYSTEM ONLINE"
];


const bootInterval = setInterval(() => {

    progress += 2;

    bootProgress.style.width =
        progress + "%";


    const messageIndex =
        Math.min(
            Math.floor(progress / 20),
            bootMessages.length - 1
        );


    bootStatus.textContent =
        bootMessages[messageIndex];


    if (progress >= 100) {

        clearInterval(bootInterval);


        setTimeout(() => {

            bootScreen.classList.add("hide");

            mainOS.classList.add("show");

        }, 500);

    }

}, 40);



// ==========================================
// GET BUTTONS
// ==========================================

const projectsBtn =
    document.getElementById("projectsBtn");

const resumeBtn =
    document.getElementById("resumeBtn");

const aboutBtn =
    document.getElementById("aboutBtn");

const projectsDockBtn =
    document.getElementById("projectsDockBtn");

const skillsBtn =
    document.getElementById("skillsBtn");

const resumeDockBtn =
    document.getElementById("resumeDockBtn");

const contactBtn =
    document.getElementById("contactBtn");



// ==========================================
// GET WINDOWS
// ==========================================

const projectsWindow =
    document.getElementById("projectsWindow");

const aboutWindow =
    document.getElementById("aboutWindow");

const skillsWindow =
    document.getElementById("skillsWindow");

const contactWindow =
    document.getElementById("contactWindow");

const resumeWindow =
    document.getElementById("resumeWindow");

const recruiterWindow =
    document.getElementById("recruiterWindow");


// ==========================================
// GET CLOSE BUTTONS
// ==========================================

const closeProjects =
    document.getElementById("closeProjects");

const closeAbout =
    document.getElementById("closeAbout");

const closeSkills =
    document.getElementById("closeSkills");

const closeContact =
    document.getElementById("closeContact");

const closeResume =
    document.getElementById("closeResume");

const closeRecruiter =
    document.getElementById("closeRecruiter");



// ==========================================
// WINDOW Z-INDEX
// ==========================================

let highestZIndex = 10;



// ==========================================
// OPEN WINDOW
// ==========================================

function openWindow(windowElement) {

    windowElement.classList.remove("minimized");

    windowElement.classList.remove("open");

    void windowElement.offsetWidth;

    windowElement.classList.add("open");

    highestZIndex++;

    windowElement.style.zIndex =
        highestZIndex;

    updateDockState();

}

function openRecruiter() {
    openWindow(recruiterWindow);

    document
    .getElementById("recruiterProjectsBtn")
    .addEventListener("click", () => {

        closeRecruiterWindow();
        openWindow(projectsWindow);

    });


document
    .getElementById("recruiterSkillsBtn")
    .addEventListener("click", () => {

        closeRecruiterWindow();
        openWindow(skillsWindow);

    });


document
    .getElementById("recruiterContactBtn")
    .addEventListener("click", () => {

        closeRecruiterWindow();
        openWindow(contactWindow);

    });
}

function closeRecruiterWindow() {
    closeWindow(recruiterWindow);
}

// ==========================================
// CLOSE WINDOW
// ==========================================

function closeWindow(windowElement) {

    windowElement.classList.remove("open");

    windowElement.classList.remove("minimized");

    updateDockState();

}



// ==========================================
// MINIMIZE WINDOW
// ==========================================

function minimizeWindow(windowElement) {

    windowElement.classList.add("minimized");

    updateDockState();

}



// ==========================================
// RESTORE WINDOW
// ==========================================

function restoreWindow(windowElement) {

    windowElement.classList.remove("minimized");

    windowElement.classList.remove("open");

    void windowElement.offsetWidth;

    windowElement.classList.add("open");

    highestZIndex++;

    windowElement.style.zIndex =
        highestZIndex;

    updateDockState();

}
// ==========================================
// UPDATE DOCK STATE
// ==========================================

function updateDockState() {

    const dockMap = [

        {
            button: aboutBtn,
            window: aboutWindow
        },

        {
            button: projectsDockBtn,
            window: projectsWindow
        },

        {
            button: skillsBtn,
            window: skillsWindow
        },

        {
            button: resumeDockBtn,
            window: resumeWindow
        },

        {
            button: contactBtn,
            window: contactWindow
        }

    ];


    dockMap.forEach(item => {

        if (!item.button || !item.window) {
            return;
        }


        item.button.classList.remove("active");

        item.button.classList.remove("minimized");


        if (
            item.window.classList.contains("open")
        ) {

            item.button.classList.add("active");

        }


        if (
            item.window.classList.contains("minimized")
        ) {

            item.button.classList.remove("active");

            item.button.classList.add("minimized");

        }

    });

}

// ==========================================
// OPEN FUNCTIONS
// ==========================================

function openProjects() {

    openWindow(projectsWindow);

}


function openAbout() {

    openWindow(aboutWindow);

}


function openSkills() {

    openWindow(skillsWindow);

}


function openContact() {

    openWindow(contactWindow);

}


function openResume() {

    openWindow(resumeWindow);

}



// ==========================================
// CLOSE FUNCTIONS
// ==========================================

function closeProjectsWindow() {

    closeWindow(projectsWindow);

}


function closeAboutWindow() {

    closeWindow(aboutWindow);

}


function closeSkillsWindow() {

    closeWindow(skillsWindow);

}


function closeContactWindow() {

    closeWindow(contactWindow);

}


function closeResumeWindow() {

    closeWindow(resumeWindow);

}

function closeRecruiterWindow() {

    closeWindow(recruiterWindow);

}



// ==========================================
// PROJECTS
// ==========================================

projectsBtn.addEventListener(
    "click",
    openProjects
);


projectsDockBtn.addEventListener(
    "click",
    () => {

        if (
            projectsWindow.classList.contains(
                "minimized"
            )
        ) {

            restoreWindow(projectsWindow);

        } else {

            openProjects();

        }

    }
);

recruiterModeBtn.addEventListener("click", () => {

    if (recruiterWindow.classList.contains("minimized")) {
        restoreWindow(recruiterWindow);
    } else {
        openRecruiter();
    }

});

closeRecruiter.addEventListener("click", () => {
    closeRecruiterWindow();
});

closeProjects.addEventListener(
    "click",
    closeProjectsWindow
);



// ==========================================
// ABOUT
// ==========================================

aboutBtn.addEventListener(
    "click",
    () => {

        if (
            aboutWindow.classList.contains(
                "minimized"
            )
        ) {

            restoreWindow(aboutWindow);

        } else {

            openAbout();

        }

    }
);


closeAbout.addEventListener(
    "click",
    closeAboutWindow
);



// ==========================================
// SKILLS
// ==========================================

skillsBtn.addEventListener(
    "click",
    () => {

        if (
            skillsWindow.classList.contains(
                "minimized"
            )
        ) {

            restoreWindow(skillsWindow);

        } else {

            openSkills();

        }

    }
);


closeSkills.addEventListener(
    "click",
    closeSkillsWindow
);



// ==========================================
// CONTACT
// ==========================================

contactBtn.addEventListener(
    "click",
    () => {

        if (
            contactWindow.classList.contains(
                "minimized"
            )
        ) {

            restoreWindow(contactWindow);

        } else {

            openContact();

        }

    }
);


closeContact.addEventListener(
    "click",
    closeContactWindow
);



// ==========================================
// RESUME
// ==========================================

resumeBtn.addEventListener(
    "click",
    () => {

        if (
            resumeWindow.classList.contains(
                "minimized"
            )
        ) {

            restoreWindow(resumeWindow);

        } else {

            openResume();

        }

    }
);


resumeDockBtn.addEventListener(
    "click",
    () => {

        if (
            resumeWindow.classList.contains(
                "minimized"
            )
        ) {

            restoreWindow(resumeWindow);

        } else {

            openResume();

        }

    }
);


closeResume.addEventListener(
    "click",
    closeResumeWindow
);

// ==========================================
// RECRUITER MODE
// ==========================================

recruiterModeBtn.addEventListener(
    "click",
    () => {

        if (
            recruiterWindow.classList.contains(
                "minimized"
            )
        ) {

            restoreWindow(recruiterWindow);

        } else {

            openRecruiter();

        }

    }
);


closeRecruiter.addEventListener(
    "click",
    closeRecruiterWindow
);

// ==========================================
// RESUME BUTTONS
// ==========================================

const viewResumeBtn =
    document.getElementById("viewResumeBtn");

const downloadResumeBtn =
    document.getElementById("downloadResumeBtn");


viewResumeBtn.addEventListener(
    "click",
    () => {

        alert(
            "Your resume PDF will be connected here."
        );

    }
);


downloadResumeBtn.addEventListener(
    "click",
    () => {

        alert(
            "Resume PDF will be available here soon."
        );

    }
);



// ==========================================
// INTERACTIVE TERMINAL
// ==========================================

let terminalInput =
    document.getElementById("terminalInput");

const terminalOutput =
    document.getElementById("terminalOutput");


function addTerminalLine(command, response) {

    const commandLine =
        document.createElement("div");

    commandLine.innerHTML =
        `<span class="terminal-prompt">
            pavani@os:~$
        </span> ${command}`;


    const inputLine =
        terminalOutput.querySelector(
            ".terminal-line"
        );


    terminalOutput.insertBefore(
        commandLine,
        inputLine
    );


    const responseLine =
        document.createElement("div");

    responseLine.innerHTML =
        response;


    terminalOutput.insertBefore(
        responseLine,
        inputLine
    );

}


function runTerminalCommand(command) {

    command =
        command.toLowerCase().trim();


    if (command === "") {

        return;

    }


    switch (command) {


        case "help":

            addTerminalLine(
                command,
                `
                <div class="terminal-response">

                    <div>
                        Available commands:
                    </div>

                    <div>→ about</div>
                    <div>→ projects</div>
                    <div>→ skills</div>
                    <div>→ resume</div>
                    <div>→ contact</div>
                    <div>→ recruiter</div>
                    <div>→ clear</div>

                </div>
                `
            );

            break;



        case "about":

            addTerminalLine(
                command,
                `
                <div class="terminal-response">
                    Opening ABOUT.exe...
                </div>
                `
            );

            openAbout();

            break;



        case "projects":

            addTerminalLine(
                command,
                `
                <div class="terminal-response">
                    Opening PROJECTS.exe...
                </div>
                `
            );

            openProjects();

            break;



        case "skills":

            addTerminalLine(
                command,
                `
                <div class="terminal-response">
                    Opening SKILLS.exe...
                </div>
                `
            );

            openSkills();

            break;



        case "resume":

            addTerminalLine(
                command,
                `
                <div class="terminal-response">
                    Opening RESUME.exe...
                </div>
                `
            );

            openResume();
            function openRecruiter() {

    openWindow(recruiterWindow);

}
            break;



        case "contact":

            addTerminalLine(
                command,
                `
                <div class="terminal-response">
                    Opening CONTACT.exe...
                </div>
                `
            );

            openContact();

            break;

        case "recruiter":

    addTerminalLine(
        command,
        `
        <div class="terminal-response">
            Opening RECRUITER_MODE.exe...
        </div>
        `
    );

    openRecruiter();

    break;

        case "recruiter":

    addTerminalLine(
        "Opening Recruiter Mode..."
    );

    openRecruiter();

    break;

        case "clear":

            terminalOutput.innerHTML = `

                <div class="terminal-line">

                    <span class="terminal-prompt">
                        pavani@os:~$
                    </span>

                    <input
                        type="text"
                        id="terminalInput"
                        autocomplete="off"
                        autofocus
                    >

                </div>

            `;


            terminalInput =
                document.getElementById(
                    "terminalInput"
                );


            attachTerminalInput();

            terminalInput.focus();

            break;



        default:

            addTerminalLine(
                command,
                `
                <div class="terminal-response">

                    Command not found:
                    <strong>${command}</strong>

                    <br>

                    Type
                    <strong>help</strong>
                    to see available commands.

                </div>
                `
            );

    }

}



// ==========================================
// TERMINAL INPUT
// ==========================================

function attachTerminalInput() {

    terminalInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                const command =
                    terminalInput.value;

                terminalInput.value = "";

                runTerminalCommand(command);

            }

        }
    );

}


attachTerminalInput();



// ==========================================
// DRAGGABLE WINDOWS
// ==========================================

const appWindows =
    document.querySelectorAll(".app-window");


appWindows.forEach((windowElement) => {

    const header =
        windowElement.querySelector(
            ".window-header"
        );


    // Bring window to front

    windowElement.addEventListener(
        "mousedown",
        () => {

            highestZIndex++;

            windowElement.style.zIndex =
                highestZIndex;

        }
    );


    // Drag window

    header.addEventListener(
        "mousedown",
        (event) => {

            if (
                event.target.closest(
                    ".window-controls"
                )
            ) {

                return;

            }


            const rect =
                windowElement.getBoundingClientRect();


            const offsetX =
                event.clientX - rect.left;

            const offsetY =
                event.clientY - rect.top;


            function moveWindow(event) {

                if (
                    windowElement.classList.contains(
                        "maximized"
                    )
                ) {

                    return;

                }


                let newLeft =
                    event.clientX - offsetX;

                let newTop =
                    event.clientY - offsetY;


                const maxLeft =
                    window.innerWidth -
                    windowElement.offsetWidth;

                const maxTop =
                    window.innerHeight -
                    windowElement.offsetHeight;


                newLeft =
                    Math.max(
                        0,
                        Math.min(
                            newLeft,
                            maxLeft
                        )
                    );


                newTop =
                    Math.max(
                        0,
                        Math.min(
                            newTop,
                            maxTop
                        )
                    );


                windowElement.style.left =
                    newLeft + "px";

                windowElement.style.top =
                    newTop + "px";


                windowElement.style.transform =
                    "none";

            }


            function stopDragging() {

                document.removeEventListener(
                    "mousemove",
                    moveWindow
                );


                document.removeEventListener(
                    "mouseup",
                    stopDragging
                );

            }


            document.addEventListener(
                "mousemove",
                moveWindow
            );


            document.addEventListener(
                "mouseup",
                stopDragging
            );

        }
    );

});



// ==========================================
// WINDOW CONTROLS
// ==========================================

appWindows.forEach((windowElement) => {

    const minimizeButton =
        windowElement.querySelector(
            ".window-minimize"
        );


    const maximizeButton =
        windowElement.querySelector(
            ".window-maximize"
        );


    // MINIMIZE

    minimizeButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            minimizeWindow(
                windowElement
            );

        }
    );


    // MAXIMIZE / RESTORE

    maximizeButton.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();


            windowElement.classList.toggle(
                "maximized"
            );


            if (
                windowElement.classList.contains(
                    "maximized"
                )
            ) {

                maximizeButton.textContent =
                    "❐";

            } else {

                maximizeButton.textContent =
                    "□";

            }

        }
    );

});

// ==========================================
// RECRUITER MODE ACTIONS
// ==========================================

const recruiterProjectsBtn =
    document.getElementById(
        "recruiterProjectsBtn"
    );

const recruiterSkillsBtn =
    document.getElementById(
        "recruiterSkillsBtn"
    );

const recruiterContactBtn =
    document.getElementById(
        "recruiterContactBtn"
    );


recruiterProjectsBtn.addEventListener(
    "click",
    () => {

        closeRecruiterWindow();

        openProjects();

    }
);


recruiterSkillsBtn.addEventListener(
    "click",
    () => {

        closeRecruiterWindow();

        openSkills();

    }
);


recruiterContactBtn.addEventListener(
    "click",
    () => {

        closeRecruiterWindow();

        openContact();

    }
);