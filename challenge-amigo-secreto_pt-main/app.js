let nomes = []

const input = document.querySelector("#amigo")
const lista = document.querySelector("#listaAmigos")
const resultado = document.querySelector("#resultado")

function adicionarAmigo() {

    if (input.value != '') {

        const amigos = input.value;

        if (!nomes.includes(amigos)) {
            nomes.push(amigos)

            lista.innerHTML = ''

            nomes.forEach((nome) => {
                const newLi = document.createElement('li')
                newLi.innerHTML = nome
                lista.appendChild(newLi)
            })

        }
        
        input.value = ''
        input.focus()
        resultado.innerHTML = ''
    } else {
        alert('Insira um nome válido!')
    }

}

function sortearAmigo() {
    if (nomes.length === 0) {
        alert('Adicione nomes a lista primeiro')
        return
    }
    
    const sorteado = Math.floor(Math.random() * nomes.length)
    lista.innerHTML = ''
    resultado.innerHTML = `O amigo sorteado foi: ${nomes[sorteado]}`

    nomes = []
}
