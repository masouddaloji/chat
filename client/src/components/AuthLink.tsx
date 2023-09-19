//icons
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"

const AuthLink = () => {
  return (
    <div className="my-8 flex flex-col items-center">
    <h6 className="text-xs line">یا ورود با</h6>
    <div className="flex items-center my-8 gap-5">
        <div className="iconBox text-white bg-[#ff4e2b]">
            <FaGoogle />
        </div>
        <div className="iconBox text-white bg-blue-primary">
            <FaTwitter />
        </div>
        <div className="iconBox text-white bg-[#2c67ce]">
            <FaFacebookF />
        </div>
    </div>
    <h4 className="text-gray-primary text-sm">
        <span className="text-[#ff4e2b] ml-2">*</span>
        شرایط و قوانین استفاده
        <b className="mx-2">&amp;</b>
        سیاست
        حریم خصوصی</h4>
</div>
  )
}

export default AuthLink