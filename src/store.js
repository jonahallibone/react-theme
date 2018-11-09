import { observable, action, computed, observe } from "mobx";

class PostStore {
    @observable posts  = [];

    @action sortPosts = (category) => {
        this.posts.sort((a,b)  => {a.title > b.title});
    }

    @computed get count() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}

const store = new PostStore();

export default store;