import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  post: {
    borderBottomWidth: 1,
    borderBottomColor: colors.moderatePurplishBlue,
    paddingBottom: 15,
    marginBottom: 22,
  },
  post__header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  post__user: {
    height: 32,
    flexDirection: 'row',
  },
  post__avatar: {
    height: 32,
    width: 32,
    borderRadius: 32 / 2,
  },
  post__userInfo: {
    marginLeft: 8,
    justifyContent: 'center',
  },
  post__userName: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    color: colors.white,
    marginBottom: 2,
  },
  post__time: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
    color: colors.pearlPurple,
  },
  post__text: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
    color: colors.periwinkleCrayola,
  },

  post__slider: {
    height: 208,
    width: 343,
  },
  post__img: {
    height: 180,
    width: 343,
    borderRadius: 18,
  },
  post__wrapDots: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  post__dotActive: {
    margin: 3,
    color: colors.lemonYellow,
  },
  post__dot: {
    margin: 3,
    color: colors.pearlPurple,
  },
  post__footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  post__info: {
    flexDirection: 'row',
  },
  post__infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 23,
    width: 40,
  },
  post__infoText: {
    fontFamily: 'HKGrotesk-SemiBold',
    fontSize: 14,
    color: colors.white,
    marginLeft: 7,
  },
});

export default styles;
