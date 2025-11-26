import ContactInfo from "@/app/_components/contact/ContactInfo";
import ContactForm from "@/app/_components/contact/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">聯絡我</h2>
          <p className="text-gray-600">
            有任何問題或想合作？歡迎留言詢問與聯繫我
          </p>
        </div>

        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
