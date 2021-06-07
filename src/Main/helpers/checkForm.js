
export const checkForm = (data) => {
    const {urlEspacio,fotoPerfil,nombreEspacio,cantPersonas,colorthema,privacidad}=data;
    if(urlEspacio==="" ||fotoPerfil===""||nombreEspacio===""||cantPersonas===""||colorthema===""||privacidad==="")
    return false;
    return true;
}
