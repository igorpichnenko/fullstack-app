import { observable } from 'mobx';
import {  injectable } from 'inversify';


@injectable()
export class CardsStore {
  @observable
  instruments  = [];


  public async loadInstruments() {
    try {
    } catch (err) {

      throw err;
    }
  }

 
}
