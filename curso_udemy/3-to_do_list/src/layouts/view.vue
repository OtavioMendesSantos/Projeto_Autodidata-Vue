<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img src="https://picsum.photos/1920/1080?random" gradient="to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)"
        height="70px" cover class="pt-2">
        <v-list :lines="false" density="compact" nav>
          <v-list-item prepend-avatar="https://avatars.githubusercontent.com/u/145459372?v=4" subtitle="To Do List"
            title="Otávio M. S."></v-list-item>
        </v-list>
      </v-img>
      <router-link v-for="(item, i) in items" :key="i" :to="item.to">
        <v-list-item :value="item" color="primary">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title :textContent="item.text"></v-list-item-title>
        </v-list-item>
      </router-link>
    </v-navigation-drawer>

    <v-app-bar image="https://picsum.photos/1920/1080?random" color="teal-darken-4" density="prominent">
      <template v-slot:image>
        <v-img gradient="to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)">
        </v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>To do list</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>

</script>

