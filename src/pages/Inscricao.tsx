import { styled } from "@stitches/react"
import Header from "../components/Header"
import { Icon } from "../components/Icon"
import BG from "../assets/img/background_inscricoes.png"
import InputMask from "../components/InputMask"

const MainPage = styled("div", {
	"&": {
		width: "100vw",
		height: "100vh",
		display: "flex",
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

			"& .question": {
				display: "flex",
				flexDirection: "column",
				gap: "10px",

				"& input": {
					background: "none",
					border: "none",
					borderBottom: "1px solid white",
					outline: "none",
					color: "white",
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
						width: "100%",
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
	return (
		<MainPage>
			<Header></Header>
			<Modal>
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
							<option value="cic">Ciência da Computação</option>
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
					<div id="timeline">
						<button>Anterior</button>
						<div id="timelineBar">
							<span className="step"></span>
							<span className="step"></span>
							<span className="step"></span>
							<span className="step"></span>
							<span className="step"></span>
							<span className="step"></span>
							<span className="step"></span>
							<span className="step"></span>
							<span className="step"></span>
							<span className="step"></span>
						</div>
						<button>Próximo</button>
					</div>
				</form>
			</Modal>
			<Background>
				<img src={BG} />
			</Background>
		</MainPage>
	)
}

export default Inscricao
