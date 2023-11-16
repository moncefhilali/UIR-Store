import flech from '../../assets/flech.png'
import tennu from '../../assets/tennu.png'
import { Link } from 'react-router-dom'

export default function NewListings() {
  return (
    <div>
    <div className='py-5  flex justify-between '>
      <h1 className='text-[#183761] font-semibold text-[25px]'>New Listings</h1>
      <Link to='/product/textile' className='flex  items-center gap-2 text-[#183761] font-semibold  text-[25px]'>See all <img src={flech} alt="" className='w-[50px]' /></Link>
    </div>
    <div className='bg-[#E9E9E7] w-full flex justify-between items-center py-8 px-8 rounded-3xl shad'>
      <div className='w-[20%]  bg3 my-4 rounded-3xl py-6'>
          <img src={tennu} alt=""  />
          <div className='flex flex-col justify-between items-center'>
              <h1 className='text-[#FFFFFF]'>T-Shirt Polo</h1>
              <p className='text-[#FFFFFF]'>Uir pride Manches Courts</p>
              <div className='flex justify-between gap-6 items-center'>
                  <button className='text-[#FDFDFD] bg-[#C9CE19] py-2 px-2 text-center rounded-md'>Add To Card</button>
                  <button className='text-[#183761] bg-[#FFFFFF] py-2 px-2 text-center rounded-md'>60,52 mad </button>
              </div>
          </div>
      </div>
      <div className='w-[20%]  bg3 my-4 rounded-3xl py-6'>
          <img src={tennu} alt=""  />
          <div className='flex flex-col justify-between items-center'>
              <h1 className='text-[#FFFFFF]'>T-Shirt Polo</h1>
              <p className='text-[#FFFFFF]'>Uir pride Manches Courts</p>
              <div className='flex justify-between gap-6 items-center'>
                  <button className='text-[#FDFDFD] bg-[#C9CE19] py-2 px-2 text-center rounded-md'>Add To Card</button>
                  <button className='text-[#183761] bg-[#FFFFFF] py-2 px-2 text-center rounded-md'>60,52 mad </button>
              </div>
          </div>
      </div>
      <div className='w-[20%]  bg3 my-4 rounded-3xl py-6'>
          <img src={tennu} alt=""  />
          <div className='flex flex-col justify-between items-center'>
              <h1 className='text-[#FFFFFF]'>T-Shirt Polo</h1>
              <p className='text-[#FFFFFF]'>Uir pride Manches Courts</p>
              <div className='flex justify-between gap-6 items-center'>
                  <button className='text-[#FDFDFD] bg-[#C9CE19] py-2 px-2 text-center rounded-md'>Add To Card</button>
                  <button className='text-[#183761] bg-[#FFFFFF] py-2 px-2 text-center rounded-md'>60,52 mad </button>
              </div>
          </div>
      </div>
      <div className='w-[20%]  bg3 my-4 rounded-3xl py-6'>
          <img src={tennu} alt=""  />
          <div className='flex flex-col justify-between items-center'>
              <h1 className='text-[#FFFFFF]'>T-Shirt Polo</h1>
              <p className='text-[#FFFFFF]'>Uir pride Manches Courts</p>
              <div className='flex justify-between gap-6 items-center'>
                  <button className='text-[#FDFDFD] bg-[#C9CE19] py-2 px-2 text-center rounded-md'>Add To Card</button>
                  <button className='text-[#183761] bg-[#FFFFFF] py-2 px-2 text-center rounded-md'>60,52 mad </button>
              </div>
          </div>
      </div>

    </div>
  </div>
  )
}
