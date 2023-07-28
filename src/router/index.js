import { createRouter, createWebHistory } from 'vue-router' 

// Import views 
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import Home from '../views/Home.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealDetails from '../views/MealDetails.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import Ingredients from '../views/Ingredients.vue'

// Create an array of routes 
const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },
            {
                path: '/by-ingredient/:ingredient',
                name: 'byIngredient',
                component: MealsByIngredient
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                component: Ingredients
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            }
        ]
    },
    {
        path: '/guest',
        component: GuestLayout,
        children: [
            
        ] 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router