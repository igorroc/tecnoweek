import { styled } from "@stitches/react"
import Header from "../components/Header"
import TecnoWeek from "../assets/img/TecnoWeek.png"
import Firulinhas from "../assets/img/Firulinhas.png"
import Circuitinhos from "../assets/img/Circuitinhos.png"
import { MaxWidthWrapper } from "../components/Global/MaxWidthWrapper"
import Arrow from "../components/Arrow"
import PalestraItem from "../components/PalestraItem"

const MainContent = styled("main", {
	"&": {
		paddingTop: "150px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",

		"& #left": {
			display: "flex",
			flexDirection: "column",
			gap: "1em",

			"& img": {
				width: "100%",

				maxWidth: "400px",
			},

			"& h2": {
				fontSize: "2em",
			},
			"& h3": {
				fontSize: "1.5em",
				color: "#FF0099",
			},
			"& p": {
				fontSize: "1.2em",
			},
		},

		"& #right img": {
			width: "100%",
			maxWidth: "500px",
		},
	},
})

const SectionContent = styled("section", {
	"&": {
		margin: "100px 0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",

		"& h2": {
			fontSize: "2em",
			fontWeight: "bold",
			textTransform: "uppercase",
			fontStyle: "italic",
		},

		"& .background": {
			position: "absolute",
			width: "100%",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			zIndex: "-1",

			"& img": {
				width: "300px",
				opacity: ".6",

				"&:nth-child(2n)": {
					transform: "scaleX(-1)",
				},
			},
		},
	},
})

const AboutList = styled("ul", {
	"&": {
		width: "80%",
		marginTop: "80px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "3em",

		"& li": {
			position: "relative",
			maxWidth: "680px",
			alignSelf: "start",

			border: "2px solid #33C6C6a0",
			borderRadius: "1.5em",
			padding: "1em",
			backdropFilter: "blur(20px)",

			"&:after": {
				content: "",
				position: "absolute",
				left: "-302px",
				top: "50%",
				height: "2px",
				width: "300px",
				background: "linear-gradient(to right, #33C6C600, #33C6C6a0)",
			},
			"&:nth-child(2n)": {
				alignSelf: "end",

				"&:after": {
					left: "unset",
					right: "-302px",
					background:
						"linear-gradient(to left, #33C6C600, #33C6C6a0)",
				},
			},
		},
	},
})

function Home() {
	return (
		<div>
			<Header />
			<MaxWidthWrapper>
				<MainContent id="inicio">
					<div id="left">
						<img src={TecnoWeek} />
						<h2>Tecnologia e Inovação</h2>
						<h3>25 à 27 de maio</h3>
						<p>Na Universidade Estadual de Santa Cruz</p>
					</div>
					<div id="right">
						<img src={Firulinhas} />
					</div>
				</MainContent>
				<SectionContent id="sobre">
					<h2>O que é o evento?</h2>
					<AboutList>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed a posuere elit. Vivamus sagittis diam et
							diam fringilla, eu mollis risus ultrices.{" "}
						</li>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed a posuere elit. Vivamus sagittis diam et
							diam fringilla, eu mollis risus ultrices. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit.
							Sed a posuere elit. Vivamus sagittis diam et diam
							fringilla, eu mollis risus ultrices.{" "}
						</li>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Sed a posuere elit. Vivamus sagittis diam et
							diam fringilla, eu mollis risus ultrices.{" "}
						</li>
					</AboutList>
					<div className="background">
						<img src={Circuitinhos} />
						<img src={Circuitinhos} />
					</div>
				</SectionContent>
				<Arrow direction="down" blinking={true} />
				<SectionContent>
					<h2>Palestras</h2>
					<PalestraItem
						// img={}
						title="Propriedade Intelectual e Inovação"
						subtitle="Dr. Gesil Sampaio"
						description="27/05 ás 14hrs"
					/>
				</SectionContent>
			</MaxWidthWrapper>
		</div>
	)
}

export default Home
