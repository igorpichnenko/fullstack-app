import { injectable } from 'inversify';
import axios from 'axios';
import { makeAutoObservable } from 'mobx';

interface Response {
  title: string;
  text: string;
  picture: string;
  author: string;
}
@injectable()
export class CardsStore {
  allCards: Response[] = [];

  constructor() {
    makeAutoObservable(this);
    this.getAllCards();
  }

  async getAllCards() {
    try {
      const cards = await axios.get('http://localhost:5000/api/posts');
      this.allCards = [...cards.data];
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
