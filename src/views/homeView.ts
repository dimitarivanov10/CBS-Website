export function homeView(): string {
  return `
        <section id="home">
      <div class="hero-section">
        <div class="image-wrapper">
          <img src="./assets/camera.jpg" alt="camera" class="bg-image" />
        </div>
        <div class="overlay-text">
          <h2 class="home-page-title">
            Добре дошли в официалния сайт <br />на
            <span class="highlight">CBS</span> - СиБиЕс Пловдив.
          </h2>
          <h3 class="home-page-subtitle">
            Ние сме професионалисти в проектирането и изграждането на
            наблюдателни системи, сървъри, компютърни мрежи и много други
            услуги. Нашите услуги се предлагат основно в района на обл.Пловдив,
            но след запитване е възможно и до по-далечни места в България.
          </h3>
        </div>
      </div>
      <br />
      <h2 class="home-page-title">Нека да започваме</h2>
      <div class="mini-img-wrapper">
        <div class="mini-img-card">
          
        <a href="/computer_networks" data-link class="mini-img-card">
          <img src="./assets/comp_netw.png" alt="comp_net" class="mini-img" />
          <div class="img-overlay-text">Компютърни мрежи</div>
          </a>

        </div>
          
        <a href="/video" data-link class="mini-img-card">
        <div class="mini-img-card">
          <img src="./assets/sec_cam.png" alt="security_cam" class="mini-img" />
          <div class="img-overlay-text">Видеонаблюдение</div>
        </a>
        </div>
        <div class="mini-img-card">
       
        <a href="/servers" data-link class="mini-img-card">
        <img
            src="./assets/server.png"
            alt="computer_server"
            class="mini-img"
          />
          <div class="img-overlay-text">Сървъри</div>
          </a>

        </div>
        <div class="mini-img-card">
        
        <a href="/hardware_repair" data-link class="mini-img-card">  
        <img src="./assets/hard_fix.png" alt="laptop" class="mini-img" />
        <div class="img-overlay-text">Поправка на хардуер</div>
        </a>
        
        </div>
      </div>
    </section>
    `;
}
