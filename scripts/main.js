import { series } from './dataCourses.js';
var seriesTbody = document.getElementById('series');
var seasonsAverage = document.getElementById('seasonsAverage');
function renderCoursesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.number, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function seasonAverage(series) {
    var counter = 0;
    var seriesnumber = 0;
    series.forEach(function (serie) {
        counter = counter + serie.seasons;
        seriesnumber = seriesnumber + 1;
    });
    var average = counter / seriesnumber;
    return average.toFixed(2);
}
function renderSeasonAverage() {
    console.log('Desplegando promedio de temporadas');
    var trElement = seasonAverage(series);
    seasonsAverage.innerText = trElement;
}
renderCoursesInTable(series);
renderSeasonAverage();
