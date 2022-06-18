import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SchedulingWidgetStageComponent extends Component {
  get isDisabled() {
    return !this.args.selection && !this.args.isActive;
  }

  @action
  reselect() {
    this.args.reselect?.();
  }
}
