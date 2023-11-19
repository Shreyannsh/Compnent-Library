const Heading = () => {
  return (
    <div className="container">
      <h1>Headings</h1>
      <p>Heading are used to give heading of the content.</p>
      <h3>Usage</h3>
      <div className="showcase">
        <div className="head">
          <h1 class="master">Hello World</h1>
          <h2 className="submaster">Hello World</h2>
          <h3 className="miniheading">Hello World</h3>
          <h4 className="subminiheading">Hello World</h4>
          <h5 className="hyphenate">Hello World</h5>
          <h6 className="subhyphenate">Hello World</h6>
        </div>
      </div>
      <p>This is the default Headings from our component library</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%252F%252F%2520For%2520Default%2520Heading%2520Component%250A%250A%2520%2520%2520%2520%253Ch1%2520className%253D%2522master%2522%253EHello%2520World%253C%252Fh1%253E%250A%250A%2520%2520%2520%2520%253Ch2%2520className%253D%2522submaster%2522%253EHello%2520World%253C%252Fh2%253E%250A%250A%2520%2520%2520%2520%253Ch3%2520className%253D%2522miniheading%2522%253EHello%2520World%253C%252Fh3%253E%250A%250A%2520%2520%2520%2520%253Ch4%2520className%253D%2522subminiheading%2522%253EHello%2520World%253C%252Fh4%253E%250A%250A%2520%2520%2520%2520%253Ch5%2520className%253D%2522hyphenate%2522%253EHello%2520World%253C%252Fh5%253E%250A%250A%2520%2520%2520%2520%253Ch6%2520className%253D%2522subhyphenate%2522%253EHello%2520World%253C%252Fh6%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h1>Heading with Different Color</h1>
      <p>We have pre defined some Sizes for the Heading.</p>
      <h3>Usages</h3>
      <div className="showcase">
        {/* For Different Color Texts  */}
        <div className="head">
          <h1 className="head-cyan">Hello World</h1>
          <h2 className="head-red">Hello World</h2>
          <h3 className="head-green">Hello World</h3>
          <h4 className="head-yellow">Hello World</h4>
          <h5 className="head-gray">Hello World</h5>
          <h6 className="head-blue">Hello World</h6>
        </div>
      </div>
      <p>To achive above headings you have to follow the below code.</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%252F%252F%2520for%2520different%2520color%2520heading%2520%250A%250A%2520%2520%2520%2520%253Ch1%2520className%253D%2522head-cyan%2522%253EHello%2520World%253C%252Fh1%253E%250A%250A%2520%2520%2520%2520%253Ch2%2520className%253D%2522head-red%2522%253EHello%2520World%253C%252Fh2%253E%250A%250A%2520%2520%2520%2520%253Ch3%2520className%253D%2522head-green%2522%253EHello%2520World%253C%252Fh3%253E%250A%250A%2520%2520%2520%2520%253Ch4%2520className%253D%2522head-yellow%2522%253EHello%2520World%253C%252Fh4%253E%250A%250A%2520%2520%2520%2520%253Ch5%2520className%253D%2522head-gray%2522%253EHello%2520World%253C%252Fh5%253E%250A%250A%2520%2520%2520%2520%253Ch6%2520className%253D%2522head-blue%2522%253EHello%2520World%253C%252Fh6%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};
export default Heading;
