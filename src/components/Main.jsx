import React from "react";
import img1 from "../images/6.JPG";

const Main = () => {
  return (
    <section class="section-tours container">
      <div class="row">
        <div class="col-sm">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--1">&nbsp;
              </div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--1">
                  The Groom
                </span>
              </h4>
              <div className="card-desc-1" style={{padding:'1rem'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                maxime quia maiores repellendus eos excepturi expedita facilis?
                Praesentium tenetur officiis repellendus dolor, perspiciatis
                architecto aspernatur similique quam at hic neque.
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__price-box">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi consequuntur explicabo dicta doloremque quam veniam
                  dolorum magni dolorem! Earum voluptatum commodi ea pariatur
                  fuga officia animi nemo iste sed quos.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--2">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--2">
                  The Bride
                </span>
              </h4>
              <div className="card-desc-2" style={{padding:'1rem'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                maxime quia maiores repellendus eos excepturi expedita facilis?
                Praesentium tenetur officiis repellendus dolor, perspiciatis
                architecto aspernatur similique quam at hic neque.
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-2">
              <div class="card__cta">
                <div class="card__price-box">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis totam ipsum laboriosam debitis, labore modi minima
                  vitae similique saepe dignissimos aliquam vero repudiandae nam
                  dolore nesciunt sunt in? Saepe, praesentium.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
