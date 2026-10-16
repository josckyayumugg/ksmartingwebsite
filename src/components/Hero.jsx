import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-row bg-[var(--black)]">
      <div class="hero m-auto wrap flex flex-col">
        <div className="flex flex-col sm:flex-row ">
          <div className="relative flex flex-row items-center   sm:w-[100%] pl-8 gap-4 ">
            <img
              src="/searchui.jpeg"
              alt={t("hero.imgSearchAlt")}
              className=" [height:10rem] sm:[height:30rem] lg:[height:30rem]   rounded-2xl w-fit "
            />
            <div className="flex flex-row gap-4 lg:gap-8 sm:opacity-0">
              <img
                src="/product.jpg"
                alt={t("hero.imgProductAlt")}
                className="[height:10rem] lg:[height:12rem] rounded-2xl     "
              />
              <img
                src="/opotions.jpeg"
                alt={t("hero.imgOptionsAlt")}
                className="[height:10rem] lg:[height:12rem] rounded-2xl right-38  top-40 "
              />
            </div>
          </div>
          <div class="wrap self-center">
            <h1>{t("meta.title")}</h1>

            <p class="lead">{t("hero.lead")}</p>
            <div class="cta">
              <a class="btn" href="#contact">
                {t("hero.getApp")}
              </a>
              <a class="btn alt" href="#how">
                {t("hero.seeHow")}
              </a>
            </div>
          </div>
        </div>
        <div class="split">
          <div class="need">
            <h3>{t("hero.needTitle")}</h3>
            <p>{t("hero.needText")}</p>
          </div>
          <div class="have">
            <h3>{t("hero.haveTitle")}</h3>
            <p>{t("hero.needText")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
