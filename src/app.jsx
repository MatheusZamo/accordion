const faqs = [
  {
    id: crypto.randomUUID(),
    title: "Quem é a maior celebridade do mundo dos games no BR?",
    answer: "A apresentadora Ana Maria Braga. Joga 3h pra desocupar a cabeça.",
  },
  {
    id: crypto.randomUUID(),
    title: "Onde fica a europa da américa do sul?",
    answer: "Argentina. BR vive como rei em Buenos Aires.",
  },
  {
    id: crypto.randomUUID(),
    title: "Qual é a grande oportunidade para desenvolvedores BR?",
    answer: "Aproveitar a alta demanda pra ganhar em dólar ou euro.",
  },
]

const Item = ({ title, answer, index }) => (
  <li className="item">
    <p className="number">{index + 1}</p>
    <h3 className="title">{title}</h3>
    <span className="icon">-</span>
    <p className="content-box">{answer} </p>
  </li>
)

const App = () => (
  <ul className="accordion">
    {faqs.map(({ id, title, answer }, index) => (
      <Item key={id} title={title} answer={answer} index={index} />
    ))}
  </ul>
)

export { App }
