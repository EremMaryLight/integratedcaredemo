import classes from "./MainLoader.module.css";
export default function MainLoader() {
  return (
    <section className="w-full h-screen grid place-content-center bg-primary/20">
      <section class={classes.customLoader}></section>
    </section>
  );
}
