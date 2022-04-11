import React from "react";

export default function Consumer() {
  return (
    <div className="consumer wow fadeInRight">
      <div className="row1 mb-5">
        <div className="item ">
          <img
            src="https://www.brandinstitute.com/wp-content/uploads/2019/11/aquafina_-e1576001846691.jpg"
            alt="..."
          />
          <h6 className="mt-2">Aquafina</h6>
          <p>Beverages</p>
        </div>
        <div className="item">
          <img
            src="https://www.brandinstitute.com/wp-content/uploads/2019/11/crunchwrap-e1576001838822.jpg"
            alt="..."
          />
          <h6 className="mt-2">CrunchWrap Supreme</h6>
          <p>Food</p>
        </div>
        <div className="item">
          <img
            src="	https://www.brandinstitute.com/wp-content/uploads/2019/11/hyundai-e1576001829746.jpg"
            alt="..."
          />
          <h6 className="mt-2">Hyundai Palisade</h6>
          <p>Automotive</p>
        </div>
        {/* </div> */}
        {/* <div className="row2"> */}
        <div className="item">
          <img
            src="https://www.brandinstitute.com/wp-content/uploads/2019/11/IdeaPad-e1576001821212.jpg"
            alt="..."
          />
          <h6 className="mt-2">IdeaPad</h6>
          <p>Technology</p>
        </div>
        <div className="item">
          <img
            src="https://www.brandinstitute.com/wp-content/uploads/2019/11/magnifique-e1576001812218.jpg"
            alt="..."
          />
          <h6 className="mt-2">Magnifique</h6>
          <p>Personal Products</p>
        </div>
        <div className="item">
          <img
            src="https://www.brandinstitute.com/wp-content/uploads/2019/11/wildfrontier-e1576001804518.jpg"
            alt="..."
          />
          <h6 className="mt-2">Wild Frontier</h6>
          <p>Pet Products</p>
        </div>
      </div>
    </div>
  );
}
