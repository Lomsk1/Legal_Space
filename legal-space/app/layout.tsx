import type { Metadata } from "next";
import "./globals.css";
import LayoutNavigation from "@/components/layout/navigation";
import HeadingComponent from "@/components/layout/heading";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { Roboto_Mono } from "next/font/google";

const mono_roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Legal Space",
  description:
    "Legal Space - ესაა სამართლებრივი სივრცე, რომელიც იცავს თქვენს დარღვეულ უფლებებს. ჩვენთან სამართლებრივი კონსულტაცია და იურიდიული მომსახურება შეგიძლიათ მიიღოთ როგორც ქართულ, ასევე ინგლისურ, თურქულ და აზერბაიჯანულ ენებზე. ჩვენი გუნდი გთავაზობთ როგორც იურდიული დოკუმენტაციის მომზადებას, ასევე წარმომადგენლობას საჯარო დაწესებულებებსა და სასამართლოს სამივე ინსტანციაში",
  keywords: [
    "Legal Space",
    "LEGAL SPACE",
    "legal space",
    "Legal-Space",
    "LEGAL-SPACE",
    "legal-space",
    "ლეგალ სფეისი",
    "ლეგალ სფაცე",
    "ლეგალ",
    "სლეისი",
    "attorney",
    "cases",
    "criminal law",
    "administrative law",
    "public law",
    "civil law",
    "criminal",
    "law",
    "administrative",
    "public",
    "civil",
    "ადვოკატი",
    "ადვოკატები",
    "იურიდიული მომსახურება",
    "იურიდიული",
    "მომსახურება",
    "ქეთი ბერიძე",
    "ქეთი",
    "ბერიძე",
    "qeti beridze",
    "qeti",
    "beridze",
    "სისხლის სამართალი",
    "სისხლის",
    "ადმინისტრაციული სამართალი",
    "ადმინისტრაციული",
    "სამოქალაქო სამართალი",
    "სამოქალაქო",
    "სამართალი",
    "სასამართალო",
    "judge",
    "სახელშეკრულებო",
    "სამეზობლო",
    "საბანკო",
    "არასრულწლოვნები",
    "უძრავი ქონება",
    "მედიაცია",
    "მიწის რეგისტრაცია",
    "კონსულტაცია",
    "იურიდიული კონსულტაცია",
    "ზაპი",
    "იურიდიული სფერო",
    "უფლებების დაცვა",
    "legal advice",
    "rights protection",
    "professional legal services",
    "multilingual legal support",
    "Zappy",
    "Georgian law",
    "English law",
    "Turkish law",
    "Azerbaijani law",
    "lawyer",
    "legal representation",
    "court",
    "legal consultation",
    "legal expertise",
    "legal assistance",
    "legal rights",
    "justice",
    "legal solutions",
    "law firm",
    "legal counselor",
    "legal support",
    "legal system",
    "legal case",
    "legal representation",
    "legal assistance",
    "legal advocacy",
    "legal defense",
    "legal professionals",
    "litigation",
    "legal dispute",
    "legal resources",
    "legal expertise",
    "law and order",
    "legal information",
    "legal help",
    "legal representation",
    "legal solutions",
    "legal dispute resolution",
    "courtroom",
    "legal process",
    "legal advice online",
    "legal services online",
    "lawful",
    "legal support services",
    "lawful rights",
    "legal knowledge",
    "legal assistance online",
    "judicial system",
    "legal affairs",
    "legal expert",
    "legal issues",
    "legal education",
    "legal aid",
    "legal protection",
    "lawful representation",
    "lawful rights protection",
  ],
  authors: [{ name: "Zappy", url: "https://www.zappydev.pro" }],
  robots: { index: true, follow: true },
  themeColor: "#588157",
  creator: "Zappy",
  publisher: "Zappy",
  openGraph: {
    title: "Legal Space - ჩვენ ვიცავთ თქვენს უფლებებს",
    description:
      "Legal Space is the legal area that safeguards your violated rights. Get professional legal advice and services in multiple languages. Our team at Zappy ensures comprehensive support for your legal needs.",
    url: "https://www.legalSpace.ge",
    images: "https://i.ibb.co/d0q8kMy/qeti.png",
    siteName: "Legal Space",
  },
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mono_roboto.className}>
        <HeadingComponent />
        <LayoutNavigation />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
