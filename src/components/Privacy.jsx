import { useTranslation } from "react-i18next";
export default function Privacy() {
  const { t } = useTranslation();
  return (
    <section id="privacy-policy">
      <div class="wrap del">
        <hr class="rule" />
        <h2>{t("privacy.title")}</h2>
        <p>{t("privacy.effective")}</p>

        <h3>{t("privacy.sections.0.title")}</h3>
        <p>
          {t("privacy.sections.0.paragraphs.0")}
          <a href="mailto:ksmartingauto@gmail.com"> ksmartingauto@gmail.com</a>.
        </p>

        <h3>{t("privacy.sections.1.title")}</h3>
        <ul>
          <li>
            <b>{t("privacy.sections.1.items.0.label")}</b>
            {t("privacy.sections.1.items.1.text")}
          </li>
          <li>
            <b>{t("privacy.sections.1.items.1.label")}</b>
            {t("privacy.sections.1.items.1.text")}
          </li>
          <li>
            <b>{t("privacy.sections.1.items.2.label")}</b>
            {t("privacy.sections.1.items.2.text")}
          </li>
          <li>
            <b>{t("privacy.sections.1.items.3.label")}</b>{" "}
            {t("privacy.sections.1.items.3.text")}
          </li>
        </ul>
        <p>{t("privacy.sections.1.after.0")}</p>

        <h3>{t("privacy.sections.2.title")}</h3>
        <ul>
          <li>
            <b>{t("privacy.sections.2.items.0.label")}</b>
            {t("privacy.sections.2.items.0.text")}
          </li>
          <li>
            <b>{t("privacy.sections.2.items.1.label")}</b>
            {t("privacy.sections.2.items.1.text")}
          </li>
        </ul>

        <h3>{t("privacy.sections.3.title")}</h3>
        <ul>
          <li>{t("privacy.sections.3.items.0.text")}</li>
          <li>{t("privacy.sections.3.items.1.text")}</li>
          <li>{t("privacy.sections.3.items.2.text")}</li>
          <li>{t("privacy.sections.3.items.3.text")}</li>
          <li>{t("privacy.sections.3.items.4.text")}</li>
        </ul>

        <h3>{t("privacy.sections.4.title")}</h3>
        <ul>
          <li>{t("privacy.sections.4.items.0.text")}</li>
          <li>{t("privacy.sections.4.items.1.text")}</li>
          <li>{t("privacy.sections.4.items.2.text")}</li>
        </ul>
        <p>{t("privacy.sections.4.after.0")}</p>

        <h3>{t("privacy.sections.5.title")}</h3>
        <p>{t("privacy.sections.5.paragraphs.0")}</p>

        <h3>{t("privacy.sections.6.title")}</h3>
        <ul>
          <li>{t("privacy.sections.6.items.0.text")}</li>
          <li>{t("privacy.sections.6.items.1.text")}</li>
          <li>
            {t("privacy.sections.6.items.2.text")}
            <a href="mailto:ksmartingauto@gmail.com">ksmartingauto@gmail.com</a>
            .
          </li>
        </ul>

        <h3>{t("privacy.sections.7.title")}</h3>
        <p>{t("privacy.sections.7.paragraphs.0")}</p>

        <h3>{t("privacy.sections.8.title")}</h3>
        <p>{t("privacy.sections.8.paragraphs.0")}</p>

        <h3>{t("privacy.sections.9.title")}</h3>
        <p>{t("privacy.sections.9.paragraphs.0")}</p>

        <h3>{t("privacy.sections.10.title")}</h3>
        <p>
          {t("privacy.sections.10.paragraphs.0")}
          <a href="mailto:ksmartingauto@gmail.com">ksmartingauto@gmail.com</a>.
        </p>
      </div>
    </section>
  );
}
