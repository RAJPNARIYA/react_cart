import categoryMen from "../CategoryCard/men.jpg";
import categoryWomen from "../CategoryCard/women.jpg";

function CategoryCard(props) {
  // var image = props.categoryName
  // var imageName="../CategoryCard/"+image+".jpg"
  // console.log(typeof(imageName));
  // console.log(imageName);
  // console.log(props.name)

  return (
    <>
      <div className="col">
        <div className="card bg-dark text-white">
          <img src={props.image} className="card-img cat-img" alt="Category" />
          <div className="card-img-overlay text-box-center">
            <h2 className="card-title">{props.name}</h2>
            <h5 className="card-text">Get The Look </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
