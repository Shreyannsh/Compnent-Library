const Card = () => {
  return (
    <div className="container">
      <h1>Card</h1>
      <p>Cards are the container that display the content on the topic</p>
      <h3>Usages</h3>
      <div className="showcase">
        <div className="card">
          <h1>Hello World</h1>
          <p>This is Paragraph</p>
        </div>
      </div>
      <p>
        This is the basic card componet which is having the dimension of 15rem x
        15rem of width and height
      </p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520basic%2520card%2520component%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522card%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EHello%2520World%253C%252Fh1%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EThis%2520is%2520Paragraph%253C%252Fp%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      />
      <h1>Card with dismiss</h1>
      <p>Card with Dismiss will help you to close the dialog/popup message.</p>
      <h3>Usages</h3>
      <div className="showcase">
        <div className="dismis-card">
          <span className="dismis">x</span>
          <p>This is card with dismiss</p>
        </div>
      </div>
      <p>
        This is the dismiss card componet for this you have to follow the
        following code
      </p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%252F%252F%2520dismiss%2520card%2520component%250A%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522dismis-card%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522dismis%2522%253Ex%253C%252Fspan%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EThis%2520is%2520card%2520with%2520dismiss%253C%252Fp%253E%250A%250A%2520%2520%2520%2520%253C%252Fdiv%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h1>Card with shadow</h1>
      <p>Card with shadow will have shadow.</p>
      <h3>Usages</h3>
      <div className="showcase">
        <div className="shadow-card">
          <p>This is Card with shadow</p>
        </div>
      </div>
      <p>
        This is the shadows card componet for this you have to follow the
        following code
      </p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%252F%252F%2520shadows%2520card%2520component%250A%250A%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522shadow-card%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EThis%2520is%2520card%2520with%2520shadows%253C%252Fp%253E%250A%250A%2520%2520%2520%2520%253C%252Fdiv%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h1>Vertical/Horizontal cards</h1>
      <p>Vertical/Horizontal cards will have shadow.</p>
      <h3>Usages</h3>
      <div className="showcase">
        <div className="card vertical-card">
          <p>This is Vertical cards</p>
        </div>
        <div className="card horizontal-card">
          <p>This is horizontal cards</p>
        </div>
      </div>
      <p>To achive this card you have to follow the below code</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%252F%252F%2520vertical%2520card%2520%250A%250A%253Cdiv%2520className%253D%2522card%2520vertical-card%2522%253E%250A%250A%2520%2520%2520%253Cp%253EThis%2520is%2520Vertical%2520card%253C%252Fp%253E%250A%250A%253C%252Fdiv%253E%250A%250A%252F%252Ffor%2520horizontal%250A%250A%253Cdiv%2520className%253D%2522card%2520horizontal-card%2522%253E%250A%250A%2520%2520%2520%253Cp%253EThis%2520is%2520horizontal%2520cards%253C%252Fp%253E%250A%250A%253C%252Fdiv%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      {/* image card  */}
      <h1>Cards with text overlay</h1>
      <p>
        Cards with text overlay is about to show the details about any image
      </p>
      <h3>Usages</h3>
      <div className="showcase">
        <div className="text-overlay-card">
          <img
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1689213269/1689213269206-210544264.png"
            alt="exampleImage"
          />
          <div className="details">
            <h3>The Sunset</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              odit.
            </p>
          </div>
        </div>
      </div>
      <p>To achive these style you have to follow the following code</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%252F%252F%2520for%2520text%2520overlay%2520cards%250A%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522text-overlay-card%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522url%2522%2520alt%253D%2522exampleImage%2522%252F%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522details%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EThe%2520Sunset%253C%252Fh3%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253ELorem%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%2520adipisicing%2520elit.%2520Omnis%252C%2520odit.%253C%252Fp%253E%250A%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253C%252Fdiv%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h1>Cards with badges</h1>
      <p>Cards with badges used to show the quantity on the top of the card.</p>
      <div className="showcase">
        <div className="badge-card">
          <span className="offer">10% off</span>
          <div className="img-sec">
            <img
              src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/t/h/galaxy-f54-5g-sm-e546bzshins-samsung-original-imagq79f82pfyzvh.jpeg?q=70"
              alt="example"
            />
          </div>
          <div className="product-details">
            <h3 className="title">SAMSUNG Galaxy F54 5G</h3>
            <p className="price">
              Rs 29000 <span>Rs 32000</span>
            </p>
            <button className="add-to-cart">Add To Cart</button>
          </div>
        </div>
      </div>
      <p>To achive these card style you have to follow the following code</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%252F%252F%2520for%2520badge%2520card%250A%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge-card%2522%253E%250A%250A%2520%2520%2520%2520%253Cspan%2520className%253D%2522offer%2522%253E10%2525%2520off%253C%252Fspan%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522img-sec%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522url%2522%2520alt%253D%2522example%2522%252F%253E%250A%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522product-details%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%2520className%253D%2522title%2522%253ESAMSUNG%2520Galaxy%2520F54%25205G%253C%252Fh3%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522price%2522%253ERs%252029000%2520%253Cspan%253ERs%252032000%253C%252Fspan%253E%2520%253C%252Fp%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522add-to-cart%2522%253EAdd%2520To%2520Cart%253C%252Fbutton%253E%250A%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253C%252Fdiv%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};
export default Card;
