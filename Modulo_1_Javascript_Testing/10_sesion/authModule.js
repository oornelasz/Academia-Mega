const AuthModule=(function (){
    //simular usuario
    const userDB = {
        username: "admin",
        password: "1234"
    }

    let currentUser= null;

    return{
        login(username, password){
            if(username===userDB.username && password===userDB.password){
                currentUser = UserSingleton.getInstance(username);
                console.log(`Usuario autenticado:  ${currentUser.name}`);    
            }else{
                console.log("Credenciales incorrectas");
            }
        },
        logout(){
            if(currentUser){
                console.log(`Hasta luego ${currentUser.name}`)
                currentUser = null;
                UserSingleton.clearInstance();
            }else{
                console.log("No hay usuario autenticado");
            }
        }
    }
})();