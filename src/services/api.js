export async function getAnime() {
  const resp = await fetch(`https://api.jikan.moe/v4/anime?q=full`);
  const animeData = await resp.json();
  console.log('animeData', animeData);
  return animeData;
}
export const getAnimeThen = () => {
  const resp = fetch(`https://api.jikan.moe/v4/anime?q=full`)
    .then((data) => data.json())
    .then((getAnimeThen) => {
      console.log('getAnimeThen', getAnimeThen);
    });
  return resp;
};

export async function getDemon() {
  const resp = await fetch(`https://api.jikan.moe/v4/anime?q=demonslayer&sfw`);
  const demonData = await resp.json();
  console.log('demonData', demonData);
}

//getting a rate limit for this getDemonData but it does work
export const getDemonData = () => {
  const resp = fetch(`https://api.jikan.moe/v4/anime?q=demonslayer&sfw`)
    .then((data) => data.json())
    .then((getDemonData) => {
      console.log('getDemonData', getDemonData);
    });
  return resp;
};

export async function getExcuse() {
  const resp = await fetch(`https://excuser.herokuapp.com/v1/excuse/3`);
  const excuseData = await resp.json();
  console.log('excuseData', excuseData);
}

export const getExcuseData = () => {
  const resp = fetch(`https://excuser.herokuapp.com/v1/excuse/3`)
    .then((data) => data.json())
    .then((getExcuseData) => {
      console.log('getExcuseData', getExcuseData);
    });
  return resp;
};

export async function getPinball() {
  const resp = await fetch(`https://ponball.herokuapp.com/api/v1/machines`);
  const pinballData = await resp.json();
  console.log('pinballData', pinballData);
}

export const getPinballData = () => {
  const resp = fetch(`https://ponball.herokuapp.com/api/v1/machines`)
    .then((data) => data.json())
    .then((getPinballData) => {
      console.log('getPinballData', getPinballData);
    });
};
