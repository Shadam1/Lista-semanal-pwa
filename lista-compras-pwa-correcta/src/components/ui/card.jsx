export function Card({ children, className }) {
  return <div className={className} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>{children}</div>;
}
export function CardContent({ children }) {
  return <div>{children}</div>;
}