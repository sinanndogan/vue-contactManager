import { createRouter, createWebHistory } from 'vue-router'
import AddContact from '../views/AddContact.vue'
import ContactManager from '../views/ContactManager.vue'
import EditContact from '../views/EditContact.vue'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '../views/PageNotFound.vue'
import ViewContact from '../views/ViewContact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: "/contacts",
      component: HomeView
    },
    {
      path: '/contacts',
      name: 'ContactManager',
      component: ContactManager
    },
    {
      path: '/contacts/add',
      name: 'AddContact',
      component: AddContact
    },
    {
      path: '/contacts/edit/:contactId',
      name: 'EditContact',
      component: EditContact
    },
    {
      path: '/contacts/view/:contactId',
      name: 'ViewContact',
      component: ViewContact
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: PageNotFound
    },
  ]
})

export default router
