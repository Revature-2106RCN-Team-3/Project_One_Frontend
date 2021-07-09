import { IError } from "../../redux/types/types";

interface IProps {
    dispatchLogout: () => void;
    isLoggingOut: boolean;
    error: IError
}

const Logout: React.FC<IProps> = (props) => {
    return (
        <div 
            className="modal fade" 
            id="staticBackdrop" 
            data-bs-backdrop="static" 
            data-bs-keyboard="false" 
            tabindex="-1" 
            aria-labelledby="staticBackdropLabel" 
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Logging out?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-danger" disabled={props.isLoggingOut} onClick={props.dispatchLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logout;