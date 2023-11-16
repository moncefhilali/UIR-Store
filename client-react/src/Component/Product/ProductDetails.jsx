import React from 'react'
import tennu from '../../assets/tennu.png'
import check from '../../assets/check.png'
import owner from '../../assets/owner.png'
import review from '../../assets/review.png'
import star from '../../assets/star 16.png'
import star2 from '../../assets/star 20.png'
import line from '../../assets/line.png'
import { useState } from 'react'


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ProductDetails() {
    const [hidden ,sethidden] = useState(false)
    const [hidden1 ,sethidden1] = useState(false)
    const [hidden2 ,sethidden2] = useState(false)
    const [hidden3 ,sethidden3] = useState(false)


function hiddeCheck(num){
if(num == 1 ){
sethidden(true)
sethidden1(false)
sethidden2(false)
sethidden3(false)
}
if(num == 2 ){
sethidden(false)
sethidden1(true)
sethidden2(false)
sethidden3(false)
}
if(num == 3 ){
sethidden(false)
sethidden1(false)
sethidden2(true)
sethidden3(false)
}
if(num == 4 ){
sethidden(false)
sethidden1(false)
sethidden2(false)
sethidden3(true)
}
    }


  return (
    <>
    <div className='w-full flex gap-14 my-6 text-[#183761] '>
    <main className='w-[50%]'>
        <div className='flex gap-8'>
        <div>
            <img src={tennu} alt="" className='w-[100px] my-7 shadow-md rounded-md' />
            <img src={tennu} alt="" className='w-[100px] my-7 shadow-md rounded-md' />
            <img src={tennu} alt="" className='w-[100px] my-7 shadow-md rounded-md' />
            <img src={tennu} alt="" className='w-[100px] my-7 shadow-md rounded-md' />
        </div>
        <div className='bg3 w-[550px] h-[500px] flex items-center justify-center flex-col rounded-3xl'>
                <img src={tennu} alt="" className='w-[400px]' />
            </div>
        </div>
            <div>
                <div className='my-6'>
                    <h1 className='text-[25px]'>Reviews</h1>
                    <img src={line} alt="" />
                </div>
                <div className='my-4'>
                    <div className='bg-[#f3f1f1] py-6 px-6 w-full flex items-center justify-between rounded-[30px] my-3'>
                        <div className='flex items-center gap-10'>
                        <img src={review} alt="" />
                        <p>Monceef el hilali</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star2} alt="" />
                            <img src={star2} alt="" />
                        </div>
                    </div>
                    <div className='bg-[#f3f1f1] py-6 px-6 w-full flex items-center justify-between rounded-[30px] my-3'>
                        <div className='flex items-center gap-10'>
                        <img src={review} alt="" />
                        <p>Monceef el hilali</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star2} alt="" />
                            <img src={star2} alt="" />
                        </div>
                    </div>
                    <div className='bg-[#f3f1f1] py-6 px-6 w-full flex items-center justify-between rounded-[30px] my-3'>
                        <div className='flex items-center gap-10'>
                        <img src={review} alt="" />
                        <p>Monceef el hilali</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star2} alt="" />
                            <img src={star2} alt="" />
                        </div>
                    </div>
                    <div className='bg-[#f3f1f1] py-6 px-6 w-full flex items-center justify-between rounded-[30px] my-3'>
                        <div className='flex items-center gap-10'>
                        <img src={review} alt="" />
                        <p>Monceef el hilali</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star2} alt="" />
                            <img src={star2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
    </main>
    <main className='w-[50%]  my-8'>
        <div className='flex flex-col gap-6 pt-12 px-5 '>
        <h1 className='text-[30px]'>43.99 MAD</h1>
        <h2 className='text-[62px]'>T-Shirt Polo</h2>
        <h3 className='text-[28px] ml-2'>Uir pride Monche courte</h3>
            <div className='flex gap-4 ml-2'>
                <p>Color: Black | 2162/888 :</p>
                <div className='flex gap-3'>
                    <div className='bg-[#000000] w-[20px] h-[20px] rounded-full flex justify-center items-center cursor-pointer' onClick={(()=>hiddeCheck(1))}>
                        {hidden && <img src={check} alt="" className='w-[10px]' /> }
                    </div>
                    <div className='bg-[#183761] w-[20px] h-[20px] rounded-full flex justify-center items-center cursor-pointer' onClick={(()=>{hiddeCheck(2)})}>
                    {hidden1 && <img src={check} alt="" className='w-[10px]' /> }
                    </div>
                    <div className='bg-[#997143] w-[20px] h-[20px] rounded-full flex justify-center items-center cursor-pointer' onClick={(()=>{hiddeCheck(3)})}>
                    {hidden2 && <img src={check} alt="" className='w-[10px]' /> }
                    </div>
                    <div className='bg-[#C9CE19] w-[20px] h-[20px] rounded-full flex justify-center items-center cursor-pointer' onClick={(()=>{hiddeCheck(4)})}>
                    {hidden3 && <img src={check} alt="" className='w-[10px]' /> }
                    </div>

                </div>
            </div>
            <div className='flex gap-4 ml-2'>
                <p>Size :</p>
                <div className='flex gap-3'>
                    <div className='w-[20px] h-[20px] rounded-lg px-4 flex justify-center items-center brd hover:border-[1px] hover:border-yellow-400 cursor-pointer active:border-yellow-400'>XS</div>
                    <div className='w-[20px] h-[20px] rounded-lg px-4 flex justify-center items-center brd hover:border-[1px] hover:border-yellow-400 cursor-pointer active:border-yellow-400'>S</div>
                    <div className='w-[20px] h-[20px] rounded-lg px-4 flex justify-center items-center brd hover:border-[1px] hover:border-yellow-400 cursor-pointer active:border-yellow-400'>M</div>
                    <div className='w-[20px] h-[20px] rounded-lg px-4 flex justify-center items-center brd hover:border-[1px] hover:border-yellow-400 cursor-pointer active:border-yellow-400'>L</div>
                    <div className='w-[20px] h-[20px] rounded-lg px-4 flex justify-center items-center brd hover:border-[1px] hover:border-yellow-400 cursor-pointer active:border-yellow-400'>XL</div>

                </div>
            </div>
            <div className='flex gap-9 ml-2'>
                <button className='bg-[#C9CE19] text-[#FFFFFF] py-3 px-9 rounded-3xl'>Buy Now</button>
                <button className='bg-[#183761] text-[#FFFFFF] py-3 px-9 rounded-3xl'>Add To Card</button>
            </div>
            <div className='my-5'>
                <h1 className='my-3'>Product Descreption :</h1>
                <p>
                ⚡RUSH YOUR ORDER⚡ <br />
                    If you would like to speed up the process, 
                    you have 2 options at checkout. “Arrival within
                    5 days” puts your order at the front of the line
                    ensuring it gets out our doors as quickly as
                    possible. However it does not pay for faster
                    shipping. “Guaranteed within 3 days” moves
                    you to the front of the line AND will upgrade
                    your order to 1-2 day shippings.
                </p>
            </div>
            <div className='mt-6'>
                <h1 className='my-3'>Product Owner :</h1>
                <div className='flex items-center gap-3'>
                    <img src={owner} alt="" />
                    <p>Essa amari</p>
                </div>
                <p>
                ⚡ Message from owner ⚡ <br />
                Thank you so much for supporting my small 
                Bussines i hope you  like my products quality
                </p>
            </div>

        </div>
    </main>
    </div>
    <div className='w-full flex justify-center text-[#c5c6c9] flex-col cursor-pointer items-center'>
        <p>View more </p>
        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
    </div>
    </>
  )
}
