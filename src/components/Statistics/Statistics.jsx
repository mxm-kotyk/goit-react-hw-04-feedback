import PropTypes from 'prop-types';
import {
  MainWrapper,
  StatsWrapper,
  Paragraph,
  Text,
} from './Statictics.styled';

export const Statictics = ({ options, total, positivePercentage }) => {
  return (
    <MainWrapper>
      <StatsWrapper>
        {Object.entries(options).map(([name, velue]) => (
          <Paragraph key={name}>
            {name}: <Text>{velue}</Text>
          </Paragraph>
        ))}
      </StatsWrapper>
      <Paragraph>
        Total: <Text>{total()}</Text>
      </Paragraph>
      <Paragraph>
        Positive Feedback: <Text>{positivePercentage()}%</Text>
      </Paragraph>
    </MainWrapper>
  );
};

Statictics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
