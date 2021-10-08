export default function DropdownButton({ toggle, toggleEvent }) {
    return (
        <div className="button">
            <button className="custom_button"><i class="fa fa-user" onClick={toggleEvent}></i></button>
            <div className={toggle ? "links" : "hide"}>
                <li><a href="#">login</a></li>
                <li><a href="#">profile</a></li>
                <li><a href="#">About</a></li>
            </div>
        </div>
    );
}
