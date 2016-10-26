import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    View,
    StyleSheet
} from 'react-native'
import { Text, Button } from 'native-base';
import { push } from '../../Redux/Actions/Routing'

class Home extends Component {
    render() {
        return (
            <View>
                <Text>Home</Text>
                <Button onPress={this.props._next}>Next</Button>
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
        _next: () => dispatch(push({ key: 'about', title: 'about' }))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)