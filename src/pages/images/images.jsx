const Images = () => {
  return (
    <div className="container">
      <h1>Images</h1>
      <p>The Image component is used to display images.</p>
      <h3>Usage</h3>
      <div className="showcase">
        <img
          src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
          alt=""
          className="sm-img"
        />
        <img
          src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
          alt=""
          className="md-img"
        />
        <img
          src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
          alt=""
          className="lg-img"
        />
      </div>
      <p>
        We have fixed dimension for these images, to achive this image you have
        to follow the below code.
      </p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%252F%252F%253C%2520--%2520For%2520Small%2520Image%25205rem%2520x%25205rem%2520--%253E%250A%250A%2520%2520%2520%2520%253Cimg%2520className%253D%2522sm-img%2522%2520src%253D%2522url%2522%253E%253C%252Fimg%253E%250A%250A%250A%2520%2520%2520%2520%252F%252F%2520%253C%2520--%2520For%2520Medium%2520Image%25207rem%2520x%25207rem--%253E%250A%250A%2520%2520%2520%2520%253Cimg%2520className%253D%2522md-img%2522%2520src%253D%2522url%2522%253E%253C%252Fimg%253E%250A%250A%250A%2520%2520%2520%2520%252F%252F%2520%253C%2520--%2520For%2520Large%2520Image%252010rem%2520x%252010rem%2520--%253E%250A%250A%2520%2520%2520%2520%253Cimg%2520className%253D%2522lg-img%2522%2520src%253D%2522url%2522%253E%253C%252Fimg%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h1>Responsive Images</h1>
      <p>The Image component is used to display images.</p>
      <h3>Usage</h3>
      <div className="showcase">
        <div className="img">
          {" "}
          <img
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
            className="responsive-img"
          />
        </div>
      </div>
      <p>
        To achive this image you have to follow the below code,responsive image
        take full height and width of its parent element.
      </p>

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%252F%252F%2520For%2520responsive%2520Image%250A%250A%2520%2520%2520%2520%253Cimg%2520className%253D%2522responsive-img%2522%2520src%253D%2522url%2522%253E%253C%252Fimg%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h1>Rounded images</h1>
      <p>The Rounded Image component is used to display rounded images.</p>
      <h3>Usage</h3>
      <div className="showcase">
        <img
          src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
          alt=""
          className="sm-img rounded-img"
        />
        <img
          src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
          alt=""
          className="md-img rounded-img"
        />
        <img
          src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
          alt=""
          className="lg-img rounded-img"
        />
      </div>
      <p>To Achive above images you have to follow the below code.</p>
      <Codeshare
        code={`< -- For Small Rounded Image 5rem x 5rem -->
<img className="sm-img rounded-img" src="url"></img>

< -- For Medium Rounded Image 7rem x 7rem-->
<img className="md-img rounded-img" src="url"></img>

< -- For Large Rounded Image 10rem x 10rem -->
<img className="lg-img rounded-img" src="url"></img>
`}
      />
    </div>
  );
};
export default Images;
