// Interações simples para o site Recicla Condomínio Sollar do Icaraí

document.addEventListener("DOMContentLoaded", function () {
  // Botão para voltar ao topo
  const btn = document.createElement("button");
  btn.textContent = "⬆️ Topo";
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.display = "none";
  btn.style.backgroundColor = "#2f855a";
  btn.style.color = "white";
  btn.style.border = "none";
  btn.style.padding = "10px 15px";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";
  btn.style.zIndex = "1000";
  btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // Menu fixo ao rolar a página
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const navOffset = header.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.scrollY > navOffset) {
      header.style.position = "fixed";
      header.style.top = "0";
      header.style.width = "100%";
      header.style.zIndex = "999";
      document.body.style.paddingTop = header.offsetHeight + "px";
    } else {
      header.style.position = "static";
      document.body.style.paddingTop = "0";
    }
  });


 // Adiciona link na seção "Como Descartar o Lixo"
  const comoDescartar = document.querySelector("#como-descartar");
  if (comoDescartar) {
    const link = document.createElement("a");
    link.href = "https://cestosdelixoelixeiras.com.br/blog-lixeiras/qual-lixeira-devemos-jogar-o-nosso-lixo-veja-o-significado-de-cada-cor";
    link.textContent = "Clique aqui e veja o significado de cada cor de lixeira";
    link.target = "_blank";
    link.style.display = "inline-block";
    link.style.marginTop = "10px";
    link.style.color = "#2b6cb0";
    link.style.fontWeight = "bold";
    comoDescartar.appendChild(link);
  }
});


 
