import Login from '../Login/Login';
import Navbar from '../NavBar/Navbar';

interface IProps {}

const Home: React.FC<IProps> = (props) => {
    return (
        <div className="bg-dark">
            <div className="row">
                <Navbar />
            </div>
            <div className="row justify-content-center bg-light">
                <Login />
            </div>
        </div>
    )
}

export default Home;