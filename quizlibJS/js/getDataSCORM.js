window.addEventListener("load", function(event) {
    console.log("Todos los recursos del SCORM terminaron de cargar!");
    // Busca el campo para llenar con el nombre del usuario
    let userFieldSCORM = document.getElementById('userName');
    if (userFieldSCORM) {
        let getUsername = String(scorm.get("cmi.core.student_name"));
        console.log(getUsername);
        if (getUsername !== "null") {
            console.log("La API de SCORM conecta con el nombre del usuario");
            localStorage.setItem("USER_LMS", getUsername);
        } else {
            console.log("el nombre del usuario lo trae del LocalStorage");
            getUsername = localStorage.getItem("USER_LMS");
        }
        userFieldSCORM.innerHTML = getUsername;
    }
});