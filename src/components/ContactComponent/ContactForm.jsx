import {
    Row,
    Col,
    FormControl,
    Button
} from 'react-bootstrap'
import { useState } from 'react'
import './Styles/Style.css'

const Form = () => {
    const [inputFields,setInputfields]=useState([
        {
            'name':'',
            'email':'',
            'number':'',
            'subject':'',
            "textarea":''
        }
    ])
    const handleFormChange=(index,event)=>{
        let data=[...inputFields]
        data[index][event.target.name]=event.target.value
        setInputfields(data)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("Thanks For Your FeedBack")
    }
    return ( 
        <>
        
        <h1 className="text-center text-warning">Get in Touch</h1>
                      <form action="#" onSubmit={handleSubmit}>
                        {inputFields.map((inputField,index)=>{
                            return(
                                <div key={index}>
                         <Row className='mt-5 mb-5'>
                             <Col>
                                <FormControl
                                    name='name'
                                    placeholder='Name' 
                                    value={inputField.name} 
                                    onChange={event=>handleFormChange(index,event)} 
                                    type='text'
                                    required
                                />
                            </Col>
                             <Col>
                                <FormControl
                                   name="email"
                                   placeholder='Email Address' 
                                   type='email' value={inputField.email} 
                                   onChange={event=>handleFormChange(index,event)}
                                   required
                                />
                            </Col>
                          </Row>
                          <Row className='mt-5 mb-5'>
                            <Col>
                               <FormControl 
                                  name='number'
                                  placeholder='Phone number' 
                                  type='number' value={inputField.number} 
                                  onChange={event=>handleFormChange(index,event)}
                                  required
                                />
                            </Col>
                            <Col>
                               <FormControl
                                  name='subject' 
                                  type='text' 
                                  placeholder='Subject'
                                  value={inputField.subject} 
                                  onChange={event=>handleFormChange(index,event)}
                                />
                            </Col>
                          </Row>
                          <Row className='mt-5 mb-3'>
                            <textarea 
                               name='textarea'
                               rows={5} 
                               placeholder='Type in your comment' 
                               value={inputField.textarea} 
                               onChange={event=>handleFormChange(index,event)}
                               />
                          </Row>
                          <Row>
                            <Col xs={4}></Col>
                            <Col xs={4} className='mt-3 mb-3'>
                               <Button onClick={handleSubmit} className='submit-Btn w-100'>
                                  <i className="material-icons h1">send</i>
                               </Button>
                            </Col>
                            <Col xs={4}></Col>
                          </Row>
                                </div>
                                
                            )
                        })}
                      </form></>
     );
}
 
export default Form;