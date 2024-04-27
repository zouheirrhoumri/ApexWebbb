
import { Link } from 'react-router-dom';
import Header from './components/Header';


export default function Services(){
    return(
        <>
            <Header /> 
        <ul>
            <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>products</Link></li>
        </ul>
        </>
    )
}