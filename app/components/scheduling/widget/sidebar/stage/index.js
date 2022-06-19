import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SchedulingWidgetStageComponent extends Component {
  get isDisabled() {
    return !this.args.primaryValue && !this.args.isActive;
  }

  @action
  reselect() {
    this.args.reselect?.();
  }
}
