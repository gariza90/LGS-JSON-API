function readJson() {
    
    const url = "https://script.google.com/macros/s/AKfycbzXsOvGIXA3bNo1DceFzLTOmjixAIsXRUnUdHsF0pT8X-2xrIFOoSbYnhtRoj9mvi1UTw/exec";
    
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById('app').textContent = d[0].status;
        });

}

document.getElementById('btn').addEventListener('click', readJson);
