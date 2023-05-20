import PropTypes from 'prop-types';
import {
  MainWrapper,
  StatsWrapper,
  Paragraph,
  Text,
} from './Statictics.styled';

export const Statictics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <MainWrapper>
      <StatsWrapper>
        <Paragraph>
          Good: <Text>{good}</Text>
        </Paragraph>
        <Paragraph>
          Neutral: <Text>{neutral}</Text>
        </Paragraph>
        <Paragraph>
          Bad: <Text>{bad}</Text>
        </Paragraph>
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
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
