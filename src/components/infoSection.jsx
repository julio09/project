import React from 'react'
import {Perso} from '../assets'

const infoSection = () => {
  return (
    <>
    <div className='font-[Montserrat] flex px-4 md:px-[150px] py-[80px] flex-col items-center gap-[80px] bg-white'>
      <section className='md:relative md:flex bg-image-gradient-258deg items-center px-2 md:px-[80px] pt-12 md:py-[64px] gap-[40px] self-stretch rounded-xl md:rounded-[40px] '>
        <div className='flex flex-col items-center md:items-start gap-4 md:gap-[40px] flex-1'>
          <p className='text-white leading-normal text-center md:text-start text-xl md:text-[40px] font-bold'>Vestibulum penatibus sed blandit aliquam felis dui non a velit. </p>
          <p className='self-stretch font-light leading-7 text-white md:text-[18px] '>
          Morbi in nibh aliquam consequat sed at et phasellus eros. Eget in dolor mattis facilisis lacus sit diam feugiat. Quam lorem in tincidunt diam posuere sed.
          </p>
          <div className='flex gap-[24px] items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
            <path d="M25.6807 5.18774H3.10412C2.28156 5.18831 1.49286 5.51539 0.911322 6.09713C0.329781 6.67887 0.00296696 7.46768 0.00268555 8.29024V30.8673C0.0028264 31.6898 0.329629 32.4786 0.911231 33.0602C1.49283 33.6418 2.28161 33.9686 3.10412 33.9687H25.6807C26.5033 33.9686 27.2921 33.6417 27.8737 33.06C28.4554 32.4783 28.7821 31.6894 28.7821 30.8668V8.29024C28.782 7.46764 28.4552 6.67875 27.8736 6.09698C27.292 5.51521 26.5033 5.18817 25.6807 5.18774ZM27.1257 29.3384C27.1258 29.6988 27.0549 30.0558 26.9171 30.3888C26.7793 30.7219 26.5772 31.0245 26.3224 31.2795C26.0676 31.5344 25.7651 31.7367 25.4321 31.8747C25.0991 32.0127 24.7422 32.0838 24.3817 32.0839H4.40569C4.0451 32.084 3.68803 32.0131 3.35486 31.8752C3.0217 31.7372 2.71898 31.535 2.46401 31.28C2.20904 31.0251 2.00681 30.7224 1.86889 30.3892C1.73097 30.056 1.66005 29.699 1.66019 29.3384V9.36284C1.66019 9.00232 1.7312 8.64533 1.86918 8.31226C2.00717 7.97919 2.20941 7.67656 2.46436 7.42166C2.71931 7.16676 3.02197 6.96458 3.35507 6.82666C3.68816 6.68875 4.04517 6.6178 4.40569 6.61787H24.3817C25.1095 6.61829 25.8074 6.90766 26.3219 7.42238C26.8364 7.9371 27.1255 8.63505 27.1257 9.36284V29.3384Z" fill="white"/>
            <path d="M29.7818 2.43641C25.6907 5.97879 21.9374 9.73685 18.7674 14.1345C17.3692 16.0747 16.27 18.2299 15.2542 20.3858C14.7767 21.4004 14.4914 22.456 14.2231 23.5116C12.2718 21.6979 10.3726 19.8327 8.23059 18.2204C6.70325 17.0713 1.57669 20.6748 3.367 22.0231C6.57575 24.4371 9.24794 27.4423 12.3664 29.9637C13.6722 31.0171 16.5659 28.7306 17.2438 27.7696C19.4756 24.6087 19.7805 20.7417 21.4077 17.2923C23.8918 12.0175 28.2964 7.68729 32.6437 3.92072C35.8896 1.11147 31.9679 0.543568 29.7829 2.43429" fill="#4CB050"/>
          </svg>

          <div className=' flex flex-col text-white items-start gap-[4px]'>
            <h2 className='text-lg md:text-[22px] font-semibold leading-normal'>vehicula</h2>
            <p className='md:text-[18px] leading-normal font-extralight'>Nunc platea eu aliquam in cras. Augue diam fusce vitae quam.</p>
          </div>
          </div>


          <div className='flex gap-[24px] items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
            <path d="M25.6807 5.18774H3.10412C2.28156 5.18831 1.49286 5.51539 0.911322 6.09713C0.329781 6.67887 0.00296696 7.46768 0.00268555 8.29024V30.8673C0.0028264 31.6898 0.329629 32.4786 0.911231 33.0602C1.49283 33.6418 2.28161 33.9686 3.10412 33.9687H25.6807C26.5033 33.9686 27.2921 33.6417 27.8737 33.06C28.4554 32.4783 28.7821 31.6894 28.7821 30.8668V8.29024C28.782 7.46764 28.4552 6.67875 27.8736 6.09698C27.292 5.51521 26.5033 5.18817 25.6807 5.18774ZM27.1257 29.3384C27.1258 29.6988 27.0549 30.0558 26.9171 30.3888C26.7793 30.7219 26.5772 31.0245 26.3224 31.2795C26.0676 31.5344 25.7651 31.7367 25.4321 31.8747C25.0991 32.0127 24.7422 32.0838 24.3817 32.0839H4.40569C4.0451 32.084 3.68803 32.0131 3.35486 31.8752C3.0217 31.7372 2.71898 31.535 2.46401 31.28C2.20904 31.0251 2.00681 30.7224 1.86889 30.3892C1.73097 30.056 1.66005 29.699 1.66019 29.3384V9.36284C1.66019 9.00232 1.7312 8.64533 1.86918 8.31226C2.00717 7.97919 2.20941 7.67656 2.46436 7.42166C2.71931 7.16676 3.02197 6.96458 3.35507 6.82666C3.68816 6.68875 4.04517 6.6178 4.40569 6.61787H24.3817C25.1095 6.61829 25.8074 6.90766 26.3219 7.42238C26.8364 7.9371 27.1255 8.63505 27.1257 9.36284V29.3384Z" fill="white"/>
            <path d="M29.7818 2.43641C25.6907 5.97879 21.9374 9.73685 18.7674 14.1345C17.3692 16.0747 16.27 18.2299 15.2542 20.3858C14.7767 21.4004 14.4914 22.456 14.2231 23.5116C12.2718 21.6979 10.3726 19.8327 8.23059 18.2204C6.70325 17.0713 1.57669 20.6748 3.367 22.0231C6.57575 24.4371 9.24794 27.4423 12.3664 29.9637C13.6722 31.0171 16.5659 28.7306 17.2438 27.7696C19.4756 24.6087 19.7805 20.7417 21.4077 17.2923C23.8918 12.0175 28.2964 7.68729 32.6437 3.92072C35.8896 1.11147 31.9679 0.543568 29.7829 2.43429" fill="#4CB050"/>
          </svg>

          <div className=' flex flex-col text-white items-start gap-[4px]'>
            <h2 className='text-lg md:text-[22px] font-semibold leading-normal'>vehicula</h2>
            <p className='md:text-[18px] leading-normal font-extralight'>Nunc platea eu aliquam in cras. Augue diam fusce vitae quam.</p>
          </div>
          </div>


          <div className='flex gap-[24px] items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
            <path d="M25.6807 5.18774H3.10412C2.28156 5.18831 1.49286 5.51539 0.911322 6.09713C0.329781 6.67887 0.00296696 7.46768 0.00268555 8.29024V30.8673C0.0028264 31.6898 0.329629 32.4786 0.911231 33.0602C1.49283 33.6418 2.28161 33.9686 3.10412 33.9687H25.6807C26.5033 33.9686 27.2921 33.6417 27.8737 33.06C28.4554 32.4783 28.7821 31.6894 28.7821 30.8668V8.29024C28.782 7.46764 28.4552 6.67875 27.8736 6.09698C27.292 5.51521 26.5033 5.18817 25.6807 5.18774ZM27.1257 29.3384C27.1258 29.6988 27.0549 30.0558 26.9171 30.3888C26.7793 30.7219 26.5772 31.0245 26.3224 31.2795C26.0676 31.5344 25.7651 31.7367 25.4321 31.8747C25.0991 32.0127 24.7422 32.0838 24.3817 32.0839H4.40569C4.0451 32.084 3.68803 32.0131 3.35486 31.8752C3.0217 31.7372 2.71898 31.535 2.46401 31.28C2.20904 31.0251 2.00681 30.7224 1.86889 30.3892C1.73097 30.056 1.66005 29.699 1.66019 29.3384V9.36284C1.66019 9.00232 1.7312 8.64533 1.86918 8.31226C2.00717 7.97919 2.20941 7.67656 2.46436 7.42166C2.71931 7.16676 3.02197 6.96458 3.35507 6.82666C3.68816 6.68875 4.04517 6.6178 4.40569 6.61787H24.3817C25.1095 6.61829 25.8074 6.90766 26.3219 7.42238C26.8364 7.9371 27.1255 8.63505 27.1257 9.36284V29.3384Z" fill="white"/>
            <path d="M29.7818 2.43641C25.6907 5.97879 21.9374 9.73685 18.7674 14.1345C17.3692 16.0747 16.27 18.2299 15.2542 20.3858C14.7767 21.4004 14.4914 22.456 14.2231 23.5116C12.2718 21.6979 10.3726 19.8327 8.23059 18.2204C6.70325 17.0713 1.57669 20.6748 3.367 22.0231C6.57575 24.4371 9.24794 27.4423 12.3664 29.9637C13.6722 31.0171 16.5659 28.7306 17.2438 27.7696C19.4756 24.6087 19.7805 20.7417 21.4077 17.2923C23.8918 12.0175 28.2964 7.68729 32.6437 3.92072C35.8896 1.11147 31.9679 0.543568 29.7829 2.43429" fill="#4CB050"/>
          </svg>

          <div className=' flex flex-col text-white items-start gap-[4px]'>
            <h2 className='text-lg md:text-[22px] font-semibold leading-normal'>vehicula</h2>
            <p className='md:text-[18px] leading-normal font-extralight'>Nunc platea eu aliquam in cras. Augue diam fusce vitae quam.</p>
          </div>
          </div>
          <button className='px-6 md:px-[40px] py-3 md:py-[18px] md:text-[18px] leading-normal text-grayCe font-semibold flex items-start rounded-[6px] bg-white'>Lorem ipsum dolor sit</button>
        </div>
        <div className='relative md:static flex items-start gap-[10px] flex-1 self-stretch'>
          <div className='hidden md:flex md:absolute z-0 -bottom-[130px] -right-[128px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="654" height="661" viewBox="0 0 654 661" fill="none">
                <path d="M3.48447 232.384C-5.53127 212.125 3.55172 188.38 23.7719 179.347L168.426 114.727C188.646 105.694 212.347 114.794 221.363 135.053L285.861 279.981C294.876 300.24 285.793 323.985 265.573 333.018L120.919 397.638C100.699 406.671 76.9984 397.571 67.9826 377.313L3.48447 232.384Z" fill="white" fill-opacity="0.08"/>
                <path d="M119.136 492.254C110.12 471.996 119.203 448.251 139.423 439.218L284.077 374.597C304.298 365.564 327.998 374.665 337.014 394.923L401.512 539.852C410.528 560.11 401.445 583.856 381.225 592.888L236.57 657.509C216.35 666.542 192.65 657.442 183.634 637.183L119.136 492.254Z" fill="white" fill-opacity="0.08"/>
                <path d="M252.488 121.148C243.472 100.89 252.555 77.1444 272.775 68.1115L417.43 3.49107C437.65 -5.54175 461.35 3.55845 470.366 23.817L534.864 168.746C543.88 189.004 534.797 212.749 514.577 221.782L369.923 286.403C349.702 295.436 326.002 286.335 316.986 266.077L252.488 121.148Z" fill="white" fill-opacity="0.08"/>
                <path d="M368.139 381.019C359.124 360.76 368.207 337.015 388.427 327.982L533.081 263.362C553.301 254.329 577.002 263.429 586.017 283.687L650.516 428.616C659.531 448.875 650.448 472.62 630.228 481.653L485.574 546.273C465.354 555.306 441.653 546.206 432.637 525.947L368.139 381.019Z" fill="white" fill-opacity="0.08"/>
          </svg>
          </div>
        <img src={Perso} alt='' className=' md:absolute bottom-0 right-0'/>
        </div>
      </section>
    </div>
    </>
  )
}

export default infoSection