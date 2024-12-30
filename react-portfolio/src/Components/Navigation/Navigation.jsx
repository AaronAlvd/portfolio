import githubLogo from '../../assets/githubLogo.svg';
import linkedinLogo from '../../assets/linkedinLogo.png';
import './Navigation.css';

export default function Navigation() {
  return (
    <div className='Navigation-div'>
      <img src={githubLogo} className='Navigation-logo'/>
      <img src={linkedinLogo} className='Navigation-logo'/>
    </div>
  )
}