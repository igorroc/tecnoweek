import PcGif from "../assets/gif/GIF PC.gif"
import TecnoWeek from "../assets/img/TecnoWeekWithoutArrow.png"
import Controle from "../assets/img/Controle.png"
import Seta from "../assets/img/Seta.png"
import Onda from "../assets/img/Onda.png"
import { keyframes, styled } from "@stitches/react"
import Arrow from "../components/Arrow"
import { Icon } from "../components/Icon"

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

const scale = keyframes({
	"0%": {
		transform: "scale(1)",
	},
	"50%": {
		transform: "scale(1.2)",
	},
	"100%": {
		transform: "scale(1)",
	},
})

const floatLeftRight = keyframes({
	"0%": {
		transform: "translateX(10px)",
	},
	"50%": {
		transform: "translateX(-10px)",
	},
	"100%": {
		transform: "translateX(10px)",
	},
})

const Main = styled("div", {
	"&": {
		display: "flex",
		flexWrap: "wrap",
		width: "100vw",
		height: "100vh",

		alignItems: "center",
		justifyContent: "center",
		gap: "150px",

		"& #left": {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			gap: "2em",
			"& #title": {
				position: "relative",
				width: "100%",

				"& > img": {
					width: "350px",
				},
				"& #arrow": {
					position: "absolute",
					bottom: "-30%",
					right: "-13%",

					"& img": {
						width: "80%",
					},
				},
			},

			"& #content": {
				"& h1": {
					fontSize: "2em",
				},
				"& h2": {
					fontSize: "1.5em",
					color: "#FF0099",
				},
			},

			"& #social": {
				display: "flex",
				gap: "2em",
				"& svg": {
					fontSize: "2em",
					transition: "all 300ms ease",

					"&:hover": {
						color: "#FF0099",
					},
				},
			},
		},

		"& #right": {
			width: "400px",

			"& img": {
				"&#seta": {
					width: "20%",
					position: "absolute",
					bottom: "-15%",
					right: "-10%",
					animation: `${floatLeftRight} 3.6s ease-in-out infinite`,
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
					animation: `${scale} 4.4s ease-in-out infinite`,
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
	},
})

const Wrapper = styled("div", {
	"&": {
		position: "relative",
	},
})

function ComingSoon() {
	return (
		<Main>
			<div id="left">
				<div id="title">
					<img src={TecnoWeek} />
					<span id="arrow">
						<Arrow direction="left" blinking></Arrow>
					</span>
				</div>
				<div id="content">
					<h1>Em breve</h1>
					<h2>25 à 27 de maio</h2>
				</div>
				<div id="social">
					<a href="https://instagram.com/tecnojr" target="_blank">
						<Icon iconName="instagram" prefix="fab"></Icon>
					</a>
					<a href="https://tecnojr.com.br" target="_blank">
						<Icon iconName="globe" prefix="fas"></Icon>
					</a>
				</div>
			</div>
			<div id="right">
				<Wrapper>
					<img src={PcGif} id="pc" />
					<img src={Onda} id="onda" />
					<img src={Controle} id="controle" />
					<img src={Seta} id="seta" />
				</Wrapper>
			</div>
		</Main>
	)
}

export default ComingSoon
