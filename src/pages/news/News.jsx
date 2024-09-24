import { useParams } from "react-router-dom";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";

function News() {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <Navbar/>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h1>News Details</h1>
        </div>
        <p>
            {id}
        </p>
      </div>
    </div>
  );
}

export default News;
