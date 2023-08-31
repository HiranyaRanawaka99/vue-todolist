const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'To Do List',

            todoList: [
                {
                    task: 'Cucinare',
                    done: false,
                },
                {
                    task: 'Pulizie',
                    done: false,
                },
                {
                    task: 'Studiare',
                    done: true,
                },
                {
                    task: 'Fare la spesa',
                    done: true,
                },
            ]
        }
    },

    methods: {
     deleteTask (index) {
        this.todoList.splice(index, 1);
     }
    }
}).mount('#app')