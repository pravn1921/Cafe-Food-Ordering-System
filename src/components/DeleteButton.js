import {useState} from "react";

export default function DeleteButton({label,onDelete}) {
  const [showConfirm, setShowConfirm] = useState(false);

  if (showConfirm) {
    return (
      <div className="fixed bg-black/80 inset-0 flex items-center h-full justify-center">
        <div className="bg-white p-6 rounded-lg border-2 border-gray-400">
          <div className="font-semibold text-gray-700 pb-3 text-xl font-sans w-96 h-12">Are you sure you want to delete?</div>
          <div className="flex gap-6 mt-1">
            <button type="button" onClick={() => setShowConfirm(false)}>
              Cancel
            </button>
            <button
              onClick={() => {
                onDelete();
                setShowConfirm(false);
              }}
              type="button"
              className="primary">
              Yes,&nbsp;Delete!
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button type="button" onClick={() => setShowConfirm(true)} className="rounded-full bg-red-200 border-2 hover:bg-red-300">
      {label}
    </button>
  );
}