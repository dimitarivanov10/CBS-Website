export function serversView(): string {
  return `
        <section id="servers">
      <div class="hero-section">
        <div class="image-wrapper">
          <img
            src="./assets/comp_network_best.jpg"
            alt="comp_net"
            class="cn-bg-image"
          />
        </div>
        <div class="cn-overlay-text">
          <h2 class="cn-title">Сървъри<br /></h2>
          <h3 class="cn-subtitle">
            Изграждането на сървърна инфраструктура не е просто избор на хардуер
            и инсталиране на софтуер – това е основата, върху която се изграждат
            сигурността, надеждността и ефективността на цялата ви IT среда.
            Сървърите съхраняват и обработват критично важни данни, осигуряват
            достъп до системи и приложения и гарантират непрекъснатата работа на
            бизнеса ви всеки ден. За да можем да предложим най-подходящото и
            устойчиво решение, съобразено с настоящите и бъдещите ви нужди, има
            няколко ключови въпроса и технически аспекта, които е важно да
            обмислите предварително:
          </h3>
        </div>
      </div>
      <div class="servers-info-flex">
        <!-- LEFT SIDE -->
        <div class="servers-left">
          <h2 class="servers-big-title">
            Какво е необходимо да знаете преди да започнете със сървъри?
          </h2>
          <p class="servers-big-subtitle">
            Сървърът е сърцето на вашата IT инфраструктура. Правилното планиране
            още в началото ви спестява бъдещи разходи, проблеми със сигурността
            и ограничаване на растежа на бизнеса.
          </p>
        </div>

        <!-- RIGHT SIDE -->
        <div class="servers-right">
          <div class="server-tip-box">
            <span class="server-tip-number">1</span>
            <p>
              Каква ще бъде ролята на сървъра – файлов сървър, база данни,
              виртуализация, видеонаблюдение или комбинация от няколко услуги.
            </p>
          </div>

          <div class="server-tip-box">
            <span class="server-tip-number">2</span>
            <p>
              Колко потребители ще работят със системата и какво натоварване
              очаквате – това определя процесор, RAM и дискова конфигурация.
            </p>
          </div>

          <div class="server-tip-box">
            <span class="server-tip-number">3</span>
            <p>
              Надеждност и защита на данните – RAID масиви, архивиране, резервно
              захранване (UPS) и защита от загуба на информация.
            </p>
          </div>

          <div class="server-tip-box">
            <span class="server-tip-number">4</span>
            <p>
              Сигурност и достъп – контрол на потребители, защитени връзки, VPN
              и защита от външни атаки.
            </p>
          </div>

          <div class="server-tip-box">
            <span class="server-tip-number">5</span>
            <p>
              Възможност за разширяване в бъдеще – допълнителни дискове, повече
              RAM и надграждане без спиране на работата.
            </p>
          </div>
        </div>
      </div>
    </section>
    `;
}
