export function ProcessElement({ title, children }: { title: string; children: any }) {
  return (
    <div class="process-box">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export function Process({ children }: { children: any[] }) {
  const arrow = <img className="process-arrow" src="/assets/arrowProcess.svg" />;
  const content = children.map((child, idx) => {
    return (
      <>
        {child}
        {idx < children.length - 1 ? arrow : ""}
      </>
    );
  });
  return <div class="process">{content}</div>;
}
