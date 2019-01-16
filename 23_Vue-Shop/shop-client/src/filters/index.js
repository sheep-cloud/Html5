import Vue from 'vue'
// import moment from 'moment'

// import {format} from 'date-fns'
import format from 'date-fns/format'

// 自定义过滤器
// Vue.filter('date-format', (date, formatStr = 'YYYY-MM-DD HH:mm:ss') => moment(date).format(formatStr))
Vue.filter('date-format', (date, formatStr = 'YYYY-MM-DD HH:mm:ss') => format(date, formatStr))
