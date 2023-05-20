import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

export const StatsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Paragraph = styled.p`
  font-weight: 500;
  text-transform: capitalize;
`;

export const Text = styled.span`
  font-weight: 900;
`;
