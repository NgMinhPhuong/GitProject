function convert(){
    let res = document.querySelector('.res');
    let fro = document.getElementById('selectfrom').value;
    let to = document.getElementById('selectto').value;
    let inp = document.querySelector('.da-ta').value;
    if(fro == 'VND' && to == 'VND') res.innerHTML = `<p>Result: ${inp} VND</p>`
    else if(fro == 'VND' && to == 'USD') res.innerHTML = `<p>Result: ${inp * 0.000043878894251864855} USD</p>`
    else if(fro == 'USD' && to == 'USD') res.innerHTML = `<p>Result: ${inp} USD</p>`
    else res.innerHTML = `<p>Result: ${inp / 0.000043878894251864855} VND</p>`
}   
