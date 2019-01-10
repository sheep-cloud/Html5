import Vue from 'vue'
import moment from 'moment'

// 自定义过滤器
Vue.filter('date-format', (date, formatStr = 'YYYY-MM-DD HH:mm:ss') => moment(date).format(formatStr))
