import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  @State() activeTab: string = 'account';
  @State() switchChecked: boolean = false;
  @State() role: string = 'user';
  @State() status: string = 'active';

  render() {
    return (
      <div class="max-w-4xl ml-12 p-12 font-sans text-gray-800">
        <h1 class="text-4xl font-bold mb-12 text-center text-primary">Stencil Component Library</h1>

        <section class="mb-16 p-10 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
          <h2 class="text-3xl font-semibold mb-8 text-gray-700 border-b pb-4">Buttons</h2>
          <div class="space-y-10">
            <div>
              <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Variants</h3>
              <div class="flex flex-wrap gap-6 items-center">
                <base-button label="Primary"></base-button>
                <base-button variant="secondary" label="Secondary"></base-button>
                <base-button variant="danger" label="Danger"></base-button>
              </div>
            </div>
            
            <div>
              <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Sizes</h3>
              <div class="flex flex-wrap gap-6 items-center">
                <base-button size="sm" label="Small"></base-button>
                <base-button size="md" label="Medium"></base-button>
                <base-button size="lg" label="Large"></base-button>
              </div>
            </div>

            <div>
              <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">States</h3>
              <div class="flex flex-wrap gap-6 items-center">
                <base-button label="Loading" loading></base-button>
                <base-button label="Disabled" disabled></base-button>
                <base-button label="Full Width" full></base-button>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-16 p-10 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
          <h2 class="text-3xl font-semibold mb-8 text-gray-700 border-b pb-4">Switch</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Interactive</h3>
              <base-switch 
                label="Enable Notifications" 
                checked={this.switchChecked}
                onValueChange={(e) => this.switchChecked = e.detail}
              ></base-switch>
            </div>
            <div>
               <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Disabled</h3>
              <div class="space-y-4">
                <base-switch label="Disabled Off" disabled></base-switch>
                <base-switch label="Disabled On" disabled checked></base-switch>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-16 p-10 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
          <h2 class="text-3xl font-semibold mb-8 text-gray-700 border-b pb-4">Form Elements</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Inputs</h3>
              <div class="space-y-6">
                <base-input label="Username" placeholder="Enter your username"></base-input>
                <base-input label="Password" type="password" placeholder="••••••••"></base-input>
                <base-input label="With Error" value="Invalid" error="This field is required"></base-input>
                <base-input label="Disabled" value="Cannot edit" disabled></base-input>
              </div>
            </div>
            
            <div>
              <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Selects</h3>
              <div class="space-y-6">
                <base-select 
                  label="Role" 
                  value={this.role}
                  options={[
                    { label: 'Admin', value: 'admin' },
                    { label: 'User', value: 'user' },
                    { label: 'Guest', value: 'guest' }
                  ]}
                  onValueChange={(e) => this.role = e.detail}
                ></base-select>
                <base-select 
                  label="Status" 
                  value={this.status}
                  options={[
                    { label: 'Active', value: 'active' },
                    { label: 'Inactive', value: 'inactive' }
                  ]}
                  error="Please select a valid status"
                  onValueChange={(e) => this.status = e.detail}
                ></base-select>
                <base-select label="Disabled" disabled></base-select>
              </div>
            </div>
          </div>
        </section>

        <section class="mb-16 p-10 bg-gray-50 rounded-2xl shadow-sm border border-gray-100">
          <h2 class="text-3xl font-semibold mb-8 text-gray-700 border-b pb-4">Tabs</h2>
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <base-tabs 
              tabs={[
                { label: 'Account Settings', value: 'account' },
                { label: 'Password', value: 'password' },
                { label: 'Notifications', value: 'notifications' },
                { label: 'Integrations', value: 'integrations', disabled: true },
                { label: 'External Link ↗', value: 'external', path: 'https://google.com' }
              ]}
              activeTab={this.activeTab}
              onTabChange={(e) => this.activeTab = e.detail}
              navigate={(path) => {
                console.log('Navigating to:', path);
                if (path.startsWith('http')) {
                    window.open(path, '_blank');
                }
              }}
            ></base-tabs>
            <div class="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-100 text-base text-gray-600">
              <p>Active Tab: {this.activeTab}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
