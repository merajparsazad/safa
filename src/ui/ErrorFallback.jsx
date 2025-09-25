import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-50 p-20">
      <div className="w-full max-w-4xl rounded-md border border-gray-100 bg-white p-20 text-center">
        <h1 className="mb-6 text-4xl font-semibold">مشکلی پیش آمده 🤔</h1>
        <p className="mb-12 text-gray-500">{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>
          تلاش مجدد
        </Button>
      </div>
    </main>
  );
}

export default ErrorFallback;
