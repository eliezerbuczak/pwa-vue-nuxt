export const userAuth = defineStore('userAuth', ()=>{
    const user = ref({
        name: 'John',
    })
    return {
        user,
    }
})