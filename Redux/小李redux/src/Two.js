import React from 'react';

import store from './store';

export default () => {
    return (
        <button onClick={() => store.dispatch({type: "DECREMENT"})}>{/* 点击事件，给 store 发送 action */}
            {store.getState()}
        </button>
    )
}