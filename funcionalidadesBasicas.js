function sumar(n1,n2){
    return n1 + n2;
}
function restar(n1,n2){
    return n1 - n2;
}
function multiplicar(n1,n2){
    return n1 * n2;
}
function dividir(n1,n2){
    if(n2==0){
        return "no puede ser divisible po 0"
    }
    return n1 / n2;
}
module.exports = {sumar, restar, multiplicar, dividir};