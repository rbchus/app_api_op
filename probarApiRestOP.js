/*

ACUDIENTE \

crear
http://localhost:3001/api/acudiente/

{
    "cedula":"101010",
    "nombre":"Jesus",
    "apellido":"Ropero",
    "correo":"rbchus@gmail.com",
    "celular":"3133822565",
    "direccion":"Calle 4 No 45 - 51 Santa Clara"
}

listar uno 

http://localhost:3001/api/acudiente/101010

listar todos 
http://localhost:3001/api/acudiente/

editar 
http://localhost:3001/api/acudiente/101010

{
    "nombre":"Jesus",
    "apellido":"Ropero",
    "correo":"rbchus@gmail.com",
    "celular":"3133822565",
    "direccion":"Calle 4 No 45 - 51 Santa Clara"
}


{
    
    "nombre":"Jesus",
    "apellido":"Ropero",
    "genero":"m,
    "nacimiento":"1974-02-05",
  
}
NIÑOS \

crear
http://localhost:3001/api/nino/



listar uno 

http://localhost:3001/api/acudiente/101010

listar todos 
http://localhost:3001/api/acudiente/

editar 
http://localhost:3001/api/acudiente/101010

{
    "nombre":"Jesus",
    "apellido":"Ropero",
    "correo":"rbchus@gmail.com",
    "celular":"3133822565",
    "direccion":"Calle 4 No 45 - 51 Santa Clara"
}


// PARENTESCO
http://localhost:3001/api/parentesco/

{
    "id_nino":"2",
    "cedula":"101010",
    "id_parentesco":"5"
  
}

http://localhost:3001/api/parentesco/n/2

http://localhost:3001/api/parentesco/a/202020


//JUEGOS 
http://localhost:3001/api/juego/

{
    "id_nino":"2",
    "id_zona":"2",
    "tiempo_comprado":"30"
  
}


*/