import { collectionGroup } from "firebase/firestore";
import "./button.styles.scss"
const BUTTON_TYPE_CLASS = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children,buttonType,...otherDataButton})=>{

     return (
        <button className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`}{...otherDataButton}>
            {/* 🛑react children */} 
            {children}
        </button>
    )
}
export default Button;