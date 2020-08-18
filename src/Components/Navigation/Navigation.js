import React, { Fragment } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link, useLocation } from 'react-router-dom';
// Material ui core
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// Icons
import companyLogoIcon from './../../Assets/Icons/company-logo-icon.png';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import FaceBookIcon from './../../Assets/Icons/facebook-icon.png';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import InstagramIcon from './../../Assets/Icons/instagram-icon.png';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import menuIcon from './../../Assets/Icons/menu-icon.png';
import ShopIcon from '@material-ui/icons/Shop';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';
import TwitterIcon from './../../Assets/Icons/twitter-icon.png';
// DO NOT TOUCH: Custom styles must follow in order to override
import { useStyles } from './NavigationStyles';


export default function Navigation(props) {


    const websiteTitle = 'AZ MOVIE NIGHTS'
    const classes = useStyles();
    let pathname = useLocation().pathname;
    const [open, setDeskDrawOpen] = React.useState(false);
    const [mobileDrawerState, setmobileDrawerState] = React.useState(false);


    const handleMobileDrawerToggle = () => {
        mobileDrawerState === false ? setmobileDrawerState(true) : setmobileDrawerState(false)
    }


    const handleDesktopDrawerToggle = () => {
        open === false ? setDeskDrawOpen(true) : setDeskDrawOpen(false)
    }


    const handleClose = () => {
        setmobileDrawerState(false);
        handleDesktopDrawerToggle();
    }


    function renderNavItems(key) {
        return (
            <Fragment>
                <MenuList key={key} className={classes.menuList} >
                    <Box
                        style={{ height: 51, backgroundColor: '#171d2e' }} >
                    </Box>


                    <MenuItem component={Link} to='/'
                        selected={'/' === pathname}
                        style={{
                            padding: (open || mobileDrawerState) ? 15 : '7px 15px 23px',
                        }}
                        className={classes.MenuItem} >
                        <ListItemIcon><HomeIcon className={classes.HomeIcon} /></ListItemIcon>
                        <Typography className={classes.ListItemText}>HOME</Typography>
                        <Typography className={classes.miniHomeNavTitle}
                            style={{ display: (open || mobileDrawerState) ? 'none' : 'unset' }} >
                            Home
                        </Typography>
                    </MenuItem>
                    <Divider />


                    <MenuItem component={Link} to='/productList'
                        selected={'/productList' === pathname}
                        style={{
                            padding: (open || mobileDrawerState) ? 15 : '7px 15px 23px'
                        }}
                        className={classes.MenuItem} >
                        <ListItemIcon>
                            <ShopIcon className={classes.ShopIcon} />
                        </ListItemIcon>
                        <Typography className={classes.ListItemText}>PRODUCTS</Typography>
                        <Typography className={classes.miniiNavTitle}
                            style={{
                                left: '10px',
                                display: (open || mobileDrawerState) ? 'none' : 'unset'
                            }} >
                            Products
                        </Typography>
                    </MenuItem>
                    <Divider />


                    <MenuItem component={Link} to='/wishList'
                        selected={'/wishList' === pathname}
                        style={{ padding: (open || mobileDrawerState) ? 15 : '7px 15px 23px' }}
                        className={classes.MenuItem} >
                        <ListItemIcon><FavoriteIcon className={classes.FavoriteIcon} /></ListItemIcon>
                        <Typography className={classes.ListItemText}>WISHLIST</Typography>
                        <Typography className={classes.miniiNavTitle}
                            style={{
                                display: (open || mobileDrawerState) ? 'none' : 'unset',
                                left: '12px'
                            }} >
                            Wishlist
                        </Typography>
                    </MenuItem>
                    <Divider />


                    <MenuItem component={Link} to='/faqPage'
                        selected={'/faqPage' === pathname}
                        style={{ padding: (open || mobileDrawerState) ? 15 : '7px 15px 23px' }}
                        className={classes.MenuItem} >
                        <ListItemIcon><ListAltIcon className={classes.ListAltIcon} /></ListItemIcon>
                        <Typography className={classes.ListItemText}>FAQPAGE</Typography>
                        <Typography className={classes.miniiNavTitle}
                            style={{
                                display: (open || mobileDrawerState) ? 'none' : 'unset',
                                left: '18px'
                            }} >
                            FAQS
                        </Typography>
                    </MenuItem>
                    <Divider />


                    <MenuItem component={Link} to='/reservations'
                        selected={'/reservations' === pathname}
                        style={{ padding: (open || mobileDrawerState) ? 15 : '7px 15px 23px' }}
                        className={classes.MenuItem} >
                        <ListItemIcon><ListAltIcon className={classes.ListAltIcon2} /></ListItemIcon>
                        <Typography className={classes.ListItemText}>RESERVATIONS</Typography>
                        <Typography className={classes.miniiNavTitle}
                            style={{
                                display: (open || mobileDrawerState) ? 'none' : 'unset',
                                left: '12px'
                            }} >
                            Reserve
                        </Typography>
                    </MenuItem>
                    <Divider />


                    <MenuItem onClick={() => handleClose()}
                        style={{ padding: (open || mobileDrawerState) ? 15 : '7px 15px 23px' }}
                        className={classes.MenuItem} >
                        <ListItemIcon>
                            <SwapHorizontalCircleIcon className={classes.SwapHorizontalCircleIcon} /></ListItemIcon>
                        <Typography className={classes.ListItemText}>CLOSE</Typography>
                        <Typography className={classes.miniiNavTitle}
                            style={{
                                display: (open || mobileDrawerState) ? 'none' : 'unset',
                                left: '18px'
                            }} >
                            Open
                        </Typography>
                    </MenuItem>


                </MenuList>
            </Fragment>
        );
    }


    return (
        <Box className={classes.root}>
            <CssBaseline />
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    {/* Desktop menu button */}
                    <img src={menuIcon}
                        className={classes.toggleDesktopMenuBtn}
                        color='inherit'
                        aria-label='open drawer'
                        onClick={handleDesktopDrawerToggle}
                        edge='start'
                        alt='menu button icon'
                    />
                    {/* Mobile menu button */}
                    <img src={menuIcon}
                        className={classes.toggleMobileMenuBtn}
                        color='inherit'
                        aria-label='open drawer'
                        onClick={handleMobileDrawerToggle}
                        edge='start'
                        alt='menu button icon'
                    />
                    {/* Toolbar Content */}
                    <Box className={classes.toolBarContent}>
                        {/* Contact Info */}
                        <Box>
                            <Box>
                                <FormControlLabel
                                    className={classes.contactInfo}
                                    control={
                                        <a target="_top"
                                            color='primary'
                                            rel="noopener noreferrer"
                                            href="mailto:tismeTRM@gmail.com">
                                            <IconButton color="primary"
                                                style={{ padding: '5px 7px 5px 10px' }} >
                                                <MailOutlineIcon />
                                            </IconButton>
                                        </a>
                                    }
                                    label={"tismeTRM@gmail.com"}
                                    labelPlacement="end"
                                />
                            </Box>
                            <Box>
                                <FormControlLabel
                                    className={classes.contactInfo}
                                    control={
                                        <IconButton color="primary"
                                            style={{ padding: '5px  8px 5px 12px' }}>
                                            <ContactPhoneIcon fontSize='small' />
                                        </IconButton>
                                    }
                                    label={"(602) 555-5555"}
                                    labelPlacement="end"
                                />
                            </Box>
                        </Box>
                        <Box className={classes.companyLogo} >
                            <a href="http://azeventteam.com">
                                <img src={companyLogoIcon} alt='company logo' />
                            </a>
                        </Box>
                        {/* Social Media Icons Container */}
                        <Box className={classes.socialIconsContainer} >
                            <a href="https://www.facebook.com/azeventteam/">
                                <img src={FaceBookIcon} alt='Facebook link'
                                    className={classes.socialMediaIcons} />
                            </a>
                            <a href="https://www.instagram.com/">

                                <img src={InstagramIcon} alt='Instagram link'
                                    className={classes.socialMediaIcons} />
                            </a>
                            <a href="https://twitter.com/">

                                <img src={TwitterIcon} alt='Twitter link'
                                    className={classes.socialMediaIcons} />
                            </a>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            {/* Desktop drawer */}
            <Drawer
                position='absolute'
                key='desktopDrawer'
                className={classes.desktopDrawer}
                variant='permanent'
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <Toolbar />
                <Box className={classes.desktopDrawerContainer}>
                    {renderNavItems('desktopNav')}
                </Box>
            </Drawer>
            {/* Mobile drawer */}
            <Drawer
                key='mobileDrawer'
                anchor='left'
                open={mobileDrawerState}
                onClose={() => handleMobileDrawerToggle(false)}>
                <Toolbar style={{ backgroundColor: '#171d2e' }}>
                    <Typography variant='h6' noWrap
                        style={{
                            color: '#fee2be',
                            fontSize: 'medium',
                            marginLeft: '10px'
                        }}>
                        {/* {websiteTitle} */}
                    </Typography>
                </Toolbar>
                {renderNavItems('desktopNav')}
            </Drawer>
        </Box>
    );
}