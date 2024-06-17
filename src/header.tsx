import tanya from '/images/image-tanya.jpg';
import john from '/images/image-john.jpg';
import next from '/images/icon-next.svg';
import prev from '/images/icon-prev.svg';

function Header() {
    
    function slider() {
        const user1 = document.getElementById('profile_1_img');
        const user2 = document.getElementById('profile_2_img');
        const user1_profile = document.getElementById('profile_1');
        const user2_profile = document.getElementById('profile_2');
        const user1_name = document.getElementById('profile_1_name');
        const user1_title = document.getElementById('profile_1_title');
        const user2_name = document.getElementById('profile_2_name');
        const user2_title = document.getElementById('profile_2_title');

        let currentProfile = document.getElementById('profile_1_img');
        let nextProfile = document.getElementById('profile_2_img');


    if(user1?.className === 'profile'){
        user1?.classList.remove('profile');
        user1?.classList.add('visually-hidden');
        user1_profile?.classList.remove('profile_p');
        user1_profile?.classList.add('visually-hidden');
        user1_name?.classList.remove('name');
        user1_name?.classList.add('visually-hidden');
        user1_title?.classList.remove('title');
        user1_title?.classList.add('visually-hidden');
        user2?.classList.remove('visually-hidden');
        user2?.classList.add('profile');
        user2_profile?.classList.remove('visually-hidden');
        user2_profile?.classList.add('profile_p');
        user2_name?.classList.remove('visually-hidden');
        user2_name?.classList.add('name');
        user2_title?.classList.remove('visually-hidden');
        user2_title?.classList.add('title');
    }else{
        user1?.classList.remove('visually-hidden');
        user1?.classList.add('profile');
        user2?.classList.remove('profile');
        user2?.classList.add('visually-hidden');
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