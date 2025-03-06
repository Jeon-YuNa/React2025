import Todolist from "./Todolist";
import Time from "./Time";
import Weather from "./Weather";
import "./style/reset.css";
import "./style/boxStyle.css";

function App() {
  return (
    <>
      <section style={{ display: "flex", gap: "30px" }}>
        <article
          style={{
            width: "100%",
            display: "flex",
            gap: "30px",
            flexDirection: "column",
          }}
        >
          <Weather />
          <Time />
        </article>
        <article style={{ width: "100%" }}>
          <Todolist />
        </article>
      </section>
    </>
  );
}

export default App;
