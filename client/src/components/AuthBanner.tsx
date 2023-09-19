//next component
import Image from "next/image";


const AuthBanner:React.FC = () => {
  return (
    <section className="bg-[#eff7fe] w-full md:w-1/2 lg:w-3/5 h-screen fixed left-0 opacity-5 md:opacity-100">
      <div className="relative w-full h-full">
        <div className="relative w-full h-full flex justify-center items-center">
          <Image src="/images/auth/chat.png" width={504} height={450} alt="chat logo" className="absolute top-[30%] scale-x-[-1] w-4/5 lg:w-[65%] xl:w-[unset]" />
          <Image src="/images/auth/boy.png" width={109} height={361} alt="boy logo" className="scale-x-[-1] absolute w-1/4 right-[21%] top-1/2 lg:w-[unset] lg:right-[29%] xl:right-[36%] xl:top-[52%] " />
          <Image src="/images/auth/hashtag.png" width={53} height={55} alt="chat logo" className="absolute right-[5%] top-[50%] lg:right-[15%] lg:top-[55%] xl:right-1/4 " />
          <Image src="/images/auth/girl.png" width={172} height={322} alt="girl logo" className="scale-x-[-1]  absolute top-1/4 w-1/3 left-[9%] lg:w-[unset] lg:left-[14%] lg:top-[27%] xl:left-[27%] " />
          <Image src="/images/auth/hashtag.png" width={53} height={55} alt="chat logo" className="scale-x-[-1] absolute top-[15%] left-[27%] " />
          <Image src="/images/auth/like.png" width={70} height={66} alt="chat logo" className="absolute top-[15%] left-[35%] scale-x-[-1] heartAnimation" />
          <Image src="/images/auth/cloud.png" width={243} height={88} alt="chat logo" className="absolute top-[2%] left-0 cloudanimation-1" />
          <Image src="/images/auth/cloud.png" width={69} height={25} alt="chat logo" className="absolute bottom-[10%] left-0 cloudanimation-1" />
          <Image src="/images/auth/cloud.png" width={243} height={88} alt="chat logo" className="absolute top-[15%] left-1/2 cloudanimation-2" />
          <Image src="/images/auth/cloud.png" width={243} height={88} alt="chat logo" className="absolute top-1/2 left-1/4  cloudanimation-3" />
          <div className=" absolute top-[15%] border border-transparent circle main_circle -z-10"></div>
          <div className=" absolute left-0 bottom-10 border border-transparent circle small_circle -z-10"></div>
          <div className=" absolute right-0 top-10 border border-transparent circle small_circle -z-10"></div>
          <div className="movecircle circle-animation top-1/2 left-1/2"></div>
          <div className="movecircle circle-animation top-[15%] left-3/4"></div>
          <div className="movecircle circle-animation top-[10%] left-[15%]"></div>
          <div className="movecircle circle-animation bottom-[20%] right-[20%]"></div>
          <div className="movecircle circle-animation bottom-1/4 left-[5%]"></div>
          <div className="movecircle circle-animation top-[57%] right-[20%]"></div>
        </div>
      </div>
    </section>
  )
}
export default AuthBanner