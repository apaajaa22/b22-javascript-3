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

check()

//untuk penggunaan async await kembalian suatu fungsi harus sebuah promise
// fungsi async tersebut digunakan untuk membuat function menjadi asynchronous
// pada try dapat dilihat ada sebuah function yg diberi await, itu menandakan
// bahwa function cekHariKerja() akan ditunggu hingga prosese resolve selesai
// jika selesai akan mengembalikan sebuah nilai resolve
// pada catch kita akan menangkap sebuah error
