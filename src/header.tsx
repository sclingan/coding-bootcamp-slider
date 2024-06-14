import tanya from '/images/image-tanya.jpg';
import next from '/images/icon-next.svg';
import prev from '/images/icon-prev.svg';

function Header() {

    return (
        <header>
            <img src={tanya} className='profile' alt=""></img>
            <div className='slider'>
                <img src={prev} alt='back arrow button'></img>
                <img src={next} alt='next arrow button'></img>
            </div>
        </header>
    )
  }
  
  export default Header