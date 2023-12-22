//console.log(Vue) // <= objeto

const {createApp} = Vue

//Options API
createApp({
    data(){
        return{ // objeto de propiedasdes reactivas
            mensaje : 'Hola Mundo desde Vue',
            mensajeHtml : '<strong>Hola mundo html </strong>',
            valor: 567,
            contador: 222
        } // <- option
    },
    methods:{ // <- option

    }
}).mount('#app')