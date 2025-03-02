let nombre = '';
let numeroDePregunta = 1;
let area = '';
let curso = '';
let especialización = '';
let cursoIngresado = '';
let listaCursoIngresado = [];
let elementosDeLista = 0;

function asignarTextoHTML(idEtiqueta, texto){
    let elementoHTML = document.getElementById(idEtiqueta);
    if (idEtiqueta.includes('btn')) { //para botones se usa VALUE
        elementoHTML.value = texto;
    } else if (idEtiqueta == 'id_listaP') {
        let nuevoElementoP = document.createElement('p'); //crea nuevos elementos hijos
        nuevoElementoP.innerHTML = texto;
        elementoHTML.appendChild(nuevoElementoP);
    } else {
        elementoHTML.innerHTML = texto; // para etiquetas se usa innerHTML
    }
    return;
}

function limpiarElementosHtmlCreados(idContenedor){
    let nuevoElementoCreado = document.getElementById(idContenedor);
    nuevoElementoCreado.innerHTML = ''; // limpia todos los elementos hijos
}

function limpiarInput(idInput){
    document.getElementById(idInput).value = '';
}

function condicionesIniciales(){
    asignarTextoHTML('id_titulo_juego', 'Reto 3: Elige tu destino');
    asignarTextoHTML('id_preguntar', '¿Cuál es tu nombre?')
    ocultarMostrarElementoHTML('id_ingresar_respuesta', false);    
    ocultarMostrarElementoHTML('id_btn_volver', false);
    asignarTextoHTML('id_btn_volver', 'Jugar');
    
    ocultarMostrarElementoHTML('id_opcion1', true);
    ocultarMostrarElementoHTML('id_opcion2', true);
    ocultarMostrarElementoHTML('id_btn1', true);
    ocultarMostrarElementoHTML('id_btn2', true);    
    ocultarMostrarElementoHTML('id_btn_finalizar', true);
    listaCursoIngresado = [];
    numeroDePregunta = 1;
    elementosDeLista = 0;
}

condicionesIniciales();

function ocultarMostrarElementoHTML(idElemento, opcion){
    //let ocultarElemento = 
    return document.getElementById(idElemento).hidden = opcion;
}

function btnOk(){
    if (numeroDePregunta == 1) {
        nombre = document.getElementById('id_ingresar_respuesta').value;
        if (nombre == '') {
            alert('Por favor ingrese su nombre');
        } else {
            numeroDePregunta++;
            ocultarMostrarElementoHTML('id_ingresar_respuesta', true);
            ocultarMostrarElementoHTML('id_btn_volver', true);
            
            asignarTextoHTML('id_preguntar', '¿Qué área desea seguir?');
            asignarTextoHTML('id_opcion1', 'Opción 1: Front-End');
            asignarTextoHTML('id_opcion2', 'Opción 2: Back-End');
            asignarTextoHTML('id_btn1', 'Opción 1');
            asignarTextoHTML('id_btn2', 'Opción 2');
            ocultarMostrarElementoHTML('id_opcion1', false);
            ocultarMostrarElementoHTML('id_opcion2', false);
            ocultarMostrarElementoHTML('id_btn1', false);
            ocultarMostrarElementoHTML('id_btn2', false);
            asignarTextoHTML('id_btn_volver', 'Volver a Jugar');
        }        
    }
    if (numeroDePregunta == 5) {       
        cursoIngresado = document.getElementById('id_ingresar_respuesta').value;
        if (cursoIngresado == '') {
            alert('Por favor ingresar un dato');
        } else {
            listaCursoIngresado.push(cursoIngresado);
            asignarTextoHTML('id_preguntar', '¿Hay alguna otra tecnología que tegustaría aprender?');
            asignarTextoHTML('id_listaP',listaCursoIngresado[elementosDeLista]);
            elementosDeLista++;
            limpiarInput('id_ingresar_respuesta');
        }       
    }
}

function btnFinalizar(){
    condicionesIniciales();
    limpiarElementosHtmlCreados('id_listaP');
}

