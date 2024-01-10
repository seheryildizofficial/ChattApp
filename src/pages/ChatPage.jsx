const ChatPage = ({ room, setRoom }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;
    console.log(text);
  };
  return (
    <div className="chat-page">
      <header>
        <p>Deneme</p>
        <p>{room}</p>
        <button>Farklı Oda</button>
      </header>
      <main>mesajlar</main>
      <form onSubmit={handleSubmit}>
        <input required placeholder="mesajınızı yazınız" type="text" />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default ChatPage;
