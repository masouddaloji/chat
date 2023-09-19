type persiantype<T> ={[key in keyof T]:T[key]}
export const persianText ={
    register:{
        Slogan:"پیام رسان ایمن و سریع",
        subheader:"برای استفاده وارد حساب کاربری خود شوید.",
        input:{
            emailPlaceholder:"ایمیل خود را وارد کنید",
           passwordPlaceholder:"رمز ورود خود را وارد کنید",
           confirmpasswordPlaceholder:"تکرار رمز ورود خود را وارد کنید"
        },
    },
    errorInputs:{
        email:{
            email:"یک ادرس ایمیل معتبر وارد کنید",
            required:"وارد کردن ایمیل اجباری می باشد"
        },
        password:{
            min:"حداقل کاراکتر رمز عبور شیش می باشد",
            max:"حداکثر کاراکتر رمز عبور بیست می باشد",
            required:"وارد کردن رمزعبور اجباری می باشد",
        },
        confirmPassword:{
            required:"وارد کردن تکرار رمزعبور اجباری است",
            notMatch:"رمزعبور و تکرار ان یکسان نیستند"
        }
    }
}