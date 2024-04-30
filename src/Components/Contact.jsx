export default function Contact() {
  return (
    <div id="contact">
      <h1>CONTACT US</h1>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Type Your E-Mail" required />
        <textarea placeholder="Type Your Message" name="message"></textarea>
        <input type="submit" value="SEND" />
      </form>
    </div>
  );
}
