function printValue(sliderID, textboxID) {
    var x = document.getElementById(textboxID);
    var y = document.getElementById(sliderID);
    x.innerText = y.value;
}

window.onload = function () {
    printValue('minPriceSlider', 'minPrice');
    printValue('maxPriceSlider', 'maxPrice');
    printValue('minRAMSlider', 'minRAM');
    printValue('maxRAMSlider', 'maxRAM');
}