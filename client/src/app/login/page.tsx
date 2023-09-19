//types
import { Metadata } from "next";
//components
import AuthBanner from "@/components/AuthBanner"
import LoginForm from "@/components/LoginForm"


export const metadata: Metadata = {
  title: "ورود",
  description: "ورود به اکانت پیام رسان چیت چت"
}

const LoginPage:React.FC = () => {
  return (
    <section className=" flex relative max-w-7xl">
      <LoginForm />
      <AuthBanner />
    </section>
  )
}

export default LoginPage