<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Administración',
        items: [
            { label: 'Home', icon: 'pi pi-fw pi-home', to: '/admin/home' }    
    ]
    },
    {
        label: 'Gestión',
        items: [
            { label: 'Categorias', icon: 'pi pi-fw pi-id-card', to: '/admin/categoria' },
            { label: 'Productos', icon: 'pi pi-fw pi-id-card', to: '/admin/producto' }

        ]
    },
    
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
        
    </ul>
</template>

<style lang="scss" scoped></style>
