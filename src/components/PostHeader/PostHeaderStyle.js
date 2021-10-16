import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  post: {
    marginTop: 10,
    marginBottom: 17,
    paddingBottom: 17,
    borderBottomWidth: 1,
    borderBottomColor: colors.moderatePurplishBlue,
  },
  post__user: {
    height: 32,
    flexDirection: 'row',
    marginBottom: 17,
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
  post__content: {marginBottom: 20},
  post__text: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
    color: colors.periwinkleCrayola,
  },
  post__img: {
    height: 180,
    width: 343,
    borderRadius: 18,
    marginBottom: 4,
  },
  post__info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  post__infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  post__textLikes: {
    fontFamily: 'HKGrotesk-SemiBold',
    fontSize: 14,
    color: colors.white,
    marginLeft: 7,
  },
  post__textComments: {
    fontFamily: 'HKGrotesk-SemiBold',
    fontSize: 14,
    color: colors.white,
  },
});

export default styles;
