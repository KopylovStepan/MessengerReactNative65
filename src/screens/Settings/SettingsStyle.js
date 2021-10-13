import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.ultramarineBlue,
    flex: 1,
  },
  container: {
    width: 343,
    marginTop: 21,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
  header: {
    flexDirection: 'row',
  },
  header__text: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 16,
    color: colors.white,
    marginLeft: 105,
  },
  settings: {
    marginTop: 50,
  },
  settings__item: {
    flexDirection: 'row',
    marginBottom: 48,
  },
  settings__text: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 16,
    color: colors.white,
    marginLeft: 12,
  },
  settings__textOut: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 16,
    color: colors.pearlPurple,
    marginLeft: 12,
  },
});

export default styles;
