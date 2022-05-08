import { library } from "@fortawesome/fontawesome-svg-core"

/** SOLID ICONS (PREFIX: fas) */
import { fas } from "@fortawesome/free-solid-svg-icons"

/** BRAND ICONS (PREFIX: fab) */
import { fab } from "@fortawesome/free-brands-svg-icons"

/** REGULAR ICONS (PREFIX: far) */
import { far } from "@fortawesome/free-regular-svg-icons"

export default {
	init: () => library.add(fas, fab, far),
}
