"use client"
//next component
import Image from "next/image"
//packages
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
//components
import AuthLink from "./AuthLink"
import Input from "./Input"
//validator
import { registerSchema } from "@/validator/validator"
//PERSIAN TEXT
import { persianText } from "@/persianText"


type register = {
    email: string
    password: string
    confirm_password: string
}
function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<register>({
        defaultValues: {
            email: "",
            password: "",
            confirm_password: ""
        },
        resolver: yupResolver(registerSchema)
    })

    const registerHandler = (data: register) => {
        console.log("data", data);

    }
    return (
        <section className="w-full md:w-1/2 lg:w-2/5 h-screen relative z-10 text-start p-4 md:p-5 lg:p-12 font-vazir-med">
            <Image src='/images/landing-logo.png' width={212} height={50} alt="logo image" className="mb-5" />
            <h3 className="pb-1 text-2xl">{persianText.register.Slogan}</h3>
            <h4 className="mb-5 text-gray-primary text-xs">{persianText.register.subheader}</h4>
            <form className="w-full flex flex-col" onSubmit={handleSubmit(registerHandler)}>
                <Input register={{ ...register("email") }} errors={errors.email?.message} name="email" type="text" label="ایمیل" placeholder={persianText.register.input.emailPlaceholder} />
                <Input register={{ ...register("password") }} errors={errors.password?.message} name="password" label="رمز ورود" placeholder={persianText.register.input.passwordPlaceholder} type="password" />
                <Input register={{ ...register("confirm_password") }} errors={errors.confirm_password?.message} name="confirm_password" label="تکرار رمز ورود" placeholder={persianText.register.input.confirmpasswordPlaceholder} type="password" />
                <div className="w-full flex justify-center gap-4 md:gap-6 text-sm">
                    <button className="px-8 lg:px-12 py-3 bg-blue-primary text-white rounded-lg" type="submit">ثبت نام</button>
                </div>
            </form>
            <AuthLink />

        </section>
    )
}

export default RegisterForm