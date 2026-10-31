// ModalContent.jsx
import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

const ModalContent = forwardRef (({ children }, ref) => {
  const refprop = (e) => {
    e.stopPropagation()
};
    
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}
      className="bg-white  rounded-lg shadow-lg relative z-50 w-auto h-auto flex items-center justify-center"
      onClick={ refprop} // Prevent closing when clicking inside content
      ref={ref}
    >
      {children}
    </motion.div>
  );
});

export default ModalContent;
