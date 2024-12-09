const App = () => {
  return (
    <div>
      {/* Blue box: visible above 1024px */}
      <div className='hidden p-10 text-white bg-blue-500 lg:block'>
        <h1>Visible Above 1024px</h1>
      </div>

      {/* Red box: visible below 1024px */}
      <div className='block p-10 text-white bg-red-500 lg:hidden'>
        <h1>Visible Below 1024px</h1>
      </div>
    </div>
  );
};

export default App;
