import React from 'react';
import './styles/index.scss'

import {classNames} from 'shared/lib/classNames/classNames';
import {useTheme} from 'app/providers/ThemeProviders';
import {AppRouter} from 'app/providers/router';
import {Navbar} from 'widgests/Navbar';


const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>TOGGLE</button>
        </div>
    );
};

export default App;
