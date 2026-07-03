export default function ContactForm() {
  return (
    <form className="flex flex-1 flex-col gap-3.5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input"
            autoComplete="name"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            autoComplete="email"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            className="input min-h-[90px] resize-y"
          />
          <button type="submit" className="btn-primary self-start">
            Send message
          </button>
        </form>
  );
}