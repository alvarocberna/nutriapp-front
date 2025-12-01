
interface ModalInterface {
    isOpen: boolean
    onClose: Function 
    children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Contenido del modal */}
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg relative">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute right-3 top-2 text-gray-500 hover:text-gray-700"
        >
            X
        </button>
          {children}
      </div>
    </div>
  );
}
