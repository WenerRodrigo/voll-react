import facebook from './assets/facebook.png';


function Footer() {
    return (
        <footer>
            <ul>
                <li>
                    <a href="#">
                        <img src={facebook} alt="logo do facebook"/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;