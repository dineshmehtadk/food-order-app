import classes from "./Modal.module.css"
import ReactDom from "react-dom"
import { Fragment } from "react"

function Backdrop(props){
    return<div className={classes.backdrop} onClick={props.onClose}></div>
}

function ModalOverlay(props){
    return<div className={classes.modal}>
        <div className={classes.content}>{props.children}
        </div>
        </div>
}

const PortalElement = document.getElementById("overlay");


function Modal(props){
    return<Fragment>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, PortalElement)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, PortalElement)}
    </Fragment>
}

export default Modal;