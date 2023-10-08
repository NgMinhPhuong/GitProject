
function Tong(){
    let fro = parseInt(document.querySelector('.from').value);
    let top = parseInt(document.querySelector('.to').value);
    console.log(typeof fro)
    document.querySelector('.res').innerHTML = `<p>Result: ${fro + top}</p>`
}

function Hieu(){
let fro = parseInt(document.querySelector('.from').value);
let top = parseInt(document.querySelector('.to').value);
    document.querySelector('.res').innerHTML = `<p>Result: ${fro - top}</p>`
}