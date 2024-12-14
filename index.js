// Metodo para Mortgage Calculator
const action_button = document.getElementById("button_action");
let input_mount;
let input_term;
let input_interest;
let result;
let result_two;
action_button.addEventListener("click", () => {
    ValidacionForm();
  input_mount = parseFloat(document.getElementById("input-mount").value);
  input_term = parseFloat(document.getElementById("input-term").value) * 12;
  input_interest =
    parseFloat(document.getElementById("input-interest").value) / 100 / 12;
  //Formula para calcular hipoteca
    result = CalcularHipoteca().toFixed(2);
    console.log(result)
    result_two= CalcularTotalPagos(result)
MostrarResultados(result, result_two);
});
//Calcular Hipoteca
function CalcularHipoteca(){
return (input_mount * input_interest * Math.pow(1 + input_interest, input_term)) /
    (Math.pow(1 + input_interest, input_term) - 1);
}
//Calcular Total de Pagos
function CalcularTotalPagos(PagoMensual) {
    return PagoMensual * input_term;
}
//Validacion de formularios
function ValidacionForm() {
    const inputs = document.getElementsByClassName('input_value');
    const span_error = document.getElementsByClassName('span-error');
    const error_form = document.getElementsByClassName('error')
    const error_form_span = document.getElementsByClassName('error-form')
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == '') {
            span_error[i].textContent = 'This field is required'
            error_form[i].style.border = '1px solid red'
            error_form_span[i].style.backgroundColor = "hsl(4, 69%, 50%)";
            error_form_span[i].style.color = "white";
        }
        
    }
    const input_chexbox = document.getElementsByClassName("inputs-chexbox");
        if (!input_chexbox[0].checked && !input_chexbox[1].checked) {
            span_error[3].textContent = "This field is required";
           
        } else if (input_chexbox[0].checked || input_chexbox[1].checked) {
            span_error[3].textContent = ''
            
        }
}
//Mostrar Resultados
function MostrarResultados(result, result_two) {
    let container = document.getElementById("mostrar-result");
    let container_two = document.getElementById('invalid-result')
    let span_result = document.getElementById("result_one");
    let span_result_two = document.getElementById("result_two");
    if (result != 'NaN' && result_two != 'NaN') {
        container_two.style.display = 'none';
        container.style.display='block'
        span_result.textContent = result;
        span_result_two.textContent = result_two.toFixed(2);
  }
}
//Funcion Eliminar resultados
const button_all = document.getElementById("clearAll");
button_all.addEventListener('click', () => {
    let inputs = document.getElementsByClassName("input_value");
    for (let input of inputs) {
        input.value = ''

    }
})