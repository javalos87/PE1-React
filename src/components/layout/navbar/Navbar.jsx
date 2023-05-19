import CartWidget from "../../common/cartWidget/CartWidget";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Ecommerce</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Todos los productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Mujer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Hombre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Electronica</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Joyas</a>
              </li>
              <li className="nav-item">
                <CartWidget number={5} />
              </li>
            </ul>
            <Form>
              <Form.Group className="d-flex" role="search">
                <Form.Control
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar..."
                  aria-label="Search"
                />
                <Button variant="primary" type="submit">
                  Buscar
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
