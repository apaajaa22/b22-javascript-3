const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"]
      let cek = dataDay.find((item) => {
        return item === day
      })
      if (cek) {
        resolve(cek)
      } else {
        reject(new Error("Hari ini bukan hari kerja"))
      }
    }, 3000)
  })
}

console.log("tunggu 3 detik ya")

cekHariKerja("senin")
  .then((res) => {
    console.log(`sekarang adalah hari ${res}`)
  })
  .catch((err) => {
    console.log(err)
  })

//penggunaan then catch
//then catch digunakan untuk mengecek keluaran dari sebuah fungsi yg berhasil dijalankan atau error
//jika berhasil dijalankan maka akan me return sebuah value
//jika tidak berhasil pun bisa me return sebuah value berupa error message

async function check() {
  try {
    const res = await cekHariKerja("minggu")
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

//penggunaan try catch
//try catch berfungsi untuk mengecek keadaan sebuah fungsi apakah berhasil atau tidaknya suatu program
//jika tidak berhasil maka akan langsung me return sebuah error
