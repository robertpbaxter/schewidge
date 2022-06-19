import Component from '@glimmer/component';
import ENV from 'schewidge/config/environment';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SchedulingWidgetComponent extends Component {
  @service store;

  clinicianId = ENV.clinicianId;

  @tracked clinician;
  @tracked locations;
  @tracked personalInformation;
  @tracked selectedDateTime;
  @tracked selectedLocation;
  @tracked selectedService;
  @tracked services;

  constructor(owner, args) {
    super(owner, args);

    this.getClinician();
    this.getServices();
  }

  //TODO: Add loading spinner and loading states

  get hasLoaded() {
    // Generalization: Without a clinician or service list, this app can't continue. It's possible that a clinician could return zero services, but I don't know if your API prevents that or not. I'm going to assume you don't let that happen though
    return !!this.clinician && !!this.services?.length;
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

  async getOffices(cptCodeId) {
    try {
      return await this.store.query('office', {
        filter: {
          clinicianId: this.clinicianId,
          cptCodeId,
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
  async selectService(service) {
    // Clear the location when backing up in the menu
    this.selectedLocation = undefined;
    // Passing in undefined clears the selected value and rewinds to the service step
    this.selectedService = service;
    if (service) {
      this.locations = await this.getOffices(service.id);
    }
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
