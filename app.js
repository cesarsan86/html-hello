let pronombres = ["el", "nosotros", "ellos", "vosotros"];
let adjetivos = ["amarillo", "oscuro", "alto","ràpido"];
let nombres = ["Pedro", "Pablo", "Antonio" , "Jorge", "Jesús"];


for(let index=0; index< pronombres.length; index++){
   
    for(let j=0; j < adjetivos.length; j++){
        
        for(let h=0; h< nombres.length; h++){
            console.log(pronombres[index] + adjetivos[j] + nombres[h] + (".com" ))
        }    
    }
}