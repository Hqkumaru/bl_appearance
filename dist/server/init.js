var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/server/utils/index.ts
function onClientCallback(eventName, cb) {
  onNet(`__ox_cb_${eventName}`, async (resource, key, ...args) => {
    const src = source;
    let response;
    try {
      response = await cb(src, ...args);
    } catch (e) {
      console.error(`an error occurred while handling callback event ${eventName}`);
    }
    emitNet(`__ox_cb_${resource}`, src, key, response);
  });
}
__name(onClientCallback, "onClientCallback");

// src/server/init.ts
on("onResourceStart", (resName) => {
  if (resName === GetCurrentResourceName()) {
    console.log("TypeScript boilerplate started!");
  }
});
onClientCallback("test:server", (playerId, ...args) => {
  console.log("onClientCallback", playerId, ...args);
  return {
    serverValue: 3e3
  };
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL3NlcnZlci91dGlscy9pbmRleC50cyIsICIuLi8uLi9zcmMvc2VydmVyL2luaXQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vaHR0cHM6Ly9naXRodWIuY29tL292ZXJleHRlbmRlZC9veF9saWIvYmxvYi9tYXN0ZXIvcGFja2FnZS9zZXJ2ZXIvcmVzb3VyY2UvY2FsbGJhY2svaW5kZXgudHNcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkNsaWVudENhbGxiYWNrKGV2ZW50TmFtZTogc3RyaW5nLCBjYjogKHBsYXllcklkOiBudW1iZXIsIC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpIHtcclxuICAgIG9uTmV0KGBfX294X2NiXyR7ZXZlbnROYW1lfWAsIGFzeW5jIChyZXNvdXJjZTogc3RyaW5nLCBrZXk6IHN0cmluZywgLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICBjb25zdCBzcmMgPSBzb3VyY2U7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlOiBhbnk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgY2Ioc3JjLCAuLi5hcmdzKTtcclxuICAgICAgICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgYW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgaGFuZGxpbmcgY2FsbGJhY2sgZXZlbnQgJHtldmVudE5hbWV9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbWl0TmV0KGBfX294X2NiXyR7cmVzb3VyY2V9YCwgc3JjLCBrZXksIHJlc3BvbnNlKTtcclxuICAgIH0pO1xyXG59IiwgImltcG9ydCB7b25DbGllbnRDYWxsYmFja30gZnJvbSAnLi91dGlscydcclxuXHJcbm9uKCdvblJlc291cmNlU3RhcnQnLCAocmVzTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAocmVzTmFtZSA9PT0gR2V0Q3VycmVudFJlc291cmNlTmFtZSgpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUeXBlU2NyaXB0IGJvaWxlcnBsYXRlIHN0YXJ0ZWQhJylcclxuICAgIH1cclxufSlcclxuXHJcbm9uQ2xpZW50Q2FsbGJhY2soJ3Rlc3Q6c2VydmVyJywgKHBsYXllcklkLCAuLi5hcmdzOiBbbnVtYmVyLCBudWxsLCBudW1iZXIsIG51bGwsIG51bGwsIG51bWJlcl0pID0+IHtcclxuICBjb25zb2xlLmxvZygnb25DbGllbnRDYWxsYmFjaycsIHBsYXllcklkLCAuLi5hcmdzKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2VydmVyVmFsdWU6IDMwMDAsXHJcbiAgfTtcclxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjs7OztBQUVPLFNBQVMsaUJBQWlCLFdBQW1CLElBQStDO0FBQy9GLFFBQU0sV0FBVyxTQUFTLElBQUksT0FBTyxVQUFrQixRQUFnQixTQUFnQjtBQUNuRixVQUFNLE1BQU07QUFDWixRQUFJO0FBRUosUUFBSTtBQUNBLGlCQUFXLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSTtBQUFBLElBQ3BDLFNBQVMsR0FBUTtBQUNiLGNBQVEsTUFBTSxtREFBbUQsU0FBUyxFQUFFO0FBQUEsSUFDaEY7QUFFQSxZQUFRLFdBQVcsUUFBUSxJQUFJLEtBQUssS0FBSyxRQUFRO0FBQUEsRUFDckQsQ0FBQztBQUNMO0FBYmdCOzs7QUNBaEIsR0FBRyxtQkFBbUIsQ0FBQyxZQUFvQjtBQUN2QyxNQUFJLFlBQVksdUJBQXVCLEdBQUc7QUFDeEMsWUFBUSxJQUFJLGlDQUFpQztBQUFBLEVBQy9DO0FBQ0osQ0FBQztBQUVELGlCQUFpQixlQUFlLENBQUMsYUFBYSxTQUFxRDtBQUNqRyxVQUFRLElBQUksb0JBQW9CLFVBQVUsR0FBRyxJQUFJO0FBQ2pELFNBQU87QUFBQSxJQUNMLGFBQWE7QUFBQSxFQUNmO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
