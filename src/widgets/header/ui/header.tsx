import {useState, FC,} from "react";
import {useBlockedScroll} from "../../../shared/lib/useBlockedScroll.ts";
import BurgerMenu from "./burgerMenu/burgerMenu.tsx";

import styles from "./header.module.scss";
import Logo from "../../../shared/assets/icons/logo.svg";
import Burger from "../../../shared/assets/icons/burger.svg";
import BurgerIsOpen from "../../../shared/assets/icons/burgerIsOpen.svg";

const Header: FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const onMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const onMenuClose = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useBlockedScroll(isMenuOpen);

    return (
        <>
            <header>
                <div className="container">
                    <nav className={styles.navigation}>
                        <div className={styles.logo}>
                            <img src={Logo} alt="ABA planet"/>
                        </div>
                        <div className={styles.links}>
                            <div className={styles.list}>
                                <ul>
                                    <li>Контакты</li>
                                    <li>Галерея</li>
                                    <li>Наша команда</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.burger} onClick={onMenuOpen}>
                            <img
                                src={isMenuOpen ? BurgerIsOpen : Burger}
                                alt="Menu"
                            />
                        </div>
                    </nav>
                </div>
            </header>
            { isMenuOpen && <BurgerMenu onMenuClose={onMenuClose} /> }
        </>
    )
}

export default Header;