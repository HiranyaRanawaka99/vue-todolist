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
                    done: false,
                },
                {
                    task: 'Fare la spesa',
                    done: false,
                },
            ],

            newTask:
                {
                    task: '',
                    done: '',
                },
            alert: {
                show: '',
                message : '',
                color: '',

            }
        

        }
    },

    methods: {
        deleteTask(index) {
            this.todoList.splice(index, 1);
        },
        // guardare video - metodo --> =@click todoElement.done != todoElement.done
        doneTodo (todoElement) {

        },
        addNewTask() {
            const copyNewTask = { ...this.newTask }

            if(this.newTask.task == '') {
                this.alert.show = true;
                this.alert.message = 'Inserisci una Task';
                this.alert.color = 'danger';
            } else {
                this.todoList.unshift(copyNewTask);
                this.alert.show = true;
                this.alert.color = 'success';
                this.alert.message = 'Task ' + this.newTask.task + ' aggiunta correttemente';
            }

            this.newTask.task= '';
        },
        deleteAlert () {
            this.alert.show = false;
        },
        enterMethod () {

        }
    },
}).mount('#app')