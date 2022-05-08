import { keyframes, styled } from "@stitches/react"
import ArrowImg from "../assets/img/Arrow.png"

const blink = keyframes({
	"0%": {
		opacity: 0.2,
	},
	"30%": {
		opacity: 1,
	},
	"70%": {
		opacity: 0.7,
	},
	"100%": {
		opacity: 0.2,
	},
})

const ArrowWrapper = styled("div", {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",

	"& img.blinking": {
		animation: `${blink} 1s ease infinite`,
	},

	"&.up": {
		transform: "scaleY(-1)",
	},
	"&.left": {
		transform: "rotate(90deg)",
	},
	"&.right": {
		transform: "rotate(-90deg)",
	},
})

type ArrowProps = {
	direction: "up" | "down" | "left" | "right"
	blinking?: boolean
}

function Arrow(props: ArrowProps) {
	return (
		<ArrowWrapper className={props.direction}>
			<img src={ArrowImg} className={props.blinking ? "blinking" : ""} />
		</ArrowWrapper>
	)
}

export default Arrow
