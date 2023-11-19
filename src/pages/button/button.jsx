import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="container">
      <h1>Button</h1>
      <p>
        The Button component is used to trigger an action or event, such as
        submitting a form, opening a dialog, canceling an action, or performing
        a delete operation.
      </p>

      <h1>Usage</h1>
      <div className="showcase">
        <button className="btn">Button</button>
        <button className="btn btn-danger">Delete</button>
        <button className="btn btn-submit"> Subimt</button>
        <button className="btn btn-close">Close</button>
      </div>
      <p>
        If you Are using <b> ReactJs </b> For achive these buttons you have
        follow the following code:
      </p>

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%252F%252Ffor%2520default%2520button%250A%250A%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2522%253EButton%253C%252Fbutton%253E%250A%250A%2520%2520%2520%2520%252F%252F%2520for%2520delete%2520or%2520remove%2520button%250A%250A%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-danger%2522%253EDelete%253C%252Fbutton%253E%250A%250A%2520%2520%2520%2520%252F%252Ffor%2520submit%2520button%2520%250A%250A%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-submit%2522%253E%2520Subimt%253C%252Fbutton%253E%250A%250A%2520%2520%2520%2520%252F%252Ffor%2520close%2520button%250A%250A%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2520btn-close%2522%253EClose%253C%252Fbutton%253E%250A"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <p>
        If you are using <b> HTML ,CSS </b> For achive these buttons you have
        follow the following code:
      </p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%252F%252Ffor%2520default%2520button%250A%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2522%253EButton%253C%252Fbutton%253E%250A%250A%2520%2520%2520%2520%252F%252F%2520for%2520delete%2520or%2520remove%2520button%250A%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-danger%2522%253EDelete%253C%252Fbutton%253E%250A%250A%2520%2520%2520%2520%252F%252Ffor%2520submit%2520button%2520%250A%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-submit%2522%253E%2520Subimt%253C%252Fbutton%253E%250A%250A%2520%2520%2520%2520%252F%252Ffor%2520close%2520button%250A%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-close%2522%253EClose%253C%252Fbutton%253E%250A"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h1>Button With Links</h1>
      <p>Button with link is used to link from one page to another.</p>
      <h3>Usages</h3>
      <div className="showcase">
        <button className="btn link-btn">
          <Link to="">Button</Link>
        </button>
      </div>
      <p>
        To achieve the above buttons, you need to follow the following code:
      </p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%252F%252F%2520for%2520link%2520Button%250A%250A%2520%2520%2520%2520%253Cbutton%2520className%253D%2522link-btn%2522%253E%2520%253CLink%2520to%253D%2522%2522%253EButton%253C%252FLink%253E%253C%252Fbutton%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h1>Icon Button</h1>
      <p>You can use Icons in your Buttons respectively.</p>
      <h3>Usages</h3>
      <div className="showcase">
        <button className="btn icon-btn">
          Button
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            class="cursor-pointer text-[#777]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path>
          </svg>
        </button>
      </div>
      <h1>Floating Action Button</h1>
      <p>You can use Icons in your Buttons respectively.</p>
      <h3>Usages</h3>
      <div className="showcase">
        <button className="btn float-btn">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
          </svg>
        </button>
      </div>
      <p>
        To achieve the above buttons, you need to follow the following code:
      </p>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%252F%252F%2520for%2520link%2520Button%250A%250A%253Cbutton%2520className%253D%2522btn%2520link-btn%2522%253EButton%2520%253Csvg%253E%252B%253C%252Fsvg%253E%253C%252Fbutton%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h1>Outline Button</h1>

      <div className="showcase">
        <button className="outline-btn">Button</button>
        <button className="outline-btn outline-delete">Delete </button>
        <button className="outline-btn outline-submit">Sumbit </button>
        <button className="outline-btn outline-cancel">Cancel </button>
        <button className="outline-btn outline-animation">Animation</button>
      </div>

      <p>To Achive these button you have to follow the following code</p>

      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%252F%252F%2520for%2520default%2520outline%2520button%250A%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522outline-btn%2522%253EButton%253C%252Fbutton%253E%250A%250A%2520%2520%2520%2520%2520%2520%252F%252Ffor%2520delete%2520outline%2520button%250A%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522outline-btn%2520outline-delete%2522%253EDelete%2520%253C%252Fbutton%253E%250A%250A%2520%2520%2520%2520%2520%2520%252F%252Ffor%2520submit%2520outline%2520button%250A%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522outline-btn%2520outline-submit%2522%253ESumbit%2520%253C%252Fbutton%253E%250A%250A%2520%2520%2520%2520%2520%2520%252F%252Ffor%2520cancel%2520outline%2520button%250A%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522outline-btn%2520outline-cancel%2522%253ECancel%2520%253C%252Fbutton%253E%250A%250A%2520%2520%2520%2520%2520%2520%252F%252Ffor%2520animation%2520outline%2520button%250A%250A%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522outline-btn%2520outline-animation%2522%253EAnimation%253C%252Fbutton%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};

export default Button;
