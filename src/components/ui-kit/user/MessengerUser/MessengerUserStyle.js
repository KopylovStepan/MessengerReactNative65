import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';

const styles = StyleSheet.create({
  user: {
    height: 43,
    flexDirection: 'row',
  },
  user__avatar: {
    height: 43,
    width: 43,
    borderRadius: 43 / 2,
  },
  user__info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  user__name: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    color: 'red',
    marginBottom: 2,
  },
  user__city: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
    color: colors.pearlPurple,
  },
});

export default styles;
