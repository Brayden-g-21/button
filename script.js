function btnPressed() {
    let counter = document.getElementById('clicks');
    let value = counter.innerHTML;
    ++value;
    document.getElementById('clicks').innerHTML = value;
}