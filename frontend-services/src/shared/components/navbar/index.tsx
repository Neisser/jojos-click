import Button from '../button';
import styles from './navbar.module.css';

const SVGLogin = () => (
    <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.3672 9.96875C14.6016 9.73438 14.6016 9.30469 14.3672 9.07031L9.36719 4.07031C9.13281 3.83594 8.70312 3.83594 8.46875 4.07031C8.23438 4.30469 8.23438 4.73438 8.46875 4.96875L12.4141 8.875H1.4375C1.08594 8.875 0.8125 9.1875 0.8125 9.5C0.8125 9.85156 1.08594 10.125 1.4375 10.125H12.4141L8.46875 14.0703C8.23438 14.3047 8.23438 14.7344 8.46875 14.9688C8.70312 15.2031 9.13281 15.2031 9.36719 14.9688L14.3672 9.96875ZM13.9375 17C13.5859 17 13.3125 17.3125 13.3125 17.625C13.3125 17.9766 13.5859 18.25 13.9375 18.25H17.6875C19.4062 18.25 20.8125 16.8828 20.8125 15.125V3.875C20.8125 2.15625 19.4062 0.75 17.6875 0.75H13.9375C13.5859 0.75 13.3125 1.0625 13.3125 1.375C13.3125 1.72656 13.5859 2 13.9375 2H17.6875C18.7031 2 19.5625 2.85938 19.5625 3.875V15.125C19.5625 16.1797 18.7031 17 17.6875 17H13.9375Z" fill="#C9CED6"/>
    </svg>
)
const Navbar = () => {

    return (
        <nav className={`${styles['Navbar__Wrapper']}`}>
            <ul>
                <li>
                    <span className={`${styles['Navbar__brand']}`}>Jojo&apos;s Click</span>
                </li>

                <li>
                    <section className={`${styles['Navbar__section']}`}>
                        <Button color='gray'>Login <SVGLogin /> </Button>
                        <Button id={'registernow'}>Register Now</Button>
                    </section>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
