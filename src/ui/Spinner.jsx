function Spinner() {
  return (
    <div className="relative mx-auto my-20 aspect-square w-20 animate-spin rounded-full bg-[radial-gradient(farthest-side,var(--color-blue-600)_94%,transparent)] bg-[length:10px_10px] bg-top bg-no-repeat">
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(transparent_30%,var(--color-blue-600))] [mask-image:radial-gradient(farthest-side,transparent_calc(100%-10px),black_0)] [mask-size:cover] [mask-position:center] [mask-repeat:no-repeat]" />
    </div>
  );
}

export default Spinner;
