// lazy loading Components
export default (name, index = false) => () => import(`@/views/${name}${index ? '/index' : ''}.vue`)
