import { styled } from "@stitches/react"

const Card = styled("div", {
	"&": {
		background: "linear-gradient(#09B1E6, #09B1E600)",
		borderRadius: "10px",
		padding: "2px",
		flex: "1",
		minWidth: "260px",
		maxWidth: "300px",

		"&.roxo": {
			background: "linear-gradient(#430163, #09B1E600)",
		},

		"&.vermelho": {
			background: "linear-gradient(#F7015A, #09B1E600)",
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
			width: "70%",
			height: "2px",
			background: "white",
			margin: "20px auto",
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

		"&:hover .content": {
			maxHeight: "200px",
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
				<div className="wrapperImage">
					<img
						src="https://blog.megajogos.com.br/wp-content/uploads/2018/07/no-image.jpg"
						alt=""
					/>
				</div>
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
