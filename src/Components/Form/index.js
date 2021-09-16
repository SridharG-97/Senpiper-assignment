import React, { useState } from 'react';
import "./index.css";
import { Form, Button,Col,Row,FormCheck,Nav } from "react-bootstrap";
import {  Link} from "react-router-dom";
import Navbar from "../Navbar/index"
function Index() {

    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');

    const handle = () => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Password', pwd);
    };

    return (
        <div className="form">



            <div className="card text-center" style={{ height: "70vh", textAlign: "start", justifyContent: "start" }}>
                <div class="card-header">
              <Navbar/>
          
                   

                </div>
                <div className="sub-title">
               
                    <h6>Aromatic Bar</h6>
                    <p>We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you</p>
                </div>


                <div className="card-body">



                    <Form className="detail-forms">
                        <div className="Field1">
                            <Form.Group className=" Text-form mb-3" controlId="formBasicEmail">
                                <Form.Label className="label-Text" >Text field</Form.Label>
                                <Form.Control className="Text-input" type="comments" placeholder="Hello" onChange={(e) => setName(e.target.value)} />

                            </Form.Group>

                            <Form.Group className="Text-form  mb-3" controlId="formBasicPassword">
                                <Form.Label className="label-Text" >Email</Form.Label>
                                <Form.Control className="Text-input" type="email" placeholder="Enter your Email" onChange={(e) => setPwd(e.target.value)} />
                            </Form.Group>
                        </div>
                        <div className="Field2">
                            <Form.Group className=" Text-form mb-3" controlId="formBasicEmail">
                                <Form.Label className="label-Text" >Phone</Form.Label>
                                <Form.Control className="Text-input" type="comments" placeholder="Hello" onChange={(e) => setName(e.target.value)} />

                            </Form.Group>
                            {/* <FormCheck>
  <FormCheck.Input isInvalid type={radio} />
  <FormCheck.Label>Allow us to contact you?</FormCheck.Label>
  <Feedback type="invalid">Yo this is required</Feedback>
</FormCheck> */}

                            <Form.Group className="Radio-form  mb-3" controlId="formBasicPassword">
                            <Form.Label className="label-Text" >Radio Button</Form.Label>
                                <Row className="radio-button" sm={4} >
        <Form.Check
          type="radio"
          label="Excellent"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          style={{paddingLeft:"1px"}}
        
        />
        <Form.Check
          type="radio"
          label="Good"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Fair"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        <Form.Check
          type="radio"
          label="Bad"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
        </Row>
      
                               
                            </Form.Group>
                        </div>
                        <br/>
                        <br/><br/>
                        <div className="Field3">
                      
                            <Form.Group className=" Text-form mb-3" controlId="formBasicEmail">
                                <Form.Label className="label-Text" >Name</Form.Label>
                                <Form.Control className="Text-input" type="comments" placeholder="Hello" onChange={(e) => setName(e.target.value)} />

                            </Form.Group>

                            
                        </div>
                        <br/>
                        <br/><br/>
                        <br/>
                        <br/>
                        <div className="Data-Button">
                        <Button className="Sumbit-Button" variant="success" type="submit" onClick={handle}>
                        Submit
                    </Button>
                        </div>


                    </Form>






                   
                </div>
               
            </div>



 



        </div>
    )
}

export default Index;
