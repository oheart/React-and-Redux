import React from 'react';

import store from './store';

export default () => {
    return (
        <button onClick={() => store.dispatch({type: "INCREMENT"})}>{/* 点击事件，给 store 发送 action */}
            {store.getState()}{/* 从 store 获取数据 */}
        </button>
    )
}
