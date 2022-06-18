import Component from '@glimmer/component';
import ENV from 'schewidge/config/environment';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SchedulingWidgetComponent extends Component {
  @service store;

  clinicianId = ENV.clinicianId;

  @tracked clinician;
  @tracked offices;
  @tracked personalInformation;
  @tracked selectedDateTime;
  @tracked selectedOffice;
  @tracked selectedService;
  @tracked services;

  constructor(owner, args) {
    super(owner, args);

    this.getClinician();
    this.getServices();
  }

  get isSelectingService() {
    return !!this.clinician && !this.selectedService;
  }

  get isSelectingLocation() {
    return !!this.selectedService && !this.selectedLocation;
  }

  get isSelectingDateTime() {
    return !!this.selectedLocation && !this.selectedDateTime;
  }

  async getClinician() {
    try {
      this.clinician = await this.store.find('clinician', this.clinicianId);
    } catch (error) {
      // Architectural necessity: The catch block would pass the error into a notification service that throws popups in front of the user, dumps the error into the console, and logs the error with a service like airbrake so we can monitor errors on prod
      console.error(error);
    }
  }

  async getOffices() {
    try {
      this.offices = await this.store.query('office', {
        filter: {
          clinicianId: this.clinicianId,
          cptCodeId: this.selectedService.id,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getServices() {
    try {
      this.services = await this.store.query('cpt-code', {
        filter: {
          clinicianId: this.clinicianId,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  @action
  selectService(service) {
    this.selectedService = service;
  }

  @action
  selectLocation(location) {
    this.selectedLocation = location;
  }

  @action
  reselectDateTime() {
    this.selectedDateTime = location;
  }
}
