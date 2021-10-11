import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: 343,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
    marginTop: 21,
  },
  header__right: {
    flexDirection: 'row',
  },
  header__search: {
    marginRight: 15,
  },
});

export default styles;
