import React from 'react';

import PasswordInput from './PasswordInput';

export default {
  title: 'Example/Password Input',
  component: PasswordInput,
};

const Template = (args) => <PasswordInput {...args} />;

export const Unsafe = Template.bind({});
Unsafe.args = {
  value: '',
};

export const Safe = Template.bind({});
Safe.args = {
  value: 'abc123',
};

export const SuperSafe = Template.bind({});
SuperSafe.args = {
  value: 'abc123!abcdef',
};
