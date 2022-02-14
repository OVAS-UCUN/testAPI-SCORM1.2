window.addEventListener("load", function(event) {
    console.log("Todos los recursos del SCORM terminaron de cargar!");
    // Busca el campo para llenar con el nombre del usuario
    let userFieldSCORM = document.getElementById('userName');
    if (userFieldSCORM) {
        let getUsername = String(scorm.get("cmi.core.student_name"));
        console.log(getUsername);
        if (getUsername !== "null") {
            console.log("La API de SCORM conecta con el nombre del usuario");
            userFieldSCORM.innerHTML = getUsername;
        }
    }
});