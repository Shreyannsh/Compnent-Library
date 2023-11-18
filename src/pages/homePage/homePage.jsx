import "./homePage.css";

const HomePage = () => {
  return (
    <div className="parent">
      <div className="homePage">
        {/* <h1>CssStyler</h1> */}

        <p className="phrase-1">
          Keep your project styled with a utility-first CSS framework.
        </p>

        <p className="phrase-2">
          Style your projects with ease in a simple and quick manner with
          <b>
            <i> CssStyler </i>
          </b>
          which provide styling for your different project components.
        </p>

        <div className="btnSection">
          <button className="btnHomePage btnGetStarted">Get Started</button>{" "}
          <button className="btnHomePage btnGitHub">GitHub</button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
