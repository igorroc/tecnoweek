import { keyframes, styled } from "@stitches/react"
import { MaxWidthWrapper } from "../components/Global/MaxWidthWrapper"
import Header from "../components/Header"
import Arrow from "../components/Arrow"
import PalestraItem from "../components/PalestraItem"
import CardCourse from "../components/CardCourse"
import { Footer } from "../components/Footer"

import PcGif from "../assets/gif/GIF PC.gif"
import TecnoWeek from "../assets/img/TecnoWeekWithoutArrow.png"
import Controle from "../assets/img/Controle.png"
import Seta from "../assets/img/Seta.png"
import Onda from "../assets/img/Onda.png"
import Circuitinhos from "../assets/img/Circuitinhos.png"
import Gesil from "../assets/img/gesil.png"
import Leka from "../assets/img/leka.png"
import Ambrosio from "../assets/img/ambrosio.png"
import Pandas from "../assets/img/pandas.png"
import Figma from "../assets/img/figma.png"
import BugBounty from "../assets/img/bugbounty.png"
import useWindowDimensions from "../hooks/UseWindowDimentions"

const floatUpDown = keyframes({
	"0%": {
		transform: "translateY(-20px)",
	},
	"50%": {
		transform: "translateY(20px)",
	},
	"100%": {
		transform: "translateY(-20px)",
	},
})

const MainContent = styled("main", {
	"&": {
		marginTop: "160px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",

		"&.breakMobile": {
			flexDirection: "column",
			gap: "50px",

			"& #right": {
				transform: "scale(0.7)",
			},
		},

		"& #left": {
			display: "flex",
			flexDirection: "column",
			gap: "1em",

			"& #title": {
				position: "relative",
				width: "100%",

				"& > img": {
					width: "350px",
				},

				"& #arrow": {
					position: "absolute",
					bottom: "-70px",
					right: "-10px",
					transform: "scale(0.8)",
				},
			},

			"& > img": {
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
	},
})

const WrapperPc = styled("div", {
	"&": {
		position: "relative",

		"& img": {
			"&#seta": {
				width: "20%",
				position: "absolute",
				bottom: "-15%",
				right: "-10%",
				// animation: `${floatLeftRight} 3.6s ease-in-out infinite`,
			},
			"&#controle": {
				width: "30%",
				position: "absolute",
				bottom: "-10%",
				left: "-10%",
				animation: `${floatUpDown} 3.2s ease-in-out infinite`,
				filter: `drop-shadow(1.7px 1.9px 4.6px -17px rgba(0, 0, 0, 0.15),
						4.8px 5.4px 12.8px -17px rgba(0, 0, 0, 0.2),
						11.5px 13px 30.8px -17px rgba(0, 0, 0, 0.27),
						38px 43px 102px -17px rgba(0, 0, 0, 0.42))`,
			},
			"&#onda": {
				width: "40%",

				position: "absolute",
				top: "-20%",
				left: "-15%",
				// animation: `${scale} 4.4s ease-in-out infinite`,
			},
			"&#pc": {
				transform: "scaleX(-1)",
				width: "100%",
				boxShadow: `1.7px 1.9px 4.6px -17px rgba(0, 0, 0, 0.15),
							4.8px 5.4px 12.8px -17px rgba(0, 0, 0, 0.2),
							11.5px 13px 30.8px -17px rgba(0, 0, 0, 0.27),
							38px 43px 102px -17px rgba(0, 0, 0, 0.42)`,
			},
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
			textAlign: "center",
			fontStyle: "italic",
			filter: "drop-shadow(2px 2px 0px #F7015A)",
			},
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

const WrapperCouses = styled("div", {
	"&": {
		display: "flex",
		gap: "40px",
		flexWrap: "wrap",
		alignItems: "start",
		justifyContent: "center",
		marginTop: "100px",
	},
})

function Home() {
	const { height, width } = useWindowDimensions()
	const breakpointMobile = 1220

	return (
		<div>
			<Header />
			<MaxWidthWrapper>
				<MainContent
					id="inicio"
					className={width < breakpointMobile ? "breakMobile" : ""}
				>
					<div id="left">
						<div id="title">
							<img src={TecnoWeek} />
							<span id="arrow">
								<Arrow direction="left" blinking></Arrow>
							</span>
						</div>
						<h2>Tecnologia e Inovação</h2>
						<h3>25 à 27 de maio</h3>
						<p>Na Universidade Estadual de Santa Cruz</p>
					</div>
					<div id="right">
						<WrapperPc>
							<img src={PcGif} id="pc" />
							<img src={Onda} id="onda" />
							<img src={Controle} id="controle" />
							<img src={Seta} id="seta" />
						</WrapperPc>
					</div>
				</MainContent>
				<SectionContent id="sobre">
					<h2 className="blue">O que é o evento?</h2>
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

				{/* Palestras */}
				<SectionContent>
					<h2>Palestras</h2>
					<PalestraItem
						title="Propriedade Intelectual e Inovação"
						subtitle="Dr. Gesil Sampaio"
						description="25/05 ás 14hrs"
					>
						<img src={Gesil} alt="Leka Hattori" />
					</PalestraItem>
					<PalestraItem
						title="Empreendedorismo Feminino"
						subtitle="Leka Hattori"
						description="25/05 ás 15hrs"
						alternative
					>
						<img src={Leka} alt="Leka Hattori" />
					</PalestraItem>
					<PalestraItem
						title="Visão Computacional da Indústria"
						subtitle="Dr. Paulo Ambrósio"
						description="27/05 ás 14hrs"
					>
						<img src={Ambrosio} alt="Leka Hattori" />
					</PalestraItem>
				</SectionContent>

				{/* MiniCurso */}
				<SectionContent>
					<h2 className="purple">MiniCursos</h2>
					<WrapperCouses>
						<CardCourse
							title="Introdução ao Pandas"
							color="azul"
							date="Dia 25/05"
							description="De 8:00 às 12:00 com João Rupp"
						>
							<img src={Pandas} alt="Pandas" />
						</CardCourse>
						<CardCourse
							title="Explorando o Cross-Site Scripting (XSS)"
							color="roxo"
							date="Dia 26/05"
							description="De 8:00 às 12:00 com Breno Vitório"
						>
							<img src={BugBounty} alt="Pandas" />
						</CardCourse>
						<CardCourse
							title="Design com Figma"
							color="vermelho"
							date="Dia 27/05"
							description="De 8:00 às 12:00 com Igor Rocha"
						>
							<img src={Figma} alt="Pandas" />
						</CardCourse>
					</WrapperCouses>
				</SectionContent>
			</MaxWidthWrapper>
			<Footer />
		</div>
	)
}

export default Home
