export function aboutView(): string {
  return `
        <section class="timeline-section">
      <h2 class="timeline-title">Нашата история</h2>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">2009</span>
            <h3>Създаване на Си Би Ес</h3>
            <p>
              Компанията е основана през 2009г. с цел продажба на хардуер,
              главно лаптопи.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">2011</span>
            <h3>Първо голямо признание</h3>
            <p>
              В следващите години компанията е един от главните вносители на
              Toshiba за страната.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">2015</span>
            <h3>Промяна</h3>
            <p>
              Адаптиране към променящия се пазар и навлизащите системи за
              видеонаблюдение.
            </p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">2025</span>
            <h3>Настояще</h3>
            <p>
              Компанията е една от наложилите се в обл. Пловдив за проектиране,
              монтаж и поддръжка на компютърни системи, мрежови услуги, сървъри,
              охранителни технологии, хардуер и много други.
            </p>
          </div>
        </div>
      </div>
    </section>
    `;
}
