let formulario = {
    email : document.querySelector("#email"),
    senha : document.querySelector("#seha"),
    btnEntrar : document.querySelector("#btn-entrar")
};

//aqui estamos escutando o evento de click.
formulario.btnEntrar.addEventListener('click', () =>{
    alert("Olááá");

    let usuario = new usuario({
        email : formulario.email.value,
        senha : formulario.senha.value
        //validar se usuario e senha podem acessar o sistema
    });

    window.open('/artistas.html' , '_self');
})

function autenticar(email,senha){
        
}

