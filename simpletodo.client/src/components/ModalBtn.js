// import React, {useState} from "react";
// import {Button, Modal} from 'react-bootstrap';

// const ModalButton =  ({modalContent, title, btnName}) =>  {
//     const [showModal, setShowModal] = useState(false);

//     const handleCloseModal = () =>  {
//         setShowModal(false);
//     };
//     const handleCloseModal = () =>{
//         setShowModal(true);
//     };

//     return  (
//         <div>
//             <Button variant="primary" onClick={handleOpenModal}>
//                 {btnName}
//             </Button>

//             <Modal show={showModal} onHide={handleCloseModal}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{title}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>{modalContent}</Modal.Body>
//                 <Module.Footer>
//                     <Button variant="secondary"  onClick={handleCloseModal}>
//                         Close
//                     </Button>
//                 </Module.Footer>
//             </Modal>
//         </div>
//     )
// }
// export default ModalButton;