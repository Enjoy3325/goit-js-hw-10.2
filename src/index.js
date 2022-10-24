import { fetchCountries } from './js/fetchCountries';
import { markupCountry } from './js/markup';
import { refs } from './js/refs';

import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
// import './css/styles.css';
import './sass/_example.scss';

const DEBOUNCE_DELAY = 300;
refs.inputNameCountry.addEventListener(
  'input',
  debounce(onCreateCountry, DEBOUNCE_DELAY)
);

function onCreateCountry(event) {
  let name = event.target.value.trim();
  if (name === '') {
    refs.infoCountry.innerHTML = '';
    refs.countryList.innerHTML = '';
    return;
  }

  fetchCountries(name)
    .then(res => {
      markupCountry(res);
    })
    .catch(error => {
      return Notiflix.Notify.failure(
        'Oops, there is no country with that name'
      );
    });
}

// refs.liCountry
//   .addClass('.country-list__item')
//   .addEventListener('click', event => {
//     listCountry = event.target.elements.value;
//     console.log(listCountry);
//     if (listCountry) {
//       markupCountry();
//     }
//   });
