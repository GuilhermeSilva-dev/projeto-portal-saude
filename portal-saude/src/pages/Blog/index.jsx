import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './style.css';

export default function Blog() {
  const posts = [
    { titulo: "A Importância do Check-up Anual", data: "15/06/2026", resumo: "Entenda por que prevenir é sempre o melhor remédio para sua saúde." },
    { titulo: "Alimentação Saudável no Inverno", data: "10/06/2026", resumo: "Dicas de alimentos que ajudam a fortalecer o sistema imunológico." }
  ];

  return (
    <>
      <Header />
      <main className="container">
        <h1>Blog & Novidades</h1>
        <div className="lista-posts">
          {posts.map((post, index) => (
            <article key={index} className="post">
              <h2>{post.titulo}</h2>
              <small>{post.data}</small>
              <p>{post.resumo}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
