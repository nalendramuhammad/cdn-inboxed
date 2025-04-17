// components/ui/ContactButton.tsx
"use client";

import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ContactButton() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <button
      className="contact-button"
      onClick={() => router.push("/contact#contact-form")}
    >
      <span className="icon">
        <Image
          src="/icons/chat.png"
          alt="chat"
          width={25}
          height={25}
        />
      </span>
      <span className="button-text">{t("contactButton.contactText")}</span>
    </button>
  );
}
