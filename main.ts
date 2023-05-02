
import { Serie } from './serie.js';

import { series } from './dataCourses.js';

const seriesTbody: HTMLElement = document.getElementById('series')!;
const seasonsAverage: HTMLElement = document.getElementById('seasonsAverage')!;




function renderCoursesInTable(series: Serie[]): void {
  console.log('Desplegando cursos');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.number}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
                           
    seriesTbody.appendChild(trElement);
  });
}
 
function seasonAverage(series: Serie[]): string {
  let counter: number = 0;
  let seriesnumber: number = 0;
    series.forEach((serie) => {
      counter = counter + serie.seasons;
      seriesnumber = seriesnumber + 1;
    });
    let average: number = counter/seriesnumber;
    return average.toFixed(2);
}

function renderSeasonAverage(): void {
    console.log('Desplegando promedio de temporadas');
    let trElement: string = seasonAverage(series);
    seasonsAverage.innerText = trElement;
    }




renderCoursesInTable(series);
renderSeasonAverage();

