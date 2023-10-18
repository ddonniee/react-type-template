import React from "react";
// svgs
import Close from '../assets/icons/icon_close.svg'

interface alertProps {
  btnTxt: string,
  alertTxt : string,
  double: boolean | undefined,
  onClose: ()=> void ,
  onConfirm: ()=> void ,
}

export const Alert:React.FC<alertProps> = ({alertTxt, onClose, btnTxt, double, onConfirm}) => {
  
  return (
    <>
        <div className="modal">
            <div className="modal-content alert-only custom-justify-between">
                <div className="alert-top"><img src={Close} alt="close-btn" onClick={onClose} /></div>
                <div className="alert-middle"><span>{alertTxt}</span></div>
                <div className="alert-bottom custom-flex-item">
                    {
                        !double
                        ?
                        <button onClick={onClose}>{btnTxt}</button>
                        :
                        <>
                        <button onClick={onClose} className="cancel-btn">Cancel</button>
                        <button onClick={onConfirm}>{btnTxt}</button>
                        </>
                    }
                </div>
            </div>
        </div>
    </>
  ) 
}

export default Alert;