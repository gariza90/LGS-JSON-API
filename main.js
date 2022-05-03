function readJson() {
    
    const url = "https://script.google.com/macros/s/AKfycbx17tmu4aNyOvmHJX-YF2Fpt7WRrL5LkxzVJz1IrnfMVOfDWDzyVdC3qTNaw7LXB_zNew/exec";
    
    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById('app').textContent = d[0].status;
        });

}

document.getElementById('btn').addEventListener('click', readJson);
