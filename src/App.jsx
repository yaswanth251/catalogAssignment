import "./App.css";
import ChartComponent from "./Chart";

function App() {
  return (
    <>
      <div className="whole">
        {/* Top section displaying the amount */}
        <div className="moneyusd">
          <h1>63,179.71</h1>
          <h4>USD</h4>
        </div>
        <div className="up2">
          <p>+ 2,161.42 (3.54%)</p>
        </div>

        {/* Navigation options */}
        <ul className="options">
          <li>
            <a href="#">Summary</a>
          </li>
          <li>
            <a href="#" id="chart">
              Chart
            </a>
          </li>
          <li>
            <a href="#">Statistics</a>
          </li>
          <li>
            <a href="#">Analysis</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>

        {/* Timeframe and fullscreen/compare options */}
        <div className="up3">
          <div className="right">
            <span>
              <img
                src="https://cdn4.iconfinder.com/data/icons/video-player-line-set/32/VIDEO_PLAYER_04.FULL_SCREEN-512.png"
                alt="fullscreen-icon"
              />
              <a href="#">FullScreen</a>
            </span>
            <span>
              <img
                src="http://cdn.onlinewebfonts.com/svg/img_171718.png"
                alt="compare-icon"
              />
              <a href="#">Compare</a>
            </span>
          </div>
          <div className="left">
            <span><a href="#">1d</a></span>
            <span><a href="#">3d</a></span>
            <span id="week"><a href="#">1w</a></span>
            <span><a href="#">1m</a></span>
            <span><a href="#">6m</a></span>
            <span><a href="#">1y</a></span>
            <span><a href="#">max</a></span>
          </div>
        </div>
        <div className="hori">
          <hr id="hor"/>
          <hr id="ver"/>
        </div>
        <div className="inside">
          <hr id="ab1"/>
          <hr id="ab2"/>
          <hr id="ab3"/>
          <hr id="ab4"/>
          <hr id="ab5"/>
          <hr id="ab6"/>
        </div>
        <div>
          <ChartComponent/>
        </div>
        <div className="gpp">
          <img src="../gp.jpg" alt="" />
        </div>


      </div>
    </>
  );
}

export default App;
