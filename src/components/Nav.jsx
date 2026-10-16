import { useTranslation } from "react-i18next";

export default function Nav() {
  const { t } = useTranslation();
  return (
    <div className="wrap">
      <nav>
        <ul>
          <li>
            <a href="#how" className="">
              {t("nav.how")}
            </a>
          </li>
          <li>
            <a href="#data">{t("nav.data")}</a>
          </li>

          <li>
            <a href="#privacy-policy">{t("nav.privacy")}</a>
          </li>
          <li>
            <a href="#delete-account">{t("nav.delete")}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
