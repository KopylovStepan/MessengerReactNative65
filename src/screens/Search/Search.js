import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import MessengerUser from '../../components/ui-kit/user/MessengerUser/index';
import styles from './SearchStyle';
import colors from '../../constants/colors';
import Icon from '../../components/Icon/Icon';

const simulationData = [
  {
    id: 1,
    userName: 'Kate Williams',
    userAvatar:
      'https://sun1-91.userapi.com/s/v1/if1/USW06Sp8nNhjwej4dulhGVdUN3UASJjGoqIWNotmCeNCwY_3ylqysaXn2a5TmCCfqvtSUS3o.jpg?size=50x50&quality=96&crop=383,0,576,576&ava=1',
    city: 'Санкт-Петербург',
  },
  {
    id: 2,
    userName: 'Bla bla',
    userAvatar:
      'https://sun1-91.userapi.com/s/v1/if1/USW06Sp8nNhjwej4dulhGVdUN3UASJjGoqIWNotmCeNCwY_3ylqysaXn2a5TmCCfqvtSUS3o.jpg?size=50x50&quality=96&crop=383,0,576,576&ava=1',
    city: 'Санкт-Петербург',
  },
  {
    id: 3,
    userName: 'Kate Williams',
    userAvatar:
      'https://sun1-91.userapi.com/s/v1/if1/USW06Sp8nNhjwej4dulhGVdUN3UASJjGoqIWNotmCeNCwY_3ylqysaXn2a5TmCCfqvtSUS3o.jpg?size=50x50&quality=96&crop=383,0,576,576&ava=1',
    city: 'Санкт-Петербург',
  },
  {
    id: 4,
    userName: 'Kate Williams',
    userAvatar:
      'https://sun1-91.userapi.com/s/v1/if1/USW06Sp8nNhjwej4dulhGVdUN3UASJjGoqIWNotmCeNCwY_3ylqysaXn2a5TmCCfqvtSUS3o.jpg?size=50x50&quality=96&crop=383,0,576,576&ava=1',
    city: 'Санкт-Петербург',
  },
  {
    id: 5,
    userName: 'Kate Williams',
    userAvatar:
      'https://sun1-91.userapi.com/s/v1/if1/USW06Sp8nNhjwej4dulhGVdUN3UASJjGoqIWNotmCeNCwY_3ylqysaXn2a5TmCCfqvtSUS3o.jpg?size=50x50&quality=96&crop=383,0,576,576&ava=1',
    city: 'Санкт-Петербург',
  },
  {
    id: 6,
    userName: 'Kate Williams',
    userAvatar:
      'https://sun1-91.userapi.com/s/v1/if1/USW06Sp8nNhjwej4dulhGVdUN3UASJjGoqIWNotmCeNCwY_3ylqysaXn2a5TmCCfqvtSUS3o.jpg?size=50x50&quality=96&crop=383,0,576,576&ava=1',
    city: 'Санкт-Петербург',
  },
  {
    id: 7,
    userName: 'Kate Williams',
    userAvatar:
      'https://sun1-91.userapi.com/s/v1/if1/USW06Sp8nNhjwej4dulhGVdUN3UASJjGoqIWNotmCeNCwY_3ylqysaXn2a5TmCCfqvtSUS3o.jpg?size=50x50&quality=96&crop=383,0,576,576&ava=1',
    city: 'Санкт-Петербург',
  },
  {
    id: 8,
    userName: 'Kate Williams',
    userAvatar:
      'https://sun1-91.userapi.com/s/v1/if1/USW06Sp8nNhjwej4dulhGVdUN3UASJjGoqIWNotmCeNCwY_3ylqysaXn2a5TmCCfqvtSUS3o.jpg?size=50x50&quality=96&crop=383,0,576,576&ava=1',
    city: 'Санкт-Петербург',
  },
  {
    id: 9,
    userName: 'Kate Williams',
    userAvatar:
      'https://sun1-91.userapi.com/s/v1/if1/USW06Sp8nNhjwej4dulhGVdUN3UASJjGoqIWNotmCeNCwY_3ylqysaXn2a5TmCCfqvtSUS3o.jpg?size=50x50&quality=96&crop=383,0,576,576&ava=1',
    city: 'Санкт-Петербург',
  },
  {
    id: 10,
    userName: 'Kate Williams',
    userAvatar:
      'https://sun1-91.userapi.com/s/v1/if1/USW06Sp8nNhjwej4dulhGVdUN3UASJjGoqIWNotmCeNCwY_3ylqysaXn2a5TmCCfqvtSUS3o.jpg?size=50x50&quality=96&crop=383,0,576,576&ava=1',
    city: 'Санкт-Петербург',
  },
  {
    id: 11,
    userName: 'Kate Williams',
    userAvatar:
      'https://sun1-91.userapi.com/s/v1/if1/USW06Sp8nNhjwej4dulhGVdUN3UASJjGoqIWNotmCeNCwY_3ylqysaXn2a5TmCCfqvtSUS3o.jpg?size=50x50&quality=96&crop=383,0,576,576&ava=1',
    city: 'Санкт-Петербург',
  },
  {
    id: 12,
    userName: 'Kate Williams',
    userAvatar:
      'https://sun1-91.userapi.com/s/v1/if1/USW06Sp8nNhjwej4dulhGVdUN3UASJjGoqIWNotmCeNCwY_3ylqysaXn2a5TmCCfqvtSUS3o.jpg?size=50x50&quality=96&crop=383,0,576,576&ava=1',
    city: 'Санкт-Петербург',
  },
  {
    id: 13,
    userName: 'Kate Williams',
    userAvatar:
      'https://sun1-91.userapi.com/s/v1/if1/USW06Sp8nNhjwej4dulhGVdUN3UASJjGoqIWNotmCeNCwY_3ylqysaXn2a5TmCCfqvtSUS3o.jpg?size=50x50&quality=96&crop=383,0,576,576&ava=1',
    city: 'Санкт-Петербург',
  },
];

