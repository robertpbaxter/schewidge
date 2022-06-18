import Component from '@glimmer/component';
import ENV from 'schewidge/config/environment';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SchedulingWidgetComponent extends Component {
  @service store;

  @tracked clinician;
  @tracked service;
  @tracked office;
  @tracked dateTime;
  @tracked personalInformation;

  constructor(owner, args) {
    super(owner, args);
    this.getClinician();
  }

  get isSelectingService() {
    return !!this.clinician && !this.service;
  }

  get isSelectingLocation() {
    return !!this.service && !this.location;
  }

  get isSelectingDateTime() {
    return !!this.location && !this.dateTime;
  }

  async getClinician() {
    try {
      this.clinician = await this.store.find('clinician', ENV.clinicianId);
    } catch (error) {
      // Architectural necessity: The catch block would pass the error into a notification service that throws popups in front of the user, dumps the error into the console, and logs the error with a service like airbrake so we can monitor errors on prod
      console.error(error);
    }
  }

  @action
  reselectService() {
    this.service = null;
  }
  @action
  reselectLocation() {
    this.location = null;
  }
  @action
  reselectDateTime() {
    this.location = null;
  }
}
