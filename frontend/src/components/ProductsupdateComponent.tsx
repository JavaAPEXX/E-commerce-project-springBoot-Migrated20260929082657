import React, { useState } from 'react';

type ProductsupdateComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const ProductsupdateComponent: React.FC<ProductsupdateComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'parameterName': '',
        'id': '',
        'name': '',
        'price': '',
        'weight': '',
        'quantity': '',
        'productImage': '',
        'imgName': '',
        'categoryid': '',
        'description': '',
    });
    const { _csrf, categories, category, product } = data;

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
        			<a className="navbar-brand" href="#"> <img th:src="@{/images/logo.png}" src="../static/images/logo.png" width="auto" height="40" className="d-inline-block align-top" alt="" />
        			</a>
        			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        				<span className="navbar-toggler-icon"></span>
        			</button>
        
        			<div className="collapse navbar-collapse" id="navbarSupportedContent">
        				<ul className="navbar-nav mr-auto"></ul>
        				<ul className="navbar-nav">
        					<li className="nav-item active"><a className="nav-link" href="/dashboard" >Home Page</a></li>
        					<li className="nav-item active"><a className="nav-link" href="/logout" >Logout</a></li>
        				</ul>
        
        			</div>
        		</div>
        	</nav><br>
        	<div className="jumbotron container border border-info">
        		<h3>Update Existing Product</h3>
        		<form onSubmit={handleSubmit} action="/admin/products/update/{product.id}" method="post">
        			<input type="hidden" name={_csrf.parameterName} value={_csrf.token}/>
        			<div className="row">
        				<div className="col-sm-5">
        					
        					<div className="form-group">
        						<label htmlFor="name">Id</label> 
        						<input type="number" readonly="readonly" className="form-control border border-success" name="id" value={product.id} />
        						
        
        					</div>
        					<div className="form-group">
        						<label htmlFor="name">Name</label> 
        						<input type="text" className="form-control border border-success" required name="name" value={product.name } placeholder="Enter name" />
        					</div>
        					
        					<div className="form-group">
        					
        						<label htmlFor="category">Select Category</label> 
        						<select className="form-control border border-success" name="categoryid" readonly>
        							<option selected>Select a Category</option>
                                    							<c:forEach var="category" items={categories}>
                                    								<option value={category.id}>{category.name}</option>
                                    							))}
        						</select>
        					</div>
        					<div className="form-group">
        						<label htmlFor="price">Price</label> 
        						<input type="number" className="form-control border border-success" required name="price" value={ product.price } min="1" placeholder="Price" />
        					</div>
        					<div className="form-group">
        						<label htmlFor="weight">Weight in grams</label> 
        						<input type="number" className="form-control border border-success" required name="weight" value={product.weight } min="1" placeholder="Weight" />
        					</div>
        					<div className="form-group">
        						<label htmlFor="weight">Available Quantity</label> 
        						<input type="number" className="form-control border border-success" required name="quantity" value={ product.quantity } min="1" placeholder="Quantity" />
        					</div>
        					
        					
        				</div>
        				
        				<div className="col-sm-5">
        				<div className="form-group">
        						<label htmlFor="description">Product Description</label>
        					<textarea className="form-control border border-success" rows="4" name="description" placeholder="Product Details">{product.description}</textarea>
        					</div>
        					<p>Product Image</p>
        					<div className="form-group">
        						<label htmlFor="productImage">Image Link</label>
        						<input type="text" className="form-control border border-success" id="productImage" name="productImage" value={product.image} required />
        					</div>
        					<div className="form-group">
        						<img src={product.image} id="imgPreview" height="100px" width="100px" style="margin-top: 20px" alt=" " />
        					</div>
        					<input type="hidden" name="imgName" />
        					<input type="submit" value="Update Details" className="btn btn-primary" />
        				</div>
        			</div>
        		</form>
        	</div>
        
        	<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
            </div>
        </div>
    );
};

export default ProductsupdateComponent;