const Search = ({
  navigation,
  loading,
  allData,
  peopleData,
  groupsData,
  getSearchAll,
  getSearchPeople,
  getSearchGroups,
}) => {
  const [text, onChangeText] = useState('');
  const [active, setActive] = useState('Все');

  useEffect(() => {
    getSearchAll();
  }, []);

  const setActiveAll = () => {
    setActive('Все');
    getSearchAll(text);
  };
  const setActivePeople = () => {
    setActive('Люди');
    getSearchPeople(text);
  };
  const setActiveGroups = () => {
    setActive('Сообщества');
    getSearchGroups(text);
  };
  const enterSearchText = () => {
    if (active === 'Все') {
      getSearchAll(text);
    } else if (active === 'Люди') {
      getSearchPeople(text);
    } else if (active === 'Сообщества') {
      getSearchGroups(text);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon name={'arrow-left'} size={22} color={colors.white} />
          </TouchableOpacity>
          <View style={styles.header__inputContainer}>
            <View style={styles.header__icon}>
              <Icon name={'search'} size={19} color={colors.pearlPurple} />
            </View>
            <TextInput
              style={styles.header__input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Поиск"
              placeholderTextColor={colors.pearlPurple}
              onSubmitEditing={enterSearchText}
            />
          </View>
        </View>
        <View style={styles.categories}>
          <TouchableOpacity
            onPress={setActiveAll}
            style={
              active === 'Все'
                ? styles.categories__btnActive
                : styles.categories__btn
            }>
            <Text
              style={
                active === 'Все'
                  ? styles.categories__textActive
                  : styles.categories__text
              }>
              Все
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={setActivePeople}
            style={
              active === 'Люди'
                ? styles.categories__btnActive
                : styles.categories__btn
            }>
            <Text
              style={
                active === 'Люди'
                  ? styles.categories__textActive
                  : styles.categories__text
              }>
              Люди
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={setActiveGroups}
            style={
              active === 'Сообщества'
                ? styles.categories__btnActive
                : styles.categories__btn
            }>
            <Text
              style={
                active === 'Сообщества'
                  ? styles.categories__textActive
                  : styles.categories__text
              }>
              Сообщества
            </Text>
          </TouchableOpacity>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color={colors.white} />
        ) : (
          <FlatList
            style={styles.search}
            data={
              active === 'Все'
                ? allData
                : active === 'Люди'
                ? peopleData
                : active === 'Сообщества'
                ? groupsData
                : null
            }
            renderItem={object => (
              <MessengerUser
                firstName={
                  object?.item?.first_name ||
                  object?.item?.name ||
                  object?.item?.profile?.first_name ||
                  object?.item?.group?.name ||
                  object?.item?.app?.title
                }
                lastName={
                  object?.item?.last_name || object?.item?.profile?.last_name
                }
                city={
                  object?.item?.city?.title ||
                  object?.item?.profile?.city?.title
                }
                img={
                  object?.item?.photo_50 ||
                  object?.item?.profile?.photo_50 ||
                  object?.item?.group?.photo_50 ||
                  object?.item?.app?.icon_75
                }
              />
            )}
            keyExtractor={item =>
              item?.id || item?.profile?.id || item?.group?.id || item?.app?.id
            }
          />
        )}
      </View>
    </View>
  );
};

export default Search;
