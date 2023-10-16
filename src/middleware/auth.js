export default function auth({ next, router }) {
  // console.log("middle auth test");
  if (!localStorage.getItem("token")) {
    return router.push({ name: "login" });
  }
  
  return next();
}

// export default function auth({
//   next,

//   // router
// }) {
//   console.log("middleware auth test");
//   return next();
// }
