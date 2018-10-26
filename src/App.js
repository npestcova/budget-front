import React, {PureComponent} from 'react';
import DefaultLayout from './Layouts/PageLayout/DefaultLayout';

import './App.css';





class App extends PureComponent {
    render() {
        return <DefaultLayout>
          content here
        </DefaultLayout>;
    }
}

export default App;