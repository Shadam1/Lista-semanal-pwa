export function Button({ onClick, children }) {
  return <button onClick={onClick} style={{ padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: 'white', border: 'none' }}>{children}</button>;
}