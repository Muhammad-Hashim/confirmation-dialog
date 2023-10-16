
import "./App.css";
import { useState } from "react";
import ConfirmationDialog from "./ConfirmationDialog";

function App() {
  const [isShowconfirmation, setIsShowconfirmation] = useState(false);
  const [itemsConfirmation, setitemsConfirmation] = useState(false)

  const handleConfirmation = () => {

    console.log("Confirm");
    
    if (itemsConfirmation) {
      alert("Confirm");
    } else {
      alert("Cancel");
    }
  };

  const onConfirm = () => {
    setitemsConfirmation(true);
    setIsShowconfirmation(false);
    handleConfirmation();
  };
   const onCancel = () => setIsShowconfirmation(false)
  return (
    <>
      {isShowconfirmation ? 
        <ConfirmationDialog
          message="Are you sure you want to perform this action?"
          onCancel={onCancel}
          onConfirm={onConfirm}
          isOpen={isShowconfirmation}
        />
       : 
        <div className="App">
          <button onClick={() => setIsShowconfirmation(true)}>Click me!</button>
         
          <p>
            Compiled successfully! You can now view confirmation-dialog in the
            browser. Local: http://localhost:3000 On Your Network:
            http://192.168.100.25:3000 Note that the development build is not
            optimized. To create a production build, use npm run build. webpack
            compiled successfully
          </p>
        </div>
      }
    </>
  );
}

export default App;
