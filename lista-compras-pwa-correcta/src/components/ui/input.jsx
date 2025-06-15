export function Input({ value, onChange, placeholder, type = 'text' }) {
  return <input type={type} value={value} onChange={onChange} placeholder={placeholder} style={{ padding: '0.5rem', width: '150px' }} />;
}