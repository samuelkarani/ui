import type { Meta, StoryObj } from '@storybook/react';
import stylex from '@stylexjs/stylex';

import {
  ElementWithLabel,
  type IElementWithLabelProps,
} from './ElementWithLabel';
import {
  ComponentShowcase,
  type IComponentPresentation,
} from '@/components/utils/ComponentShowcase';
import { Checkbox } from '@/components/atoms/Checkbox';
import { Switch } from '@/components/atoms/Switch';
import { Radio } from '@/components/atoms/Radio';
import { TextField } from '@/components/atoms/TextField';

const meta = {
  component: ElementWithLabel,
} satisfies Meta<typeof ElementWithLabel>;

type IStory = StoryObj<typeof meta>;

const styles = stylex.create({
  host: {
    width: 160,
  },
});

const defaultArgs = {
  label: 'Label',
  sx: styles.host,
} satisfies Partial<IElementWithLabelProps>;

const cols: Array<IComponentPresentation<IElementWithLabelProps>> = [
  { legend: 'Start', props: { labelPosition: 'start' } },
  { legend: 'End', props: { labelPosition: 'end' } },
  { legend: 'Disabled', props: { disabled: true } },
];

const rows: Array<IComponentPresentation<IElementWithLabelProps>> = [
  { legend: 'With label' },
  {
    legend: 'With supporting text',
    props: { supportingText: 'Supporting text' },
  },
  {
    legend: 'With error',
    props: { hasError: true },
  },
  {
    legend: 'With error and error text',
    props: { hasError: true, errorText: 'Error' },
  },
];

export const WithTextField: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={ElementWithLabel}
      props={props}
      cols={cols}
      rows={rows}
      horizontalAlign='start'
    />
  ),
  args: {
    ...defaultArgs,
    orientation: 'vertical',
    children: (props) => <TextField {...props} />,
  },
};

export const WithCheckbox: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={ElementWithLabel}
      props={props}
      cols={cols}
      rows={rows}
      horizontalAlign='start'
    />
  ),
  args: {
    ...defaultArgs,
    orientation: 'horizontal',
    children: (props) => <Checkbox {...props} />,
  },
};

export const WithRadio: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={ElementWithLabel}
      props={props}
      cols={cols}
      rows={rows}
      horizontalAlign='start'
    />
  ),
  args: {
    ...defaultArgs,
    orientation: 'horizontal',
    children: (props) => <Radio {...props} />,
  },
};

export const WithSwitch: IStory = {
  render: (props) => (
    <ComponentShowcase
      component={ElementWithLabel}
      props={props}
      cols={cols}
      rows={rows}
      horizontalAlign='start'
    />
  ),
  args: {
    ...defaultArgs,
    orientation: 'horizontal',
    children: (props) => <Switch {...props} />,
  },
};

export default meta;
