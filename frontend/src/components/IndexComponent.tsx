import React from 'react';

type IndexComponentProps = {
    data?: Record<string, any>;
};

export const IndexComponent: React.FC<IndexComponentProps> = ({ data = {} }) => {
    const { product, products, username } = data;

    return (
        <div className="modern-container">
            <div className="modern-card">
                <section className="wrapper">
                <div className="container-fostrap">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img th:src="@{/images/logo.png}" src="../static/images/logo.png" width="auto" height="40" className="d-inline-block align-top" alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        		
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <h4>Welcome { username } </h4>
                    <ul className="navbar-nav mr-auto"></ul>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" th:href="@{/}" href="#">CART</a>
                        </li>
                         <li className="nav-item active">
                            <a className="nav-link" href="profileDisplay" >Profile</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" sec:authorize="isAuthenticated()" href="logout">Logout</a>
                        </li>
                       
                    </ul>
        
                </div>
            </div>
        </nav>
        
        
        
        
          <header>
        
          </header>
          <main>
        
            <div className="container">
              <h1>Welcome to Perishable Shop</h1>
        
        
              <div className="row">
              <c:forEach var="product" items={products}>
                <div className="col-md-3">
                  <div className="card mb-4">
                    <img className="card-img-top" src={product.image} alt="Product 1" />
                    <div className="card-body">
                     <b> <h4 className="card-title">{product.name}</h4></b>
                      <h5 className="card-text">Category: {product.category.name}</h5>
                      <h5 className="card-text">Price: {product.price}</h5>
                      <p className="card-text">Description: {product.description}</p>
                      <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                  </div>
                </div> ))}
              </div>
        
            </div>
          </main>
          <footer>
            <div className="container">
              <p>&copy; 2023 Perishable Shop. All rights reserved
        
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
            </div>
        </div>
    );
};

export default IndexComponent;
