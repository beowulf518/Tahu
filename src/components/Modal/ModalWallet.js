import './modal.css';

const ModalWallet = () => {


  return (
    <div id="menu1" className="modal fade p-0">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header" data-dismiss="modal">
                Menu <i className="far fa-times-circle icon-close" />
            </div>
            <div className="menu modal-body">
                <div className="row w-100">
                    <div className="items p-0 col-12 text-center" />
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default ModalWallet;