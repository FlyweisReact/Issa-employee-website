/** @format */

// import { TailSpin } from "react-loader-spinner";
import ClipLoader from "react-spinners/ClipLoader";


function Loder() {
  return (
    <div className="spinner-position">
      <ClipLoader
        // visible={true}
        height="40"
        width="40"
        color="#1a9fb2"
        // ariaLabel="tail-spin-loading"
        // radius="1"
        // wrapperStyle={{}}
        // wrapperClass=""
      />
    </div>
  );
}

export default Loder;
