import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.ultramarineBlue,
    flex: 1,
  },
  container: {
    width: 343,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
  about__text: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    color: colors.white,
  },
});

export default styles;
