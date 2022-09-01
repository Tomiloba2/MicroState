import {
    Card
} from 'react-bootstrap'
import './Styles/Style.css'

const Error = () => {
    return ( 
    <Card style={{
        height:'70vh'
    }}>
        <div className="text-primary text-center Error-404">
            <h1>404  error</h1>
            <h4>Webpage was not found</h4>
        </div>
    </Card>
     );
}
 
export default Error;