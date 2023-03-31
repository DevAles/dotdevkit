import "../styles/app.scss";

function Home() {
    return (
        <div id="mainContainer">
            <div id="firstSection">
                <div id="firstTextArea">
                    <h1>
                        The true <span>productivity</span> is here.
                    </h1>
                </div>

                <div id="firstVideoArea">
                    <video
                        id="demoVideo"
                        width="1200"
                        height="1200"
                        loop
                        autoPlay
                    >
                        <source src="/videos/demo0.mp4" type="video/mp4" />
                        Your browser not support the video tag, sorry :(
                    </video>
                </div>
            </div>

            <div id="secondSection">
                <div id="firstButtonArea">
                    <button className="actionButton">Download</button>
                    <button className="actionButton">Docs</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
