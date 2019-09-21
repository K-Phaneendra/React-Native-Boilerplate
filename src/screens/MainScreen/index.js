import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

import {Camera, Send} from '../../components/Icons/FeatherIcons';
import {fetchSampleContent} from '../../actions/APIActions/sample';
import {fetchSampleContents} from '../../actions/dispatchActions/sampleDispatch';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camIcon: {
    paddingLeft: 10,
  },
  sendIcon: {
    paddingRight: 10,
  },
});

class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Camera style={styles.camIcon} />,
    title: 'App Heading',
    headerRight: (
      <Send
        style={styles.sendIcon}
        onPress={this.props.navigation.navigate('Messages')}
      />
    ),
  };

  componentDidMount() {
    const {fetchedSamples} = this.props;
    fetchSampleContent().then(APIResponse => {
      fetchedSamples(APIResponse);
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>This is main screen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  fetchedSamples: APIResponse => fetchSampleContents(dispatch, APIResponse),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);
