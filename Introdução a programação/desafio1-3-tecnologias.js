const usuarios = [
    {
        nome: "Matheus",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "João",
        tecnologias: ["JavaScript", "CSS"]
    },
    {
        nome: "Marcia",
        tecnologias: ["HTML", "Node.js"]
    }
]

for (let usuario of usuarios) {
    console.log(`${usuario.nome} trabalho com ${usuario.tecnologias.join(', ')}`)
}

function checkTec(usuario){
    for(let tecnologia of usuario.tecnologias) {
        if( tecnologia == "CSS") return true
    }
    
    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const buscaTec = checkTec(usuarios[i])

    if(buscaTec) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}