import Model, { attr } from '@ember-data/model';

export default class CptCodeModel extends Model {
  @attr('string') description;
  @attr('number') duration;
  @attr('string') rate;
  @attr('boolean') callToBook;

  get durationInMinutes() {
    return `${this.duration} minutes`;
  }
  currencyUnit = 'usd'; // I would imagine an API to return this as well so I'm mocking it
}
