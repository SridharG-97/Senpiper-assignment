import React, { useEffect, useState } from 'react';
import "./index.css"
import { Table, Card } from "react-bootstrap";
import index from '../Navbar/index';
import Navbar from "../Navbar/index"





function Index(id) {
  let array = [];
  let parsedData = [];
  const [state, setState] = useState([])

  useEffect(() => {
    let checkData = localStorage.getItem('Values5')
    if (checkData == null) {
      parsedData = [];
      setState([])
    } else {
      parsedData = JSON.parse(checkData);
      console.log(parsedData);
      setState(parsedData)

    }
  }, []);



  return (
    <div className="form" style={{ height: "100vh", width: '100%' }}>



      <div className="card1 text-center" style={{ height: "70vh", textAlign: "start", justifyContent: "start" }}>

        <div class="card-header">
          <Navbar />



        </div>
        <div className="sub-title">

          <h4>All Feedback</h4>
        </div>


        <div className="card-table" >







          <Table className="data-table" bordered size="sm">
            <thead className="table-header"  >
              <tr>
                <th>Form Name</th>
                <th>Text field</th>
                <th>Phone field</th>
                <th>Email Field</th>
                <th>Radio button</th>
                <th>Name</th>

              </tr>
            </thead>
            <tbody>

              {state.length > 0 ?
                state.map((element) => {
                  return (
                    <tr>
                      <td>{element.formName}</td>
                      <td>{element.text}</td>
                      <td>{element.mobile}</td>
                      <td>{element.email}</td>
                      <td>{element.radio}</td>
                      <td>{element.Name}</td>
                    </tr>

                  )
                }) : (
                  <div> no data</div>
                )


              }


            </tbody>
          </Table>












        </div>

      </div>




    </div>
  );
}
export default Index;