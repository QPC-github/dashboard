/*
Copyright 2019-2023 The Tekton Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';

import TooltipDropdown from './TooltipDropdown';

const props = {
  id: 'tooltip-dropdown-id',
  label: 'Select an item',
  items: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'],
  loading: false
};

export default {
  args: { titleText: '' },
  component: TooltipDropdown,
  decorators: [
    Story => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    )
  ],
  title: 'TooltipDropdown'
};

export const Base = {
  render: args => <TooltipDropdown {...props} {...args} />
};

export const Loading = {
  render: args => <TooltipDropdown {...props} loading {...args} />
};

export const Empty = {
  render: args => <TooltipDropdown {...props} items={[]} {...args} />
};
