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
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header__inputContainer: {
    width: 301,
    height: 36,
    borderRadius: 28,
    backgroundColor: colors.sapphireBlue,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header__icon: {marginLeft: 13, marginRight: 2},
  header__input: {
    color: colors.pearlPurple,
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
    paddingVertical: 1,
  },
  categories: {
    borderBottomWidth: 1,
    borderBottomColor: colors.moderatePurplishBlue,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 27,
  },
  categories__btn: {
    paddingBottom: 7,
    paddingHorizontal: 2,
  },
  categories__btnActive: {
    borderBottomWidth: 1,
    borderBottomColor: colors.lavender,
    paddingBottom: 7,
    paddingHorizontal: 2,
  },
  categories__text: {
    color: colors.pearlPurple,
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
  },
  categories__textActive: {
    color: colors.lavender,
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
  },
  search: {
    marginTop: 26,
  },
});

export default styles;
