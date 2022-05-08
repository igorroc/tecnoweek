import { styled } from "@stitches/react"
import { useState } from "react"

const ButtonWrapper = styled("div", {
	"&": {
		position: "relative",
		zIndex: "1",
	},

	"& button": {
		cursor: "pointer",
		fontSize: "1.2em",
		padding: ".4em .8em",
		background: "linear-gradient(to right, #6F1643, #861E7A)",
		border: "none",
		borderRadius: ".6em",
		fontWeight: "bold",
		color: "white",
		boxShadow: `2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
                    6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
                    12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
                    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
                    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
                    100px 100px 80px rgba(0, 0, 0, 0.07)`,
	},

	"& ul": {
		position: "absolute",
		zIndex: "-1",
		left: "50%",
		transform: "translateX(-50%)",
		maxHeight: "0px",
		overflowY: "hidden",
		display: "flex",
		flexDirection: "column",
		gap: ".4em",
		padding: "0em 2em 0em .5em",
		transition: "all 500ms ease",
		background: "linear-gradient(#861E7A, #490942)",
		borderRadius: "0 0 .6em .6em",

		"&.buttonOpen": {
			maxHeight: "100px",
			padding: "1em 2em .5em .5em",
		},
	},
})

type buttonProps = {
	title: string
	children: React.ReactNode
}

function DropDownButton(props: buttonProps) {
	const [clicked, setClicked] = useState(false)

	function handleClick() {
		console.log("oi")
		setClicked(!clicked)
	}
	return (
		<ButtonWrapper>
			<button onClick={handleClick}>{props.title}</button>
			<ul className={clicked ? "buttonOpen" : ""}>{props.children}</ul>
		</ButtonWrapper>
	)
}

export default DropDownButton
