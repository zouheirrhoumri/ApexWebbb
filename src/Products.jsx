
import { Link } from 'react-router-dom';


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