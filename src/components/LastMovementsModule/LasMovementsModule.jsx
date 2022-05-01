import "./LasMovementsModule.scss";

const LasMovementsModule = () => {
  return (
    <div className="LastMovementsModule">
        <h2>Last 3 movements</h2>
        <div className="container-timeline">
            <ul className="ul-timeline">
                <li className="li-container">
                    <div className="date-timeline">
                        <h4>14 MAY</h4>
                    </div>
                    <div className="divider">
                        <span id="circle"></span>
                        <span id="line"> </span>
                    </div>
                    <div className="text">
                        <h4>Nombre del gasto</h4>
                        <small>Category</small>
                        <h3 id="amount">55,55€</h3>
                    </div>
                </li>
                <li className="li-container">
                    <div className="date-timeline">
                        <h4>14 MAY</h4>
                    </div>
                    <div className="divider">
                        <span id="circle"></span>
                        <span id="line"> </span>
                    </div>
                    <div className="text">
                        <h4>Nombre del gasto</h4>
                        <small>Category</small>
                        <h3 id="amount">55,55€</h3>
                    </div>
                </li>
                <li className="li-container">
                    <div className="date-timeline">
                        <h4>14 MAY</h4>
                    </div>
                    <div className="divider">
                        <span id="circle"></span>
                        <span id="line"> </span>
                    </div>
                    <div className="text">
                        <h4>Nombre del gasto</h4>
                        <small>Category</small>
                        <h3 id="amount">55,55€</h3>
                    </div>
                </li>
            </ul>
        </div>
    </div> 
  );
};

export default LasMovementsModule;
