
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.esm.browser.js'

Vue.component('loader', {
    template:`
    <div style="display: flex; justify-content: center; aligh-items: center">
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    `
   
})



new Vue({
    el: '#app',
    data() {
        return {
            loading: false,
            form:{
                name: '',
                value: '',                            
            },
            contacts: [
                // {id: 1, name: 'Natallia', value: 'Bakinouskaya', marked: false}
            ]
        }
    },
    computed: {
        canCreate(){
            return this.form.value.trim() && this.form.name.trim()
        }

    },
    methods: {
        async createContact(){
            const {...contact} = this.form

            const newContact = await request('/api/contacts','POST', contact)
            // console.log(response)
            this.contacts.push(newContact)
            // contact.name ? console.log(contact.name) : console.log('no name')
            // this.contacts.push({...contact, id: Date.now(), marked: false})
            this.form.name = this.form.value = ''
        },
        async markContact(id){
    
            // const contact = this.contacts.find((c) => c.id == id)
            const contact = this.contacts.find(c => c.id === id)
            const updated = await request (`/api/contacts/${id}`, 'PUT', {
                ...contact,
                marked: true
            })
            contact.marked = updated.marked;
            // console.log(contact.marked)
        },
        async removeContact(id){
            await request(`/api/contacts/${id}`,'DELETE')
            this.contacts = this.contacts.filter(c => c.id !== id)

        }
    },
    async mounted(){
        this.loading = true
        // console.log('Ready?')
        this.contacts = await request('/api/contacts')
        this.loading = false
        
        // console.log(data)

    }
}) 
async function request(url, method = 'GET', data = null){
    try {
        const headers = {}
        let body


        if (data){
            headers['Content-type'] = 'application/json'
            body = JSON.stringify(data)
        }

        const response = await fetch(url, {
            method,
            headers,
            body
        })
        return await response.json()

    }
    catch (e){
         console.warn('Error:', e.message)
    }
}
