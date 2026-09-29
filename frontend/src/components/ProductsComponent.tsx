import React, { useState } from 'react';

type ProductsComponentProps = {
    data?: Record<string, any>;
    onSubmit?: (formData: Record<string, any>) => void | Promise<void>;
};

export const ProductsComponent: React.FC<ProductsComponentProps> = ({ data = {}, onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>({
        'parameterName': '',
        'id': '',
    });
    const { _csrf, product, products } = data;

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
        					<li className="nav-item active"><a className="nav-link" href="Dashboard">Home
        							Page</a></li>
        					<li className="nav-item active"><a className="nav-link" href="logout">Logout</a>
        					</li>
        
        				</ul>
        
        			</div>
        		</div>
        	</nav><br>
        	<div className="container-fluid">
        
        		<a style="margin: 20px 0" className="btn btn-primary" href="/admin/products/add">Add Product</a><br>
        		<div className="modern-table-wrapper"><table className="modern-table" className="table">
        
        			<tr>
        				<th scope="col">Serial No.</th>
        				<th scope="col">Product Name</th>
        				<th scope="col">Category</th>
        				<th scope="col">Preview</th>
        				<th scope="col">Quantity</th>
        				<th scope="col">Price</th>
        				<th scope="col">Weight</th>
        				<th scope="col">Descrption</th>
        				<th scope="col">Delete</th>
        				<th scope="col">Update</th>
        			</tr>
        			<tbody>
        
        				<c:forEach var="product" items={products}>
        				<tr>
        
        
        
        					<td>
        						{product.id}
        					</td>
        					<td>
        						{product.name }
        					</td>
        					<td>
        						{product.category.name}
        
        					</td>
        
        					<td><img src={product.image} height="100px" width="100px" /></td>
        					<td>
        						{product.quantity }
        					</td>
        					<td>S
        						{product.price }
        					</td>
        					<td>
        						{product.weight }
        					</td>
        					<td>
        						{product.description }
        					</td>
        
        					<td>
        					<form onSubmit={handleSubmit} action="products/delete" method="post">
        							<input type="hidden" name={_csrf.parameterName} value={_csrf.token}/>
        							<input type="hidden" name="id" value={product.id} />
        							<input type="submit" value="Delete" className="btn btn-danger" />
        					</form>
        					</td>
        					<td>
        					<form onSubmit={handleSubmit} action="products/update/{product.id}" method="get">
                                <input type="submit" value="Update" className="btn btn-warning" />
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

export default ProductsComponent;
