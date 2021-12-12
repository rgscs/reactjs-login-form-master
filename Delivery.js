import React, { Component } from "react";
import { Row, FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';
import './delivery.css';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from 'shared/validator';

function Delivery(){
      
    return (
        <div class="content">
            <div className="header1">
             <h5 class="title1">Ongoing deliveries</h5>
        <div class="row">
						<div class="col-md-12">
							<div class="table-responsive">
								<table class="table table-striped custom-table datatable">
									<thead>
										<tr>
											<th>Name</th>

											<th>E-Mail</th>
											<th>Item Name</th>
											<th>QTY</th>
											
											<th>Business Justification </th>
											<th>Project Name</th>
                                            <th>Status</th>
										</tr>
									</thead>
                                    <thead>
										<tr>
											<th>Name</th>
											<th>E-Mail</th>
											<th>Item Name</th>
											<th>QTY</th>
											
											<th>Business Justification </th>
											<th>Project Name</th>
                                            <th>Status</th>
										</tr>
									</thead>
                                </table>
                            </div>
                        </div>
        </div>
      </div>
        <div class="header">
        <h5 class="title">Ongoing deliveries</h5>
        
        <div class="body">
            <form className="de">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                          
                            <input class="form-control" type="text" placeholder="Name"/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                           
                            <input class="form-control" type="text" placeholder="Item Name"/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                         
                            <input class="form-control" type="email" placeholder="E-mail"/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                           
                            <input class="form-control" type="text" placeholder="Quantity"/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            
                            <input class="form-control" type="text" placeholder="Business Justification"/>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <input class="form-control" type="password" placeholder="Project Name"/>
                        </div>
                    </div>
                   
                </div>
                <div class="submit-section">
										<button class="btn btn-primary submit-btn"><b>Submit</b></button>
									</div>
								</form>
							</div>
                            </div>
		</div>
    );
}
export default Delivery;