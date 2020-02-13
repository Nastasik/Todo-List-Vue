// Описание задачи
// 1. Починить код
// 2. Добавить кнопку и функцию удаления задачи
// 3. Посмотреть на код и
// 3.1. Перечислить, что бы вы сделали по-другому
// 3.2. [опционально] Переписать код как душа просит
// Комментарии по ошибкам можно писать прямо в коде

import Vue from "vue"; // var vue = require("vue");
//window.app - лишнее

new Vue({
  el: "#app",

  data() {
    return {
      innerData: {
        zadachi: [], //перевела бы на англ
        activeFilter: "all"
      },
      value: "Задача 1"
    };
  },

  // DOM ещё не построен, .document.getElementById("search")  не сработает
  // created() {
  //   var search = document.getElementById("search") || {};
  //   search.focus();
  // },
  mounted() {
    var search = document.getElementById("search") || {};
    search.focus();
  },

  template: `
    <div>
        <form>
          <input type="text" v-model="value" id="search"/>
          <button type="button" @click="addTodo">Добавить задачу</button>
        </form> 

        <div v-if="innerData.activeFilter === 'active'">
          <div v-for="todo in innerData.zadachi" v-if="todo.completed !== true">
            {{ todo.name }}
            <button type="button" @click="remove(todo)">Удалить</button>
          </div>
        </div>

        <div v-if="innerData.activeFilter === 'all'">
        1212
          <div v-for="todo in innerData.zadachi">
              {{ todo.name }}
              <button type="button" @click="remove(todo, i)">Удалить</button>
          </div>
        </div>

        <div v-if="innerData.activeFilter === 'completed'">
          <div v-for="todo in innerData.zadachi" v-if="todo.completed === true">
            {{ todo.name }}
            <button type="button" @click="remove(todo)">Удалить</button>
          </div>
        </div>
 
        <div>
          <span @click="setFilter('active')">Активные</span>
          <span @click="setFilter('all')">Все</span>
          <span @click="setFilter('completed')">Завершенные</span>
        </div>
    </div>
  `,

  methods: {
    addTodo() {
      const newZadachi = [{ name: this.value }, ...this.innerData.zadachi];
      this.$set(this.innerData, "zadachi", newZadachi);
    },

    remove(t) {
      // var todos = [];

      // for (var i = 0; i < todos.length; i++) {
      //   if (todos[i].name != t.name) {
      //     todos.push(todos[i]);
      //   }
      // }
      // Можно записать проще:
      const todos = this.innerData.zadachi.filter(todo => todo.name !== t.name);

      this.$set(this.innerData, "zadachi", todos);
    },

    setFilter(filter) {
      this.$set(this.innerData, "activeFilter", filter);
    }
  }
});
