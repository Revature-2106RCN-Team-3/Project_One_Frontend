import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';

interface IProps {}

const Home: React.FC<IProps> = (props) => {
    return (
        <div className="bg-dark">
            <div className="row">
                <Navbar />
            </div>
            <div className="d-flex row bg-light">
                <Login />
            </div>
        </div>
    )
}

export default Home;