function btn1Elegir(){
    if (numeroDePregunta == 2) {
        area = 'Front-End'
        numeroDePregunta++;
        asignarTextoHTML('id_preguntar', '¿Qué curso desea aprender?');
        asignarTextoHTML('id_opcion1', 'Opción 1: React');
        asignarTextoHTML('id_opcion2', 'Opción 2: Vue');
    }
    if (numeroDePregunta == 3) {
        if (area = 'Front-End') {
            curso = 'React'
        }else{
            curso = 'C#'
        }
        numeroDePregunta++;
        asignarTextoHTML('id_preguntar', '¿Qué desea seguir?');
        asignarTextoHTML('id_opcion1', `Opción 1: Especialización en ${respuestaArea}`);
        asignarTextoHTML('id_opcion2', 'Opción 2: Convertirme en Fullstack');
    }
    if (numeroDePregunta == 4) {
        especialización = area;
        numeroDePregunta++;
        ocultarMostrarElementoHTML('id_opcion1', true);
        ocultarMostrarElementoHTML('id_opcion2', true);
        ocultarMostrarElementoHTML('id_btn1', true);
        ocultarMostrarElementoHTML('id_btn2', true);
        asignarTextoHTML('id_preguntar', ``);
        asignarTextoHTML('id_mensaje', `Hola ${nombre}, tu destino es ser desarrollador(a) ${area}, actualmente estas aprendiendo ${curso} y podrias ser un excelente profesional ${especialización}.`);

        setTimeout(() =>{
            asignarTextoHTML('id_preguntar', `${nombre}, en qué tecnologías te gustaría especializarse o conocer?`);
            limpiarInput('id_ingresar_respuesta');
            ocultarMostrarElementoHTML('id_ingresar_respuesta', false);    
            ocultarMostrarElementoHTML('id_btn_volver', false);
            ocultarMostrarElementoHTML('id_btn_finalizar', false);
            asignarTextoHTML('id_btn_volver', 'Agregar');
            asignarTextoHTML('id_btn_finalizar', 'Finalizar');
            asignarTextoHTML('id_mensaje', ``);
        },6000);
    }
}

function btn2Elegir(){
    if (numeroDePregunta == 2) {
        area = 'Back-End'
        numeroDePregunta++;
        asignarTextoHTML('id_preguntar', '¿Qué curso desea aprender?');
        asignarTextoHTML('id_opcion1', 'Opción 1: C#');
        asignarTextoHTML('id_opcion2', 'Opción 2: Java');
    }
    if (numeroDePregunta == 3) {
        if (area = 'Back-End') {
            curso = 'Java'
        }else{
            curso = 'Vue'
        }
        numeroDePregunta++;
        asignarTextoHTML('id_preguntar', '¿Qué desea seguir?');
        asignarTextoHTML('id_opcion1', `Opción 1: Especialización en ${respuestaArea}`);
        asignarTextoHTML('id_opcion2', 'Opción 2: Convertirme en Fullstack');
    }
    if (numeroDePregunta == 4) {
        especialización = 'Fullstack';
        numeroDePregunta++;
        ocultarMostrarElementoHTML('id_opcion1', true);
        ocultarMostrarElementoHTML('id_opcion2', true);
        ocultarMostrarElementoHTML('id_btn1', true);
        ocultarMostrarElementoHTML('id_btn2', true);
        asignarTextoHTML('id_preguntar', ``);
        asignarTextoHTML('id_mensaje', `Hola ${nombre}, tu destino es ser desarrollador(a) ${area}, actualmente estas aprendiendo ${curso} y podrias ser un excelente profesional ${especialización}.`);

        setTimeout(() =>{
            asignarTextoHTML('id_preguntar', `${nombre}, en qué tecnologías te gustaría especializarse o conocer?`);
            limpiarInput('id_ingresar_respuesta');
            ocultarMostrarElementoHTML('id_ingresar_respuesta', false);    
            ocultarMostrarElementoHTML('id_btn_volver', false);
            ocultarMostrarElementoHTML('id_btn_finalizar', false);
            asignarTextoHTML('id_btn_volver', 'Agregar');
            asignarTextoHTML('id_btn_finalizar', 'Finalizar');
            asignarTextoHTML('id_mensaje', ``);
        },6000);
    }
}