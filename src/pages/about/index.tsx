import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <main>
      <h1>{t("WHAT_UP")}</h1>
    </main>
  );
}

// export async function getStaticProps(contex: { locale: any }) {
//   const { locale } = contex;
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common", "about"])),
//     },
//   };
// }

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translationsProps = await serverSideTranslations(locale ?? "en", [
    // `i18next` namespace, matches translations file names
    // & `defaultNS` in `next-i18next.config.js`
    "common",
    "about",
  ]);

  return {
    props: {
      // These props are used by `appWithTranslation` in `_app.tsx`
      // to set up a React context which holds translations
      ...translationsProps,
    },
  };
};
