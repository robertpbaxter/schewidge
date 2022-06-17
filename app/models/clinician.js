import Model, { attr } from '@ember-data/model';

export default class ClinicianModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') middleName;
  @attr('string') suffix;
  @attr('string') phone;

  get nameWithTitle() {
    const fullName = `${this.firstName} ${this.lastName}`;
    if (this.suffix) {
      return `${fullName}, ${this.suffix}`;
    }
    return fullName;
  }
}
