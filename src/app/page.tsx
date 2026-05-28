import { BookingForm } from "@/components/BookingForm";
import { InteriorCarousel } from "@/components/InteriorCarousel";
import Image from "next/image";

const services = [
  {
    icon: "澡",
    title: "舒緩洗澡",
    body: "依照毛孩膚況選用溫和清潔與護毛流程，洗淨髒污也保留皮毛自然光澤。",
  },
  {
    icon: "剪",
    title: "造型修剪",
    body: "從臉型、腳底毛到全身造型，兼顧可愛輪廓與日常照護的便利性。",
  },
  {
    icon: "護",
    title: "皮毛護理",
    body: "提供梳廢毛、保濕護理與局部清潔，讓敏感毛孩也能安心整理。",
  },
];

const prices = [
  {
    title: "基礎洗澡",
    amount: "800",
    items: ["沐浴清潔與吹整", "指甲與腳底毛整理", "耳道與基礎清潔"],
  },
  {
    title: "洗澡加造型",
    amount: "1,500",
    items: ["完整洗澡流程", "全身造型修剪", "依毛量與需求微調"],
  },
  {
    title: "皮毛護理",
    amount: "1,200",
    items: ["廢毛梳理", "保濕護毛", "敏感膚況照護建議"],
  },
];

const reviews = [
  {
    name: "陳小姐",
    body: "美容師很細心，會先了解狗狗個性再開始。回家後毛很蓬鬆，腳底也整理得很乾淨。",
  },
  {
    name: "林先生",
    body: "店內明亮沒有壓迫感，貓咪第一次美容也比想像中放鬆，過程回報讓人安心。",
  },
  {
    name: "張小姐",
    body: "造型很自然，不會剪得太誇張。每次都會提醒皮膚狀況和居家梳毛方式。",
  },
  {
    name: "黃小姐",
    body: "我家狗狗很怕吹風，這裡會分段休息，沒有硬來。接回家時精神很好，香味也很舒服。",
  },
  {
    name: "吳先生",
    body: "預約前溝通很清楚，會先說明可能加價的狀況。實際完成後和預期一樣，價格透明。",
  },
  {
    name: "許太太",
    body: "老犬關節比較敏感，美容師抱上抱下都很小心，還會提醒家裡地板要防滑，真的很貼心。",
  },
  {
    name: "蔡小姐",
    body: "貓咪洗完沒有躲一整天，毛結也慢慢處理掉，不會為了趕時間把孩子弄得很緊張。",
  },
  {
    name: "郭先生",
    body: "每次修剪都會保留我們喜歡的圓臉感，照片回報也很即時，是可以放心固定來的店。",
  },
];

