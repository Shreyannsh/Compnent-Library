import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModel] = useState(false);

  const handleShowModal = () => setShowModel(!showModal);
  const handleCloseModal = () => setShowModel(false);

  return (
    <div className="container">
      <h1>Modal</h1>
      <p>
        The modal component is a component that can be used to display
        information to the user. It can be used to display information that is
        not important to the user, but is important to the application.
      </p>
      <h3>Usages</h3>
      <div className="showcase">
        <button className="show-modal-btn" onClick={handleShowModal}>
          Click to Show the modal
        </button>
        {showModal && (
          <div className="modal-main">
            <div className="modal">
              <button className="dismiss-modal" onClick={handleCloseModal}>
                X
              </button>
              <div className="modal-content">
                <h1>This is Modal</h1>
              </div>
            </div>
          </div>
        )}
      </div>
      <p>To achive Above model you have to follow the Following code. </p>
      <h3>For ReactJS:</h3>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%252F%252FReact%2520functions%250A%250Aconst%2520%255BshowModal%252C%2520setShowModel%255D%2520%253D%2520useState%28false%29%253B%250A%250Aconst%2520handleShowModal%2520%253D%2520%28%29%2520%253D%253E%2520setShowModel%28%21showModal%29%253B%250A%250Aconst%2520handleCl%252FoseModal%2520%253D%2520%28%29%2520%253D%253E%2520setShowModel%28false%29%253B"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28228%2C228%2C228%2C1%29&t=vscode&wt=none&l=javascript&width=871&ds=true&dsyoff=20px&dsblur=52px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=13.5px&lh=90%25&si=false&es=2x&wm=false&code=%2520%252F%252F%2520for%2520React%2520you%2520have%2520to%2520use%2520the%2520following%2520code%250A%250A%253Cbutton%2520className%253D%2522show-modal-btn%2522%2520onClick%253D%257BhandleShowModal%257D%253E%250A%2520%2520%250AClick%2520to%2520Show%2520the%2520modal%250A%250A%253C%252Fbutton%253E%250A%250A%257BshowModal%2520%2526%2526%2520%28%250A%2520%2520%250A%253Cdiv%2520className%253D%2522modal-main%2522%253E%250A%2520%2520%250A%2520%2520%253Cdiv%2520className%253D%2522modal%2522%253E%250A%2520%2520%250A%2520%2520%2520%2520%253Cbutton%2520className%253D%2522dismiss-modal%2522%2520onClick%253D%257BhandleCloseModal%257D%253E%250A%2520%2520%250A%2520%2520%2520%2520%2520%2520X%250A%250A%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522modal-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%250A%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EThis%2520is%2520Modal%253C%252Fh1%253E%250A%250A%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%253C%252Fdiv%253E%250A%250A%253C%252Fdiv%253E"
        className="iframe"
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </div>
  );
};
export default Modal;
