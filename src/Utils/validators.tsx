const validarEmail = (email: any) => {
    return email?.toString().includes('@') && email?.toString().includes('.');
 }
 
 const validarSenha = (senha: any) => {
     return senha?.toString().length > 6;
 }
 
 const validarNome = (nome: any) => {
     return nome?.toString().length > 2
 }
 
 const validarConfirmarSenha = (senha: any, confirmarSenha: any) => {
     return validarSenha(senha) && senha === confirmarSenha
 }
 
 export {
     validarEmail,
     validarSenha,
     validarNome,
     validarConfirmarSenha
 }