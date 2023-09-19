//types
import { Metadata } from "next";
//components
import AuthBanner from "@/components/AuthBanner";
import RegisterForm from "@/components/RegisterForm";

export const metadata: Metadata = {
  title: "ثبت نام",
  description: "ثبت نام در پیام رسان چیت چت"
}
const RegisterPage:React.FC = () => {
  return (
    <section className=" flex relative max-w-7xl">
      <RegisterForm />
      <AuthBanner />
    </section>
  )
}

export default RegisterPage