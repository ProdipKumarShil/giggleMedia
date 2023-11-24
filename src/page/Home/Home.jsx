import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import HomeLayout from '../../components/HomeLayout/HomeLayout';
import { getUser } from '../../getUser/utilities';

const Home = () => {
  console.log(getUser())
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />
      <HomeLayout />
      <Footer />
    </div>
  );
};

export default Home;