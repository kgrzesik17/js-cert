'use strict';

// const { useSyncExternalStore } = require('react');

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

function renderCountry(data, className = '') {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</)p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

function renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
}

/*

function getCountryAndNeighbor(country) {
  // NEW COUNTRIES API URL (use instead of the URL shown in videos):
  // https://restcountries.com/v2/name/portugal

  // NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
  // https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    // render country 1
    renderCountry(data);

    // get neighbor country 2
    const [neighbor] = data.borders;

    if (!neighbor) return;

    // AJAX call country 2
    // callback hell - a lot of nested callbacks in order to execute callbacks in sequence
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
}

getCountryAndNeighbor('poland');
*/

// function getCountryData(country) {
//   // handle a fulfilled promise - .then(callbackFn)
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       return response.json(); // async as well, so we need to handle it
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// }

/*
function getJSON(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
}

// simplified version
function getCountryData(country) {
  // country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);

      const neighbor = data[0].borders?.[0];

      if (!neighbor) throw new Error('No neighbour found');

      // country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        'Country not found',
      );
    })
    .then(data => renderCountry(data, 'neighbor'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong: ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

btn.addEventListener('click', function () {
  getCountryData('poland');
});

getCountryData('australia');

function whereAmI(lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
  )
    .then(response => {
      if (!response.ok)
        throw new Error(`Something went wrong (${response.status}`);

      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are now in ${data.city}, ${data.countryName}`);

      return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Something went wrong (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      countriesContainer.style.opacity = 1;
    })

    .catch(err => console.log(`Error: ${err.status}`));
}

whereAmI(-33.933, 18.474);

console.log(`Test start`);
setTimeout(() => console.log('0 sec timer'), 0);

// immediately resolved - auto success value
Promise.resolve('Resolve promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 2000000000; i++) {}
  console.log(res);
});

console.log('Test end');

// auto execute the function
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening...');

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      // set as fulfilled (resolved)
      resolve('You WIN!!!');
    } else {
      // error message for the catch handler
      reject(new Error('You lose your money'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res));

// promisyfying setTimeout
function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

wait(1)
  .then(() => {
    console.log('One second passed');
    return wait(1);
  })
  .then(() => {
    console.log('Two seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('Three seconds passed');
    return wait(1);
  });

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('abc')).catch(x => console.error(x));

// promisify a callback based API
function getPosition() {
  return new Promise(function (resolve, reject) {
    //   navigator.geolocation.getCurrentPosition(
    //     position => resolve(position),
    //     err => reject(err),
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// getPosition().then(pos => console.log(pos));

function whereAmI() {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Something went wrong (${response.status}`);

      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are now in ${data.city}, ${data.countryName}`);

      return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Something went wrong (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      countriesContainer.style.opacity = 1;
    })

    .catch(err => console.log(`Error: ${err.status}`));
}

btn.addEventListener('click', whereAmI);

const imgContainer = document.querySelector('.images');

function wait(seconds) {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
}

function createImage(imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
}

let currentImage;

createImage('img/img-1.jpg')
  .then(img => {
    currentImage = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImage.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    console.log(img);
    currentImage = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => (currentImage.style.display = 'none'))
  .catch(err => console.error(err));

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function whereAmI() {
  try {
    // geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    // country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryName}`,
    );
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
  } catch (err) {
    console.error(`${err}`);
    renderError(`Something went wrong ${err}`);

    // reject promise returned from async function
    throw err;
  }
}

console.log('1: Will get location');

// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(city))
//   .catch(err => console.log(err.message))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    renderError(`Error: ${err}`);
    console.error(err);
  }

  console.log('3: Finished getting location');
})();
*/

function getJSON(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
}

/*
async function get3Countries(c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(d => console.log(d[0].capital)));
  } catch (err) {
    console.error(err);
  }
}

get3Countries('poland', 'usa', 'germany');
*/

// Promise.race - recieves [] of promises, returns a promise. Settled as soon as one of the inputs settles. First settled promise wins the race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/poland`),
    getJSON(`https://restcountries.com/v2/name/norway`),
  ]);
  // console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/poland`),
  getJSON(`https://restcountries.com/v2/name/norway`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled

Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('OK!'),
]).then(res => console.log(res));

Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error'),
  Promise.resolve('OK!'),
]).then(res => console.log(res));
