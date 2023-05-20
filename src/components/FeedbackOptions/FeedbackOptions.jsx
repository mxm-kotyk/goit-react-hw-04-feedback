import PropTypes from 'prop-types';
import { MainWrapper, ButtonsWrapper, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <MainWrapper>
      <ButtonsWrapper>
        {Object.keys(options).map(reaction => {
          return (
            <Button
              type="button"
              key={reaction}
              onClick={onLeaveFeedback}
              title={reaction}
            ></Button>
          );
        })}
      </ButtonsWrapper>
    </MainWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
};
