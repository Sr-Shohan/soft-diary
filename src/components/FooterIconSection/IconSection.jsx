import './footerIcon.css';
export default function IconSection() {
    return (
        <section style={{ display: 'flex', alignItems: 'flex-end', width: '100%', flex: '1' }}>
            <ul className="icon-list">
                <li className="icon-item">
                    <a href="#" className="icon-link"><i className="fa fa-facebook-f" /></a>
                </li>
                <li className="icon-item">
                    <a href="#" className="icon-link"><i className="fa fa-linkedin" /></a>
                </li>
                <li className="icon-item">
                    <a href="#" className="icon-link"><i className="fa fa-twitter" /></a>
                </li>
                <li className="icon-item">
                    <a href="#" className="icon-link"><i className="fa fa-youtube" /></a>
                </li>
            </ul>
        </section>
    );

}