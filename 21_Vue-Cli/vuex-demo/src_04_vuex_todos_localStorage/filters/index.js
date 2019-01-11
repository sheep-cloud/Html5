import Vue from 'vue'
import format from 'date-fns/format'

Vue.filter('date-format', (date, formatStr = 'YYYY-MM-DD HH:mm:ss') => format(date, formatStr))
