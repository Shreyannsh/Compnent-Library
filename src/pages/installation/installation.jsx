import "../../style/main.css";
import "./installation.css";

const Installation = () => {
  return (
    <div className="installationContainer">
      <h1>Get Started</h1>
      <p>
        ElementHub is a collection of web components that can help you create
        websites faster and better. Componently helps you to quickly build your
        Dream Project, by focusing much on Functionality, because we take care
        of your Designs.
      </p>
      <h1>Installation</h1>
      <p>
        You can add Componently to your Website/Project via the free unpkg CDN.
        Just add the following link element into your page's head, before your
        project's stylesheets
      </p>

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fcompnent-library.vercel.app%252Fstyle%252Fmain.css%2522%2520%252F%253E%250A%250A"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <p>Also you can import to your stylesheets by import link</p>

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2509%2509%2509%2509%2509%2540import%2520url%28%27https%253A%252F%252Fcompnent-library.vercel.app%252Fstyle%252Fmain.css%27%29%250A%250A"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h3>Using EmelmentHub style to your web pages</h3>
      <p>
        After linking to your style you can simply write the class or className
        for your HTML element and style will be applied to your elements
      </p>
      <div className="showcaseBtn">
        <p>
          <b>Example:</b> button before Adding ElementHub Styles
        </p>

        <button>Button</button>
      </div>

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%27btn%27%253EButton%253C%252Fbutton%253E%250A%250A"
        //style="width: 871px; height: 93px; border:0; transform: scale(1); overflow:hidden;"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>

      <div className="showcaseBtn">
        <p>button after Adding ElementHub Styles</p>
        <button className="btn">Button</button>
      </div>
    </div>
  );
};
export default Installation;
