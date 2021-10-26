import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: 343,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: -15,
    marginBottom: 24,
  },
  profile__avatar: {
    borderRadius: 95 / 2,
    height: 95,
    width: 95,
  },
  profile__name: {
    marginTop: 17,
    marginBottom: 6,
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 16,
    color: colors.lavender,
  },
  profile__inst: {
    marginBottom: 29,
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 12,
    color: colors.pearlPurple,
  },
  profile__location: {
    marginBottom: 8,
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    color: colors.pearlPurple,
  },
  profile__job: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    color: colors.white,
  },
  socialPanel: {
    paddingBottom: 24,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.moderatePurplishBlue,
  },
  socialPanel__item: {
    width: 61,
    height: 36,
  },
  socialPanel__info: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 14,
    color: colors.pearlPurple,
  },
  socialPanel__amount: {
    fontFamily: 'HKGrotesk-SemiBold',
    fontSize: 14,
    color: colors.white,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  info__type: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    height: 20,
    color: colors.white,
    marginRight: 6,
  },
  info__amount: {
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    height: 20,
    color: colors.pearlPurple,
  },
});

export default styles;
