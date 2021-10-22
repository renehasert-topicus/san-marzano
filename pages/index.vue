<template>
  <ul>
    <li v-for="recipe in recipes" :key="recipe.id">
      <h4>{{recipe.title}}</h4>
    </li>
  </ul>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { getRecipes } from '../services/recipe-api.service';

export default defineComponent({
  data () {
    return {
      recipes: []
    }
  },
  async created() {
    this.recipes = await getRecipes('tomatoes', 5);
  },
})
</script>
<style></style>
