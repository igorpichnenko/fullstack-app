import 'reflect-metadata';
import { Container } from 'inversify';
import { iocNames } from './iocNames';
import { CardsStore } from './stores/CardsStore';

export function createIOC() {
  const ioc = new Container({ skipBaseClassChecks: true });


  ioc.bind(iocNames.cardsStore).toConstantValue(CardsStore);
 

  return ioc;
}
