import logo from '../../assets/logo.png'
import img1 from '../../assets/img3.jpeg'
import tennu from '../../assets/tennu.png'
import heart from '../../assets/heart.png'


export default function Product2() {
    return (
      <div className='w-full relative'>
      <div className='flex justify-end'>
              <img src={logo} alt="" className='w-[250px]' />
            </div>
      
            <div className='bg-[#FFFF] w-full py-4 px-5 bg5 my-10 relative rounded-3xl shad'>
              <div className='flex items-center gap-3 absolute top-[-80px]'>
                <img src={img1} alt="" className='rounded-full w-[150px]' />
                <h2 className='text-[#183761] font-bold text-[42px]'>High Tech</h2>
              </div>
              <div className='bg-[#E9E9E7] w-full flex justify-between items-center py-8 px-8 rounded-3xl my-16 shad'>
          <div className='w-[20%]  mt-28 mb-3 rounded-3xl py-6 relative '>
              <img src={tennu} alt=""  className='absolute top-[-120px]'  />
              <div className='flex flex-col justify-between items-center bg-[#183761] pt-24 pb-6 rounded-[20px]'>
                  <h1 className='text-[#FFFFFF]'>60,52 mad </h1>
                  <h1 className='text-[#FFFFFF]'>T-Shirt Polo</h1>
                  <p className='text-[#FFFFFF]'>Uir pride Manches Courts</p>
                  <div className='flex justify-between gap-2 items-center my-2'>
                      <button className='text-[#FDFDFD] bg-[#C9CE19] py-2 px-8 text-center rounded-md'>Add To Card</button>
                      <button className='text-[#183761] bg-[#C9CE19] py-2 px-2 text-center rounded-full'><img src={heart} alt="" /> </button>
                  </div>
              </div>
          </div>
         
  </div>
            
          </div>
          </div>
    )
  }
  