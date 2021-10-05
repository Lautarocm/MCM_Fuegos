import "./Button.scss"

const Button = ({label, clickHandler}) => {
    return (
        <button onClick={clickHandler} className="btn">{label}</button>
    );
}
 
export default Button;