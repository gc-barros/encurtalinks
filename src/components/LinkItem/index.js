import './link-item.css';
import { FiX, FiCopy } from 'react-icons/fi';

export default function LinkItem({ closeModal, content }) {

  async function copyLink() {
    await navigator.clipboard.writeText(content.link);
    alert("Link copiado com sucesso! 🤖")
  }

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Aqui está seu link encurtado:</h2>
        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span>{content.long_url}</span>

      <button className="modal-link" onClick={copyLink}>
        {content.link}
        <FiCopy size={20} color="#FFF" />
      </button>
    </div>
  );
}