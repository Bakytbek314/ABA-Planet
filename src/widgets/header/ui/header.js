import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, } from "react";
import { useBlockedScroll } from "../../../shared/lib/useBlockedScroll.ts";
import BurgerMenu from "./burgerMenu/burgerMenu.tsx";
import styles from "./header.module.scss";
import Logo from "../../../shared/assets/icons/logo.svg";
import Burger from "../../../shared/assets/icons/burger.svg";
import BurgerIsOpen from "../../../shared/assets/icons/burgerIsOpen.svg";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const onMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const onMenuClose = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    useBlockedScroll(isMenuOpen);
    return (_jsxs(_Fragment, { children: [_jsx("header", { children: _jsx("div", { className: "container", children: _jsxs("nav", { className: styles.navigation, children: [_jsx("div", { className: styles.logo, children: _jsx("img", { src: Logo, alt: "ABA planet" }) }), _jsx("div", { className: styles.links, children: _jsx("div", { className: styles.list, children: _jsxs("ul", { children: [_jsx("li", { children: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" }), _jsx("li", { children: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F" }), _jsx("li", { children: "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430" })] }) }) }), _jsx("div", { className: styles.burger, onClick: onMenuOpen, children: _jsx("img", { src: isMenuOpen ? BurgerIsOpen : Burger, alt: "Menu" }) })] }) }) }), isMenuOpen && _jsx(BurgerMenu, { onMenuClose: onMenuClose })] }));
};
export default Header;
