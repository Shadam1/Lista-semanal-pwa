import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

export default function ListaDeCompras() {
  const [items, setItems] = useState([
    { nombre: "Ribeye steak", precio: 17, comprado: false },
    { nombre: "Tilapia loins", precio: 22, comprado: false },
    { nombre: "Aceite de oliva Kirkland", precio: 22, comprado: false },
  ]);

  const [nuevoItem, setNuevoItem] = useState("");
  const [nuevoPrecio, setNuevoPrecio] = useState("");

  const marcarComprado = (index) => {
    const nuevosItems = [...items];
    nuevosItems[index].comprado = !nuevosItems[index].comprado;
    setItems(nuevosItems);
  };

  const actualizarItem = (index, campo, valor) => {
    const nuevosItems = [...items];
    nuevosItems[index][campo] = campo === "precio" ? parseFloat(valor) : valor;
    setItems(nuevosItems);
  };

  const agregarItem = () => {
    if (nuevoItem && nuevoPrecio) {
      setItems([
        ...items,
        { nombre: nuevoItem, precio: parseFloat(nuevoPrecio), comprado: false },
      ]);
      setNuevoItem("");
      setNuevoPrecio("");
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>🛒 Lista de Compras – Costco</h1>
      {items.map((item, index) => (
        <Card key={index} className={item.comprado ? 'opacity-50 line-through' : ''}>
          <CardContent>
            <Input
              value={item.nombre}
              onChange={(e) => actualizarItem(index, "nombre", e.target.value)}
            />
            <Input
              type="number"
              value={item.precio}
              onChange={(e) => actualizarItem(index, "precio", e.target.value)}
            />
            <Button onClick={() => marcarComprado(index)}>
              {item.comprado ? "Desmarcar" : "Comprado"}
            </Button>
          </CardContent>
        </Card>
      ))}

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Input
          placeholder="Nuevo producto"
          value={nuevoItem}
          onChange={(e) => setNuevoItem(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Precio"
          value={nuevoPrecio}
          onChange={(e) => setNuevoPrecio(e.target.value)}
        />
        <Button onClick={agregarItem}>Agregar</Button>
      </div>

      <div style={{ textAlign: 'right', marginTop: '1rem', fontWeight: 'bold' }}>
        Total: ${items.reduce((acc, item) => acc + item.precio, 0).toFixed(2)}
      </div>
    </div>
  );
}