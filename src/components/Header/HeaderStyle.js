import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  header__text: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 16,
    color: colors.white,
    marginLeft: 105,
  },
});

export default styles;
