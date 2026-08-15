// Arco de aduelas gerado a partir do framework (src/pages/Framework.tsx):
// 4 pilares x 4 practices = 16 aduelas, agrupadas por juntas largas (SEAM) a cada 4,
// mais a pedra-chave saliente no topo. Nada posicionado à mão.
//
// Receita de regeração: grade 64x64, centro (32,40), raios ri=14 ro=28;
// os 180deg do arco menos a pedra-chave (18deg), 12 juntas de 1.4deg e 2 seams de 6deg
// distribuídos igualmente entre as 16 aduelas; cada aduela é um setor anular
// (arco externo -> raio -> arco interno -> raio). Pés = 14 de altura, alinhados à espessura do anel.
// Mudou o número de practices? Reajuste PILLARS e recalcule unit = (180 - KEY - 12*JOINT - 2*SEAM) / N.

// viewBox recortado na bbox real do arco (x 4..60, y 10..54) — sem isso a marca fica
// pequena dentro de uma caixa quadrada com sobra vertical.
const Logo = ({ className = "h-11 w-auto" }: { className?: string }) => (
  <svg viewBox="4 10 56 44" fill="currentColor" className={className} role="img" aria-label="Arquitetura do Potencial">
    <path d="M4 40A28 28 0 0 1 4.3 35.95L18.15 37.97A14 14 0 0 0 18 40ZM4.4 35.27A28 28 0 0 1 5.38 31.32L18.69 35.66A14 14 0 0 0 18.2 37.64ZM5.6 30.68A28 28 0 0 1 7.23 26.95L19.61 33.48A14 14 0 0 0 18.8 35.34ZM7.55 26.35A28 28 0 0 1 9.79 22.95L20.89 31.48A14 14 0 0 0 19.78 33.18ZM11.69 20.73A28 28 0 0 1 14.69 17.99L23.35 28.99A14 14 0 0 0 21.84 30.36ZM15.24 17.57A28 28 0 0 1 18.66 15.38L25.33 27.69A14 14 0 0 0 23.62 28.79ZM19.27 15.06A28 28 0 0 1 23.01 13.48L27.51 26.74A14 14 0 0 0 25.63 27.53ZM23.66 13.27A28 28 0 0 1 27.62 12.34L29.81 26.17A14 14 0 0 0 27.83 26.64ZM36.38 12.34A28 28 0 0 1 40.34 13.27L36.17 26.64A14 14 0 0 0 34.19 26.17ZM40.99 13.48A28 28 0 0 1 44.73 15.06L38.37 27.53A14 14 0 0 0 36.49 26.74ZM45.34 15.38A28 28 0 0 1 48.76 17.57L40.38 28.79A14 14 0 0 0 38.67 27.69ZM49.31 17.99A28 28 0 0 1 52.31 20.73L42.16 30.36A14 14 0 0 0 40.65 28.99ZM54.21 22.95A28 28 0 0 1 56.45 26.35L44.22 33.18A14 14 0 0 0 43.11 31.48ZM56.77 26.95A28 28 0 0 1 58.4 30.68L45.2 35.34A14 14 0 0 0 44.39 33.48ZM58.62 31.32A28 28 0 0 1 59.6 35.27L45.8 37.64A14 14 0 0 0 45.31 35.66ZM59.7 35.95A28 28 0 0 1 60 40L46 40A14 14 0 0 0 45.85 37.97Z" />
    <path d="M28.45 10.21A30 30 0 0 1 35.55 10.21L33.66 26.1A14 14 0 0 0 30.34 26.1Z" />
    <path d="M4 40h14v14h-14ZM46 40h14v14h-14Z" />
  </svg>
);

export default Logo;
