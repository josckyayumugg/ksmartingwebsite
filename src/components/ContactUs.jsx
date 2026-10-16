import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();
  return (
    <section id="contact">
      <div class="wrap">
        <h2>{t("contact.title")}</h2>
        <p>{t("contact.text")}</p>
        <p>
          <a class="btn dark" href="mailto:ksmartingauto@gmail.com">
            ksmartingauto@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
