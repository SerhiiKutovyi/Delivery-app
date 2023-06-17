import styled from 'styled-components';

export const Btn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  padding: 5px 20px;
  border-radius: 15px;

  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.accent};
`;
