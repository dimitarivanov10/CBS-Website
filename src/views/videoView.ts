export function videoView(): string {
  return `
        <section id="video-surveillance">
      <div class="image-wrapper">
        <video class="cn-bg-video" autoplay loop muted playsinline>
          <source src="./assets/cctv_stock_footage2.mp4" type="video/mp4" />
        </video>
      </div>

      <div class="cn-overlay-text">
        <h2 class="cn-title">Видеонаблюдение</h2>
        <h3 class="cn-subtitle">
          Преди да се вземе решение за изграждане на система за видеонаблюдение,
          е важно да се знаят няколко ключови неща. Така клиентът може да
          направи информиран избор и да получи решение, което отговаря напълно
          на неговите нужди – без излишни разходи или пропуски.
          Видеонаблюдението не е просто монтаж на камери, а цялостна система,
          която изисква правилно планиране, съобразяване със законови изисквания
          и мисъл за бъдещата поддръжка. Именно затова подготвихме основните
          фактори, които всеки трябва да има предвид още преди заявка за проект.
        </h3>
      </div>

      <br />

      <div class="video-cards-wrapper">
        <div class="video-card-flex">
          <img
            src="./assets/razpoznavane.png"
            alt="Video goal"
            class="video-card-icon"
          />
          <div class="video-card-text">
            Желаете просто общ поглед върху обекта или държите на детайлно
            разпознаване на лица и регистрационни номера? Ясната цел ни помага
            да изберем камери с правилната резолюция и оптика за вашите нужди.
          </div>
        </div>

        <div class="video-card-flex">
          <img
            src="./assets/vajni_tochki.png"
            alt="Camera zones"
            class="video-card-icon"
          />
          <div class="video-card-text">
            Помислете кои са най-важните точки – входове, касови зони, паркинг
            или складови стелажи. Точният брой на тези зони определя
            конфигурацията на системата и правилното планиране на окабеляването.
          </div>
        </div>

        <div class="video-card-flex">
          <img
            src="./assets/dni_nazad.png"
            alt="Storage"
            class="video-card-icon"
          />
          <div class="video-card-text">
            Колко дни назад е необходимо да се съхраняват записите според вашите
            изисквания или законови разпоредби? Това е ключово за изчисляването
            на капацитета на твърдите дискове и скоростта на сървъра.
          </div>
        </div>

        <div class="video-card-flex">
          <img
            src="./assets/mrak_den.png"
            alt="Lighting conditions"
            class="video-card-icon"
          />
          <div class="video-card-text">
            Ще работят ли камерите при пълен мрак, срещу силно слънце или в
            специфична индустриална среда? Тези детайли ни насочват към модели с
            подходяща нощна подсветка и устойчивост на външни влияния.
          </div>
        </div>

        <div class="video-card-flex">
          <img
            src="./assets/novi_kameri.png"
            alt="Future expansion"
            class="video-card-icon"
          />
          <div class="video-card-text">
            Имате ли планове за добавяне на нови камери или интеграция със СОТ и
            контрол на достъпа на по-късен етап? Предварителното планиране ще ви
            спести средства, като изберем записващо устройство с капацитет за
            разширение.
          </div>
        </div>
      </div>
    </section>
    `;
}
