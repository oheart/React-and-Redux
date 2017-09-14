import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from './store';

const render = () => {
    ReactDOM.render(
        <App/>,
        document.getElementById('root')
    );
};

render(); // 初始化渲染

store.subscribe(render); // 订阅，当 state 更新时，重新刷新页面