import { connect } from 'react-redux'
import NavRoot from './NavRoot'
import { push, pop } from '../Redux/Actions/Routing'

const mapStateToProps = (state) => {
    return {
        navigation: state.Routing
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        pushRoute: (route) => dispatch(push(route)),
        popRoute: () => dispatch(pop())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavRoot)