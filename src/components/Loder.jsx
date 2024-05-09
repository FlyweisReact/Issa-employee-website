import Spinner from 'react-bootstrap/Spinner';

function Loder() {
  return (
    <div className='spinner-position'>
       <Spinner animation="border" role="status" >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
   
  );
}

export default Loder;