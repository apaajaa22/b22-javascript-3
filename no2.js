const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = [
            "January",
            "February",
            "March",
            "April",
            "Mey",
            "Juni",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found", []))
        }
    }, 3000)
}

const month = (none, value) => {
    let input = [value]
    input.map((res) => {
        console.log(res)
    })
}
getMonth(month)

function proses(err, data) {
    try {
        if (err === null) {
            console.log(data)
        }
    } catch (error) {
        console.log(error)
    }
}

getMonth(proses)
