import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.ultramarineBlue,
    flex: 1,
  },
  user: {
    height: 71,
    flexDirection: 'row',
    marginTop: 29,
    marginLeft: 17,
    marginBottom: 40,
  },
  user__avatar: {
    height: 71,
    width: 71,
    borderRadius: 71 / 2,
  },
  user__info: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  user__name: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    color: colors.lavender,
    marginBottom: 2,
  },
  user__inst: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
    color: colors.pearlPurple,
  },
  item__text: {
    color: colors.white,
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 16,
    marginLeft: -12,
  },
});

export default styles;
