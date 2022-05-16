export async function sendDataToDatabase(obj: any) {
	console.log(obj)

	try {
		let res = await fetch(import.meta.env.VITE_URL_POST, {
			method: "POST",
			body: JSON.stringify({
				name: obj.nome,
				email: obj.email,
				matricula: obj.matricula,
				curso: obj.curso,

				participarTorneio: obj.participarTorneio,
				propriedadeIntelectual: obj.propriedadeIntelectual,
				visaoComputacional: obj.visaoComputacional,
			}),
		})
		let resJson = await res.json()

		if (res.status === 200) {
			alert("Enviado com sucesso!")
		} else {
			alert("Ocorreu um erro.")
		}
	} catch (err) {
		console.log(err)
	}
}
