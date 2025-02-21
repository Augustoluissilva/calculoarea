import React, { useState } from "react";

const App = () => {
  const [figura, setFigura] = useState("triangulo");
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  const [lado, setLado] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularArea = () => {
    let area = 0;
    if (figura === "triangulo") {
      area = (parseFloat(base) * parseFloat(altura)) / 2;
    } else if (figura === "quadrado") {
      area = parseFloat(lado) ** 2;
    } else if (figura === "retangulo") {
      area = parseFloat(base) * parseFloat(altura);
    }
    setResultado(area);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", maxWidth: "300px", width: "100%", backgroundColor: "#f9f9f9" }}>
        <h2>Calculadora de Áreas</h2>
        <label>Selecione a Figura:</label>
        <select value={figura} onChange={(e) => setFigura(e.target.value)}>
          <option value="triangulo">Triângulo</option>
          <option value="quadrado">Quadrado</option>
          <option value="retangulo">Retângulo</option>
        </select>
        <br /><br />
        {(figura === "triangulo" || figura === "retangulo") && (
          <>
            <input
              type="number"
              placeholder="Base"
              value={base}
              onChange={(e) => setBase(e.target.value)}
            />
            <input
              type="number"
              placeholder="Altura"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </>
        )}
        {figura === "quadrado" && (
          <input
            type="number"
            placeholder="Lado"
            value={lado}
            onChange={(e) => setLado(e.target.value)}
          />
        )}
        <br /><br />
        <button onClick={calcularArea}>Calcular Área</button>
        {resultado !== null && <h3>Área: {resultado}</h3>}
      </div>
    </div>
  );
};

export default App;
