document.onkeypress = desdeTeclado;// le aplico el metodo onkeypress al modulo documento y finalmente asigno la funcion desdeTeclado para que la calculadora funcione por teclado
let screen = document.getElementById('screen');// el metodo get.. me retorna una referencia al primer objeto con el valor del id screen,que lo guardo en la variable screen
const buttons = document.querySelectorAll("#buttons a");//Obtener todos los elementos en el documento con atributo # que tienen class = "buttons a": y guardarlo en var constante buttons

//document.addEventListener("keypress",desdeTeclado);

for (const button of buttons) {//recorro lo que fui guardando en buttons  con un iterador llamado "button" 
    button.addEventListener('click', function(e) {//target.addEventListener('tipo de evento',función_a_lanzar,booleano);button es el elemento que se va a escuchar;click(tipo de evento)
        e.preventDefault();//detener una acción por omisión, utilizada comunmente sobre etiquetas (a)
 
        if (e.target.dataset.key == 'equal'){// si el usuario  hace click en el objetivo(target)en este caso en la calculadora en la clave equal
            screen.textContent = eval(screen.textContent);//se  evalua de lo escrito por pantalla y se guarda ahi mismo
            if (screen.textContent.length > 5){//si el tamaño de  lo escrito por pantalla es mayor de 8 
                screen.textContent = eval(screen.textContent).toFixed(5);//se formatea tantos lugares despues del punto,redondea a 5 decimales en este caso
            }
        } 
        else if (e.target.dataset.key == 'clear'){//sino en caso de hacer click en el boton C 
            screen.textContent = '';//se limpia la pantalla
        } 
        else {//para el resto de los casos 
            screen.textContent = screen.textContent + e.target.dataset.key;//recursion ,en donde se concatena de lo que se va haciendo click  en pantalla
        }   
    });
}

function desdeTeclado(e){//e representa al evento en si mismo
    let codigo = e.charCode;//obtenemos el codigo del caracter ingresado
    let caracter = String.fromCharCode(codigo);//le pasamos como argumento la variable codigo donde obtuvimos el caracter ingresado,entonces lo almacenamos en la variable caracter
    
    console.log(codigo);

    let caracteres = ["1","2","3","4","5","6","7","8","9","0","+","-","*","/","."];
    if(caracteres.includes(caracter)){// si el caracter ingresado por teclado esta en la lista de caracteres
        screen.textContent = screen.textContent + caracter;// concatenar lo que se vaya ingresando por teclado,que este incluido en el array caracteres
    }    
    else if(codigo == 13 ){//sino ,si no esta en la lista anterior y es la tecla "enter" la ingresada por teclado que evalue y guarde el resultado ahi mismo 
        screen.textContent = eval(screen.textContent);//para que muestre por pantalla el resultado de lo evaluado
    }
    else if(codigo == 99){//si es la tecla letra "c" del teclado
        screen.textContent = " ";//que se limpie la pantalla
    }    
}
