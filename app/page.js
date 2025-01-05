

export default function Home() {
  return (
    <div className="h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/images/Rectangle 1.png')" }} > 
<div className="xl:w-[400px] xl:h-[400px] xl:top-[30px] xl:left-[297px]  lg:w-[200px] lg:h-[200px] lg:top-[100px] lg:left-[150px] md:w-[150px] md:h-[150px] md:top-[240px] md:left-[150px]  sm:w-[100px] sm:h-[100px] sm:top-[20px] sm:left-[150px]  w-[100px] h-[100px] top-[170px] left-[30px] absolute  bg-[#c4c4c4] bg-opacity-10 xl:border-[37px]  lg:border-[15px] md:border-[15px] sm:border-[15px] border-[15px] border-t-[#00000045] border-l-[#00000045] border-r-[#00000045] border-b-[#00000045] rounded-full">

</div>


    <div className="xl:w-[681px] xl:h-[400px] lg:w-[440px] lg:h-[300px] md:w-[300px] md:h-[250px] sm:w-[300px] sm:h-[200px]  w-[250px] h-[200px] rounded-[10%] bg-[rgba(255,255,255,0.2)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">

<div className="flex justify-center text-white xl:text-[60px] lg:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-bold font-montserrat">LOGIN</div>
    <div className="flex flex-col items-center gap-4">
    <input  className="xl:w-[572px] xl:h-[50px] lg:w-[350px] lg:h-[40px] md:w-[250px] md:h-[30px] opacity-30 border-[1px] border-[rgba(0,0,0,0.84)]  " placeholder="Username"></input>
    <input className="xl:w-[572px] xl:h-[50px]  lg:w-[350px] lg:h-[40px] md:w-[250px] md:h-[30px] opacity-30 border-[1px] border-[rgba(0,0,0,0.84)]" placeholder="Password"></input>
    </div>
    <div className="flex justify-center pt-10">
<button className="text-white xl:text-[40px] xl:w-[350px]  xl:h-[60px] lg:text-[30px] lg:w-[100px]  md:text-[25px] md:w-[100px] md:h-[40px] border-0 border-solid border-[rgba(0,0,0,0.7)] bg-[rgba(5,5,5,0.59)]">LOGIN</button>
<div className="flex flex-col pl-8">
 <a href="" className=" xl:text-[25px] text-[rgba(255,255,255,0.7)] text-white">Forgot Password</a> 
 <a href="" className="xl:text-[25px] font-montserrat text-[rgba(255,255,255,0.7)] text-white" >Register</a> 
</div>
    </div>

    
    
    </div>



    </div>
  );
}
