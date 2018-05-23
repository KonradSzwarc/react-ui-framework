import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { Container, Flexbox, Section, Header, StyledButton } from '../../../helpers/styles';

const kinds = {
  primary: 'primary',
  accent: 'accent',
  white: 'white',
  info: 'info',
  success: 'success',
  error: 'error',
  warning: 'warning',
  grey: 'grey',
};

const sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export default () => (
  <Container style={{ backgroundColor: '#333', height: '100vh' }}>
    <Section>
      <Header style={{ color: '#fff' }}>Button</Header>
      <Flexbox>
        <StyledButton
          ghost={boolean('ghost', false)}
          kind={select('kind', kinds, 'primary')}
          label={text('label', 'Button example')}
          size={select('size', sizes, 'md')}
        />
      </Flexbox>
    </Section>
  </Container>
);
