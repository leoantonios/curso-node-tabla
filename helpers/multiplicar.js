const fs = require('fs');

const generarArchivoTabla = async(n = 5, listar = false, hasta = 10)=>{
    
   try {
    let resultado = '';
    for (let i = 1; i <= hasta; i++) {
        resultado += `${n} x ${i} = ${n*i}\n`;
    }

    if(listar){ console.log(resultado); }
    

    fs.writeFileSync(`./salida/tabla-${n}.txt`,resultado);
    return (`Tabla del ${n} creada correctamente`)
   } catch (error) {
    throw error;
   }
   

}

module.exports = {
    generarArchivoTabla
}