import './Homepage.css';
import pythonLogo from '../../assets/pythonLogo.png';
import reactLogo from '../../assets/reactLogo.png';

export default function Homepage() {

  return (
    <div>
      <p className="Homepage-p-titles">Languages</p>
      <img src={pythonLogo} className='Homepage-logo'/>
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" className='Homepage-logo'/>
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" className='Homepage-logo'/>
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" className='Homepage-logo'/>
      <p className="Homepage-p-titles">Frameworks</p>
      <img src={reactLogo} className='Homepage-logo'/>
    </div>
  )
}