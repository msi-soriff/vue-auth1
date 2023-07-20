<template>
    <form @submit.prevent="submit">
        <h1 class="h3 mb-3 fw-normal">Please Register</h1>

        <input v-model="data.name" class="form-control" placeholder="Name" required>
        <input v-model="data.email" type="email" class="form-control" placeholder="Email" required>
        <input v-model="data.password" type="password" class="form-control" placeholder="Password" required>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
    name: "Register",
    setup() {
        const data = reactive(target: {
            name: '',
            email: '',
            password: ''
        });
        const submit = () => {
            console.log(data);
        }

        return {
            data,
            submit
        }
    }
}
</script>
<style></style>