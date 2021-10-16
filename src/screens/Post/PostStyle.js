import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {backgroundColor: colors.ultramarineBlue, flex: 1},
  container: {
    width: 343,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    flex: 1,
  },
  friends: {marginTop: 30},
  footer: {
    height: 60,
    width: 375,
  },
  footer__container: {
    marginBottom: 27,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer__input: {
    width: 301,
    height: 36,
    borderRadius: 28,
    backgroundColor: colors.sapphireBlue,
    marginRight: 22,
    paddingLeft: 15,
    color: colors.pearlPurple,
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
  },
});

export default styles;
