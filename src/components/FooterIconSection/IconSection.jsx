import './footerIcon.css';
export default function IconSection() {
    return (
        <section>
            <ul className="icon-list">
                <li className="icon-item">
                    <a href="#" className="icon-link"><i className="fa fa-instagram" /></a>
                </li>
                <li className="icon-item">
                    <a href="#" className="icon-link"><i className="fa fa-facebook-f" /></a>
                </li>
                <li className="icon-item">
                    <a href="#" className="icon-link"><i className="fa fa-dribbble" /></a>
                </li>
                <li className="icon-item">
                    <a href="#" className="icon-link"><i className="fa fa-youtube" /></a>
                </li>
                <li className="icon-item">
                    <a href="#" className="icon-link"><i className="fa fa-linkedin-in" /></a>
                </li>
            </ul>
        </section>
    );

}