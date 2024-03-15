
const H1A = ({ children }) => {
  return ( 
    <h1 className="text-4xl mb-8">
      { children }
    </h1>
   );
}

const H1B = ({ children }) => {
  return ( 
    <h1 className="text-2xl leading-none">
      { children }
    </h1>
   );
}

export {H1A, H1B};