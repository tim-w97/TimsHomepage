import SendEmailLink from "./SendEmailLink";
import CallMeLink from "./CallMeLink";
import tim from '../assets/images/tim/tim rund.png'
import phoneIcon from '../assets/images/icons/phone.png'
import mailIcon from '../assets/images/icons/mail.png'
import homeIcon from '../assets/images/icons/home_pin.png'
import GoogleMapsLink from "./GoogleMapsLink";

function Profile(props) {
  return (
      <div className={props.className + ' flex sm:flex-row flex-col mt-5 gap-5 sm:mt-10 items-center justify-center'}>
        <div className='flex flex-col items-center'>
          {/*Portrait, name and age*/}
          <img
              className="aspect-square w-40 object-cover"
              src={tim}
              alt="Portrait von Tim"
          />
          <p className="text-2xl font-bold mt-5">Tim Wagner</p>
          <p className="text-tim-gray text-center">Geboren am 11.09.1997 in Erfurt</p>
        </div>
        {/*Links*/}
        <div className="flex-none flex flex-col gap-5 items-center min-[370px]:items-start">
          <SendEmailLink className='flex min-[370px]:flex-row flex-col gap-3 items-center'>
            <img className='w-12 aspect-square object-contain' src={mailIcon} alt='mail icon'/>
            <p className='text-tim-light-blue'>timwagner997@gmail.com</p>
          </SendEmailLink>
          <GoogleMapsLink className='flex min-[370px]:flex-row flex-col gap-3 items-center'>
            <img className='w-12 aspect-square object-contain' src={homeIcon} alt='home pin icon'/>
            <p className='text-tim-light-blue'>Königstr. 62, 95028 Hof</p>
          </GoogleMapsLink>
          <CallMeLink className='flex min-[370px]:flex-row flex-col gap-3 items-center'>
            <img className='w-12 aspect-square object-contain' src={phoneIcon} alt='phone icon'/>
            <p className='text-tim-light-blue'>01520-4847344</p>
          </CallMeLink>
        </div>
      </div>
  );
}

export default Profile;
