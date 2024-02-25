export default function ErrorBanner() {
  return (
    <div className="mx-auto flex items-center justify-center bg-red-600 px-6 py-2.5 text-center">
      <p className="text-sm leading-6 text-white">
        <strong className="font-semibold">
          Algo salió mal. Por favor, inténtalo de nuevo más tarde.
        </strong>
      </p>
    </div>
  );
}
