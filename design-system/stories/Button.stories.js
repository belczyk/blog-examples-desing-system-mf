import React from 'react';

import Button from '../src/components/Button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        label: {control: 'text'},
        disabled: {control: 'boolean'}
    },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
    disabled: false
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
    label: 'Button',
    disabled: true
};