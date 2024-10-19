
function OfflinePage() {
  return (
    <div className="flex justify-center items-center w-[calc(100%-250px)] layout">
      <div className="text-center">
        <p className="text-2xl text-[var(--primary-color)] font-bold mb-5">You're Offline!</p>
        <p className="text-black-700 font-semibold">
          Please Check Your Internet Connection and Try Again
        </p>
      </div>
    </div>
  );
}

export default OfflinePage;