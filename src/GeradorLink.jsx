import styles from "./GeradorLink.module.css";

export default function GeradorLink() {
  return (
    <>
      <div className={styles.containerBox}>
        <h2 className={styles.tittle}>Gerador De Link</h2>
        <div className={styles.doc}>
          <label>Número de Telefone</label>
          <input className={styles.inputNumber} type="text" />
          <br />
          <label>Mensagem (opicional)</label>
          <textarea className={styles.textareaMensage}></textarea>
        </div>
      </div>
    </>
  );
}
