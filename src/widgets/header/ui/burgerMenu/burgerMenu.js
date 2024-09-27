import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { useClickOutSide } from "../../../../shared/lib/useClickOutSide.ts";
import { FcContacts, FcGallery, FcBusinesswoman } from "react-icons/fc";
import styles from "./burgerMenu.module.scss";
const BurgerMenu = ({ onMenuClose }) => {
    const burgerRef = useRef(null);
    useClickOutSide(burgerRef, () => onMenuClose());
    return (_jsx("main", { className: styles.burger_popup, children: _jsx("div", { className: styles.burger_menu, ref: burgerRef, children: _jsxs("ul", { children: [_jsxs("li", { children: ["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B ", _jsx(FcContacts, {}), " "] }), _jsxs("li", { children: ["\u0413\u0430\u043B\u0435\u0440\u0435\u044F ", _jsx(FcGallery, {}), " "] }), _jsxs("li", { children: ["\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 ", _jsx(FcBusinesswoman, {}), " "] })] }) }) }));
};
export default BurgerMenu;
