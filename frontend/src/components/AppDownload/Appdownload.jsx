import { assets } from '../../assets/assets';
import './Appdownload.css';

const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
    <p>For a Better Experience Download<br/> Kharayo App </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt='' />
        <img src={assets.app_store} alt='' />

      </div>
    </div>
  )
}

export default Appdownload
