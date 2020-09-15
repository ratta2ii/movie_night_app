import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from './Components/Navigation/Navigation';
import Home from './Views/Home/Home';
import ProductsView  from './Views/ProductsView/ProductsView';
import FaqPage from './Views/FaqPage/FaqPage';
import Reservations from './Views/Reservations/Reservations';
import WishListView from './Views/WishListView/WishListView';
import SingleProductView from './Views/SingleProductView/SingleProductView';
import Error404 from './Views/Error404/Error404';
// This is for testing purposes only
// import ReduxStateTest from './Data/TestPages/ReduxStateTest';


function App(props) {

    
    return (
        <Fragment>
            <Navigation />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/productList" component={ProductsView} />
                <Route path="/faqPage" component={FaqPage} />
                <Route path="/wishList" component={WishListView} />
                <Route path="/reservations" component={Reservations} />
                <Route path="/product" component={SingleProductView} />
                <Route component={Error404} />
            </Switch>
            <style global="true" jsx="true">{`
                /* This takes up space for the sidebar so all future centering works accordingly */
                    body {
                        margin-left: 72px;
                    }
                @media only screen and (max-width: 959px) {
                    body {
                        margin-left: 0;   
                    }
                }
            `}</style>
        </Fragment>
    );
}


App.propTypes = {
    location: PropTypes.object,
    currentRouterPath: PropTypes.string
};


export default withRouter(App);

