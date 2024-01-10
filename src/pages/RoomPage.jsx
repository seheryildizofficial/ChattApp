const RoomPage = ({ setRoom }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const room = e.target[0].values;
    //console.log(room)

    setRoom(room.toUpperCase());
  };
  return (
    <form className="room-page">
      <h1>Sohbet Odası</h1>
      <p>Hangi Odaya Gireceksiniz</p>
      <input placeholder="oda ismi giriniz" type="text" />
      <button type="submit">Odaya Gir</button>
      <button type="button">Çıkış Yap</button>
    </form>
  );
};

export default RoomPage;
