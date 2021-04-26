const dividir = (a, b) => {
    if (b === 0 || a === 0) {
        return "No se puede dividir por cero!"
    }
    return "El resultado es " + Number(a / b)

}

module.exports=dividir