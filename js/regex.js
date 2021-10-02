// regex (Baseado em https://www.alura.com.br/artigos/javascript-replace-manipulando-strings-e-regex)

(() => {
    const campoTelefone = document.querySelector('[data-telefone]')

    campoTelefone.addEventListener('focusin', (event) => {
        let telefone = campoTelefone.value
        campoTelefone.value = telefone.replace(/[()-\s]/g, "")
    })

    campoTelefone.addEventListener('focusout', (event) => {
        let telefone = campoTelefone.value
        if (!telefone.includes('(') && !telefone.includes(')') && !telefone.includes('-')) {
            campoTelefone.value = telefone.replace(/(\d{2})?(\d{4,5})?(\d{4})/, "($1) $2-$3")
        }
    })

    campoTelefone.addEventListener('change', (event) => {
        let telefone = campoTelefone.value
        if (!telefone.includes('(') && !telefone.includes(')') && !telefone.includes('-')) {
            campoTelefone.value = telefone.replace(/(\d{2})?(\d{4,5})?(\d{4})/, "($1) $2-$3")
        }
    })
})()