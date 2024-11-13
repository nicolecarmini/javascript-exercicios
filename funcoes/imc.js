
function calcularIMC(){
    const peso = parseFloat( document.getElementById("peso").value);
    const altura = parseFloat (document.getElementById("altura").value);
    let imc = peso/(altura*altura)
    let imcFormatado = imc.toFixed(2)
    console.log(imcFormatado)
    const resultado = document.getElementById("resultado").innerText = imcFormatado
}

