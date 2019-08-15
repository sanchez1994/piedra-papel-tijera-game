function opcion(humano){
       
    var resultado_texto = ["empatas","ganas","pierdes"];
    var nombre = ["piedra","papel","tijera","lagarto","spock"];
    var jugada = [
    [0,1,2,2,1],
        [2,0,1,1,2],
        [1,2,0,2,1],
        [1,2,1,0,2],
        [2,1,2,1,0]      
    ];
    
    // texto para las jugadas
    desc_jugada = [
        ['iguales','papel atrapa a piedra','piedra pulveriza tijeras','piedra pulveriza al lagarto','spock vaporiza a piedra'],
        ['papel atrapa a piedra','iguales','tijera corta al papel','lagarto se come el papel','papel desautoriza a spock'],
        ['piedra pulveriza tijeras','tijera corta al papel','iguales','tijeras matan al lagarto','spock rompe las tijeras'],
        ['piedra pulveriza al lagarto','lagarto se come el papel','tijeras matan al lagarto','iguales','Lagarto envenena a spock'],
        ['spock vaporiza piedra','papel desautoriza a spock','spock rompe las tijeras','Lagarto envenena a spock','iguales']      
    ];
    
    var cpu = Math.floor((Math.random()* 5));
    resultado = jugada[cpu][humano];
    
    console.log("humano: " + nombre[humano]);
    console.log("cpu: " + nombre[cpu]);
  console.log(desc_jugada[cpu][humano]);
    console.log(resultado_texto[resultado]);
    
    var mensaje1;
    var mensaje2;
    var mensaje3;
    var mensaje4;
    
    mensaje1= new SpeechSynthesisUtterance("humano: " + nombre[humano])
    mensaje2= new SpeechSynthesisUtterance("cpu: " + nombre[cpu])
    mensaje3= new SpeechSynthesisUtterance(desc_jugada[cpu][humano])
    mensaje4= new SpeechSynthesisUtterance(resultado_texto[resultado])
    
    window.speechSynthesis.speak(mensaje1);
     window.speechSynthesis.speak(mensaje2);
     window.speechSynthesis.speak(mensaje3);
     window.speechSynthesis.speak(mensaje4);
}