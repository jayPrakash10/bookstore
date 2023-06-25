import { Container } from 'react-bootstrap'
import TrendingBooks from '../../Containers/TrendingBooks';
import HindiBooks from '../../Containers/HindiBooks';

const Home = () => {
    return (
        <Container className='py-3 py-sm-4 py-md-5'>
            <TrendingBooks />
            <HindiBooks />
        </Container>
    )
}

export default Home;