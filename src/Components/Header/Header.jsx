import Profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <div className='flex justify-between items-center m-4 p-4 border-b-2'>
            <h1 className='text-4xl text-bold'>Knowledge Cafe</h1>
            <img src={Profile} alt="" />
        </div>
    );
};

export default Header;