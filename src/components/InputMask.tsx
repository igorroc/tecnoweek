import { useState } from "react"

type InputProps = {
	mask: string
	type: string
	id: string
	name: string
	placeholder: string
	maskType?: "number" | "text"
	required?: boolean
}

function InputMask(props: InputProps) {
	const [value, setValue] = useState("")

	function handleInput(ev: any) {
		let isNumber = Number.isInteger(Number(ev.nativeEvent.data))
		let max = props.mask.split("_").length - 1
		if (
			(props.maskType == "number" && !isNumber) ||
			ev.nativeEvent.data == " " ||
			ev.target.value.length > max
		) {
			ev.target.value = ev.target.value.slice(0, -1)
			return
		}
	}

	return (
		<input
			type={props.type}
			name={props.name}
			id={props.id}
			placeholder={props.placeholder}
			onInput={handleInput}
			required={props.required}
		/>
	)
}

export default InputMask
