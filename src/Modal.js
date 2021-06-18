import { SmlsModal } from '@smiles/smiles-ui-kit-react';

function Modal() {

  return (
    <SmlsModal
      isOpen={true}
      type="right"
      //toggle={() => setModalIsOpen(false)}
      //onExit={() => setModalIsOpen(false)}
      className="modal-password"
    >
        <h4 id="lbl_titlePasswordAlert">Teste Modal no Teste</h4>
    </SmlsModal>
  );
}

export default Modal;
