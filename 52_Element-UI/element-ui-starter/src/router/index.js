import Vue from 'vue'
import Router from 'vue-router'

import Element from '../components/Element'
import Button_01 from '../views/Basic/Button/Button_01'
import Button_02 from '../views/Basic/Button/Button_02'

import Tabs_01 from '../views/Navigation/Tabs/Tabs_01'

import Layout_01 from '../views/Basic/Layout/Layout_01'
import Layout_02 from '../views/Basic/Layout/Layout_02'
import Layout_03 from '../views/Basic/Layout/Layout_03'
import Layout_04 from '../views/Basic/Layout/Layout_04'

import Tree_01 from '../views/Data/Tree/Tree_01'
import Tree_02 from '../views/Data/Tree/Tree_02'
import Tree_03 from '../views/Data/Tree/Tree_03'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/element'},
    {path: '/element', component: Element},
    {path: '/button_01', component: Button_01},
    {path: '/button_02', component: Button_02},
    {path: '/tabs_01', component: Tabs_01},
    {path: '/layout_01', component: Layout_01},
    {path: '/layout_02', component: Layout_02},
    {path: '/layout_03', component: Layout_03},
    {path: '/layout_04', component: Layout_04},
    {path: '/tree_01', component: Tree_01},
    {path: '/tree_02', component: Tree_02},
    {path: '/tree_03', component: Tree_03}
  ]
})
