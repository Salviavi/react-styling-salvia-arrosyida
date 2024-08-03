import './body-style.css';

const Body = () => {
  return (
    <div>
      <div className="menu">
        <h3>Our Menu:</h3>
      </div>

      <div className="container">
        <div className="grid">
          {/* Card 1 */}
          <div className="card">
            <img
              src="../../assets/image/Sunflower Coffee.jpg"
              alt="Cuisine 1"
              className="card-img"
            />
            <br />
            <h3 className="card-title">Sunflower Coffee</h3>
            <p className="card-price">IDR 30,000</p>
          </div>

          {/* Card 2 */}
          <div className="card">
            <img
              src="../../assets/image/Zebra Matcha Cake.png"
              alt="Cuisine 2"
              className="card-img"
            />
            <br />
            <h3 className="card-title">Zebra Matcha Cake</h3>
            <p className="card-price">IDR 45,000</p>
          </div>

          {/* Card 3 */}
          <div className="card">
            <img
              src="../../assets/image/Butter Fish & Chips.jpg"
              alt="Cuisine 3"
              className="card-img"
            />
            <br />
            <h3 className="card-title">Butter Fish & Chips</h3>
            <p className="card-price">IDR 50,000</p>
          </div>

          {/* Card 4 */}
          <div className="card">
            <img
              src="../../assets/image/Hazelnut Coffee.jpg"
              alt="Cuisine 4"
              className="card-img"
            />
            <br />
            <h3 className="card-title">Hazelnut Latte</h3>
            <p className="card-price">IDR 20,000</p>
          </div>

          {/* Card 5 */}
          <div className="card">
            <img
              src="../../assets/image/Beef Taco.jpeg"
              alt="Cuisine 5"
              className="card-img"
            />
            <br />
            <h3 className="card-title">Beef Taco</h3>
            <p className="card-price">IDR 40,000</p>
          </div>

          {/* Card 6 */}
          <div className="card">
            <img
              src="../../assets/image/Berry Cheese Cake.jpg"
              alt="Cuisine 6"
              className="card-img"
            />
            <br />
            <h3 className="card-title">Berry Cheese Cake</h3>
            <p className="card-price">IDR 35,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
