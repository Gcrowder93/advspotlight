import { useEffect } from 'react';
import {
  getAnime,
  getAnimeThen,
  getDemon,
  getDemonData,
  getExcuse,
  getExcuseData,
  getPinball,
  getPinballData,
} from './services/api';

export default function App() {
  useEffect(() => {
    getAnime();
    getAnimeThen();
    getDemon();
    getDemonData(); //getting rate limit for this, but it does work
    getExcuse();
    getExcuseData();
    getPinball();
    getPinballData();
  });
  return <h1>Hello World</h1>;
}
