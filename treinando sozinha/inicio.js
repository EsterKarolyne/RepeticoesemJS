//IMC

function calcimc(){
    var nome = window.document.getElementById('nome')
    var altura = window.document.getElementById('altura')
    var peso = window.document.getElementById('peso')
    var resimc = window.document.getElementById('resimc')

    if (nome.length == 0 || altura.value.length == 0 || peso.value.length == 0){
        resimc.innerHTML = 'Preencha todos os espaços!'
    } else{
        resimc.innerHTML = 'Analisando...'
        
        var a = Number.parseFloat(altura.value)
        var p = Number.parseFloat(peso.value)
        var r = p / (a * a)
       
        
        if( r <= 17){
            resimc.innerHTML = `Muito abaixo do peso ${r.toFixed(1)}`
            
        } else if ( r >=17 && r <= 18 ){
            resimc.innerHTML = `Abaixo do peso ${r.toFixed(1)}`

        } else {
    
            if (r > 18 && r <= 25){
                resimc.innerHTML = `Peso normal, seu imc está em ${r.toFixed(1)}`
                
                } else if ( r >25 && r < 30){
                    resimc.innerHTML = `Acima do peso, sei imc está em ${r.toFixed(1)}`
                } else if ( r > 30){
                    resimc.innerHTML = `Obesidade, seu imc está em ${r.toFixed(1)}`
                }

                
                
        }

        

    }
}


// calculadora

function calculadora(){
    var campo1 = window.document.getElementById('adi-um')
    var campo2 = window.document.getElementById('adi-dois')

    var campo12 = window.document.getElementById('sub-um')
    var campo22 = window.document.getElementById('sub-dois')

    var campo13 = window.document.getElementById('mult-um')
    var campo23 = window.document.getElementById('mult-dois')

    var campo14 = window.document.getElementById('divisao-um')
    var campo24 = window.document.getElementById('divisao-dois')

    var resposta1 = window.document.getElementById('rescalc1')
    var resposta2 = window.document.getElementById('rescalc2')
    var resposta3 = window.document.getElementById('rescalc3')
    var resposta4 = window.document.getElementById('rescalc4')



    
    var c1 = Number(campo1.value)
    var c2 = Number(campo2.value)
    resposta3.innerHTML = `O valor da soma é ${c1 + c2}`
    
    var c12 = Number(campo12.value)
    var c22 = Number(campo22.value)
    resposta2.innerHTML = `O valor da subtração é ${c12 - c22}`

    var c13 = Number(campo13.value)
    var c23 = Number(campo23.value)
    resposta1.innerHTML = `O valor da smultiplicação é ${c13 * c23}`

    var c14 = Number(campo14.value)
    var c24 = Number(campo24.value)
    resposta4.innerHTML = `O valor da divisão é ${c14 / c24}`




}
