import './navbar-style.css'

const Navbar = () => {
    return (
      <div>
         <div className="header">
                <div className="header-left">
                    <a href="index.html">Home</a>
                    <a href="about.html">About Us</a>
                </div>
                    <a href="index.html" class="logo"><img src="../../assets/image/Logo SalviaCafe.png" alt="logo SalviaCafe" class="logo-img" /></a>
                <div className="header-right">
                    <a href="menu.html">Menu</a>
                    <a href="order.html">Order</a>
                </div>
            </div>
      </div>
    )
  }
  
  export default Navbar;
  