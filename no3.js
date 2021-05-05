let cekNama = new Promise((resolve, reject) => {
  let nama = "reza"
  if (nama) {
    resolve(`halo selamat datang ${nama}`)
  } else {
    reject(new Error("nama tidak boleh kosong"))
  }
})

cekNama
  .then((success) => {
    console.log(success)
  })
  .catch((error) => {
    console.log(error)
  })

//----------------------------------------------------//

let cekAngka = new Promise((resolve, reject) => {
  let num = 51
  if (num % 2 === 0) {
    resolve("angka genap")
  } else {
    reject("angka ganjil")
  }
})
cekAngka
  .then((success) => {
    console.log(success)
  })
  .catch((error) => {
    console.log(error)
  })
