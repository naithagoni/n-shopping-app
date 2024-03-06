const LoadingSpinner = () => {
  return (
    <div className="flex gap-2 justify-center items-center h-screen">
      <span className="loading loading-bars loading-xs"></span>
      <span className="loading loading-bars loading-sm"></span>
      <span className="loading loading-bars loading-md"></span>
      <span className="loading loading-bars loading-lg"></span>
    </div>
  );
};

export default LoadingSpinner;
