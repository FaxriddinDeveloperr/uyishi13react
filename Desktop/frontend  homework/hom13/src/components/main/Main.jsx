import React from 'react'
import icon1 from "../../assets/Icon (1).png"
import icon2 from "../../assets/Icon (2).png"
import icon3 from "../../assets/Icon (3).png"
import icon4 from "../../assets/Icon (4).png"
import icon5 from "../../assets/Icon.png"
import icon6 from "../../assets/Icon.svg"
import Illi from "../../assets/Illustration.png"
import Bullet from '../../assets/Bullet Points.png'
import one from '../../assets/1.png'
import twoo from '../../assets/3.png'
import thry from '../../assets/2.png'

const Main = () => {
  return (
    <div className='bg-[#151719]'>
      <div className="container mx-auto text-white text-center pt-[64px] px-4">
        <h2 className='text-[40px] font-bold'>The majority our customers do not <br /> understand their workflows.</h2>
        <p className='pt-[20px] text-[#999]'>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br />
          mollit anim id est laborum.
        </p>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full'>
          {[icon1, icon2, icon3, icon4, icon5, icon6].map((icon, idx) => (
            <div key={idx} className='h-auto rounded-xl p-4 bg-[#1F2123]'>
              <div className='flex justify-center mb-4'>
                <img src={icon} alt={`icon-${idx}`} className='w-16 h-16 object-contain' />
              </div>
              <h3 className='text-lg font-semibold text-white mb-2 text-center'>Instant Features</h3>
              <p className='text-sm text-gray-400 text-center'>
                Duis aute irure dolor in reprehenderit in <br />
                voluptate velit esse cillum dolore eu <br />
                fugiat nulla pariatur. Excepteur sint <br />
                occaecat cupidatat.
              </p>
            </div>
          ))}
        </div>

        <hr className="w-full h-[1px] bg-[#444] border-0" />

        <section className='pt-[84px] container mx-auto'>
          <button className='w-[186px] h-[30] bg-[#C6F6D5] text-[#36A269] rounded-[16px]'>Reach goals that</button>
          <h2 className='pt-[16px] text-4xl font-bold'>One product, unlimited solutions</h2>
          <p className='pt-[16px]'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia <br />
            deserunt mollit laborum — semper quis lectus nulla.
          </p>

          <div className='flex flex-col lg:flex-row items-center justify-center gap-[64px] pt-[80px] text-center lg:text-left'>
            <div>
              <p>More speed. Less spend</p>
              <h2 className='pt-[16px] text-3xl font-bold'>Keep projects on schedule</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit, sed do eiusmod tempor incididunt ut labore et <br />
                dolore magna aliqua.</p>
              <img src={Bullet} alt="" />
            </div>
            <div>
              <img src={Illi} alt="" />
            </div>
          </div>

          <div className='flex flex-col lg:flex-row-reverse items-center justify-center gap-[64px] pt-[80px] text-center lg:text-left'>
            <div>
              <p>More speed. Less spend</p>
              <h2 className='pt-[16px] text-3xl font-bold'>Keep projects on schedule</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit, sed do eiusmod tempor incididunt ut labore et <br />
                dolore magna aliqua.</p>
              <img src={Bullet} alt="" />
            </div>
            <div>
              <img src={Illi} alt="" />
            </div>
          </div>

          <div className='flex flex-col lg:flex-row items-center justify-center gap-[64px] pt-[80px] text-center lg:text-left'>
            <div>
              <p>More speed. Less spend</p>
              <h2 className='pt-[16px] text-3xl font-bold'>Keep projects on schedule</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                elit, sed do eiusmod tempor incididunt ut labore et <br />
                dolore magna aliqua.</p>
              <img src={Bullet} alt="" />
            </div>
            <div>
              <img src={Illi} alt="" />
            </div>
          </div>

          <hr className="w-full h-[1px] bg-[#444] border-0 mt-[80px]" />

          <h2 className='pt-[16px] text-4xl font-bold'>Don't take our word for it</h2>
          <p className='pt-[16px]'>Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus <br />
            nulla at volutpat diam ut venenatis tellus—in ornare.
          </p>

          <div className='flex flex-col md:flex-row items-center justify-center gap-[24px] pt-[80px] w-full px-4'>
            <img src={one} alt="" />
            <img src={twoo} alt="" />
            <img src={thry} alt="" />
          </div>
        </section>

        <section className="mt-20 px-4">
          <div className="container relative bg-[#6661F5] p-10 gap-4 flex flex-col md:flex-row items-center px-[30px] md:gap-10 text-center md:text-left">
            <div className="flex flex-1 flex-col gap-4">
              <span className="text-[32px] text-white font-bold">Stay in the loop</span>
              <p className="text-white">Join our newsletter to get top news before anyone else.</p>
            </div>
            <div className="flex gap-3 px-2">
              <input
                className="w-[320px] h-[48px] bg-[#524DC7] text-[#dfe6f0] indent-5 border-[1px] border-[#AEACF9] max-[515px]:w-[250px] max-[515px]:h-[40px] max-[430px]:w-[200px] max-[430px]:h-[35px]"
                type="text"
                placeholder="Your best email…"
              />
              <button className="w-[139px] h-[48px] bg-white text-[#6661F5] font-bold max-[515px]:w-[110px] max-[515px]:h-[40px] max-[430px]:w-[80px] max-[430px]:h-[35px] max-[430px]:text-[14px]">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Main
