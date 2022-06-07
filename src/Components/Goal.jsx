import React from 'react'
import MadeGoal from './MadeGoal';
import MissedGoal from './MissedGoal';

function Goal(props) {
    //console.log(props)

    //const isGoal = props.isGoal;

    // cond ? '' : ''

    return (props.isGoal) ? <MadeGoal /> : <MissedGoal />;

    // if(props.isGoal) {
    //     return <MadeGoal />
    // } else {
    //     return <MissedGoal />
    // }
}

export default Goal