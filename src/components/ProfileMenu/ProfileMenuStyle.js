import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.back,
    justifyContent: 'flex-end',
  },
  window: {
    backgroundColor: '#2B2146',
    width: '100%',
    height: 100,
    marginBottom: 10,
    alignItems: 'center',
  },
  window__text: {
    height: 24,
    color: colors.white,
    fontFamily: 'HKGrotesk-SemiBold',
    fontSize: 16,
    marginLeft: 8,
  },
  window__itemShare: {
    width: 342,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: colors.moderatePurplishBlue,
    alignItems: 'center',
    flexDirection: 'row',
  },
  window__itemCopy: {
    width: 342,
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  window__itemClose: {
    backgroundColor: colors.ultramarineBlue,
    height: 50,
    width: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