export default function Home() {
  return (
    <>
      <header className="topbar" aria-label="網站導覽">
        <a className="brand" href="#top" aria-label="泡泡尾巴寵物美容首頁">
          <span className="brand-mark" aria-hidden="true">
            泡
          </span>
          <span>泡泡尾巴寵物美容</span>
        </a>
        <nav className="nav" aria-label="主要導覽">
          <a href="#services">服務</a>
          <a href="#process">流程</a>
          <a href="#pricing">價格</a>
          <a href="#reviews">評價</a>
          <a className="nav-cta" href="#booking">
            預約
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">竹東預約制寵物美容空間</span>
            <h1>讓每一條尾巴，都帶著安心回家。</h1>
            <p>
              從洗澡、修剪到皮毛護理，我們用一對一的節奏照顧毛孩情緒，讓美容不只是變漂亮，也是一段舒服的整理時光。
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#booking">
                立即預約
              </a>
              <a className="btn btn-light" href="#pricing">
                查看價格
              </a>
            </div>
          </div>
        </section>

        <div className="stats" aria-label="店鋪特色數據">
          <div className="stat">
            <strong>30+</strong>
            <span>種膚況與毛質照護經驗</span>
          </div>
          <div className="stat">
            <strong>1:1</strong>
            <span>預約制專心服務</span>
          </div>
          <div className="stat">
            <strong>4.9</strong>
            <span>顧客平均好評</span>
          </div>
        </div>

        <section id="services">
          <div className="section-inner">
            <div className="section-head">
              <h2>按照毛孩狀態安排，不套用固定公式。</h2>
              <p>
                每次美容都會先確認毛況、皮膚與個性，讓敏感、怕水或第一次來的毛孩也能慢慢適應。
              </p>
            </div>
            <div className="services">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <span className="icon" aria-hidden="true">
                    {service.icon}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="band">
          <div className="section-inner split">
            <InteriorCarousel />
            <div>
              <div className="section-head">
                <h2>預約、溝通、整理，每一步都讓你看得見。</h2>
                <p>
                  我們重視美容前的溝通，也會在完成後分享照護提醒，讓回家後的整理更輕鬆。
                </p>
              </div>
              <div className="steps">
                <div className="step">
                  <span className="step-num">1</span>
                  <div>
                    <h3>預約諮詢</h3>
                    <p>確認毛孩品種、體型、個性與希望服務，安排最適合的時段。</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">2</span>
                  <div>
                    <h3>溫柔美容</h3>
                    <p>依照毛孩狀態調整洗澡、吹整和修剪節奏，降低等待與壓力。</p>
                  </div>
                </div>
                <div className="step">
                  <span className="step-num">3</span>
                  <div>
                    <h3>照護提醒</h3>
                    <p>完成後說明皮膚、毛結、耳朵或指甲狀況，提供居家整理建議。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing">
          <div className="section-inner">
            <div className="section-head">
              <h2>清楚價格，依體型與毛況微調。</h2>
              <p>以下為常見服務起始價，實際金額會依毛量、打結程度與造型需求確認。</p>
            </div>
            <div className="prices">
              {prices.map((price) => (
                <article className="price-card" key={price.title}>
                  <h3>{price.title}</h3>
                  <div className="price">
                    <small>NT$</small>
                    <b>{price.amount}</b>
                    <small>起</small>
                  </div>
                  <ul>
                    {price.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="band">
          <div className="section-inner">
            <div className="section-head">
              <h2>毛孩舒服，飼主也放心。</h2>
              <p>很多客人第一次來是因為毛孩緊張，後來留下來是因為每次都被好好對待。</p>
            </div>
            <div className="reviews" aria-label="顧客評價輪播">
              <div className="review-track">
                {[...reviews, ...reviews].map((review, index) => (
                  <article
                    className="review-card"
                    key={`${review.name}-${index}`}
                    aria-hidden={index >= reviews.length}
                  >
                    <div className="stars" aria-label="五星評價">
                      ★★★★★
                    </div>
                    <p>{review.body}</p>
                    <h3>{review.name}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="booking">
          <div className="section-inner booking-grid">
            <div>
              <div className="section-head">
                <h2>預約一段舒服的美容時間。</h2>
                <p>留下基本資訊與需求，我們會依服務內容與毛孩狀態回覆適合時段。</p>
              </div>
              <div className="contact-list">
                <span>營業時間：週二至週日 10:00 - 19:00</span>
                <span>電話：02-2345-6789</span>
                <span>地址：新竹縣竹東鎮桐葉路195巷1號1樓</span>
              </div>
              <figure className="location-map" aria-label="泡泡尾巴寵物美容位置地圖">
                <div className="map-frame">
                  <Image
                    alt="泡泡尾巴寵物美容位置地圖"
                    fill
                    sizes="(max-width: 860px) 100vw, 420px"
                    src="/assets/store-map-zhudong-51.png"
                  />
                </div>
                <figcaption className="location-note">
                  建議從竹東車站開車約 8 分鐘抵達，附近可短暫停車接送毛孩。
                </figcaption>
              </figure>
            </div>
            <BookingForm />
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 泡泡尾巴寵物美容 Bubble Tail Pet Spa</footer>
    </>
  );
}
