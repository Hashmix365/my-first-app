
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    
    <div>
     
      <nav data-bs-theme="dark" className="navbar mb-5 navbar-expand-lg bg-dark bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      </ul>
      
    </div>
  </div>
  <div class="mx-4 form-check form-switch">
<input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"/>
<label className="form-check-label text-white" htmlFor="switchCheckDefault">
</label>

</div>
</nav>



    </div>
    
  )
}

Navbar.propTypes = {
    title : PropTypes.string
};

Navbar.defaultProps = {
    title : 'set title here'
};
