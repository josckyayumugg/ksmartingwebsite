import { IonIcon } from "@ionic/react";
import { useTranslation } from "react-i18next";
import { logoFacebook, logoInstagram, logoWhatsapp } from "ionicons/icons";
import { mail } from "ionicons/icons";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="flex flex-col  ">
      <div class="wrap" className="px-4 mx-auto">
        <span className="flex flex-row gap-4 flex-wrap">
          <a href="#privacy-policy">.{t("footer.privacyPolicy")}</a>
          <a href="#delete-account">.{t("footer.deleteAccount")}</a>
          <a href="mailto:ksmartingauto@gmail.com">.ksmartingauto@gmail.com</a>
        </span>
      </div>
      <div className="mx-auto flex gap-4 flex-row flex-wrap p-4">
        <span className="flex flex-row">
          <IonIcon
            icon={logoFacebook}
            className="text-yellow-300 pr-1  text-2xl"
          />
          <p>ksmartingAuto</p>
        </span>
        <span className="flex flex-row">
          <IonIcon icon={mail} className="text-yellow-400 pr-1  text-2xl" />
          <p>ksmartingauto@gmail.com</p>
        </span>
        <span className="flex flex-row">
          <IonIcon
            icon={logoInstagram}
            className="text-yellow-400 pr-1  text-2xl"
          />
          <p>ksmartingauto</p>
        </span>
        <span className="flex flex-row">
          <IonIcon
            icon={logoWhatsapp}
            className="text-yellow-400  pr-1  text-2xl"
          />
          <p>+250 780 136 214</p>
        </span>
      </div>
      <span className="text-start px-4">&copy; 2026 Ksmarting Auto</span>
    </footer>
  );
}
