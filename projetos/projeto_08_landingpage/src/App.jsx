import './index.css'

const aprendizados = [
  { titulo: 'Lógica de programação', texto: 'Aprender a pensar em passos para resolver problemas com algoritmos.' },
  { titulo: 'Desenvolvimento web', texto: 'Criar sites e sistemas que funcionam direto no navegador.' },
  { titulo: 'Frontend', texto: 'Montar a parte visual que o usuário vê e usa, com HTML, CSS e JavaScript.' },
  { titulo: 'Backend', texto: 'Programar as regras e o processamento que acontecem no servidor.' },
  { titulo: 'Banco de dados', texto: 'Guardar, organizar e consultar informações com SQL.' },
  { titulo: 'Desenvolvimento de APIs', texto: 'Fazer sistemas conversarem entre si trocando dados.' },
  { titulo: 'Aplicativos', texto: 'Construir aplicações para uso no dia a dia de pessoas e empresas.' },
  { titulo: 'Versionamento de código', texto: 'Registrar o histórico do projeto e trabalhar em equipe com Git e GitHub.' },
]

const tecnologias = [
  { nome: 'HTML', cor: '#e8825a' },
  { nome: 'CSS', cor: '#5aa9e8' },
  { nome: 'JavaScript', cor: '#e8d45a' },
  { nome: 'React', cor: '#61dafb' },
  { nome: 'Node.js', cor: '#7ac36a' },
  { nome: 'SQL', cor: '#bcd6d4' },
  { nome: 'Git', cor: '#f0735a' },
  { nome: 'GitHub', cor: '#d0d7de' },
]

const areas = [
  { titulo: 'Desenvolvimento Frontend', texto: 'Cuida da interface e da experiência de quem usa o sistema.' },
  { titulo: 'Desenvolvimento Backend', texto: 'Cuida da lógica, da segurança e da comunicação com o banco de dados.' },
  { titulo: 'Desenvolvimento Full Stack', texto: 'Atua nas duas pontas: interface e servidor.' },
  { titulo: 'Desenvolvimento de aplicações', texto: 'Cria programas e aplicativos sob medida para cada necessidade.' },
  { titulo: 'Banco de dados', texto: 'Modela, organiza e mantém os dados de um sistema.' },
  { titulo: 'Suporte e manutenção de sistemas', texto: 'Corrige erros, atualiza e melhora sistemas que já estão em uso.' },
]

const projetos = [
  { titulo: 'Sistema de cadastro de clientes', texto: 'Registra, busca e edita os dados de clientes de uma empresa.' },
  { titulo: 'Sistema de estoque', texto: 'Controla entrada e saída de produtos e avisa quando algo está acabando.' },
  { titulo: 'Aplicação de agendamentos', texto: 'Permite marcar horários para serviços, consultas ou reservas.' },
  { titulo: 'Loja virtual', texto: 'Mostra produtos, recebe pedidos e organiza as vendas.' },
  { titulo: 'Dashboard administrativo', texto: 'Reúne gráficos e indicadores para ajudar na tomada de decisão.' },
  { titulo: 'Aplicativo de tarefas', texto: 'Ajuda a organizar a rotina com listas e prazos.' },
]


function Card({ icone, titulo, texto }) {
  return (
    <div className="card">
      <span className="cardIcone">{icone}</span>
      <h3 className="cardTitulo">{titulo}</h3>
      <p className="cardTexto">{texto}</p>
    </div>
  )
}

function App() {
  return (
    <>
      <div className="header">
        <h1>DESI 2026/1 v1</h1>
        <nav className="menu">
          <a href="#inicio">Inicio</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </div>

      <div className="hero" id="inicio">
        <h1 className="name">Davi Gomes</h1>
        <p>Projetos práticos de HTML, CSS e JavaScript, organizados na ordem em que foram feitos.</p>
      </div>

      <div className="sobreCurso" id="sobre">
        <h1 className="SB"> • O QUE É DESENVOLVIMENTO DE SISTEMAS?</h1>

        <div className="megaBox">
          <div className="boxText">
            <h1 className="textSb">
              O desenvolvimento de sistemas é o processo de criar programas, sites e aplicativos para solucionar problemas e facilitar tarefas do dia a dia. Ele envolve etapas como planejamento, programação, testes e manutenção. Com o desenvolvimento de sistemas, é possível criar soluções tecnológicas que ajudam pessoas e empresas a trabalhar de forma mais rápida, organizada e eficiente.
            </h1>
          </div>

          <div className="miniBox"></div>
        </div>

        <div className="grid grid2">
          <div className="card">
            <span className="cardIcone"></span>
            <h3 className="cardTitulo">Qual o objetivo do curso</h3>
            <p className="cardTexto">
              Formar profissionais capazes de analisar problemas, planejar e programar sistemas, testar o que foi criado e dar manutenção, usando tecnologias atuais do mercado.
            </p>
          </div>

          <div className="card">
            <span className="cardIcone"></span>
            <h3 className="cardTitulo">O que um profissional dessa área faz</h3>
            <p className="cardTexto">
              Desenvolve sites, aplicativos e sistemas, cria e consulta bancos de dados, corrige erros e melhora soluções que já existem, muitas vezes trabalhando em equipe.
            </p>
          </div>
        </div>
      </div>

      
      <div className="secao secaoClara" id="aprende">
        <h1 className="SB"> • O QUE VOCÊ APRENDE</h1>
        <div className="grid">
          {aprendizados.map((item) => (
            <Card key={item.titulo} {...item} />
          ))}
        </div>
      </div>

      
      <div className="secao secaoEscura" id="tecnologias">
        <h1 className="SB"> • TECNOLOGIAS</h1>
        <div className="techLista">
          {tecnologias.map((tec) => (
            <span
              key={tec.nome}
              className="tech"
              style={{ color: tec.cor, borderColor: tec.cor }}
            >
              {tec.nome}
            </span>
          ))}
        </div>
      </div>

      
      <div className="secao secaoClara" id="areas">
        <h1 className="SB"> • ÁREAS DE ATUAÇÃO</h1>
        <div className="grid">
          {areas.map((item) => (
            <Card key={item.titulo} {...item} />
          ))}
        </div>
      </div>

      
      <div className="secao secaoEscura" id="projetos">
        <h1 className="SB"> • EXEMPLOS DE PROJETOS</h1>
        <div className="grid">
          {projetos.map((item) => (
            <Card key={item.titulo} {...item} />
          ))}
        </div>
      </div>

      
      <div className="cta">
        <h1 className="ctaTitulo">Seu futuro na tecnologia pode começar aqui.</h1>
        <p className="ctaTexto">Conheça o curso Técnico em Desenvolvimento de Sistemas.</p>
        <a
          className="botao"
          href="https://www.senai.br"
          target="_blank"
          rel="noreferrer"
        >
          Conheça o curso
        </a>
      </div>

      
      <footer className="footer" id="contato">
        <p className="footerCurso">Técnico em Desenvolvimento de Sistemas</p>
        <p>SENAI</p>
        <p>2026 • Davi Gomes</p>
      </footer>
    </>
  )
}

export default App
