import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    View,
    StyleSheet
} from 'react-native'
import { Text, Button } from 'native-base';
import { push, pop } from '../../Redux/Actions/Routing'

class About extends Component {
    render() {
        return (
            <View>
                <Text>About</Text>
                <Button onPress={this.props._back}>Back to Home</Button>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        _back: () => dispatch(pop())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(About)