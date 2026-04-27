/**
 * Reusable page section wrapper with standard padding,
 * max-width constraint, and optional background color.
 */
export default function Section({
  children,
  className = "",
  bg = "bg-white",
  id,
  maxWidth = "max-w-6xl",
  padding = "py-24 px-4",
}) {
  return (
    <section id={id} className={`${bg} ${padding} ${className}`}>
      <div className={`${maxWidth} mx-auto`}>{children}</div>
    </section>
  );
}
