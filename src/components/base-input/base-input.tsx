import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'base-input',
  styleUrl: 'base-input.css',
  shadow: false,
})
export class BaseInput {
  @Prop({ mutable: true }) value: string;
  @Prop() label?: string;
  @Prop() placeholder?: string;
  @Prop() type: string = 'text';
  @Prop() disabled: boolean = false;
  @Prop() error?: string;

  @Event() valueChange: EventEmitter<string>;

  private handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.valueChange.emit(this.value);
  };

  render() {
    return (
      <div class="w-full">
        {this.label && (
          <label class="block text-sm font-medium text-gray-700 mb-1">
            {this.label}
          </label>
        )}
        <div class="relative">
          <input
            type={this.type}
            value={this.value}
            placeholder={this.placeholder}
            disabled={this.disabled}
            onInput={this.handleInput}
            class={`
              block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm
              disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500
              ${this.error ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500' : ''}
            `}
          />
          {this.error && (
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        {this.error && <p class="mt-2 text-sm text-red-600">{this.error}</p>}
      </div>
    );
  }
}
