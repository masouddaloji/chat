//packages
import { UseFormRegister, FieldValues } from 'react-hook-form'

type InputProps = {
    name: string
    label: string
    placeholder: string
    type: string
    register: {[x: string]: any}
    errors: string | undefined
  }

const Input:React.FC<InputProps> = ({ register,name,label,errors,type,placeholder }) => {
    
    return (
        <div className="form-group">
            <label htmlFor={name} className="inline-block pb-4 font-vazir-med accent-white">{label}</label>
            <input {...register} id={name} type={type} placeholder={placeholder} className="input" />
            {errors&& <span className="inline-block text-xs mt-2.5 text-red-500">{errors}</span>}
        </div>
    )
}

export default Input