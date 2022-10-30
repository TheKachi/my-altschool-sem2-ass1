import "./App.css";
import { useState } from "react";

const App = () => {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");
	const [resultTemp, setResultTemp] = useState("");

	const operands = ["+", "-", "*", "/"];

	const updateCalc = (value) => {
		if (operands.includes(value) && calc === "") return;
		if (operands.includes(value) && operands.includes(calc.slice(-1))) return;

		setCalc(calc + value);
		if (!operands.includes(value)) {
			setResultTemp(eval(calc + value).toString());
		}
	};

	const createDigits = () => {
		const digits = [];
		for (let i = 9; i > 0; i--) {
			digits.push(
				<button
					onClick={() => updateCalc(i.toString())}
					key={i}
					className="bg-light-grayish-cyan text-dark-cyan text-3xl font-medium rounded shadow py-[12px]"
				>
					{i}
				</button>
			);
		}
		return digits;
	};

	const calculate = () => {
		setResult(resultTemp);
	};

	const clear = () => {
		if (calc === "") return;
		const value = calc.slice(0, -1);
		setCalc(value);
	};

	const clearAll = () => {
		setCalc("");
		setResult("");
	};

	return (
		<div className="container-grid bg-light-grayish-cyan w-screen h-screen flex justify-center items-center">
			<div className="inner-grid w-full sm:w-[50%] lg:w-[30%] xl:w-[25%] bg-white shadow rounded-lg p-[32px]">
				<div className="text-right">{calc || "0"}</div>

				<div className="text-right text-[32px] mb-[20px]">
					{result ? result : "0"}
				</div>

				<div className="grid grid-cols-4 gap-[12px] w-full">
					<div className="col-span-3">
						<div className="grid grid-cols-3 gap-[12px] ">
							{/* 0-9  */}
							{createDigits()}

							<button
								onClick={() => updateCalc("0")}
								className="bg-light-grayish-cyan text-dark-cyan text-3xl font-medium rounded shadow py-[12px]"
							>
								0
							</button>
							<button
								onClick={() => updateCalc(".")}
								className="bg-light-grayish-cyan text-dark-cyan text-3xl font-medium rounded shadow py-[12px]"
							>
								.
							</button>
							<button
								onClick={clear}
								className="bg-light-grayish-cyan text-dark-cyan text-3xl font-medium rounded shadow py-[12px]"
							>
								C
							</button>
						</div>
					</div>

					{/* operands buttons */}
					<div className="col-span-1 ">
						<div className="flex flex-col gap-[12px]">
							<button
								onClick={() => updateCalc("+")}
								className="bg-yellow text-dark-cyan text-3xl font-medium rounded shadow py-[12px]"
							>
								+
							</button>
							<button
								onClick={() => updateCalc("-")}
								className="bg-yellow text-dark-cyan text-3xl font-medium rounded shadow py-[12px]"
							>
								-
							</button>
							<button
								onClick={() => updateCalc("*")}
								className="bg-yellow text-dark-cyan text-3xl font-medium rounded shadow py-[12px]"
							>
								*
							</button>
							<button
								onClick={() => updateCalc("/")}
								className="bg-yellow text-dark-cyan text-3xl font-medium rounded shadow py-[12px]"
							>
								/
							</button>
						</div>
					</div>

					<button
						onClick={clearAll}
						className="col-span-2 bg-[#ff006f] text-white text-3xl font-medium rounded shadow py-[12px]"
					>
						Reset
					</button>
					<button
						onClick={calculate}
						className="col-span-2 bg-dark-cyan text-white text-3xl font-medium rounded shadow py-[12px]"
					>
						=
					</button>
				</div>

				{/* </div> */}
			</div>
		</div>
	);
};

export default App;
