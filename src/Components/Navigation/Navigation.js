import React, { Fragment } from "react";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
// Material ui core
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// Icons
import companyLogoIcon from "./../../Assets/Icons/company-logo-icon.png";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import FaceBookIcon from "./../../Assets/Icons/facebook-icon.png";
import HelpIcon from "@material-ui/icons/Help";
import HomeIcon from "@material-ui/icons/Home";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import InstagramIcon from "./../../Assets/Icons/instagram-icon.png";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import menuIcon from "./../../Assets/Icons/menu-icon.png";
import ShopIcon from "@material-ui/icons/Shop";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";
import TwitterIcon from "./../../Assets/Icons/twitter-icon.png";
import { useStyles } from "./NavigationStyles";
import { getCurrentCartList } from "../../Redux/Reducers/currentCartListReducer";

export default function Navigation(props) {
    // const websiteTitle = 'AZ MOVIE NIGHTS'
    const classes = useStyles();
    let pathname = useLocation().pathname;
    const history = useHistory();
    const [open, setDeskDrawOpen] = React.useState(false);
    const [mobileDrawerState, setmobileDrawerState] = React.useState(false);
    const currentCartList = useSelector(getCurrentCartList);
    let cartItemCount;

    console.log(Object.keys(currentCartList).length);
    if (currentCartList) {
        cartItemCount = Object.keys(currentCartList).length;
    }

    const handleMobileDrawerToggle = () => {
        mobileDrawerState === false
            ? setmobileDrawerState(true)
            : setmobileDrawerState(false);
    };

    const handleDesktopDrawerToggle = () => {
        open === false ? setDeskDrawOpen(true) : setDeskDrawOpen(false);
    };

    const handleClose = () => {
        setTimeout(() => {
            setmobileDrawerState(false);
            setDeskDrawOpen(false);
        }, 500);
    };

    const handleHomeRedirectAndClose = () => {
        setTimeout(() => {
            setmobileDrawerState(false);
            setDeskDrawOpen(false);
        }, 500);
        if (pathname !== "/") {
            history.push("/");
        }
    };

    const handleOpenCloseButton = () => {
        handleDesktopDrawerToggle();
        setmobileDrawerState(false);
    };

    function renderNavItems(key) {
        return (
            <Fragment>
                <MenuList key={key} className={classes.menuList} style={{ outline: 0 }}>
                    <Box style={{ height: 51, backgroundColor: "#171d2e" }}></Box>
                    <MenuItem
                        selected={"/" === pathname}
                        className={classes.MenuItem}
                        onClick={() => handleHomeRedirectAndClose()}
                        style={{
                            padding: open || mobileDrawerState ? 15 : "8px 15px 26px",
                        }}
                    >
                        <ListItemIcon>
                            <HomeIcon className={classes.HomeIcon} />
                        </ListItemIcon>
                        <Typography className={classes.ListItemText}>Home</Typography>
                        <Typography
                            className={classes.miniHomeNavTitle}
                            style={{ display: open || mobileDrawerState ? "none" : "unset" }}
                        >
                            Home
                        </Typography>
                    </MenuItem>
                    <Divider className={classes.Divider} />
                    <MenuItem
                        component={Link}
                        to={{
                            pathname: `/products`,
                            navLink: true,
                        }}
                        selected={"/products" === pathname.slice(0, 9)}
                        className={classes.MenuItem}
                        onClick={() => handleClose()}
                        style={{
                            padding: open || mobileDrawerState ? 15 : "8px 15px 26px",
                        }}
                    >
                        <ListItemIcon>
                            <ShopIcon className={classes.ShopIcon} />
                        </ListItemIcon>
                        <Typography className={classes.ListItemText}>Products</Typography>
                        <Typography
                            className={classes.miniiNavTitle}
                            style={{
                                left: "10px",
                                display: open || mobileDrawerState ? "none" : "unset",
                            }}
                        >
                            Products
                        </Typography>
                    </MenuItem>
                    <Divider className={classes.Divider} />
                    <MenuItem
                        onClick={() => handleClose()}
                        component={Link}
                        to="/images"
                        selected={"/images" === pathname}
                        style={{
                            padding: open || mobileDrawerState ? 15 : "8px 15px 26px",
                        }}
                        className={classes.MenuItem}
                    >
                        <ListItemIcon>
                            <ImageSearchIcon className={classes.ListAltIcon} />
                        </ListItemIcon>
                        <Typography className={classes.ListItemText}>
                            Image Gallery
                        </Typography>
                        <Typography
                            className={classes.miniiNavTitle}
                            style={{
                                display: open || mobileDrawerState ? "none" : "unset",
                                left: "15px",
                            }}
                        >
                            Images
                        </Typography>
                    </MenuItem>
                    <Divider className={classes.Divider} />
                    <MenuItem
                        onClick={() => handleClose()}
                        component={Link}
                        to="/faqPage"
                        selected={"/faqPage" === pathname}
                        style={{
                            padding: open || mobileDrawerState ? 15 : "8px 15px 26px",
                        }}
                        className={classes.MenuItem}
                    >
                        <ListItemIcon>
                            <HelpIcon className={classes.ListAltIcon} />
                        </ListItemIcon>
                        <Typography className={classes.ListItemText}>FAQ's</Typography>
                        <Typography
                            className={classes.miniiNavTitle}
                            style={{
                                display: open || mobileDrawerState ? "none" : "unset",
                                left: "17px",
                            }}
                        >
                            FAQ's
                        </Typography>
                    </MenuItem>
                    <Divider className={classes.Divider} />
                    <MenuItem
                        onClick={() => handleClose()}
                        component={Link}
                        to="/reservations"
                        selected={"/reservations" === pathname}
                        style={{
                            padding: open || mobileDrawerState ? 15 : "8px 15px 26px",
                        }}
                        className={classes.MenuItem}
                    >
                        <ListItemIcon>
                            <ListAltIcon className={classes.ListAltIcon2} />
                        </ListItemIcon>
                        <Typography className={classes.ListItemText}>Contact Us</Typography>
                        <Typography
                            className={classes.miniiNavTitle}
                            style={{
                                display: open || mobileDrawerState ? "none" : "unset",
                                left: "12px",
                            }}
                        >
                            Contact
                        </Typography>
                    </MenuItem>
                    <Divider className={classes.Divider} />
                    <MenuItem
                        onClick={() => handleClose()}
                        component={Link}
                        to="/cartList"
                        selected={"/cartList" === pathname}
                        style={{
                            padding: open || mobileDrawerState ? 15 : "8px 15px 26px",
                        }}
                        className={classes.MenuItem}
                    >
                        <ListItemIcon>
                            <ShoppingCartIcon className={classes.FavoriteIcon} />
                        </ListItemIcon>
                        <Typography className={classes.ListItemText}>Cart</Typography>
                        <Typography
                            className={classes.miniiNavTitle}
                            style={{
                                display: open || mobileDrawerState ? "none" : "unset",
                                left: "20px",
                            }}
                        >
                            Cart
                        </Typography>
                        {/* This is the cartitem counter */}
                        <Box
                            className={classes.cartItemCount}
                            style={{
                                display: cartItemCount < 1 ? "none" : "flex",
                            }}
                        >
                            {cartItemCount}
                        </Box>
                    </MenuItem>
                    <Divider className={classes.Divider} />
                    <MenuItem
                        onClick={() => handleOpenCloseButton()}
                        style={{
                            padding: open || mobileDrawerState ? 15 : "8px 15px 26px",
                        }}
                        className={classes.MenuItem}
                    >
                        <ListItemIcon>
                            <SwapHorizontalCircleIcon
                                className={classes.SwapHorizontalCircleIcon}
                            />
                        </ListItemIcon>
                        <Typography className={classes.ListItemText}>CLOSE</Typography>
                        <Typography
                            className={classes.miniiNavTitle}
                            style={{
                                display: open || mobileDrawerState ? "none" : "unset",
                                left: "18px",
                            }}
                        >
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
                    <img
                        src={menuIcon}
                        className={classes.toggleDesktopMenuBtn}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDesktopDrawerToggle}
                        edge="start"
                        alt="menu button icon"
                    />
                    {/* Mobile menu button */}
                    <img
                        src={menuIcon}
                        className={classes.toggleMobileMenuBtn}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleMobileDrawerToggle}
                        edge="start"
                        alt="menu button icon"
                    />
                    {/* Toolbar Content */}
                    <Box className={classes.toolBarContent}>
                        {/* Contact Info */}
                        <Box>
                            <Box>
                                <FormControlLabel
                                    className={classes.contactEmail}
                                    control={
                                        <a
                                            target="_top"
                                            color="primary"
                                            rel="noopener noreferrer"
                                            href="mailto:example@example.com"
                                        >
                                            <IconButton
                                                color="primary"
                                                style={{ padding: "5px 7px 5px 10px" }}
                                            >
                                                <MailOutlineIcon />
                                            </IconButton>
                                        </a>
                                    }
                                    label={"example@example.com"}
                                    labelPlacement="end"
                                />
                            </Box>
                            <Box>
                                <FormControlLabel
                                    className={classes.contactPhone}
                                    control={
                                        <IconButton
                                            color="primary"
                                            style={{ padding: "5px  8px 5px 12px" }}
                                        >
                                            <ContactPhoneIcon fontSize="small" />
                                        </IconButton>
                                    }
                                    label={"(555) 555-5555"}
                                    labelPlacement="end"
                                />
                            </Box>
                        </Box>
                        <Box className={classes.companyLogoBox}>
                            <a href="http://azeventteam.com">
                                <img
                                    src={companyLogoIcon}
                                    alt="company logo"
                                    className={classes.companyLogo}
                                />
                            </a>
                        </Box>
                        {/* Social Media Icons Container */}
                        <Box className={classes.socialIconsContainer}>
                            <a href="https://www.facebook.com/azeventteam/">
                                <img
                                    src={FaceBookIcon}
                                    alt="Facebook link"
                                    className={classes.socialMediaIcons}
                                />
                            </a>
                            <a href="https://www.instagram.com/">
                                <img
                                    src={InstagramIcon}
                                    alt="Instagram link"
                                    className={classes.socialMediaIcons}
                                />
                            </a>
                            <a href="https://twitter.com/">
                                <img
                                    src={TwitterIcon}
                                    alt="Twitter link"
                                    className={classes.socialMediaIcons}
                                />
                            </a>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            {/* Desktop drawer */}
            <Drawer
                position="absolute"
                key="desktopDrawer"
                className={classes.desktopDrawer}
                variant="permanent"
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <Toolbar />
                <Box className={classes.desktopDrawerContainer}>
                    {renderNavItems("desktopNav")}
                </Box>
            </Drawer>
            {/* Mobile drawer */}
            <Drawer
                key="mobileDrawer"
                anchor="left"
                open={mobileDrawerState}
                onClose={() => handleMobileDrawerToggle(false)}
            >
                <Toolbar style={{ backgroundColor: "#171d2e" }}>
                    <Typography
                        variant="h6"
                        noWrap
                        style={{
                            color: "#fee2be",
                            fontSize: "medium",
                            marginLeft: "10px",
                        }}
                    >
                        {/* {websiteTitle} */}
                    </Typography>
                </Toolbar>
                {renderNavItems("desktopNav")}
            </Drawer>
        </Box>
    );
}
