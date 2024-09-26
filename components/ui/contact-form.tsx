"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image"
import { Button } from "./button";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const accept = {
  regulamin: "Akceptuję Regulamin oraz Politykę prywatności i tym samym wyrażam zgodę na przetwarzanie przez Administratora moich danych osobowych (imię, nazwisko, adres e-mail, telefon) rozwiń zawartych w zgłoszeniu, w związku z art. 6 ust. 1 lit. A) rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO). W każdym momencie mogę wycofać zgodę zgłaszając wniosek o usunięcie danych do Administratora Danych Osobowych.",
  marketing: "Wyrażam zgodę na przesyłanie informacji handlowych za pomocą środków komunikacji elektronicznej w rozumieniu ustawy z dnia 18 lipca 2002 roku o świadczenie usług drogą elektroniczną rozwiń(Dz.U.2017.1219 t.j.) na podany adres e-mail na temat usług oferowanych przez Polnetkom Sp. z o.o. przy ul. Północnej 15-19 bud. 2.1, z siedzibą we Wrocławiu. Zgoda jest dobrowolna i może być w każdej chwili wycofana, klikając w odpowiedni link na końcu wiadomości e-mail. Wycofanie zgody nie wpływa na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przez jej wycofaniem."
}

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sending...");
    console.log(formData);

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setFormData(initialFormData);
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col text-md text-muted-darker font-bold" method="POST">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Imię i nazwisko"
          value={formData.name}
          onChange={handleChange}
          className="bg-white mb-4 py-2 px-4 rounded-sm placeholder:text-tertiary border border-tertiary"
          required
        />
        <div className="flex gap-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Adres e-mail"
            value={formData.email}
            onChange={handleChange}
            className="w-1/2 mb-4 py-2 px-4 rounded-sm bg-white placeholder:text-muted-darker border border-border"
            required
          />
          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder="Numer telefon"
            value={formData.phone}
            onChange={handleChange}
            className="w-1/2 mb-4 py-2 px-4 rounded-sm bg-white placeholder:text-muted-darker border border-border"
            required
          />
        </div>
        <textarea
          id="message"
          name="message"
          placeholder="Treść wiadomości..."
          value={formData.message}
          onChange={handleChange}
          className="py-2 px-4 rounded-sm h-38 text-stone-700 bg-white placeholder:text-muted-darker border border-border"
          required
        ></textarea>

        <div className="mt-4 flex gap-4 items-start">
          <input type="checkbox" name="regulamin" id="regulamin" required />
          <p className="text-primary-foreground text-xs font-medium">{accept.regulamin}</p>
        </div>
        <div className="mt-4 flex gap-4 items-start">
          <input type="checkbox" name="marketing" id="marketing" required />
          <p className="text-primary-foreground text-xs font-medium">{accept.marketing}</p>
        </div>

        <input
          type="submit"
          className="mt-4 py-2 px-4 rounded-sm hover:bg-green-800 hover:cursor-pointer bg-green-700 text-white"
        />

        <Button
          type="submit"
          className="w-[200] bg-gradient-to-r from-[#E7411B] to-[#B70D18] hover:from-[#B70D18] hover:to-[#B70D18]"
          size="lg"
        >
          <Image className="ml-2" src="/send.svg" width={40} height={40} alt="send icon" />
        </Button>
        {/* bg-primary-foreground */}

      </form>
      {submitted && <p>Wiadomość został wysłany</p>}
    </>
  );
}