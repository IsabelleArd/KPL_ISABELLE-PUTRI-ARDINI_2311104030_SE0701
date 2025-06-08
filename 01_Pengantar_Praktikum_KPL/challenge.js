import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("Siapa nama kamu? " , (nama) => {
    console.info(`Hallo ${nama}`)
    
    input.question("Jurusan kamu? " , (jurusan) => {
        console.info(`Jurusan ${jurusan}`)
        
        input.question("Universitas kamu? " , (univ) => {
            console.info(`Universitas ${univ}`)
            
            input.question("Umur kamu? " , (umur) => {
                console.info(`${umur} tahun`)
            
                input.close();
            })
        })
    })
})

