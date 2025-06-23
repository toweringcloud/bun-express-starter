export const localsMiddleware = (req: any, res: any, next: any) => {
  res.locals.siteTitle = "Nomad Movies";
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.loggedInUser = req.session.user;
  next();
};
