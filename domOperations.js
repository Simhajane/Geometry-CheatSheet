function showResultInDomKvadrat() {
    const squareSide = document.getElementById('dlinaStoroniKvadrata').value;


    document.getElementById('ploschadKvadrata').innerHTML = areaOfSquare(squareSide);
}

function showResultInDomPriamougolnika() {
    const rectangleSide = {
        side1: document.getElementById('pervayaStoronaPriamougolnika').value,
        side2: document.getElementById('drugayaStoronaPriamougolnika').value
    }

    document.getElementById('ploschadPriamougolnika').innerHTML = areaOfRectangle(rectangleSide)

}

function showResultInDomParalelograma() {
    const parallelogramMeasurements = {
        side: document.getElementById('dlinaStoronyParalelograma').value,
        height: document.getElementById('dlinaVisotyParalelograma').value
    }

    document.getElementById('ploschadParalelograma').innerHTML = areaOfParallelogram(parallelogramMeasurements)
}

function showResultInDomRomba() {
    const rombMeasurements = {
        side: document.getElementById('dlinaStoronyRomba').value,
        height: document.getElementById('dlinaVisotyRomba').value
    }

    document.getElementById('ploschadRomba').innerHTML = areaOfRomb(rombMeasurements)
}