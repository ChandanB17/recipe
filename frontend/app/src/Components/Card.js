import React from 'react'
import { Link } from "react-router-dom";
export default function Card() {
  return (
    <div>
      <div>

        <h1 className='head  '>Cusines</h1>
        <div className='mx-5'>
          <div className='container'>
            <div className='row'>
              <div className='card-1 col-lg-3 mb-4' >

                <div className="card m-card h-100" >
                  <img src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" className="card-img-top" alt="Error 404 " />
                  <div className="card-body">
                    <h5 className="card-title m-card">Indian</h5>
                    <p className="card-text">Dubai is famous for wealth, being expensive, and being a popular luxury travel destination.</p>
                    <Link to="/Breakfast" className="btn m-btn btn-info">View Recipes</Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 mb-4'>

                <div className="card m-card h-100">
                  <img src="https://plus.unsplash.com/premium_photo-1673809798970-30c14cfd0ab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" className="card-img-top" alt="Error 404" />
                  <div className="card-body">
                    <h5 className="card-title m-card">Italian</h5>
                    <p className="card-text"> It is famous for being among the most densely populated places in the world.</p>
                    <Link to="/Breakfast" className="btn m-btn btn-info">View Recipes</Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 mb-4'>

                <div className="card m-card h-100">
                  <img src="https://images.unsplash.com/photo-1618219878829-8afd92751bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="card-img-top" alt="Error" />
                  <div className="card-body">
                    <h5 className="card-title m-card">American</h5>
                    <p className="card-text">Nepal is the country of the Mount Everest, the highest mountain peak in the world.</p>
                    <Link to="/Breakfast" className="btn m-btn btn-info">View Recipes</Link>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 mb-4'>

                <div className="card m-card h-100">
                  <img src="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80" className="card-img-top" alt="Error 404 " />
                  <div className="card-body">
                    <h5 className="card-title m-card">Australian</h5>
                    <p className="card-text">Nepal is the country of the Mount Everest, the highest mountain peak in the world.</p>
                    <Link to="/Breakfast" className="btn m-btn btn-info">View Recipes</Link>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        <h1 className='head  '>Categories</h1>
        <div className='m-5'>
          <div className='container'>
            <div className='row'>
              <div className='c-card col-lg-1 mx-3 ' >
              <Link to='/Breakfast'><img src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" className='img'  alt="Error 404 " /></Link>
                <p className='para'>Sweet</p>
              </div>

              <div className='c-card col-lg-1 mx-3'>
              <Link to='/Breakfast'><img src="https://images.unsplash.com/photo-1647482770207-06bfdc9458a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="img"  alt="Error 404 " /></Link>
                <p className='para'>Dinner</p>
              </div>
              <div className='c-card col-lg-1 mx-3'>
                <Link to='/Breakfast'><img src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80" className="img"  alt="Error 404 " /></Link>
                <p className='para'>Tasty</p>
              </div>
              <div className='c-card col-lg-1 mx-3 '>
                <Link to='/Breakfast'><img src="https://images.unsplash.com/photo-1552654180-304709d2041e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80" className="img"  alt="Error 404 " /></Link>
                <p className='para'>Healthy</p>
              </div>
              <div className='c-card col-lg-1 mx-3 '>
                <Link to='/Breakfast'><img src="https://images.unsplash.com/photo-1682970468783-0cc45cfdd1b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" className="img"  alt="Error 404 " /></Link>
                <p className='para'>Instant</p>
              </div>
              <div className='c-card col-lg-1 mx-3 '>
                <Link to='/Breakfast'><img src="https://images.unsplash.com/photo-1600850056064-a8b380df8395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" className="img"  alt="Error 404" />
</Link>                <p className='para'>Vegan</p>
              </div>
              <div className='c-card col-lg-1 mx-3 '>
                <Link to='/Breakfast'><img src="https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" className="img"  alt="Error 404 " /></Link>
                <p className='para'>Salads</p>
              </div>
              <div className='c-card col-lg-1 mx-3 '>
                <Link to='/Breakfast'><img src="https://images.unsplash.com/photo-1652088079703-38f4a8d6b981?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1895&q=80" className="img"  alt="Error 404 " /></Link>
                <p className='para'>Soups</p>
              </div>
            </div>
          </div>
        </div>

        <div>
        <h1 className='head  '>Popular</h1>
          <div className="card p-card mb-3">
            <img src="https://images.unsplash.com/photo-1605908580297-f3e1c02e64ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title p-card">Kebab</h5>
              <p className="card-text">These kebabs start with the most flavorful marinade mixture made with richly flavored ingredients like Worcestershire, soy sauce and bright red wine vinegar. And of course a generous amount of marinating time really allows the flavors to soak right into the beef and also help tenderize it.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              <Link to="/Breakfast" className="btn m-btn btn-info">Read more</Link>
            </div>
          </div>

        </div>

        <div>
          <div className="card p-card mb-3">
            <img src="https://images.unsplash.com/photo-1552590635-27c2c2128abf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title p-card">Biriyani</h5>
              <p className="card-text">Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together. The bottom layer of rice absorbs all the chicken juices as it cooks, giving it a tender texture and rich flavor, while the top layer of rice turns out white and fluffy. Buried in the Biryani, you'll find whole cuts of succulent chicken bursting with flavor from the potent array of spices, herbs, and aromatics it's marinated in.</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              <Link to="/Breakfast" className="btn m-btn btn-info">Read more</Link>
            </div>
          </div>

        </div>
        <div>
          <div className="card p-card mb-3">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1981&q=80" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title p-card">Pizza</h5>
              <p className="card-text">This homemade pizza recipe is easy to make with restaurant quality dough that bakes up to golden perfection! Top it with pizza sauce, mozzarella cheese and your favorite toppings and get ready for the best pizza ever..</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              <Link to="/Breakfast" className="btn m-btn btn-info">Read more</Link>
            </div>
          </div>

        </div>
        <div>
          <div className="card p-card mb-3">
            <img src="https://images.unsplash.com/photo-1556048029-9c5edf1aa695?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title p-card">Fruit Salad</h5>
              <p className="card-text">This fruit salad is perfect for a backyard bbq or any occasion. There are never leftovers! This is one of my favorite fruit salad recipes, as I think the citrusy sauce really makes it. This salad is tastier the longer you can let it soak in its juices. I prefer 3 to 4 hours in the refrigerator before I serve it..</p>
              <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              <Link to="/Breakfast" className="btn m-btn btn-info">Read more</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
