import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  button: {
    width: 133,
    height: 36,
    borderWidth: 1,
    borderColor: colors.moderatePurplishBlue,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button__text: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    height: 24,
    color: colors.white,
  },
});

export default styles;
