import { styled } from "@stitches/react"

const Wrapper = styled("div", {
	display: "flex",
	gap: "10px",
	alignItems: "center",
	margin: "50px 0px",
	alignSelf: "end",

	"&:nth-child(2n)": {
		alignSelf: "start",
	},

	"& .imagem": {
		position: "relative",
		zIndex: "1",
		$$size: "150px",
		width: "$$size",
		height: "$$size",
		background: "linear-gradient(#FC0AC7, #FC0AC700)",
		borderRadius: "50%",
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
		},
	},

	"&.alternative": {
		flexDirection: "row-reverse",

		"& .content": {
			alignItems: "end",

			"& .line": {
				transform: "translateX(10%)",
				background: "linear-gradient(to left, #FC0AC7, #1AFFF1)",
			},
		},
	},
})

type ItemProps = {
	title: string
	subtitle: string
	description: string
	alternative?: boolean
}

function PalestraItem(props: ItemProps) {
	return (
		<Wrapper className={props.alternative ? "alternative" : ""}>
			<div className="imagem"></div>
			<div className="content">
				<h3>{props.title}</h3>
				<h4>{props.subtitle}</h4>
				<span className="line"></span>
				<h5>{props.description}</h5>
			</div>
		</Wrapper>
	)
}

export default PalestraItem
