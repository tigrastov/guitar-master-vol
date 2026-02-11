
import './CallBack.css';
import { useState } from "react";

export default function CallBack() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = "7931813918:AAFqMdgRv_0WTPMuptl9zy-Yw9tTE5DzEYU";

    const chatId = "458204664";
    const text = `📞 *Новая заявка!*\nИмя: ${name}\nТелефон: ${phone}`;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      });
      setIsSubmitted(true);
      setName("");
      setPhone("");
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Что-то пошло не так. Попробуйте позже.");
    }

  };

  return (
    <div className='callback'>

      <h2>Обратный звонок</h2>
      {isSubmitted ? (
        <p className="success-message">Спасибо! Мы скоро вам перезвоним.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ваш телефон"
              required
            />
          </div>


            <button type="submit" className="submit-btn">
              Заказать звонок
            </button>

            




        </form>
      )}
    </div>
  );
}