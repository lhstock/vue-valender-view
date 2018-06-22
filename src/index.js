import calenderView from './vue-calender-view'

const VueCalenderView = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('VueCalenderView', calenderView)
  }
}

export default VueCalenderView
