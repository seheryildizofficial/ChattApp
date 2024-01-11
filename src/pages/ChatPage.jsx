import { FaLocationArrow } from "react-icons/fa";
import Message from "../components/Message";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "../firebase/Config";
import { useEffect, useState } from "react";
const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const messagesCol = collection(db, "messages");

    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      author: {
        name: auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
  };
  useEffect(() => {
    const messagesCol = collection(db, "messages");
    onSnapshot(messagesCol, (snapshot) => {
      const tempMsg = [];
      snapshot.docs.forEach((doc) => {
        tempMsg.push(doc.data());
      });

      setMessages(tempMsg);
      //console.log("SNAPSHOT", snapshot);
    });
  }, []);
  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
        <p>{room}</p>
        <button>Farklı Oda</button>
      </header>
      <main>
        {messages.map((data, i) => (
          <Message key={i} data={data} />
        ))}
      </main>
      <form onSubmit={handleSubmit}>
        <input className="input2" required placeholder="Message" type="text" />
        <button>
          <FaLocationArrow className="icon" />
        </button>
      </form>
    </div>
  );
};

export default ChatPage;
