import { Icon, icons } from '~/src/components/Icon/';
import { withDesign } from 'storybook-addon-designs';
import { Meta } from '@storybook/react';
import '~/styles/index.css';

export default {
  component: Icon,
  title: 'Elements / Icon',
  args: {
    name: 'user',
    color: 'white'
  },
  decorators: [withDesign]
};

export const Default = () => {
  return (
    <>
      {Object.keys(icons).map((key) => {
        return <Icon name={key} color="secondary" />;
      })}
    </>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=1031%3A75'
  }
};
