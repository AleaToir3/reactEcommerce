import './form-input.styles.scss'
const FormInput = ({label,...inputData}) =>{
    
    return (
        <div className="group">
            <input className="form-input"{...inputData}/>
        {label && (
            <label className={`${inputData.value.length ? 'shrink' :''} form-input-label `}> {label}</label>
        )}   
        
        </div>

    )
}
export default FormInput