import React, { useState, useEffect } from 'react';

function Stopwatch() {
	const [time, setTime] = useState(120000);
	const [start, setStart] = useState(false);

	useEffect(() => {
		let interval = null;
		if (start && time > 0) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime - 10);
			}, 10);
		} else {
			clearInterval(interval);
			// setStart(false);
		}

		return () => clearInterval(interval);
	}, [start, time]);

	let minutes = ('0' + Math.floor((time / 60000) % 60)).slice(-2);
	let seconds = ('0' + Math.floor((time / 1000) % 60)).slice(-2);
	let milliseconds = ('0' + ((time / 10) % 1000)).slice(-2);

	return (
		<div>
			<div>
				<h1>stopwatch</h1>
				<span className="time">{minutes}:</span>
				<span className="time">{seconds}:</span>
				<span className="time">{milliseconds}</span>
			</div>
			<div className="btn-container">
				{!start ? (
					<div>
						<button id="start" onClick={() => setStart(true)}>
							Start
						</button>
					</div>
				) : (
					<div>
						<button id="stop" onClick={() => setStart(false)}>
							Stop
						</button>
					</div>
				)}
				<div>
					<button onClick={() => setTime(120000)}>Reset</button>
				</div>
			</div>
		</div>
	);
}

export default Stopwatch;
