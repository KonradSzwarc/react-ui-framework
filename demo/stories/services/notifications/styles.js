import styled from 'styled-components';
import { Button } from 'react-ui-framework';

export const Section = styled.div`
  margin-bottom: var(--space-lg);
`;

export const Flexbox = styled.div`
  display: flex;
`;

export const Header = styled.div`
  font-size: var(--font-lg);
  line-height: var(--font-lg-lh);
  color: var(--grey1);
  margin-bottom: var(--space-md);
`;

export const StyledButton = styled(Button)`
  margin: var(--space-sm);
`;
