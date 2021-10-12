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
  },
  photos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  photo: {
    width: 112,
    height: 113,
    margin: 1.1,
  },
});

export default styles;
