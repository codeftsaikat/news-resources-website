import { Link } from "react-router-dom";

function NewsCards({ news }) {
  const { title, image_url, details, _id} = news;
  console.log(news);
  
  return (
    <div className="text-center">
      <img 
      className="mx-auto"
      src={image_url} alt="" />
      <h4 className="text-4xl">{title}</h4>

      {details.length > 200 ? (
        <p>
          {details.slice(0, 200)}
          <Link 
          to={`/news/${_id}`}
          className="text-red-600">Read more...</Link>
        </p>
      ) : (
        <p> {details}</p>
      )}
    </div>
  );
}

export default NewsCards;
