import Model, { attr } from '@ember-data/model';

export default class OfficeModel extends Model {
  @attr('string') city;
  @attr('string') name;
  @attr('string') state;
  @attr('string') street;
  @attr('string') zip;
  @attr('string') phone;
  @attr('boolean') isVideo;
  @attr() geolocation;
  @attr('boolean') isPublic;

  get hasPhysicalAddress() {
    // I'm just making an assumption here that this is how digital visits are handled.
    return this.street && this.city && this.state && this.zip;
  }

  get cityStateZip() {
    return `${this.city}, ${this.state} ${this.zip}`;
  }
}
