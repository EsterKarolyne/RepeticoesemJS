function Contar(){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.lenght == 0 ) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML =  'Contando: <br>' 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('Inválido! Considerando passo 1:')
            p = 1
        }

        if (i < f){
            //contagem crescente
        for ( let c = i ; c <= f ; c += p) {
            res.innerHTML += `${c} \u{270D}`
        }
    
        } else{
            //contagem regressiva
            for (let c = i ; c >= f ; c -= p){
                res.innerHTML += `${c} \u{270D}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`

    }

}