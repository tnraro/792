export interface WindowProps {
  icon?: string;
  title?: string;
  children: React.ReactNode;
}
export function Window(props: WindowProps) {
  return (
    <article>
      <h1 style={{ display: "flex", gap: "1em", alignItems: "baseline" }}>
        <span>
          {props.icon ?? "📝"}
        </span>
        <span>
          {props.title ?? "Untitled"}
        </span>
      </h1>
      {props.children}
    </article>
  );
}