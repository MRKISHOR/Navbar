import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = () => {
  return (
    <div className="kk" style={{"margin": "20px" , "padding":"20px"}} >
      
      <div className="container text-center">
  <div className="row">
    <div className="col">
      <div class="card">
  <img src="https://picsum.photos/202/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Write here</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>


</div>
    </div>
    <div className="col">
      <div class="card">
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Write here</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
      <div class="card">
  <img src="https://picsum.photos/201/300" class="card-img-top" alt="..." height="200px"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Write here</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards
