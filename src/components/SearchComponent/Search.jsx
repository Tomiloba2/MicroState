import lists from "./Data";
import {
    FormControl,
    Row,Col,Container,
    Card
} from 'react-bootstrap'
import { useState } from "react";

const SearchP = () => {
    const [search,setSearch]=useState('')
    /*const handleSearch=(e)=>{
        e.preventDefault()
        const query=e.target.value
        const newlists=[...lists]
        newlists.filter((item)=>{
            return(
                item.toLowerCase().indexOf(query.toLowerCase())
            )
        })
        setSearch(newlists)
    }*/
    return ( 
        <div className="SearchP">
            <section>
                <Container>
                <form className="d-flex">
                    <FormControl 
                    type='text' 
                    value={search} 
                    onChange={e=>setSearch(e.target.value)}
                    placeholder='Search for places eg lagos'
                    className='m-5 w-75' />
                    <i className="material-icons mt-5 mb-5 h1">search</i>
                </form>
                </Container>
            </section>
            <section>
                <Row>
                    {lists.filter((lis)=>
                    lis.location.toLowerCase().includes(search)).map((lis)=>{
                        return(
                            <Col key={lis.id} xs={12} sm={6} md={4}>
                                <Card className="text-center shadow m-2 p-2">
                                    <h2 className="text-success">{lis.location}</h2>
                                    <img src={lis.img} alt='listing-images' />
                                    <Row>
                                        <Col>
                                            <p className="text-success text-center h4 card shadow m-3">
                                                price:{lis.price}
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className="text-success text-center h4 card shadow m-3">
                                                bedroom:{lis.bedroom}
                                            </p>
                                        </Col>
                                        <Col>
                                            <p className="text-success text-center h4 card shadow m-3">
                                                sittingroom:{lis.sittingroom}
                                            </p>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </section>
        </div>
     );
}
 
export default SearchP;