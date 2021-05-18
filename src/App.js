import React, {useState} from "react";
import Transactions from "./pages/transactions/Transactions";
import UploadBtn from "./components/ui/UploadBtn";

const App = () => {
    const [modalShow, setModalShow] = useState(false);

    const showModal = () => {
        setModalShow(!modalShow);
    }

    return (
        <div className='main-wrapper'>
            <UploadBtn text={'Upload transactions'} openModal={showModal}/>

            {
                modalShow && <Transactions openModal={showModal}/>
            }

        </div>
    )
};

export default App;

