import React from 'react'
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FaShoppingCart } from "react-icons/fa";
import classes from './Header.module.css'
import LowerHeader from './LowerHeader';


function Header() {
  return (
    <>
      <section>
        <section>
            <div className={classes.header__container}>
                {/* logo */}
               <div className={classes.logo__container}>
               <a href="#" >
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
                </a>
                {/* delivery */}

                <span>
                <SlLocationPin />
                </span>
               </div>


                <div className={classes.delivery}>
                    <p>Delivered to</p>
                    <span>Ethiopia</span>
                </div>

                  {/* search bar */}
                <div className={classes.search}>
                <select name="" id="">
                    <option value="">All</option>
                </select>
                <input type="text" placeholder='search product' />
                <FaSearch />
            </div>

            {/* other sections */}
            <div className={classes.order__container}>

                   <a href="#" className={classes.language}>
                   <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png?20151118161041" alt="US Flag image" />
                    <select>
                        <option value="">EN</option>
                    </select>
                   </a>


                {/* three componenets */}
                <a href="">
                    <div>
                        <p>Sign In</p>
                        <span>Account & Lists</span>
                    </div>
                </a>

                {/* Orders */}
                <a href="">
                    <p>returns</p>
                    <span>& Orders</span>
                </a>

                {/* Cart */}
                <a href="" className={classes.cart}>
                <FaShoppingCart />
                    <span>0</span>
                </a>
            </div>
            </div>



        </section>
    </section>
    <LowerHeader/>
    </>

  )
}

export default Header
