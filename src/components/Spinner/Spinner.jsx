import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import "./Spinner.scss"

const spinnerIcon = <FontAwesomeIcon icon={faCircleNotch} />

const Spinner = () => {
    return (
        <div className="spinnerContainer">
            <div className="spinnerIcon">{spinnerIcon}</div>
        </div>
    );
}
 
export default Spinner;