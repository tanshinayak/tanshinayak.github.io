import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//adding my imports
import Navbar from "./component/navbar.jsx";
import Footer from "./component/footer.jsx";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
	<React.Fragment>
		<Navbar />
		<Footer />
	</React.Fragment>, document.getElementById('root'));
