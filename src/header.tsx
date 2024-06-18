import tanya from '/images/image-tanya.jpg';
import john from '/images/image-john.jpg';
import next from '/images/icon-next.svg';
import prev from '/images/icon-prev.svg';

function Header() {
    
    function slider() {
       
        const currentProfile = document.getElementById('profile_1_img');
        const currentProfile_p = document.getElementById('profile_1');
        const nextProfile = document.getElementById('profile_2_img');
        const nextProfile_p = document.getElementById('profile_2');

        if(currentProfile?.className === 'profile') {
            currentProfile?.classList.remove('profile');
            currentProfile?.classList.add('visually-hidden');
            currentProfile_p?.classList.remove('profile_div');
            currentProfile_p?.classList.add('visually-hidden');
            nextProfile?.classList.remove('visually-hidden');
            nextProfile?.classList.add('profile');
            nextProfile_p?.classList.remove('visually-hidden');
            nextProfile_p?.classList.add('profile_div');
        }else{
            currentProfile?.classList.remove('visually-hidden');
            currentProfile?.classList.add('profile');
            currentProfile_p?.classList.remove('visually-hidden');
            currentProfile_p?.classList.add('profile_div');
            nextProfile?.classList.remove('profile');
            nextProfile?.classList.add('visually-hidden');
            nextProfile_p?.classList.remove('profile_div');
            nextProfile_p?.classList.add('visually-hidden');
        }
}

    return (
        <header>
            <img src={tanya} className='profile' id='profile_1_img' alt=""></img>
            <img src={john} className='visually-hidden' id='profile_2_img' alt=""></img>
            <div className='slider'>
                <img src={prev} onClick={slider} alt='back arrow button'></img>
                <img src={next} onClick={slider} alt='next arrow button'></img>
            </div>
        </header>
    )
  }
  
  export default Header