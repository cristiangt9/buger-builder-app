import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props: any) => {
  return (
    <div className={classes.layout}>
      <MainNavigation />
      <main className={classes.content}>{props.children}</main>
    </div>
  );
};

export default Layout;
