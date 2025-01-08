import Button from '../button';
import styles from './navbar.module.css';
const SVGGithub = () => (
    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.91506 16.4318C2.55609 17.7159 2.55609 14.2917 0.8125 13.8637M13.0176 19V15.6871C13.0503 15.2789 12.9942 14.8685 12.8529 14.4833C12.7116 14.0981 12.4884 13.7468 12.1981 13.4528C14.9356 13.1532 17.8125 12.1345 17.8125 7.46044C17.8123 6.26524 17.3441 5.11588 16.5048 4.25025C16.9022 3.20459 16.8741 2.04878 16.4263 1.02294C16.4263 1.02294 15.3976 0.723319 13.0176 2.28989C11.0195 1.75813 8.91321 1.75813 6.91506 2.28989C4.53506 0.723319 3.50635 1.02294 3.50635 1.02294C3.05857 2.04878 3.03047 3.20459 3.42788 4.25025C2.58235 5.12231 2.11367 6.28205 2.12019 7.48612C2.12019 12.1259 4.99711 13.1446 7.73455 13.4785C7.44773 13.7695 7.22652 14.1166 7.08533 14.4971C6.94414 14.8776 6.88613 15.2831 6.91506 15.6871V19" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

)
const GITHUB_URL = 'https://github.com/Neisser/jojos-click';
const Navbar = () => {

    return (
        <nav className={`${styles['Navbar__Wrapper']}`}>
            <ul>
                <li>
                    <span className={`${styles['Navbar__brand']}`}>Jojo&apos;s</span>
                </li>

                <li>
                    <section className={`${styles['Navbar__section']}`}>
                        <Button onClick={() => window.open(GITHUB_URL, "_blank", "noreferrer")} color='gray'><SVGGithub /> Github</Button>
                    </section>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
