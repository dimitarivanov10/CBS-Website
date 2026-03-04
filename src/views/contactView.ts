export function contactView() {
  return `
            <section id="contact">
      <h2 class="timeline-title">Свържете се с нас</h2>
      <p class="home-page-subtitle">
        Искате да се свържете с нас за запитване, на което не може да бъде
        отговорено в сайта? Можете да го направите чрез посочените по-долу
        контакти.
      </p>

      <div class="contacts-wrapper">
        <!-- Left: Map -->
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1758279922425!6m8!1m7!1s7eTncGAN70emfkWgO30QuQ!2m2!1d42.13704743746953!2d24.71752663601689!3f33.60619946635856!4f-1.716181377962144!5f0.7075154122994196"
            width="100%"
            height="400"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>

        <!-- Right: Contact info -->
        <div class="contact-info">
          <h3>Контакти</h3>
          <p><strong>Телефон:</strong> +359 888 123 456</p>
          <p><strong>Email:</strong> office@cbs-plovdiv.bg</p>
          <p>
            <strong>Адрес:</strong> ж.к. Христо Смирненски Западен, бул.
            "Пещерско Шосе" 113а, 4001 Пловдив, България (на ъгъла)
          </p>
        </div>
      </div>
    </section>
        `;
}
