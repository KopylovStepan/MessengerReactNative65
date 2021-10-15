import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  subcomment: {
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 53,
  },
  subcomment__avatar: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
  },
  subcomment__info: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  subcomment__userName: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    color: colors.white,
    marginBottom: 2,
  },
  subcomment__container: {
    flexDirection: 'row',
  },
  subcomment__content: {width: 198, marginRight: 13},
  subcomment__text: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
    color: colors.periwinkleCrayola,
  },
  subcomment__iamge: {
    height: 54,
    width: 54,
  },
  subcomment__likes: {
    flexDirection: 'row',
  },
  subcomment__likesText: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
    color: colors.white,
    marginLeft: 10,
  },
  subcomment__footer: {
    flexDirection: 'row',
  },
  subcomment__time: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 10,
    color: colors.pearlPurple,
    marginRight: 9,
  },
  subcomment__buttonText: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 10,
    color: colors.white,
  },
});

export default styles;
