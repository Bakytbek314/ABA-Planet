import {useState, FC} from "react";

import styles from "./header.module.scss";
import Logo from "../../../shared/assets/icons/logo.svg";
import Burger from "../../../shared/assets/icons/burger.svg";
import BurgerIsOpen from "../../../shared/assets/icons/burgerIsOpen.svg";
import Button from "../../../shared/ui/button/button.tsx";
import TextType from "../../../shared/ui/textType/textType.props.ts";
import Dropdawn from "./dropdawn/dropdawn.tsx";

const Header:FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleMenuOpen = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="container">
                <nav className={styles.navigation}>
                    <div className={styles.logo}>
                        <img src={Logo} alt="ABA planet"/>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.list}>
                            <ul>
                                <li>Главная</li>
                                <li>Цены</li>
                                <li>Наша команда</li>
                            </ul>
                        </div>
                        <div className={styles.faq}>
                            <Button size={"small"} color={"red"}>
                                FAQ
                            </Button>
                        </div>
                    </div>
                    <div className={styles.burger} onClick={handleMenuOpen}>
                        <img
                            src={isMenuOpen ? BurgerIsOpen : Burger}
                            alt="Menu"
                        />
                    </div>
                    { isMenuOpen && <Dropdawn/> }
                </nav>
            </div>
        </header>
    )
}

export default Header;