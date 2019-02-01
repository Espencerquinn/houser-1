import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import StepOne from './component/Wizard/StepOne';
import StepTwo from './component/Wizard/StepTwo';
import StepThree from './component/Wizard/StepThree';

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/wizard' render={() => (
            <Wizard>
                <Route path='/wizard/stepone' component={StepOne} />
                <Route path='/wizard/steptwo' component={StepTwo} />
                <Route path='/wizard/stepthree' component={StepThree} />
            </Wizard>
        )} />
    </Switch>
)