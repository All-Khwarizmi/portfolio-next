import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-inherit h-20 flex items-center justify-center'>
      <p>Copyright &copy; {new Date().getFullYear()} </p>
    </footer>
  );
}

export default Footer