import { styled } from "@stitches/react"
import Header from "../components/Header"
import { Icon } from "../components/Icon"

const Modal = styled("div", {
	"&": {
		background: "#2F1E2D",
		width: "500px",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		margin: "100px auto",
		border: "5px solid #C904B0",

		"& #windowTitleBar": {
			display: "flex",
			alignItems: "center",
			justifyContent: "end",
			gap: "10px",
			width: "100%",
			height: "40px",
			borderBottom: "5px solid #C904B0",

			"& svg:last-child": {
				marginRight: "15px",
			},
		},

		"& h2": {
			margin: "20px 0",
		},

		"& #form": {
			display: "flex",
			flexDirection: "column",
			gap: "20px",
		},
	},
})

function Inscricao() {
	return (
		<div>
			<Header></Header>
			<Modal>
				<div id="windowTitleBar">
					<Icon iconName="home" prefix="fas"></Icon>
					<Icon iconName="home" prefix="fas"></Icon>
					<Icon iconName="home" prefix="fas"></Icon>
				</div>
				<h2>Inscreva-se na TecnoWeek</h2>
				<form action="" id="form">
					<div>
						<label htmlFor="nome">Nome Completo</label>
						<input
							type="text"
							placeholder="Insira seu nome aqui..."
						/>
					</div>
					<div>
						<label htmlFor="nome">Matrícula</label>
						<input type="text" placeholder="Ex: 202210111" />
					</div>
					<div>
						<label htmlFor="nome">Curso</label>
						<select name="curso" id="curso">
							<option value="cic">Ciência da Computação</option>
							<option value="fis">Física</option>
							<option value="eng">Engenharia</option>
							<option value="mat">Matemática</option>
						</select>
					</div>
				</form>
			</Modal>
		</div>
	)
}

export default Inscricao
