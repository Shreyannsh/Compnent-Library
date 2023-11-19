const Avatar = () => {
  return (
    <div className="container">
      <h1>Avatars</h1>
      <p>
        The Avatar component is used to represent a user, and displays the
        profile picture, initials or fallback icon.
      </p>

      <h3>Usages</h3>
      <div className="showcase">
        <div className="avatar">
          <img src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg" />
        </div>
      </div>
      <p>To achive these style you have to follow the following code</p>

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522avatar%2522%253E%250A%2520%2520%250A%253Cimg%2520src%253D%2522https%253A%252F%252Fres.cloudinary.com%252Fdbrpnkzsx%252Fimage%252Fupload%252Fv1688703091%252Fgoku_a5p2o2.jpg%2522%2520alt%253D%27%27%252F%253E%250A%2520%2520%250A%253C%252Fdiv%253E%250A"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <h1>Avatars with different sizes</h1>
      <p>We have some predefined avatar of different sizes</p>

      <h3>Usages</h3>
      <div className="showcase">
        <div className="avatar-sm">
          <img
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
          />
        </div>
        <div className="avatar-md">
          <img
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
          />
        </div>
        <div className="avatar-lg">
          <img
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
          />
        </div>
      </div>
      <p>To achive these style you have to follow the following code </p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%252F%252F%2520for%2520small%2520avatar%2520size%250A%250A%253Cdiv%2520className%253D%2522avatar-sm%2522%253E%250A%2520%2520%250A%253Cimg%2520src%253D%2522https%253A%252F%252Fres.cloudinary.com%252Fdbrpnkzsx%252Fimage%252Fupload%252Fv1688703091%252Fgoku_a5p2o2.jpg%2522%252F%253E%250A%2520%2520%250A%253C%252Fdiv%253E%250A%250A%252F%252Ffor%2520medium%2520avatar%2520size%250A%250A%253Cdiv%2520className%253D%2522avatar-md%2522%253E%250A%2520%2520%250A%253Cimg%2520src%253D%2522https%253A%252F%252Fres.cloudinary.com%252Fdbrpnkzsx%252Fimage%252Fupload%252Fv1688703091%252Fgoku_a5p2o2.jpg%2522%252F%253E%250A%2520%2520%250A%253C%252Fdiv%253E%250A%250A%252F%252F%2520for%2520large%2520avatar%2520size%250A%250A%253Cdiv%2520className%253D%2522avatar-lg%2522%253E%250A%2520%2520%250A%253Cimg%2520src%253D%2522https%253A%252F%252Fres.cloudinary.com%252Fdbrpnkzsx%252Fimage%252Fupload%252Fv1688703091%252Fgoku_a5p2o2.jpg%2522%252F%253E%250A%2520%2520%250A%253C%252Fdiv%253E%250A"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};
export default Avatar;
