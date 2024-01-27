import { createStore } from "vuex";
//simula una pet async
const syncData = () =>{
    return new Promise(resolve => {
        setTimeout(() =>  resolve({age:25}),5000);
    })
}

//configuracion del store
const store = createStore({
    state(){
        return {
            name:'adan',
            age: 33
        }
    },
    mutations: {
        setName(state,name){
            state.name= name
        },
        setAge(state, age){
            state.age = age
        }
    },
    actions: {
        change(context, newValues){
            context.commit('setName', newValues.name)
            context.commit('setAge', newValues.age)
        },
        async changeAsync(context, newValues) {
            context.commit('setName', newValues.name)
            const {age} = await syncData()
            context.commit('setAge', age)
        }

    }

})
export default store