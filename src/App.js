import { useState } from "react";
import TextExpanderContainer from "./textexpander";

export default function App() {
    return (
        <div>
            <Calculator />
            <TextExpanderContainer />
        </div>
    );
}

function Calculator() {
    const [bill, setBill] = useState("");
    const [service, setService] = useState(0);
    const [friendService, setFriendService] = useState(0);

    function handleRest() {
        setBill("");
        setService(0);
        setFriendService(0);
    }

    return (
        <div className="calculator">
            <h2>Tip Calculator</h2>

            <BillInput bill={bill} onSetBill={setBill} />

            <ServiceRate service={service} onSetService={setService}>
                <label>How did you like the service?</label>
            </ServiceRate>

            <ServiceRate
                service={friendService}
                onSetService={setFriendService}
            >
                <label>How did your friend like the service?</label>
            </ServiceRate>

            <Output
                bill={bill}
                service={service}
                friendService={friendService}
            />

            <Reset onReset={handleRest} />
        </div>
    );
}

function BillInput({ bill, onSetBill }) {
    return (
        <div className="bill">
            <label>How much was the bill?</label>
            <input
                placeholder="bill value"
                type="number"
                value={bill}
                onChange={(e) => onSetBill(Number(e.target.value))}
            />
        </div>
    );
}

function ServiceRate({ service, onSetService, children }) {
    return (
        <div className="service">
            {children}
            <select
                value={service}
                onChange={(e) => onSetService(Number(e.target.value))}
            >
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
}

function Output({ bill, service, friendService }) {
    if (!bill) return;

    const avgRating = (service + friendService) / 2;
    const tip = (avgRating * bill) / 100;
    const totalBill = bill + tip;

    return (
        <div className="output">
            <p>
                You will pay ${totalBill}{" "}
                <span style={{ fontWeight: "bold" }}>
                    (${bill} + ${tip} tip)
                </span>
            </p>
        </div>
    );
}

function Reset({ onReset }) {
    return (
        <div className="reset">
            <button onClick={onReset}>Reset</button>
        </div>
    );
}
