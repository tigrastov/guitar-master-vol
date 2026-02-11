import { useState } from "react";
import './MessageMe.css';

export default function MessageMe() {
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = "7931813918:AAFqMdgRv_0WTPMuptl9zy-Yw9tTE5DzEYU"; // Ваш токен
    const chatId = "458204664";
    const text = `✉️ Новое сообщение!\n\nСообщение: ${message}\nКонтакт для ответа: ${contact}`;

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
      setMessage("");
      setContact("");
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Что-то пошло не так. Попробуйте позже.");
    }
  };

  return (
    <div className='callback'>
      <h2>Задать вопрос</h2>
      {isSubmitted ? (
        <p className="success-message">Спасибо! Мы ответим вам в ближайшее время.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ваше сообщение"
              required
              rows={4}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Телефон/телеграм(на выбор)для ответа"
              required
            />
          </div>

          <div className="buttons-message">

            <button type="submit" className="submit-btn">
              Отправить сообщение
            </button>

            <a
              href="https://t.me/guitarmaster35"
              target="_blank"
              rel="noopener noreferrer"
              className="submit-btn-tg"
            >
              Написать в Телеграмм
            </a>

          </div>




        </form>
      )}
    </div>
  );
}