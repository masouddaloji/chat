"use client"
//next component
import Image from "next/image"
import Input from "./Input"
import Link from "next/link"
//packages
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
//components
import AuthLink from "./AuthLink"
//validator
import { loginSchema } from "@/validator/validator"
//types
import { login } from "@/type"
//persian text
import { persianText } from "@/persianText"

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<login>({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(loginSchema)
    })

    const loginHandler = (data: login) => {
        console.log("data", data);

    }
    return (
        <section className="w-full md:w-1/2 lg:w-2/5 h-screen relative z-10 text-start p-4 md:p-5 lg:p-12 font-vazir-med">
            <Image src='/images/landing-logo.png' width={212} height={50} alt="logo image" className="mb-5" />
            <h3 className="pb-1 text-2xl">{persianText.register.Slogan}</h3>
            <h4 className="mb-5 text-gray-primary text-xs">{persianText.register.subheader}</h4>
            <form className="w-full flex flex-col" onSubmit={handleSubmit(loginHandler)}>
                <Input register={{ ...register("email") }} errors={errors.email?.message} name="email" type="text" label="ایمیل" placeholder={persianText.register.input.emailPlaceholder} />
                <Input register={{ ...register("password") }} errors={errors.password?.message} name="password" label="رمز ورود" placeholder={persianText.register.input.passwordPlaceholder} type="password" />
                <div className=" flex items-center justify-between mb-5 text-xs">
                    <div className="flex items-center gap-1 ">
                        <input type="checkbox" name="" id="registerCheckbox" />
                        <label htmlFor="registerCheckbox" >
                            مرا بخاطر بسپار
                        </label>
                    </div>
                    <h6>فراموشی رمز ورود؟</h6>
                </div>

                <div className="w-full flex justify-center gap-4 md:gap-6 text-sm">
                    <Link href="/register" className="px-8 lg:px-12 py-3 bg-black-primary text-white rounded-lg " >
                        ثبت نام
                    </Link>
                    <button className="px-8 lg:px-12 py-3 bg-blue-primary text-white rounded-lg" type="submit">
                        ورود به سایت
                    </button>
                </div>
            </form>
            <AuthLink />

        </section>
    )
}

export default LoginForm