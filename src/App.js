import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from './Components/Navigation/Navigation';
import Home from './Views/Home/Home';
import ProductsView  from './Views/ProductsView/ProductsView';



function App(props) {

    
    return (
        <Fragment>
            <Navigation />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/productList" component={ProductsView} />
                {/* <Route path="/faqPage" component={FaqPage} /> */}
                {/* <Route path="/wishList" component={WishList} />
                <Route path="/reservations" component={Reservations}>
                <Route component={Error404} /> */}
            </Switch>
            <style jsx="true">{`
                    /* This responsive margin blocks out the space where the fixed sidebar is */
                    body {
                        margin-left: 72px;
                        background: rgb(0,0,1);
                        background: linear-gradient(90deg, rgba(0,0,1,1) 0%, rgba(46,66,114,1) 50%, rgba(0,0,1,1) 100%);
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

