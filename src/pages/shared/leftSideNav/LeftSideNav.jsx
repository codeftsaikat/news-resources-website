import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function LeftSideNav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl mb-6">All categories</h1>
     <div className="space-y-3 ml-4">
     {categories.map((category) => (
        <Link 
        className="block"
        key={category.id}
        to={`/category/${category.id}`}
        >{category.name}
        </Link>
      ))}
     </div>
    </div>
  );
}

export default LeftSideNav;
