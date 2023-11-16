import flech from '../../assets/flech.png'
import tennu from '../../assets/tennu.png'
import heart from '../../assets/heart.png'
import { Link } from 'react-router-dom'

export default function PopularePrdcts() {
  return (
    <div>
      <div className='py-5  flex justify-between  '>
        <h1 className='text-[#183761] font-semibold text-[25px]'>Populare Products</h1>
        <Link to='/product/textile' className='flex  items-center gap-2 text-[#183761] font-semibold  text-[25px]'>See all <img src={flech} alt="" className='w-[50px]' /></Link>
      </div>
      <div className='bg-[#f3f3f2] w-full flex justify-between items-center py-8 px-8 rounded-3xl '>
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
  )
}
