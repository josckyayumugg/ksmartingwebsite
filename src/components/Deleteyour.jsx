import { useTranslation } from "react-i18next";
export default function Deleteyour() {
  const { t } = useTranslation();
  return (
    <section id="delete-account" class="paper">
      <div class="wrap del">
        <hr class="rule" />
        <h2>{t("deleteAccount.title")}</h2>
        <p>
          <b>{t("deleteAccount.intro")}</b>.
        </p>

        <h3>{t("deleteAccount.requirementsTitle")}</h3>
        <ul>
          <li>{t("deleteAccount.requirements.0")}</li>
          <li>{t("deleteAccount.requirements.1")}</li>
          <li>{t("deleteAccount.requirements.2")}</li>
          <li>{t("deleteAccount.requirements.3")}</li>
          <li>{t("deleteAccount.requirements.4")}</li>
        </ul>

        <h3>{t("deleteAccount.howTitle")}</h3>
        <ol>
          <li>{t("deleteAccount.requirements.0")}</li>
          <li>{t("deleteAccount.requirements.1")}</li>
          <li>{t("deleteAccount.requirements.2")}</li>
        </ol>
        <p>
          <a class="btn" href="mailto:ksmartingauto@gmail.com">
            {t("deleteAccount.button")}
          </a>
        </p>

        <h3>{t("deleteAccount.dataTitle")}</h3>
        <div class="tw">
          <table>
            <thead>
              <tr>
                <th>{t("deleteAccount.dataHeaders.0")}</th>
                <th>{t("deleteAccount.dataHeaders.1")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t("deleteAccount.dataRows.0.0")}</td>
                <td>{t("deleteAccount.dataRows.0.1")}</td>
              </tr>
              <tr>
                <td>{t("deleteAccount.dataRows.1.0")}</td>
                <td>{t("deleteAccount.dataRows.1.1")}</td>
              </tr>
              <tr>
                <td>{t("deleteAccount.dataRows.2.0")}</td>
                <td>{t("deleteAccount.dataRows.2.1")}</td>
              </tr>
              <tr>
                <td>{t("deleteAccount.dataRows.3.0")}</td>
                <td>{t("deleteAccount.dataRows.3.1")}</td>
              </tr>
              <tr>
                <td>{t("deleteAccount.dataRows.4.0")}</td>
                <td>{t("deleteAccount.dataRows.4.1")}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>{t("deleteAccount.timeTitle")}</h3>
        <p>{t("deleteAccount.timeText")}</p>

        <div class="note">
          <b>{t("deleteAccount.noteBold")}</b> {t("deleteAccount.noteText")}.
        </div>
      </div>
    </section>
  );
}
