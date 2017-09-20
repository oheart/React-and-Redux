import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import link from '../components/Link'

const mapStateToProps = (state,ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDisPatchToProps = (dispatch,ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
})
const  FilterLink = connect(
    mapStateToProps,
    mapDisPatchToProps
)(Link)

export default FilterLink