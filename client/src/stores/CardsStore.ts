import { injectable } from 'inversify';
import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { ResponseCards } from '../types';

@injectable()
export class CardsStore {
  allCards: ResponseCards[] = [];

  get cards() {
    return this.allCards;
  }

  constructor() {
    makeAutoObservable(this);
    this.getAllCards();
  }

  getAllCards = async () => {
    try {
      const cards = await axios.get('http://localhost:5000/api/posts');
      this.allCards = [...cards.data];
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  createCard = async ({ author, title, text, image }: ResponseCards) => {
    try {
      if (image) {
        const formData = new FormData();
        formData.set('title', title);
        formData.set('text', text);
        formData.set('author', author);
        formData.append('picture', image);
        console.log(image);
        await axios.post('http://localhost:5000/api/posts', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        this.getAllCards();
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
}
