import { styled } from "@stitches/react"

import Onda from "../assets/img/Onda.png"
import Foguete from "../assets/img/rocket.png"
import useWindowDimensions from "../hooks/UseWindowDimentions"

const Wrapper = styled("div", {
	display: "flex",
	gap: "10px",
	alignItems: "center",
	margin: "50px 0px",
	alignSelf: "end",

	"&:nth-child(2n)": {
		alignSelf: "start",

		"& .imagem": {
			background: "linear-gradient(#FC0AC7, #FC0AC700)",
		},

		"& .firula": {
			transform: "translateX(-20%) scaleX(-1)",
		},

		"& .content .line img": {
			right: "-35px",
			bottom: "-15px",
			left: "unset",
			transform: "scaleX(1)",
		},
	},

	"& .imagem": {
		position: "relative",
		zIndex: "1",
		$$size: "180px",
		width: "$$size",
		minWidth: "$$size",
		height: "$$size",
		background: "linear-gradient(#0FECD1, #FC0AC700)",
		borderRadius: "50%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",

		"& img": {
			borderRadius: "50%",
			width: "97%",
			height: "97%",
		},
	},

	"& .content": {
		display: "flex",
		flexDirection: "column",
		gap: "5px",

		"& h3": {
			fontSize: "1.4em",
			fontWeight: "bold",
		},
		"& h4": {
			fontSize: "1.2em",
			fontWeight: "bold",
			color: "#FF0099",
		},
		"& .line": {
			position: "relative",

			margin: "10px 0",
			height: "1px",
			width: "110%",
			background: "linear-gradient(to right, #FC0AC7, #1AFFF1)",
			transform: "translateX(-10%)",
			zIndex: "-1",

			"& img": {
				position: "absolute",
				left: "-35px",
				bottom: "-15px",
				transform: "scaleX(-1)",
			},
		},
	},

	"&.alternative": {
		flexDirection: "row-reverse",

		"& .content": {
			alignItems: "end",
			textAlign: "right",

			"& .line": {
				transform: "translateX(10%)",
				// background: "linear-gradient(to left, #FC0AC7, #1AFFF1)",
			},
		},
	},

	"&.break": {
		flexDirection: "column",
		alignItems: "start",

		"&.alternative": {
			alignItems: "end",
		},

		"& .line": {
			width: "90%",
		},
	},
})

const Firula = styled("div", {
	position: "absolute",
	bottom: "0",
	right: "0",
	transform: "translateX(50%)",
	width: "250px",
	zIndex: -1,
})

type ItemProps = {
	title: string
	subtitle: string
	description: string
	alternative?: boolean
	children: React.ReactNode
}

function PalestraItem(props: ItemProps) {
	const { height, width } = useWindowDimensions()
	const breakpointMobile = 700

	return (
		<Wrapper
			className={
				props.alternative
					? width < breakpointMobile
						? "alternative break"
						: "alternative"
					: width < breakpointMobile
					? "break"
					: ""
			}
		>
			<div className="imagem">
				{props.children}

				<Firula className="firula">
					<img src={Onda} alt="" />
				</Firula>
			</div>
			<div className="content">
				<h3>{props.title}</h3>
				<h4>{props.subtitle}</h4>
				<span className="line">
					<img src={Foguete} />
				</span>
				<h5>{props.description}</h5>
			</div>
		</Wrapper>
	)
}

export default PalestraItem
