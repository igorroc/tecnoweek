import { styled } from "@stitches/react"
import Logo from "../assets/svg/TecnoJr.svg?component"
import LogoSmall from "../assets/svg/LogoWhite.svg?component"

import DropDownButton from "./DropDownButton"
import { MaxWidthWrapper } from "./Global/MaxWidthWrapper"
import useWindowDimensions from "../hooks/UseWindowDimentions"
import { useState } from "react"
import { Icon } from "./Icon"

const HeaderWrapper = styled("header", {
	"&": {
		position: "fixed",
		zIndex: "10",
		width: "100vw",
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

const WrapperLinksSmall = styled("div", {
	"&": { position: "relative" },
	"& #menuButton": {
		width: "32px",
		height: "32px",
		background: "none",
		border: "none",
		outline: "none",
		color: "white",
		cursor: "pointer",

		"& .bar": {
			display: "block",
			margin: "5px 0",
			width: "32px",
			height: "4px",
			background: "white",
			borderRadius: "50px",
			transition: "all 300ms ease-in-out",
		},

		"&.active": {
			"& .bar:nth-child(1)": {
				transform: "translateY(9px) rotate(45deg)",
			},
			"& .bar:nth-child(2)": {
				opacity: "0",
			},
			"& .bar:nth-child(3)": {
				transform: "translateY(-9px) rotate(-45deg)",
			},
		},
	},
})

const SideNav = styled("div", {
	"&": {
		position: "absolute",
		right: "0",
		bottom: "0",
		transform: "translate(0, 100%)",
		backgroundColor: "#2d2e30",
		borderRadius: "10px",
		maxHeight: "0",
		overflow: "hidden",
		padding: "0",
		transition: "all 300ms ease-in-out",

		"& ul": {
			display: "flex",
			flexDirection: "column",
			gap: "10px",

			"& button": {
				fontSize: "1em",
				width: "150px",
			},
		},

		"&.active": {
			padding: "20px 30px",
			maxHeight: "250px",
		},

		"& .dropDownButton": {
			"& button": {
				transition: "border-radius 300ms ease-in-out",
				"&.buttonOpen": {
					borderRadius: "10px 10px 0 0",
				},
			},
			"& ul": {
				position: "relative",
			},
		},
	},
})

function Header() {
	const { height, width } = useWindowDimensions()
	const [toggle, setToggle] = useState(false)
	const breakpointMobile = 800

	const handleMenuClick = () => {
		setToggle((prevToggle) => !prevToggle)
	}

	return (
		<HeaderWrapper>
			{width > breakpointMobile ? (
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
							<a href="../assets/pdf/schedule.pdf" download>
								Programação
							</a>
						</li>
						<li>
							<DropDownButton title="Inscreva-se!">
								<a href="/inscricao">TecnoWeek</a>
								<a href="/cpu">CPU</a>
							</DropDownButton>
						</li>
					</WrapperLinks>
				</Wrapper>
			) : (
				<Wrapper>
					<a href="/">
						<LogoSmall className="logo"></LogoSmall>
					</a>
					<WrapperLinksSmall>
						<button
							id="menuButton"
							onClick={handleMenuClick}
							className={toggle ? "active" : ""}
						>
							<span className="bar"></span>
							<span className="bar"></span>
							<span className="bar"></span>
						</button>
						<SideNav
							id="sideNav"
							className={toggle ? "active" : ""}
						>
							<ul>
								<li>
									<a href="/">Início</a>
								</li>
								<li>
									<a href="#sobre">Sobre</a>
								</li>
								<li>
									<a href="../assets/pdf/schedule.pdf">
										Programação
									</a>
								</li>
								<li>
									<DropDownButton title="Inscreva-se!">
										<a href="/inscricao">TecnoWeek</a>
										<a href="/cpu">CPU</a>
									</DropDownButton>
								</li>
							</ul>
						</SideNav>
					</WrapperLinksSmall>
				</Wrapper>
			)}
		</HeaderWrapper>
	)
}

export default Header
