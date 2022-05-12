import { styled } from "@stitches/react"
import Logo from "../assets/svg/TecnoJr.svg?component"
import DropDownButton from "./DropDownButton"
import { MaxWidthWrapper } from "./Global/MaxWidthWrapper"

const HeaderWrapper = styled("header", {
	"&": {
		position: "fixed",
		zIndex: "10",
		width: "100%",
		height: "60px",
		backgroundColor: "#4d0845",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		top: 0,
	},
})

const Wrapper = styled("div", {
	"&": {
		width: "90%",
		maxWidth: "1150px",
		margin: "0 auto",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: "1em",

		"& .logo": {
			width: "auto",
			height: "30px",
		},
	},
})

const WrapperLinks = styled("ul", {
	"&": {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "2em",
		fontWeight: "600",
	},
})

function Header() {
	return (
		<HeaderWrapper>
			<Wrapper>
				<a href="/">
					<Logo className="logo"></Logo>
				</a>
				<WrapperLinks>
					<li>
						<a href="/">Início</a>
					</li>
					<li>
						<a href="#sobre">Sobre</a>
					</li>
					<li>
						<a href="#programacao">Programação</a>
					</li>
					<li>
						<DropDownButton title="Inscreva-se!">
							<a href="/minicursos">Minicursos</a>
							<a href="/torneio">Torneio</a>
							<a href="/cpu">CPU</a>
						</DropDownButton>
					</li>
				</WrapperLinks>
			</Wrapper>
		</HeaderWrapper>
	)
}

export default Header
