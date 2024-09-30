import {useState, FC,} from "react";
import {useBlockedScroll} from "../../../shared/lib/useBlockedScroll";
import BurgerMenu from "./burgerMenu/burgerMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import {LogoIcon} from "../../../shared/assets/icons/logo";
import styles from "./header.module.scss";

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
                            <LogoIcon />
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
                            <RxHamburgerMenu />
                        </div>
                    </nav>
                </div>
            </header>
            { isMenuOpen && <BurgerMenu onMenuClose={onMenuClose} /> }
        </>
    )
}

export default Header;