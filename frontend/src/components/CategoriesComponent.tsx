import React, { useState } from 'react';

type CategoriesComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const CategoriesComponent: React.FC<CategoriesComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'parameterName': '',
        'categoryname': '',
        'parameterName': '',
        'id': '',
        'parameterName': '',
        'categoryid': '',
        'categoryname': '',
    });
    const { _csrf, categories, category } = data;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name) setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await onSubmit?.(formData);
    };

    return (
        <div className="modern-container">
            <div className="modern-card">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        		<div className="container-fluid">
        			<a className="navbar-brand" href="#"> <img src="@{/images/logo.png}" src="../static/images/logo.png" width="auto" height="40" className="d-inline-block align-top" alt="" />
        			</a>
        			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        				<span className="navbar-toggler-icon"></span>
        			</button>
        
        			<div className="collapse navbar-collapse" id="navbarSupportedContent">
        				<ul className="navbar-nav mr-auto"></ul>
        				<ul className="navbar-nav">
        					<li className="nav-item active"><a className="nav-link" href="Dashboard">Home
        							Page</a></li>
        					<li className="nav-item active"><a className="nav-link" href="logout">Logout</a>
        					</li>
        
        				</ul>
        
        			</div>
        		</div>
        	</nav><br>
        	<div className="container">
        
        
        
        		
        		<button type="button" style="margin: 20px 0" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Add
        			Category</button>
        
        		
        		<div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        			<div className="modal-dialog modal-dialog-centered" role="document">
        				<div className="modal-content">
        					<form onSubmit={handleSubmit} action="categories" method="post">
        						<input type="hidden" name={_csrf.parameterName} value={_csrf.token}/>
        						<div className="modal-header">
        							<h5 className="modal-title" id="exampleModalLongTitle">Add New
        								Category</h5>
        							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
        								<span aria-hidden="true">&times;</span>
        							</button>
        						</div>
        						<div className="modal-body text-center">
        							<input type="text" name="categoryname" className="form-control" id="name" required="required" placeholder="Category name" />
        						</div>
        						<div className="modal-footer">
        							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        							<input type="submit" value="Save Changes" className="btn btn-primary" />
        						</div>
        					</form>
        				</div>
        			</div>
        		</div><br>
        
        
        
        
        		<div className="modern-table-wrapper"><table className="modern-table" className="table">
        			<thead className="thead-light">
        				<tr>
        					<th scope="col">SN</th>
        					<th scope="col">Category Name</th>
        					<th scope="col">Delete</th>
        					<th scope="col">Update</th>
        				</tr>
        			</thead>
        			<tbody>
        				
        				<c:forEach var="category" items={categories }>
        				<tr>
        					<td>{category.id }</td>
        					<td>{category.name }</td>
        
        					<td>
        						<form onSubmit={handleSubmit} action="categories/delete" method="post">
        							<input type="hidden" name={_csrf.parameterName} value={_csrf.token}/>
        							<input type="hidden" name="id" value={category.id} />
        							<input type="submit" value="Delete" className="btn btn-danger" />
        						</form>
        					</td>
        
        					<td>
        						<form onSubmit={handleSubmit} action="categories/update" method="post">
        							<input type="hidden" name={_csrf.parameterName} value={_csrf.token}/>
        
        
        
        
        							
        							<button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModalCenter2" onclick="document.getElementById('categoryname').value = '{category.name }'; document.getElementById('categoryid').value = '{category.id}'; ">Update
        							</button>
        
        							
        							<div className="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        								<div className="modal-dialog modal-dialog-centered" role="document">
        									
        										<div className="modal-content">
        											<div className="modal-header">
        												<h5 className="modal-title" id="exampleModalLongTitle">Update
        													Product Details</h5>
        												<button type="button" className="close" data-dismiss="modal" aria-label="Close">
        													<span aria-hidden="true">&times;</span>
        												</button>
        											</div>
        											<div className="modal-body text-center">
        												<div className="form-group">
        													<input className="form-control" type="number" readonly="readonly" name ="categoryid" id="categoryid" value="0" />
        												</div>
        												<div className="form-group">
        													<input className="form-control" type="text" name= "categoryname" id="categoryname" value="categoryname" />
        												</div>
        
        											</div>
        											<div className="modal-footer">
        												<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        												<button type="submit" className="btn btn-primary">Update
        													changes</button>
        											</div>
        
        										</div>
        								</div>
        							</div>
        
        
        
        						</form>
        					</td>
        
        				</tr>
        				))}
        			</tbody>
        		</table></div>
        		
        	</div>
        
        	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
            </div>
        </div>
    );
};

export default CategoriesComponent;
