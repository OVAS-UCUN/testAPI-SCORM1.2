window.addEventListener("load", function(event) {
    // console.log("Todos los recursos del SCORM terminaron de cargar!");
    // Busca el campo para llenar con el nombre del usuario
    let userFieldSCORM = document.getElementById('userName');
    if (userFieldSCORM) {
        let getUsername = String(scorm.get("cmi.core.student_name"));
        // console.log(getUsername);

        function savelocal() {
            if (getUsername !== "null") {
                localStorage.setItem("nombre", getUsername);

            }
        }
        savelocal();

        function obtenerlocal() {
            let nombre = localStorage.getItem("nombre");
            // console.log("nombre", nombre);

            if (nombre !== "null") {
                console.log("La API de SCORM conecta con el nombre del usuario");
                userFieldSCORM.innerHTML = nombre;
            }
        }
        obtenerlocal();


    }
});