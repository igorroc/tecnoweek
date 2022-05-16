import { keyframes, styled } from "@stitches/react"
import Header from "../components/Header"
import { Icon } from "../components/Icon"
import BG from "../assets/img/background_inscricoes.png"
import InputMask from "../components/InputMask"
import { useRef, useState } from "react"

const ScaleUp = keyframes({
	"0%": {
		transform: "scale(0)",
	},
	"100%": {
		transform: "scale(1)",
	},
})

const MainPage = styled("div", {
	"&": {
		width: "100vw",
		height: "100vh",
		display: "flex",

		"& .popupModal": {
			position: "absolute",
			top: "calc(50% - 72.5px)",
			left: "calc(50% - 150px)",
			width: "300px",
			background: "#f6c7fe",
			color: "black",
			fontWeight: "bold",
			zIndex: "10",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			gap: "20px",
			boxShadow: "5px 5px 10px #33204970",
			border: "2px solid #332049",
			animation: `${ScaleUp} 350ms cubic-bezier(.59,.49,.55,1.29)`,

			"& .titlePopupModal": {
				width: "100%",
				padding: "5px 0",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				background: "#eca3ff",

				"& span": {
					marginLeft: "20px",
					color: "white",
					fontWeight: "500",
				},

				"& button": {
					width: "25px",
					height: "25px",
					marginRight: "20px",
					textAlign: "center",
					background: "#9da3b6",
					border: "1px solid #332049",
					borderRadius: "0",
					fontWeight: "bold",
					cursor: "pointer",
				},
			},

			"& > .popupOk": {
				border: "2px solid #332049",
				background: "#efa2ff",
				cursor: "pointer",
				width: "max-content",
				padding: "5px 25px",
				marginBottom: "20px",
			},
		},
	},
})
const Modal = styled("div", {
	"&": {
		background: "#2F1E2D",
		width: "500px",
		paddingBottom: "20px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		margin: "auto",
		border: "5px solid #C904B0",
		boxShadow: "0px 0px 10px #000",
		overflow: "hidden",
		transition: "transform 500ms ease-in-out",

		"&.closeModal": {
			transform: "scale(0)",
		},

		"& #windowTitleBar": {
			display: "flex",
			alignItems: "center",
			justifyContent: "end",
			gap: "10px",
			width: "100%",
			height: "40px",
			borderBottom: "5px solid #C904B0",

			"& .wrapperIcon": {
				position: "relative",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "20px",
				height: "20px",
				background: "#FF00DF",
				boxShadow: "2px 2px 0px #fff",
				cursor: "pointer",

				"&.disabled": {
					cursor: "not-allowed",
				},

				"&.opacity0": {
					opacity: 0,
					cursor: "auto",
				},
			},
			"& svg": {
				color: "#f7f7f7",
			},
		},

		"& h2": {
			margin: "20px 0",
			fontSize: "2em",
		},

		"& #form": {
			display: "flex",
			flexDirection: "column",
			gap: "20px",
			width: "70%",
			overflow: "hidden",

			"& #wrapperEtapas": {
				display: "flex",
				width: "100%",
				height: "250px",
				transform: "translateX(0px)",
				transition: "all 300ms ease",

				"&.currentOn1": {
					transform: "translateX(-100%)",
					height: "350px",
				},

				"& #etapa2": {
					"& p": {
						borderBottom: "1px solid white",
						fontSize: "1.4em",
					},
				},

				"& .etapa": {
					display: "flex",
					flexDirection: "column",
					gap: "20px",
					width: "100%",
					marginRight: "10px",

					"& .selection": {
						display: "flex",
						alignItems: "center",
						height: "20px",
						gap: "10px",
						position: "relative",

						"& label": {
							paddingLeft: "30px",
							cursor: "pointer",
						},

						"& input[type=checkbox]": {
							position: "absolute",
							opacity: "0",
							cursor: "pointer",
							height: "0",
							width: "0",
						},

						"& .checkmark": {
							position: "absolute",
							top: "0",
							left: "0",
							height: "20px",
							width: "20px",
							backgroundColor: "#eee",
						},

						"& input[type=checkbox]:checked ~ .checkmark": {
							backgroundColor: "#c904b0",
						},
					},
				},

				"& .question": {
					display: "flex",
					flexDirection: "column",
					gap: "10px",
					width: "350px",

					"& input": {
						background: "none",
						border: "none",
						borderBottom: "1px solid white",
						outline: "none",
						color: "white",
						position: "relative",

						"&:not(input[type=checkbox])": {
							width: "100%",
						},
					},

					"& select": {
						background: "none",
						border: "none",
						borderBottom: "1px solid white",
						color: "white",
						padding: "0",

						"& option": {
							background: "#232323",

							"&:focus, &:active, &:checked": {
								backgroundColor: "#FF00DF",
								fontWeight: "bold",
							},
						},
					},

					"& .line": {
						width: "100%",
						height: "2px",
						background: "white",
					},
				},
			},

			"& #timeline": {
				display: "flex",
				margin: "20px 0",
				alignItems: "center",

				"& button": {
					background: "#CA00B1",
					color: "white",
					fontWeight: "bold",
					padding: "5px 10px",
					border: "2px inset #232323",
					cursor: "pointer",

					"&:not(.showButton)": {
						opacity: 0,
					},
				},

				"& #timelineBar": {
					margin: "0 10px",
					flex: "1",
					background: "#F29DE8",
					padding: "2px",
					border: "2px inset #232323",
					height: "15px",
					display: "flex",
					gap: "2px",

					"& .step": {
						width: "10%",
						height: "100%",
						background: "#FF00DF",
					},
				},
			},
		},
	},
})

