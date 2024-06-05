import { TailSpin } from 'react-loader-spinner';

function Loder() {
  return (
    <div className='spinner-position'>
      <TailSpin
  visible={true}
  height="40"
  width="40"
  color="#1a9fb2"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </div>
   
  );
}

export default Loder;