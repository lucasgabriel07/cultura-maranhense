// seção de comentários

(() => {
    let numeroDeComentarios = 0
    const campoNome = document.querySelector('[data-campo-nome]')
    const campoTexto = document.querySelector('[data-campo-texto]')
    const secaoDeComentarios = document.querySelector('[data-secao-de-comentarios]')
    const areaDeComentarios = document.querySelector('[data-area-de-comentarios]')
    const titulo = document.querySelector('[data-comentarios-titulo]')
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
                    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

    const adicionarComentario = (event) => {
        const comentario = document.createElement('div')
        comentario.classList.add('area-de-comentarios-comentario')

        if (campoNome.value.trim() != "" && campoTexto.value.trim() != "") {
            numeroDeComentarios++
            
            const data = new Date()

            const dataComentario = `${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}
                                    às ${data.getHours()}:${data.getMinutes()}`

            const conteudo = `<h4 class="comentario-nome">${campoNome.value}</h4>
                                <p class="comentario-texto">${campoTexto.value}</p>
                                <p class="comentario-data-e-hora">${dataComentario}</p>`
            
            comentario.innerHTML = conteudo
            areaDeComentarios.appendChild(comentario)

            if (numeroDeComentarios == 1) {
                titulo.innerText = "1 comentário"
            } else {
                titulo.innerText = `${numeroDeComentarios} comentários`
            }

            campoNome.value = ""
            campoTexto.value = ""
            comentario.focus()
            secaoDeComentarios.scrollIntoView()
            event.preventDefault()
        }
    }

    const botao = document.querySelector('[data-comentario-botao]')
    botao.addEventListener('click', adicionarComentario)
})()