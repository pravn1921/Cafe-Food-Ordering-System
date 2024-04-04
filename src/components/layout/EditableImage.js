import Image from "next/image";
import toast from "react-hot-toast";

export default function EditableImage({link, setLink}) {

  async function handleFileChange(ev) {
    const files = ev.target.files;
    if (files?.length === 1) {
      const data = new FormData;
      data.set('file', files[0]);

      const uploadPromise = fetch('/api/upload', {
        method: 'POST',
        body: data,
      }).then(response => {
        if (response.ok) {
          return response.json().then(link => {
            setLink(link);
          })
        }
        throw new Error('Something went wrong');
      });

      await toast.promise(uploadPromise, {
        loading: 'Uploading...',
        success: 'Uploaded',
        error: 'Error',
      });
    }
  }

  return (
    <>
      {link && (
        <Image className="rounded-full border-2" src={link} width={250} height={250} alt={'avatar'} />
      )}
      {!link && (
        <div className="text-center bg-gray-200 p-4 text-gray-400 rounded-full">
          <Image className="rounded-full mb-1" src={'/placeholder.jpg'} width={250} height={250} alt={'avatar'} />
        </div>
      )}
      <label>
        <input type="file" className="hidden" onChange={handleFileChange} />
        <span className="block border-2 bg-white border-primary rounded-full p-2 py-1.5 text-center cursor-pointer font-semibold text-primary text-base hover:bg-primary hover:text-white hover:scale-105 duration-300 w-32 mx-auto">
          Upload
        </span>
      </label>
    </>
  );
}