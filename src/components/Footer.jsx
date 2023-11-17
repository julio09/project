import React from 'react'
import { LogoDark } from '../assets'
import { BlogItems, listItems } from '../constants/index'

const Footer = () => {
  return (
    <>
    <div className='font-[Montserrat] flex gap-9 flex-col md:flex-row px-[194px] py-[80px] w-full justify-center md:justify-between leading-normal items-center text-white bg-dark'>
      <div className='flex md:flex-col md:h-[275px] gap-[130px] justify-center md:justify-between md:items-start items-center'>
      <div className='flex md:flex-col items-center gap-2'>
        <img src={LogoDark} alt='' className='w-[88px] h-[88px]' />
        <span className='font-semibold md:text-[28px] '>Logo</span>
      </div>
      <span className='md:text-[16px] text-[12px] font-extralight'>© lorem 2023</span>
      </div>
      <div className='flex flex-col gap-6 md:gap-[40px] justify-center items-center md:items-start '>
        <span className='uppercase md:text-[24px] font-semibold'>menu</span>
        <ul className='flex md:flex-col gap-2 md:gap-[18px] font-extralight items-start'>
          {listItems}
        </ul>
      </div>
      <div className='flex flex-col justify-center items-center md:items-start gap-[40px]'>
      <span className='font-semibold md:text-[28px] uppercase'>Blog</span>
      <ul className='md:flex grid grid-cols-3 text-sm gap-24 text-center font-extralight flex-col items-start md:gap-[18px]'>
        {BlogItems}
      </ul>
      </div>
      <div className='flex flex-col items-center md:items-start gap-[40px]'>
        <span className='uppercase md:text-[28px] font-semibold'>nous contacter</span>
        <div className='flex flex-col gap-[18px] items-start'>
          <div className='flex items-center gap-[8px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 18 18" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.57146V12.4286C3 12.8833 3.18061 13.3193 3.5021 13.6408C3.82359 13.9623 4.25963 14.1429 4.71429 14.1429H13.2857C13.7404 14.1429 14.1764 13.9623 14.4979 13.6408C14.8194 13.3193 15 12.8833 15 12.4286V5.57146C15 5.11681 14.8194 4.68077 14.4979 4.35928C14.1764 4.03779 13.7404 3.85718 13.2857 3.85718H4.71429C4.25963 3.85718 3.82359 4.03779 3.5021 4.35928C3.18061 4.68077 3 5.11681 3 5.57146Z" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.71436 6.42859L9.00007 9.00002L13.2858 6.42859" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p className='font-extralight md:text-[18px] leading-normal'>attincidunt@immob!lo.fr</p>
          </div>

          <div className='flex items-center gap-[8px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 18 18" fill="none">
            <path d="M15.5806 11.2711L12.259 9.78256C12.1085 9.71807 11.9443 9.69215 11.7812 9.70712C11.6182 9.7221 11.4615 9.77751 11.3252 9.86834C11.3114 9.87721 11.2983 9.88708 11.2859 9.89787L9.54985 11.3744C9.53184 11.3843 9.51179 11.3897 9.49129 11.3905C9.47078 11.3912 9.45039 11.3872 9.43173 11.3787C8.31587 10.8401 7.15993 9.69115 6.61923 8.59076C6.61022 8.57237 6.60554 8.55217 6.60554 8.5317C6.60554 8.51122 6.61022 8.49102 6.61923 8.47264L8.10071 6.71482C8.11134 6.70182 8.1212 6.6882 8.13024 6.67404C8.21981 6.53729 8.27391 6.38038 8.28766 6.21748C8.30141 6.05458 8.27437 5.89083 8.20899 5.74099L6.73102 2.42506C6.64709 2.22931 6.50194 2.06607 6.31735 1.95983C6.13276 1.85359 5.91869 1.81008 5.70727 1.83584C4.78845 1.95663 3.94504 2.40786 3.33466 3.10519C2.72429 3.80252 2.38871 4.69825 2.39063 5.62498C2.39063 11.1304 6.86954 15.6094 12.375 15.6094C13.3017 15.6111 14.1973 15.2755 14.8946 14.6651C15.5919 14.0548 16.0432 13.2115 16.1641 12.2927C16.1899 12.0823 16.1469 11.8692 16.0418 11.6851C15.9366 11.501 15.7749 11.3558 15.5806 11.2711ZM12.375 14.7656C7.33501 14.7656 3.23438 10.665 3.23438 5.62498C3.23203 4.90352 3.49243 4.20589 3.96693 3.66242C4.44143 3.11896 5.09756 2.76684 5.81274 2.67185H5.82891C5.85725 2.67238 5.88476 2.68146 5.90785 2.6979C5.93094 2.71433 5.94852 2.73736 5.95829 2.76396L7.44188 6.07639C7.45034 6.0948 7.45473 6.11483 7.45473 6.1351C7.45473 6.15536 7.45034 6.17539 7.44188 6.19381L5.95759 7.95584C5.94651 7.96842 5.93641 7.98181 5.92735 7.99592C5.83447 8.13771 5.77978 8.30108 5.76857 8.47021C5.75736 8.63934 5.79001 8.8085 5.86337 8.96131C6.48704 10.2382 7.77376 11.5151 9.0647 12.1387C9.2184 12.2117 9.38838 12.2435 9.55807 12.2312C9.72775 12.2189 9.89135 12.1628 10.0329 12.0684C10.0463 12.0593 10.0596 12.0494 10.0723 12.0389L11.8076 10.5623C11.8247 10.5531 11.8437 10.5477 11.8631 10.5465C11.8825 10.5453 11.9019 10.5483 11.9201 10.5553L15.2424 12.0438C15.2695 12.0554 15.2923 12.0752 15.3076 12.1004C15.3228 12.1256 15.3298 12.155 15.3274 12.1844C15.2329 12.8999 14.8812 13.5566 14.3378 14.0316C13.7945 14.5066 13.0967 14.7675 12.375 14.7656Z" fill="white"/>
          </svg>
          <p className='font-extralight md:text-[18px] leading-normal'>06 00 00 00 00</p>
          </div>

          <div className='flex items-center gap-[8px]'>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 18 18" fill="none">
              <path d="M9 4.5C8.44374 4.5 7.89997 4.66495 7.43746 4.97399C6.97495 5.28303 6.61446 5.72229 6.40159 6.2362C6.18872 6.75012 6.13302 7.31562 6.24154 7.86119C6.35006 8.40676 6.61793 8.9079 7.01126 9.30124C7.4046 9.69457 7.90574 9.96244 8.45131 10.071C8.99688 10.1795 9.56238 10.1238 10.0763 9.91091C10.5902 9.69804 11.0295 9.33755 11.3385 8.87504C11.6475 8.41253 11.8125 7.86876 11.8125 7.3125C11.8125 6.56658 11.5162 5.85121 10.9887 5.32376C10.4613 4.79632 9.74592 4.5 9 4.5ZM9 9C8.66624 9 8.33998 8.90103 8.06248 8.7156C7.78497 8.53018 7.56868 8.26663 7.44095 7.95828C7.31323 7.64993 7.27981 7.31063 7.34492 6.98328C7.41004 6.65594 7.57076 6.35526 7.80676 6.11926C8.04276 5.88326 8.34344 5.72254 8.67078 5.65742C8.99813 5.59231 9.33743 5.62573 9.64578 5.75345C9.95413 5.88118 10.2177 6.09747 10.4031 6.37498C10.5885 6.65248 10.6875 6.97874 10.6875 7.3125C10.6875 7.76005 10.5097 8.18928 10.1932 8.50574C9.87678 8.82221 9.44755 9 9 9ZM9 1.125C7.35954 1.12686 5.78681 1.77935 4.62683 2.93933C3.46685 4.09931 2.81436 5.67204 2.8125 7.3125C2.8125 9.52031 3.83273 11.8603 5.76562 14.0801C6.63414 15.0831 7.61165 15.9864 8.68008 16.773C8.77466 16.8393 8.88734 16.8748 9.00281 16.8748C9.11829 16.8748 9.23097 16.8393 9.32555 16.773C10.392 15.986 11.3676 15.0828 12.2344 14.0801C14.1645 11.8603 15.1875 9.52031 15.1875 7.3125C15.1856 5.67204 14.5331 4.09931 13.3732 2.93933C12.2132 1.77935 10.6405 1.12686 9 1.125ZM9 15.6094C7.83773 14.6953 3.9375 11.3379 3.9375 7.3125C3.9375 5.96984 4.47087 4.68217 5.42027 3.73277C6.36967 2.78337 7.65734 2.25 9 2.25C10.3427 2.25 11.6303 2.78337 12.5797 3.73277C13.5291 4.68217 14.0625 5.96984 14.0625 7.3125C14.0625 11.3365 10.1623 14.6953 9 15.6094Z" fill="white"/>
          </svg>
          <p className='font-extralight md:text-[18px] leading-normal'>Arcu augue elit nec</p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" className='w-[140px] md:w-[179px]' width="179" height="36" viewBox="0 0 179 36" fill="none">
              <rect x="95.6426" y="0.5" width="35" height="35" rx="17.5" stroke="white"/>
              <path d="M112.819 15.6419C111.698 15.6419 110.783 16.557 110.783 17.6784C110.783 18.7999 111.698 19.715 112.819 19.715C113.941 19.715 114.856 18.7999 114.856 17.6784C114.856 16.557 113.941 15.6419 112.819 15.6419ZM118.927 17.6784C118.927 16.8351 118.935 15.9994 118.888 15.1575C118.84 14.1797 118.617 13.3119 117.902 12.5969C117.186 11.8804 116.32 11.6588 115.342 11.6115C114.498 11.5641 113.663 11.5717 112.821 11.5717C111.978 11.5717 111.142 11.5641 110.3 11.6115C109.322 11.6588 108.454 11.8819 107.739 12.5969C107.023 13.3135 106.801 14.1797 106.754 15.1575C106.707 16.0009 106.714 16.8366 106.714 17.6784C106.714 18.5203 106.707 19.3575 106.754 20.1993C106.801 21.1771 107.024 22.0449 107.739 22.76C108.456 23.4765 109.322 23.698 110.3 23.7454C111.143 23.7928 111.979 23.7851 112.821 23.7851C113.664 23.7851 114.5 23.7928 115.342 23.7454C116.32 23.698 117.187 23.475 117.902 22.76C118.619 22.0434 118.84 21.1771 118.888 20.1993C118.937 19.3575 118.927 18.5218 118.927 17.6784ZM112.819 20.812C111.085 20.812 109.686 19.4125 109.686 17.6784C109.686 15.9444 111.085 14.5449 112.819 14.5449C114.553 14.5449 115.953 15.9444 115.953 17.6784C115.953 19.4125 114.553 20.812 112.819 20.812ZM116.081 15.1484C115.676 15.1484 115.349 14.8214 115.349 14.4165C115.349 14.0117 115.676 13.6847 116.081 13.6847C116.486 13.6847 116.813 14.0117 116.813 14.4165C116.813 14.5127 116.794 14.6079 116.758 14.6967C116.721 14.7856 116.667 14.8663 116.599 14.9343C116.531 15.0023 116.45 15.0562 116.361 15.0929C116.273 15.1296 116.177 15.1485 116.081 15.1484Z" fill="white"/>
              <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="white"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9897 15.4083H19.3772V16.5976C19.7212 15.9136 20.6032 15.299 21.9281 15.299C24.468 15.299 25.071 16.6606 25.071 19.1587V23.7854H22.4996V19.7277C22.4996 18.305 22.1557 17.5027 21.2801 17.5027C20.0657 17.5027 19.5611 18.3674 19.5611 19.727V23.7854H16.9897V15.4083ZM12.5803 23.6761H15.1517V15.299H12.5803V23.6761ZM15.5201 12.5675C15.5202 12.783 15.4774 12.9964 15.3943 13.1953C15.3112 13.3942 15.1894 13.5746 15.036 13.7259C14.7251 14.0349 14.3043 14.2079 13.866 14.2068C13.4285 14.2065 13.0086 14.034 12.6973 13.7266C12.5444 13.5747 12.423 13.3941 12.3401 13.1952C12.2571 12.9963 12.2142 12.783 12.2139 12.5675C12.2139 12.1323 12.3874 11.7157 12.6979 11.4084C13.009 11.1006 13.429 10.928 13.8667 10.9282C14.3051 10.9282 14.7255 11.1012 15.036 11.4084C15.3459 11.7157 15.5201 12.1323 15.5201 12.5675Z" fill="white"/>
              <rect x="48.0713" y="0.5" width="35" height="35" rx="17.5" stroke="white"/>
              <path d="M63.9975 26.3568H66.7175V19.3175H68.9918L69.3353 16.5789H66.7175V14.8239C66.7175 14.0332 66.931 13.4932 68.0264 13.4932H69.4282V11.0343C69.1868 11.0054 68.3606 10.9282 67.3951 10.9282C65.3714 10.9282 63.9975 12.2107 63.9975 14.5539V16.5789H61.7139V19.3175H63.9975V26.3568Z" fill="white"/>
              <rect x="143.215" y="0.5" width="35" height="35" rx="17.5" stroke="white"/>
              <path d="M167.817 13.6446C167.309 13.8573 166.757 14.0105 166.188 14.0701C166.779 13.7291 167.221 13.1903 167.432 12.5548C166.878 12.8753 166.27 13.1 165.637 13.219C165.372 12.944 165.052 12.725 164.697 12.5755C164.341 12.426 163.958 12.3493 163.57 12.3501C162.003 12.3501 160.742 13.5849 160.742 15.1002C160.742 15.313 160.768 15.5258 160.812 15.7305C158.464 15.6112 156.371 14.5215 154.979 12.8531C154.726 13.274 154.593 13.7532 154.594 14.241C154.594 15.1953 155.094 16.0368 155.855 16.5317C155.406 16.5145 154.968 16.3946 154.576 16.1819V16.2157C154.576 17.5521 155.548 18.6595 156.844 18.9142C156.6 18.9756 156.35 19.007 156.099 19.0077C155.915 19.0077 155.741 18.99 155.565 18.9658C155.923 20.0555 156.966 20.847 158.209 20.8728C157.237 21.6127 156.019 22.048 154.697 22.048C154.46 22.048 154.241 22.0399 154.014 22.0141C155.268 22.7959 156.756 23.2473 158.358 23.2473C163.56 23.2473 166.407 19.0593 166.407 15.4242C166.407 15.3049 166.407 15.1856 166.399 15.0663C166.949 14.6746 167.432 14.1894 167.817 13.6446Z" fill="white"/>
            </svg>

        </div>
      </div>
    </div>
    </>
  )
}

export default Footer