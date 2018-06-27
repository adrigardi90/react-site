import * as ReactDOM from 'react-dom';
import * as React from 'react';

import { RouterComponent } from './router';

ReactDOM.hydrate(
    <RouterComponent />,
    document.getElementById('root')
);
