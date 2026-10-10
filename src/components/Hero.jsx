export default function Hero() {
  return (
    <div className="flex flex-row bg-[var(--black)] ">
      <div class="hero m-auto">
        <div className="flex flex-col sm:flex-row ">
          <div className="relative flex flex-row  sm:w-[100%] pl-8 gap-4 ">
            <img
              src="/searchui.jpeg"
              className=" [height:13rem]   lg:[height:30rem] rounded-2xl lg:absolute "
            />
            <img
              src="/product.jpg"
              className="[height:13rem] rounded-2xl lg:absolute right-10  top-40 z-50"
            />
            <img
              src="/opotions.jpeg"
              className="[height:13rem] rounded-2xl right-38 lg:absolute top-40 "
            />
          </div>
          <div class="wrap self-center">
            <h1>Need a car part? Got one to sell?</h1>
            <p class="lead">
              Ksmarting Auto connects people who are looking for spare parts
              with people who have them. Post a request or list your own parts,
              and get matched.
            </p>
            <div class="cta">
              <a class="btn" href="#contact">
                Get the app
              </a>
              <a class="btn alt" href="#how">
                See how it works
              </a>
            </div>
          </div>
        </div>
        <div class="split">
          <div class="need">
            <h3>I need a part</h3>
            <p>
              Post a request with your car and the part you want. Sellers who
              have it get in touch.
            </p>
          </div>
          <div class="have">
            <h3>I have parts</h3>
            <p>
              List what you have with photos and a price. Buyers looking for it
              find you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
