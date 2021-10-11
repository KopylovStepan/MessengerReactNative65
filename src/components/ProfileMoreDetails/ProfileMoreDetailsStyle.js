import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.back,
    justifyContent: 'flex-end',
  },
  window: {
    backgroundColor: colors.ultramarineBlue,
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    height: 543,
  },
  details: {
    width: 342,
    marginTop: 33,
    marginBottom: 20,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: colors.moderatePurplishBlue,
  },
  details__header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  details__item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  details__text: {
    width: 303,
    marginLeft: 12,
    color: colors.periwinkleCrayola,
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
  },
  contacts: {
    width: 342,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  contacts__header: {
    marginBottom: 15,
  },
  contacts__item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contacts__text: {
    width: 303,
    marginLeft: 12,
    color: colors.periwinkleCrayola,
    fontFamily: 'HKGrotesk-Medium',
    fontSize: 14,
  },
});

export default styles;
