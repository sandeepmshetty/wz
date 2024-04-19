import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import caseTable from './components/caseTables';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

export default () => {
    return (
        <div className="app-container">
            <ThemeProvider>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={caseTable} />
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};
