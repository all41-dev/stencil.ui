import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

export interface TabItem {
  label: string;
  value: string;
  path?: string;
  disabled?: boolean;
}

@Component({
  tag: 'base-tabs',
  styleUrl: 'base-tabs.css',
  shadow: false,
})
export class BaseTabs {
  @Prop() tabs: TabItem[] = [];
  @Prop() activeTab: string;
  @Prop() navigate?: (path: string) => void;

  @Event() tabChange: EventEmitter<string>;

  private handleTabClick = (tab: TabItem) => {
    if (tab.disabled) return;

    if (this.navigate && tab.path) {
      this.navigate(tab.path);
    } else {
      this.tabChange.emit(tab.value);
    }
  };

  render() {
    return (
      <div>
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            {this.tabs.map((tab) => {
              const isActive = this.activeTab === tab.value;
              return (
                <a
                  href={tab.path || '#'}
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleTabClick(tab);
                  }}
                  class={`
                    whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
                    ${
                      isActive
                        ? 'border-primary text-primary'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }
                    ${tab.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {tab.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    );
  }
}
