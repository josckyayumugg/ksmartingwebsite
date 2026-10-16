import { useTranslation } from "react-i18next";

export default function WhatInfo() {
  const { t } = useTranslation();
  return (
    <section id="data" class="dark">
      <div class="wrap">
        <hr class="rule" />
        <h2>{t("data.title")}</h2>
        <p>{t("data.intro")}</p>
        <div class="tw">
          <table>
            <thead>
              <tr>
                <th>{t("data.headers.0")}</th>
                <th>{t("data.headers.1")}</th>
                <th>{t("data.headers.2")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t("data.rows.0.0")}</td>
                <td>{t("data.rows.0.1")}</td>
                <td>{t("data.rows.0.2")}</td>
              </tr>
              <tr>
                <td>{t("data.rows.1.0")}</td>
                <td>{t("data.rows.1.1")}</td>
                <td>{t("data.rows.1.2")}</td>
              </tr>
              <tr>
                <td>{t("data.rows.2.0")}</td>
                <td>{t("data.rows.2.1")}</td>
                <td>{t("data.rows.2.2")}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
         {t("data.outro")}
        </p>
      </div>
    </section>
  );
}
