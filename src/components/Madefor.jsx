import { useTranslation } from "react-i18next";

export default function Madefor() {
  const { t } = useTranslation();
  return (
    <section class="paper">
      <div class="wrap">
        <h2>{t("features.title")}</h2>
        <div class="grid">
          <div class="card">
            <h3>{t("features.items.0.title")}</h3>
            <p>{t("features.items.0.text")}</p>
          </div>
          <div class="card">
            <h3>{t("features.items.1.title")}</h3>
            <p>{t("features.items.1.text")}</p>
          </div>
          <div class="card">
            <h3>{t("features.items.2.title")}</h3>
            <p>{t("features.items.2.text")}</p>
          </div>
          <div class="card">
            <h3>{t("features.items.3.title")}</h3>
            <p>
             {t("features.items.3.title")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
