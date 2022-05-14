import { styled } from "@stitches/react"

const Card = styled("div", {
	"&": {
		background: "linear-gradient(#09B1E6, #09B1E600, #09B1E6)",
		backgroundSize: "100% 200%",
		borderRadius: "10px",
		padding: "2px",
		flex: "1",
		minWidth: "260px",
		maxWidth: "300px",
		transition: "background-size 300ms ease",

		"&.roxo": {
			background: "linear-gradient(#430163, #09B1E600, #430163)",
			backgroundSize: "100% 200%",
		},

		"&.vermelho": {
			background: "linear-gradient(#F7015A, #09B1E600, #F7015A)",
			backgroundSize: "100% 200%",
		},

		"& > div": {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
			padding: "40px 10px",
			borderRadius: "10px",
			background: "#2F1E2D",
		},

		"& .wrapperImage": {
			width: "150px",

			"& img": {
				width: "100%",
				height: "100%",
				objectFit: "cover",
			},
		},

		"& .line": {
			width: "30%",
			height: "2px",
			background: "white",
			margin: "20px auto",

			transition: "width 150ms ease-in-out",
		},

		"& .wrapperContent": {
			width: "70%",
			"& .content": {
				marginTop: "20px",
				maxHeight: "0px",
				overflow: "hidden",
				transition: "all 300ms ease-in-out",

				"& h5": {
					fontWeight: "400",
				},
			},
		},

		"&:hover": {
			backgroundSize: "100% 100%",

			"& .content": {
				maxHeight: "200px",
			},
			"& .line": {
				width: "70%",
			},
		},
	},
})

type ItemProps = {
	title: string
	date: string
	description: string
	color: "roxo" | "azul" | "vermelho"
	children?: React.ReactNode
}

function PalestraItem(props: ItemProps) {
	return (
		<Card className={props.color}>
			<div>
				<div className="wrapperImage">{props.children}</div>
				<span className="line"></span>
				<div className="wrapperContent">
					<h4>{props.title}</h4>
					<div className="content">
						<h5>{props.date}</h5>
						<h5>{props.description}</h5>
					</div>
				</div>
			</div>
		</Card>
	)
}

export default PalestraItem
