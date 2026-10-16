import { useTranslation } from "react-i18next";

export default function HowItWorks() {
  const { t } = useTranslation();
  return (
    <section id="how">
      <div class="wrap">
        <h2>{t("how.title")}</h2>
        <div class="cols">
          <div>
            <hr class="rule" />
            <h3>{t("how.groups.0.title")}</h3>
            <ol class="flow">
              <li>
                <div>
                  <b>{t("how.groups.0.steps.0.title")}</b>
                  <span>{t("how.groups.0.steps.0.text")}</span>
                </div>
              </li>
              <li>
                <div>
                  <b>{t("how.groups.0.steps.1.title")}</b>
                  <span>{t("how.groups.0.steps.1.text")}</span>
                </div>
              </li>
              <li>
                <div>
                  <b>{t("how.groups.0.steps.2.title")}</b>
                  <span>{t("how.groups.0.steps.2.text")}</span>
                </div>
              </li>
            </ol>
          </div>
          <div>
            <hr class="rule" />
            <h3>{t("how.groups.1.title")}</h3>
            <ol class="flow">
              <li>
                <div>
                  <b>{t("how.groups.1.steps.0.title")}</b>
                  <span>{t("how.groups.1.steps.0.text")}</span>
                </div>
              </li>
              <li>
                <div>
                  <b>{t("how.groups.1.steps.1.title")}</b>
                  <span>{t("how.groups.1.steps.1.text")}</span>
                </div>
              </li>
              <li>
                <div>
                  <b>{t("how.groups.1.steps.2.title")}</b>
                  <span>{t("how.groups.1.steps.2.text")}</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
