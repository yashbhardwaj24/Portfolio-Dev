import React from 'react'
import './homeScreen.css'
import profile from '../../assets/profile.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PlaceIcon from '@mui/icons-material/Place';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const HomeScreen = () => {
  return (
    <div className="HomeScreen">
      <div className="homeLeftSide">
        <div className="leftProfile">
          <img className='profileImgHome' src={profile} alt='profile pic'></img>
          <div className='socialLink'>
            <InstagramIcon sx={{ 'fontSize': '40px' }} className='socialMediaIcon' />
            <TwitterIcon sx={{ 'fontSize': '40px' }} className='socialMediaIcon' />
            <XIcon sx={{ 'fontSize': '40px' }} className='socialMediaIcon' />
            <YouTubeIcon sx={{ 'fontSize': '40px' }} className='socialMediaIcon' />
          </div>
          <div className='hireMeBtn'>
            HIRE ME
          </div>
        </div>
      </div>
      <div className="homeRightSide">
        <div className='homeIntro'>
          <div className='titlePortfolio'>PORTFOLIO</div>
          <div className='homeBriefIntro'><span className='spanColorTitle'>Hello</span>, I'm Yash, MERN Full Stack Developer</div>
          <div className='detailIntro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <div className='homeIntroIconsDetail'>
            <div className='homeIconDetailBlock'>
              <PlaceIcon className='locationIcon' sx={{'fontSize':'40px'}}/>
              <div className='locationBlockContent'>Meerut, Uttar Pradesh</div>
            </div>
            <div className='homeIconDetailBlock'>
              <PhoneAndroidIcon className='phoneIcon' sx={{'fontSize':'40px'}}/>
              <div className='locationBlockContent'>+91 7819969933</div>
            </div>
            <div className='homeIconDetailBlock'>
              <MailOutlineIcon className='emailIcon' sx={{'fontSize':'40px'}}/>
              <div className='locationBlockContent'>yash.yyy.24@gmail.com</div>
            </div>
          </div>
          <div className='homeCountBlock'>
            <div className='blockDivHome'>
              <div className='numberHomePaga'>2+</div>
              <div className='expierenceDetail'>Experience</div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen