import Notiflix from 'notiflix';
import { refs } from './refs';

function onMarkupOneCountry(countryArr) {
  refs.infoCountry.innerHTML = countryArr.map(country => {
    return `<div class="country-info__box"><img class="country-info__image" src=${
      country.flags.svg
    } width ="300", height="200", alt=${country.name.official}/>
    <h2  class="country-info__name-country"> ${country.name.official}</h2></div>
      <p  class="country-info__text>
     <span class ="country-info__performance">Capital:</span>${
       country.capital
     }</p>
     <p  class="country-info__text><span class ="country-info__performance">Population:</span>${
       country.population
     }</p>
     <p  class="country-info__><span class ="country-info__performance">Car code:</span>${
       country.car.signs
     }</p>
     <p  class="country-info__text><span class ="country-info__performance">languages:</span>${Object.values(
       country.languages
     ).join(', ')}</p>
     `;
  });
}
function onMurkupListCountry(countryArr) {
  refs.countryList.innerHTML = countryArr
    .map(country => {
      return `<li class="country-list__item">
    <img class="country-list__flags" src="${country.flags.svg}" alt="${country.name.official}" width="65" />
    <h2 class="country-list__name">${country.name.official}</h2>
  </li>
  `;
    })
    .join('');
}
export function markupCountry(res) {
  // Умова через else if
  if (res.length > 10) {
    return Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (res.length === 1) {
    onMarkupOneCountry(res);
    refs.countryList.innerHTML = '';
  } else {
    onMurkupListCountry(res);
    refs.infoCountry.innerHTML = '';
  }
}

// Умова через switch

// switch (res.length) {
//   case '=10':
//     Notiflix.Notify.info(
//       'Too many matches found. Please enter a more specific name.'
//     );
//     break;
//   case '=== 1':
//     onMarkupOneCountry(res);
//     refs.countryList.innerHTML = '';
//     break;
//   default:
//     onMurkupListCountry(res);
//     refs.infoCountry.innerHTML = '';
//     break;
// }
