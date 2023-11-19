const Alert = () => {
  return (
    <div className="container">
      <h1>Alert</h1>
      <p>
        Alerts are used to communicate a state that affects a system, feature or
        page.
      </p>
      <h3>Usages</h3>
      <div className="showcase">
        <div>
          <div className="alert">Alert!</div>

          <div className="alert alert-success">Success Alert!</div>

          <div className="alert alert-warning">Warning Alert!</div>
        </div>
      </div>
      <p>To achieve the above alert, you need to follow the following code:</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520For%2520Primary%2520Alert%2520%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert%2522%253EAlert%253C%252Fdiv%253E%250A%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520For%2520Success%2520Alert%2520%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert%2520alert-success%2522%253ESuccess%2520Alert%253C%252Fdiv%253E%250A%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520For%2520Warning%2520Alert%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert%2520alert-warning%2522%253EWarning%2520Alert%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h1>Outline Alert</h1>
      <p>
        Outline alerts are created by using alert class, followed by
        outline-variant.
      </p>
      <h3>Usages</h3>
      <div className="showcase">
        <div>
          <div className="alert outline-alert">Alert</div>

          <div className="alert alert-outline-success">Success Alert</div>

          <div className="alert alert-outline-warning">Warning Alert</div>
        </div>
      </div>
      <p>To achieve the above alert, you need to follow the following code:</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520For%2520Primary%2520Alert%2520%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert%2520outline-alert%2522%253EAlert%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520For%2520Success%2520Alert%2520%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert%2520alert-outline-success%2522%253ESuccess%2520Alert%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%252F%252F%2520For%2520Warning%2520Alert%2520%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%2522alert%2520alert-outline-warning%2522%253EWarning%2520Alert%253C%252Fdiv%253E%250A"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};
export default Alert;
