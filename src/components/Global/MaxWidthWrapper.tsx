import { styled } from "@stitches/react"

const Wrapper = styled("div", {
	width: "90%",
	maxWidth: "1150px",
	margin: "0 auto",
})

type WrapperProps = {
	children?: React.ReactNode
}

export function MaxWidthWrapper(props: WrapperProps) {
	return (
		<Wrapper>
			<div>{props.children}</div>
		</Wrapper>
	)
}
