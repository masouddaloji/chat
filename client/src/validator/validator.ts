//packages
import { persianText } from '@/persianText'
import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
    email: Yup.string().email(persianText.errorInputs.email.email).required(persianText.errorInputs.email.required),
    password: Yup.string().required(persianText.errorInputs.password.required).min(6, persianText.errorInputs.password.min).max(20, persianText.errorInputs.password.max),
    confirm_password: Yup.string().required(persianText.errorInputs.confirmPassword.required).oneOf([Yup.ref('password')], persianText.errorInputs.confirmPassword.notMatch),
})
export const loginSchema = Yup.object().shape({
    email: Yup.string().email(persianText.errorInputs.email.email).required(persianText.errorInputs.email.required),
    password: Yup.string().required(persianText.errorInputs.password.required).min(6, persianText.errorInputs.password.min).max(20, persianText.errorInputs.password.max),
})

