import React, { useState } from 'react';
import "./index.css";
import { Form, Button, Col, Row, FormCheck, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/index";
import { MDBIcon } from 'mdb-react-ui-kit';
function Index() {

    
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [radio, setRadio] = useState('');
    const [value, setValue] = useState()

    const [name, setName] = useState('');
    const [formName, setformName] = useState('Aromatic Bar');
    


    const handle = (e) => {

        // localStorage.setItem('Name', name);

        // localStorage.setItem('email', email);

        // localStorage.setItem('mobile', mobile);
        // localStorage.setItem('text', text);
        // localStorage.setItem('radio', radio);





        let array = [];
        let checkData = localStorage.getItem('Values5')
        console.log(checkData);
        let parsedData = [];
        console.log(parsedData);

        

        if (checkData == null) {
            parsedData = [];
        }  else {
            
            
            parsedData = JSON.parse(checkData);
           
        }

      
        if(name && email && mobile && text && radio){
            const json = {
                Name: name,
                email: email,
                mobile: mobile,
                text: text,
                radio: radio,
                formName: formName,
    
            }
    
            parsedData.push(json)
            localStorage.setItem('Values5', JSON.stringify(parsedData));

        }

        
        
    };




    return (
        <div className="form">



            <div className="card text-center" style={{ height: "70vh", textAlign: "start", justifyContent: "start" }}>
                <div class="card-header">
                    <Navbar />
                </div>

                <div className="sub-title">

                    <h6>Aromatic Bar</h6>
                    <p>We are committed to providing you with the best dining experience possible, so we welcome your comments. Please fill out this questionnaire. Thank you</p>
                </div>


                <div className="card-body">



                    <Form className="detail-forms" >
                        <div className="Field1">
                            <Form.Group className=" Text-form mb-3" controlId="formBasicEmail">
                                <Form.Label className="label-Text" >Text field</Form.Label>
                                <Form.Control className="Text-input" type="comments" required placeholder="Hello" onChange={(e) => setText(e.target.value)} />

                            </Form.Group>

                            <Form.Group className="Text-form  mb-3" controlId="formBasicPassword">
                                <Form.Label className="label-Text" >Email</Form.Label>
                                <Form.Control className="Text-input" type="email" required placeholder="" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                        </div>

                        <div className="Field2">
                            <Form.Group className=" Text-form mb-3" controlId="formBasicEmail">
                                <Form.Label className="label-Text" >Phone</Form.Label>
                                <Form.Control className="Text-input" type="number" required placeholder="123456789" onChange={(e) => setMobile(e.target.value)} onInput={(e) => {
                                    e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                                }} /><MDBIcon flag='india' />


                            </Form.Group>


                            <Form.Group className="Radio-form  mb-3" controlId="formBasicPassword">
                                <Form.Label className="label-Text"  >Radio Button</Form.Label>

                                <Row className="radio-button" sm={4} required  >
                                    <Form.Check
                                        type="radio"
                                        
                                        label="Excellent"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        style={{ paddingLeft: "1px" }}
                                        onClick={(e) => setRadio("Excellent")}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Good"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                        onClick={(e) => setRadio("Good")}
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Fair"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                        onClick={(e) => setRadio("Fair")}

                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Bad"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                        onClick={(e) => setRadio("Bad")}
                                    />
                                </Row>


                            </Form.Group>
                        </div>
                        <br />
                        <br /><br />
                        <div className="Field3">

                            <Form.Group className=" Text-form mb-3" controlId="formBasicEmail">
                                <Form.Label className="label-Text" >Name</Form.Label>
                                <Form.Control className="Text-input" type="comments" required placeholder="" onChange={(e) => setName(e.target.value)} />
                            </Form.Group>


                        </div>
                        <br />
                        <br /><br />
                        <br />
                        <br />
                        <div className="Data-Button">
                            <Button className="Sumbit-Button" variant="success" type="submit" onClick={handle} noValidate>
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