const Background = styled("div", {
	"&": {
		position: "absolute",
		zIndex: "-1",
		top: "0",
		left: "0",
		width: "100vw",
		height: "100vh",

		"& img": {
			width: "100%",
			height: "100%",
			objectFit: "cover",
		},
	},
})

function Inscricao() {
	document.body.style.overflow = "hidden"
	const [step, setStep] = useState(0)
	const [timeLine, setTimeLine] = useState(1)
	const [popups, setPopups] = useState(0)
	const [formFinalizado, setFormFinalizado] = useState(false)

	function handleStep(ev: any) {
		ev.preventDefault()

		let formIsValid = validateForm()

		if (!formIsValid) {
			document.querySelector("form")?.reportValidity()
			return
		}

		let passo = 1
		if (ev.target.id == "btnPrevious") passo = -1

		let final = step + passo
		final = final < 0 ? 0 : final
		final = final > 1 ? 1 : final

		setStep(final)

		setTimeLine(final * 5 + 1)
	}

	function finalizar(ev: any) {
		ev.preventDefault()
		let nome = document.querySelector("#nome") as any
		let matricula = document.querySelector("#matricula") as any
		let curso = document.querySelector("#curso") as any
		let email = document.querySelector("#email") as any

		let bugbounty = document.querySelector("#bugbounty") as any
		let figma = document.querySelector("#figma") as any
		let pandas = document.querySelector("#pandas") as any

		let propriedadeIntelectual = document.querySelector(
			"#propriedadeIntelectual"
		) as any
		let visaoComputacional = document.querySelector(
			"#visaoComputacional"
		) as any
		let participarTorneio = document.querySelector(
			"#participarTorneio"
		) as any

		console.log("FIM")
		console.log("nome:", nome.value)
		console.log("matricula:", matricula.value)
		console.log("curso:", curso.value)
		console.log("email:", email.value)

		console.log("figma:", figma.checked)
		console.log("bugbounty:", bugbounty.checked)
		console.log("pandas:", pandas.checked)

		console.log("propriedadeIntelectual:", propriedadeIntelectual.checked)
		console.log("visaoComputacional:", visaoComputacional.checked)
		console.log("participarTorneio:", participarTorneio.checked)

		setFormFinalizado(true)
		createPopup(null)
	}

	function validateForm() {
		let nome = document.querySelector("#nome") as any
		let matricula = document.querySelector("#matricula") as any
		let curso = document.querySelector("#curso") as any
		let email = document.querySelector("#email") as any

		if (nome?.value && matricula?.value && curso?.value && email?.value) {
			return true
		}
		return false
	}

	function createPopup(ev: any) {
		setPopups(popups + 1)
	}

	return (
		<MainPage>
			<Header></Header>
			<Modal className={formFinalizado ? "closeModal" : ""}>
				<div id="windowTitleBar">
					<div className="wrapperIcon disabled">
						<Icon iconName="window-minimize" prefix="fas"></Icon>
					</div>
					<div className="wrapperIcon disabled">
						<Icon iconName="window-maximize" prefix="fas"></Icon>
					</div>
					<a href="/">
						<div className="wrapperIcon">
							<Icon iconName="xmark" prefix="fas"></Icon>
						</div>
					</a>
					<div className="wrapperIcon opacity0"></div>
				</div>
				<h2>Inscreva-se</h2>
				<form action="" id="form">
					<div id="wrapperEtapas" className={`currentOn${step}`}>
						<div id="etapa1" className="etapa">
							<div className="question">
								<label htmlFor="nome">Nome Completo</label>
								<input
									type="text"
									id="nome"
									name="nome"
									placeholder="Insira seu nome aqui..."
									required
								/>
							</div>
							<div className="question">
								<label htmlFor="matricula">Matrícula</label>
								<InputMask
									type="text"
									id="matricula"
									name="matricula"
									placeholder="Ex: 202210111"
									mask="_________"
									maskType="number"
									required
								/>
							</div>
							<div className="question">
								<label htmlFor="curso">Curso</label>
								<select
									name="curso"
									id="curso"
									placeholder="Selecione seu curso"
									required
								>
									<option value="cic">
										Ciência da Computação
									</option>
									<option value="fis">Física</option>
									<option value="eng">Engenharia</option>
									<option value="mat">Matemática</option>
								</select>
							</div>
							<div className="question">
								<label htmlFor="email">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Ex: pessoa@gmail.com"
									required
								/>
							</div>
						</div>
						<div id="etapa2" className="etapa">
							<div className="question">
								<p>MiniCursos</p>
								<span className="selection">
									<label htmlFor="bugbounty">
										Introdução ao BugBounty
										<input
											type="checkbox"
											id="bugbounty"
											name="bugbounty"
										/>
										<span className="checkmark"></span>
									</label>
								</span>
								<span className="selection">
									<label htmlFor="figma">
										Design com Figma
										<input
											type="checkbox"
											id="figma"
											name="figma"
										/>
										<span className="checkmark"></span>
									</label>
								</span>
								<span className="selection">
									<label htmlFor="pandas">
										Introdução ao Pandas
										<input
											type="checkbox"
											id="pandas"
											name="pandas"
										/>
										<span className="checkmark"></span>
									</label>
								</span>
							</div>
							<div className="question">
								<p>Palestras</p>
								<span className="selection">
									<label htmlFor="propriedadeIntelectual">
										Propriedade intelectual e inovação
										<input
											type="checkbox"
											id="propriedadeIntelectual"
											name="propriedadeIntelectual"
										/>
										<span className="checkmark"></span>
									</label>
								</span>
								<span className="selection">
									<label htmlFor="visaoComputacional">
										Visão computacional da indústria
										<input
											type="checkbox"
											id="visaoComputacional"
											name="visaoComputacional"
										/>
										<span className="checkmark"></span>
									</label>
								</span>
							</div>
							<div className="question">
								<p>Você vai participar do Torneio de Jogos?</p>
								<span className="selection">
									<label htmlFor="participarTorneio">
										Sim
										<input
											type="checkbox"
											id="participarTorneio"
											name="participarTorneio"
										/>
										<span className="checkmark"></span>
									</label>
								</span>
							</div>
						</div>
					</div>
					<div id="timeline">
						<button
							onClick={handleStep}
							id="btnPrevious"
							className={step > 0 ? "showButton" : ""}
						>
							Anterior
						</button>
						<div id="timelineBar">
							{[...Array(timeLine)].map((el, index) => (
								<span className="step" key={index}></span>
							))}
						</div>

						{step < 1 ? (
							<button
								onClick={handleStep}
								id="btnNext"
								className="showButton"
							>
								Próximo
							</button>
						) : (
							<button
								onClick={finalizar}
								id="btnNext"
								className="showButton"
							>
								Finalizar
							</button>
						)}
					</div>
				</form>
			</Modal>
			<Background>
				<img src={BG} />
			</Background>

			{[...Array(popups)].map((el, index) => {
				let randomStyle

				if (index == 0) {
					// randonStyle = {}
				} else {
					randomStyle = useRef({
						top: `${Math.floor(Math.random() * (80 + 1))}%`,
						left: `${Math.floor(
							Math.random() * (80 - 10 + 1) + 10
						)}%`,
					})
				}

				return (
					<div className="popupModal" key={index}>
						<div
							className="titlePopupModal"
							// style={randomStyle.current}
						>
							<span>Tecnoweek</span>
							<button
								className="closePopupModal"
								onClick={createPopup}
							>
								X
							</button>
						</div>
						<h3>Sua inscrição foi finalizada!</h3>
						<button className="popupOk">ok</button>
					</div>
				)
			})}
		</MainPage>
	)
}

export default Inscricao
