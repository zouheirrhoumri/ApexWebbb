
import { Link } from 'react-router-dom';
import Header from './components/Header';


export default function Products(){
    return(
        <>
            Products 
        <ul>
            <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>products</Link></li>
        <li><Link to='/Services'>services</Link></li>

        </ul>
        </>
    )
}