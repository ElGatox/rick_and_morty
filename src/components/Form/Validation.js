
 const validation = (userData) => {
    let errors = {}
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.username)) {
        errors.username = "El ussername es invalido"
    }
    if (!userData.username) {
        errors.username = "Este campo no puede estar vacio"
    }
    if(userData.username.length > 35) {
        errors.username = "El usser no puede superar los 35 caracteres"
    }
    if(!userData.password.match(/\d/)){
        errors.password = "La contraseña debe contener al menos un numero"
    }
    if(userData.password.length < 6 && userData.password.length > 10) {
        errors.password = "La contraseña debe contener entre 6 y 10 caracteres"
    }
    return errors;
 }


 export default validation