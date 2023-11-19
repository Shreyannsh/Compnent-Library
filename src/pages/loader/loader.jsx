const Loader = () => {
  return (
    <div className="container">
      <h1>Loader</h1>
      <p>
        Loader are used to show loading screen while data are loading and taking
        time. it is used to show that something happening for better experience
        of user.{" "}
      </p>
      <h3>Usage</h3>
      <div className="showcase">
        <div className="loader">
          <div className="loader-inside"></div>
        </div>
        <div className="loader-sec">
          <div className="loader-inside-sec"></div>
        </div>
      </div>
      <p>To achive these above style you have to follow the following code.</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%252F%252Ffor%2520loader%2520%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522loader%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522loader__inside%2522%253E%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%250A%2520%2520%2520%2520%252F%252F%2520for%2520secondary%2520loader%250A%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522loader-sec%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522loader-inside-sec%2522%253E%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253C%252Fdiv%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};
export default Loader;
