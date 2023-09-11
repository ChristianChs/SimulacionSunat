const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-centers pt-10">
      <div className="w-[900px] flex flex-col">
        <div className="bg-white rounded relative">
          <div className=" bg-zinc-300 px-5 py-3 font-bold text-black">
            Vista Previa
            <button className="absolute top-3 right-0" onClick={() => onClose()}>
              <span className="text-3xl text-black mr-4 pt-2">
                <ion-icon name="close-sharp"></ion-icon>
              </span>
            </button>
          </div>
          <div className="py-10 px-5">
            {children}
          </div>
        </div>
      </div>

    </div>
  )
}
export default Modal