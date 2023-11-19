const Badge = () => {
  return (
    <div className="container">
      <h1>Badge</h1>
      <p>
        Badges are used to highlight an item's status for quick recognition.
      </p>
      <h3>Usages</h3>
      <div className="showcase">
        <div className="badge">
          <img
            className="avatar"
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
          />
          <span className="online"></span>
        </div>
        <div className="badge">
          <img
            className="avatar"
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
          />
          <span className="offline"></span>
        </div>
        <div className="badge">
          <img
            className="avatar"
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
            alt=""
          />
          <span className="dnd"></span>
        </div>
      </div>
      <p>To achieve the above badge, you need to follow the following code:</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252Ffor%2520online%2520Badge%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520className%253D%27avatar%27%2520src%253D%2522URL%2522%252F%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522online%2522%253E%253C%252Fspan%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520for%2520Offline%2520Badge%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520className%253D%27avatar%27%2520src%253D%2522URL%2522%252F%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522offline%2522%253E%253C%252Fspan%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252Ffor%2520DND%2520Badge%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520className%253D%27avatar%27%2520src%253D%2522URL%2522%2520%252F%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522dnd%2522%253E%253C%252Fspan%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      {/* image card  */}
      <h1>Icon Badge</h1>
      <p>
        Icon Badge is used to show the quantity on the top of the svg/image.
      </p>
      <h3>Usages</h3>
      <div className="showcase">
        <div className="badge">
          <img
            className="avatar"
            src="https://res.cloudinary.com/dbrpnkzsx/image/upload/v1688703091/goku_a5p2o2.jpg"
          />
          <span className="number">20</span>
        </div>
      </div>
      <p>To achieve the above Badge, you need to follow the following code:</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520for%2520Icon%2520Badge%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522badge%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520className%253D%27avatar%27%2520src%253D%2522URL%2522%2520%252F%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520className%253D%2522number%2522%253E%253C%252Fspan%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};
export default Badge;
