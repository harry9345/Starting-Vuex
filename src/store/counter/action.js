export default {
  increment(context) {
    setTimeout(function() {
      context.commit('increment');
    }, 3000);
  },
  increase(context, payload) {
    console.log(context);
    context.commit('increment', payload);
  },
  login() {}
};
