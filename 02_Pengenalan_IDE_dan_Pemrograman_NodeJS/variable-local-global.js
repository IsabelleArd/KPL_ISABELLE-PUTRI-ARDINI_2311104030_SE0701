// globalVariable bisa dipanggil di fungsi-fungsi
// localVariable hanya bisa dipanggil di dalam function
let globalVariable = "Isabelle Putri Ardini"

function getMyIdentity() {
    let localVariable = 2311104030
    console.log(`Nama saya ${globalVariable} NIM ${localVariable}`)
}

console.log(globalVariable)
// console.log(localVariable)

getMyIdentity()