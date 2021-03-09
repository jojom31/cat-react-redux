import  Output from '../containers/OutputContainer';
import Nap from '../containers/NapContainer';
import Eat from '../containers/EatContainer';
import Play from '../containers/PlayContainer';

const Display = props => (
    <>
    <h1>The Best Cat!!</h1>
    <Output  />
    <Nap />
    <Eat />
    <Play />

    </>
);

export default Display;