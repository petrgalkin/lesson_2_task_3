import React from "react";
import styles from "./App.module.css";
import { useState } from "react";

export const App = () => {
	const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	// const manipulations = ["+", "-", "=", "C"];
	const [operand1, setOperand1] = useState("");
	const [operator, setOperator] = useState("");
	const [operand2, setOperand2] = useState("");
	const [resultDisplayed, setResultDisplayed] = useState(false);

	const num = (number) => {
		if (resultDisplayed) {
			setOperand1(num);
			setOperator("");
			setOperand2("");
			setResultDisplayed(false);
		} else if (operator) {
			setOperand2(operand2 + number);
		} else {
			setOperand1(operand1 + number);
		}
	};

	const operation = (oper) => {
		if (resultDisplayed) {
			setResultDisplayed(false);
		}
		if (operand1 && !operand2) {
			setOperator(oper);
		}
	};

	const clear = () => {
		setOperand1("");
		setOperator("");
		setOperand2("");
		setResultDisplayed(false);
	};

	const equals = () => {
		if (operand1 && operator && operand2) {
			const result = calculateResult();
			setOperand1(result.toString());
			setOperator("");
			setOperand2("");
			setResultDisplayed(true);
		}
	};

	const calculateResult = () => {
		const num1 = Number(operand1);
		const num2 = Number(operand2);
		switch (operator) {
			case "+":
				return num1 + num2;
			case "-":
				return num1 - num2;
			default:
				return 0;
		}
	};

	return (
		<>
			<header className={styles.header}>
				<h1>Калькулятор</h1>
			</header>
			<main>
				<article>
					<div
						className={
							resultDisplayed ? styles.result : styles.display
						}
					>
						<p>
							{operand1}
							{operator}
							{operand2}
						</p>
					</div>

					<div>
						<ul className={styles.buttons}>
							{NUMS.map((number) => {
								return (
									<li key={number}>
										<button
											className={styles.number}
											onClick={() => num(number)}
										>
											{number}
										</button>
									</li>
								);
							})}
						</ul>
					</div>

					<div className={styles.operations}>
						<button
							className={styles.operator}
							onClick={() => {
								operation("+");
							}}
						>
							+
						</button>
						<button
							className={styles.operator}
							onClick={() => {
								operation("-");
							}}
						>
							-
						</button>
						<button className={styles.operator} onClick={equals}>
							=
						</button>
						<button className={styles.operator} onClick={clear}>
							C
						</button>
					</div>
				</article>
			</main>
		</>
	);
};
