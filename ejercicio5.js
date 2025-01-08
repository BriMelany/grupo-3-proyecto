
let edad= parseInt(prompt("Ingrese su edad"));
let recomendacion;

if (isNaN(edad) || edad <= 0){
console.log("Por favor ingrese una edad valida.");
}

if (edad<6){
let genero= prompt("Elige un genero para recomendarte los mejores titulos: (Acción, Comedia, Drama, Fantasía, Documentales)");

 if (genero === "fantasia") {
            recomendacion ="Te recomendamos: 'Frozen' y 'Encanto'.";
        } else if (genero === "accion") {
            recomendacion="Te recomendamos: 'Cars' y 'Kung Fu Panda'.";
        } else if (genero === "comedia") {
            recomendacion="Te recomendamos: 'Minions' y 'Hotel Transylvania'.";
        } else if (genero === "documentales") {
            recomendacion="Te recomendamos: 'Planeta Azul' o 'Nuestros Amigos los Animales'.";
        } else {
           recomendacion="Lo sentimos, no tenemos recomendaciones específicas para ese género.";
   } 
  document.getElementById("resultado").innerText="Mejores recomendaciones para tu edad de "+edad + " años: ";
  document.getElementById("resultado2").innerText="Contenido infantil (animaciones educativas, caricaturas).";
  document.getElementById("resultado3").innerText="Titulos recomendado: "+ recomendacion;

}else if(edad<=12){
    
let genero= prompt("Elige un genero para recomendarte los mejores titulos: (Acción, Comedia, Drama, Fantasía, Documentales)");
    if (genero === "fantasia") {
        recomendacion="Te recomendamos: 'Harry Potter' y 'El Viaje de Chihiro'.";
    } else if (genero === "accion") {
        recomendacion="Te recomendamos: 'The Incredibles' y 'Cómo Entrenar a tu Dragón'.";
    } else if (genero === "comedia") {
        recomendacion="Te recomendamos: 'Coco' y 'Ratatouille'.";
    } else if (genero === "documentales") {
      recomendacion="Te recomendamos: 'Growing Up Wild' y 'Bears'.";
    } else {
        recomendacion="Lo sentimos, no tenemos recomendaciones específicas para ese género.";
    }
   document.getElementById("resultado").innerText="Mejores recomendaciones para tu edad de"+edad + "años: ";
    document.getElementById("resultado2").innerText="Películas animadas y de fantasía.";
  document.getElementById("resultado3").innerText="Titulos recomendado: "+ recomendacion;
    
}else if(edad<=17){
    
    
let genero= prompt("Elige un genero para recomendarte los mejores titulos: (Acción, Comedia, Drama, Fantasía, Documentales)");

    if (genero === "accion") {
        recomendacion="Te recomendamos: 'Spider-Man: Homecoming' y 'The Hunger Games'.";
    } else if (genero === "comedia") {
        recomendacion="Te recomendamos: 'Juno' y 'The Edge of Seventeen'.";
    } else if (genero === "drama") {
        recomendacion="Te recomendamos: 'The Perks of Being a Wallflower' y 'Little Women'.";
    } else if (genero === "documentales") {
       recomendacion="Te recomendamos: '13th' y 'Knock Down the House'.";
    } else {
        recomendacion="Lo sentimos, no tenemos recomendaciones específicas para ese género.";
    }

    document.getElementById("resultado").innerText="Mejores recomendaciones para tu edad de"+edad + "años: ";
   document.getElementById("resultado2").innerText="Películas adolescentes, de acción ligera y aventuras.";
  document.getElementById("resultado3").innerText="Titulos recomendado: "+ recomendacion;


}else if(edad<=59){
    
    
let genero= prompt("Elige un genero para recomendarte los mejores titulos: (Acción, Comedia, Drama, Fantasía, Documentales)");
    if (genero === "accion") {
        recomendacion="Te recomendamos: 'Inception' y 'John Wick'.";
    } else if (genero === "comedia") {
        recomendacion="Te recomendamos: 'La La Land' y 'Crazy Rich Asians'.";
    } else if (genero === "drama") {
        recomendacion="Te recomendamos: 'Parasite' y 'Forrest Gump'.";
    } else if (genero === "documentales") {
        recomendacion="Te recomendamos: 'The Last Dance' y 'Our Planet'.";
    } else {
        recomendacion="Lo sentimos, no tenemos recomendaciones específicas para ese género.";
    }
    document.getElementById("resultado").innerText="Mejores recomendaciones para tu edad de"+edad + "años: ";
    document.getElementById("resultado2").innerText="Películas para adultos jóvenes (thrillers, dramas intensos, comedias románticas).";
    document.getElementById("resultado3").innerText="Titulos recomendado: "+ recomendacion;
}else{
   
let genero= prompt("Elige un genero para recomendarte los mejores titulos: (Acción, Comedia, Drama, Fantasía, Documentales)");
    if (genero === "accion") {
        recomendacion="Te recomendamos: 'El Padrino' y 'Ben-Hur'.";
    } else if (genero === "comedia") {
        recomendacion="Te recomendamos: 'La Vida es Bella' y 'Tiempos Modernos'.";
    } else if (genero === "drama") {
        recomendacion="Te recomendamos: 'The Green Mile' y 'The Shawshank Redemption'.";
    } else if (genero === "documentales") {
        recomendacion="Te recomendamos: 'My Octopus Teacher' y 'A Life on Our Planet'.";
    } else {
       recomendacion="Lo sentimos, no tenemos recomendaciones específicas para ese género.";
    }

    document.getElementById("resultado").innerText="Mejores recomendaciones para tu edad de"+edad + "años: ";
    document.getElementById("resultado2").innerText=" Películas clásicas, dramas emocionales o documentales relajantes.";
    document.getElementById("resultado3").innerText="Titulos recomendado: "+ recomendacion;
}