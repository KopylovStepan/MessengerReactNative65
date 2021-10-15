import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  comment__avatar: {
    height: 43,
    width: 43,
    borderRadius: 43 / 2,
  },
  comment__info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  comment__userName: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    color: colors.white,
    marginBottom: 2,
  },
  comment__container: {
    flexDirection: 'row',
  },
  comment__content: {width: 238, marginRight: 13},
  comment__text: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
    color: colors.periwinkleCrayola,
  },
  comment__iamge: {
    height: 54,
    width: 54,
  },
  comment__likes: {
    flexDirection: 'row',
  },
  comment__likesText: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
    color: colors.white,
    marginLeft: 10,
  },
  comment__footer: {
    flexDirection: 'row',
  },
  comment__time: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 10,
    color: colors.pearlPurple,
    marginRight: 9,
  },
  comment__buttonText: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 10,
    color: colors.white,
  },
});

export default styles;
