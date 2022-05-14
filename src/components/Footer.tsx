import { styled } from "@stitches/react"
import { MaxWidthWrapper } from "./Global/MaxWidthWrapper"

const WrapperFooter = styled("footer", {
	"&": {
		padding: "100px",
	},
})

function Footer() {
	return (
		<WrapperFooter>
			<h1>Footer</h1>
		</WrapperFooter>
	)
}

export default Footer
