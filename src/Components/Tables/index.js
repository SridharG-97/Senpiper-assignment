import React from 'react';
import "./index.css"
// import { DataGrid } from '@material-ui/data-grid';
import { Table, Card } from "react-bootstrap";
import index from '../Navbar/index';
import Navbar from "../Navbar/index"





function Index(id) {




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



         



            <Table className="data-table"  bordered  size="sm">
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
                <tr>
                  <td>Name</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                <tr>
                  <td>Name</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

              </tbody>
            </Table>



          








        </div>

      </div>




    </div>
  );
}
export default Index;