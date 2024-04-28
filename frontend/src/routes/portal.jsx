import Log from '../components/portal/log';
import Register from '../components/portal/register';
import Carousel from '../components/portal/carousel';
import '../styles/portal.css'

export default function Portal() {
    return (
        <div className="Portal">
            <Log />
            <Carousel />
        </div>
    )
}

Portal();