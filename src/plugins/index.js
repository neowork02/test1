import LodashPlugin from './lodashPlugin'

export default {
    install(Vue) {
        // install all plugins
        [
            LodashPlugin,
        ].forEach(plugin => Vue.use(plugin));
    }
}
