import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 21,
    paddingBottom: 14,
  },
  header__text: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 16,
    color: colors.white,
  },
  header__void: {
    width: 22,
  },
});

export default styles;
