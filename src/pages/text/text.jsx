const Text = () => {
  return (
    <div className="container">
      <h1>Text</h1>
      <p>
        Text component is the used to render text and paragraphs within an
        interface. Our default text color is black.
      </p>
      <h3>Usage</h3>
      <div className="showcase">
        <p className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          velit sapiente, eveniet atque perferendis maxime possimus non, ut
          voluptatibus necessitatibus voluptatem, quae tempora tenetur quod.
        </p>
      </div>
      <p>To achive this text you have to follow the below code.</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%252F%252Ffor%2520default%2520text%250A%250A%2520%2520%2520%2520%253Cp%2520className%253D%2522text%2522%253EYour%2520Text%2520%253C%252Fp%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h1>Centered text</h1>
      <p>
        Centered text component is the used to render text and paragraphs in
        center within an interface. Our default text color is black.
      </p>
      <h3>Usage</h3>
      <div className="showcase">
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          velit sapiente, eveniet atque perferendis maxime possimus non, ut
          voluptatibus necessitatibus voluptatem, quae tempora tenetur quod.
        </p>
      </div>
      <p>To achive this text you have to follow the below code.</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%252F%252Ffor%2520default%2520text%250A%250A%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522text-center%2522%253EYour%2520Text%2520%253C%252Fp%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h1>Text with Styling</h1>
      <p>We have predefined some style/tranformation of the texts.</p>
      <h3>Usage</h3>
      <div className="showcase">
        <div style={{ width: "50%" }}>
          <p className="text-underline">
            Lorem, ipsum dolor sit amet consectetur
          </p>
          <p className="text-linethrough">
            Lorem, ipsum dolor sit amet consectetur
          </p>
          <p className="text-hilight">
            Lorem, ipsum dolor sit amet consectetur
          </p>
          <p className="text-italic">Lorem, ipsum dolor sit amet consectetur</p>
        </div>
      </div>
      <p>To achive this text you have to follow the below code.</p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%252F%252Ffor%2520styled%2520text%250A%250A%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522text-underline%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520Lorem%252C%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%250A%250A%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522text-linethrough%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520Lorem%252C%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%250A%250A%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522text-hilight%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520Lorem%252C%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%250A%250A%2520%2520%2520%2520%2520%2520%253C%252Fp%253E%250A%250A%2520%2520%2520%2520%2520%2520%253Cp%2520className%253D%2522text-italic%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520Lorem%252C%2520ipsum%2520dolor%2520sit%2520amet%2520consectetur%250A%2520%2520%2520%2520%2520%2520%253C%252Fp%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};
export default Text;
