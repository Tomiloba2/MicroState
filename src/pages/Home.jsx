import Carousel from '../components/HomeComponent/Carousel'
import NewList from '../components/HomeComponent/NewList';
import RecommendList from '../components/HomeComponent/RecommendList';
import Blog from '../components/BlogComponent/Blog';
const Home = () => {
    return ( 
        <div className="Home">
            <Carousel />
            <NewList />
            <RecommendList />
            <Blog />
        </div>
     );
}
 
export default Home;