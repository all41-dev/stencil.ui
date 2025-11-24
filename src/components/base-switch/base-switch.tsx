import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'base-switch',
  styleUrl: 'base-switch.css',
  shadow: false,
})
export class BaseSwitch {
  @Prop({ mutable: true }) checked: boolean = false;
  @Prop() disabled: boolean = false;
  @Prop() label?: string;

  @Event() valueChange: EventEmitter<boolean>;

  private toggle = () => {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.valueChange.emit(this.checked);
  };

  render() {
    return (
      <div class={`inline-flex items-center ${this.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} onClick={this.toggle}>
        <div
          class={`
            relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            ${this.checked ? 'bg-primary' : 'bg-gray-200'}
          `}
        >
          <span
            class={`
              inline-block h-4 w-4 transform rounded-full bg-white transition-transform
              ${this.checked ? 'translate-x-6' : 'translate-x-1'}
            `}
          />
        </div>
        {this.label && <span class="ml-3 text-sm font-medium text-gray-900">{this.label}</span>}
      </div>
    );
  }
}
