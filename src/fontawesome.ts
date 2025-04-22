// src/fontawesome.ts
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import only the icons you use:
import { faUserSecret } from '@fortawesome/pro-solid-svg-icons'
import { faStar as faStarLight } from '@fortawesome/pro-light-svg-icons'

library.add(faUserSecret, faStarLight)

export { FontAwesomeIcon }
