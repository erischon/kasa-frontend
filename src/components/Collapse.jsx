import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Collapse = ({ name, isOpen, children }) => {
  const [open, setOpen] = useState(isOpen);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <article className="collapse">
      <div className="collapse__header">
        <h3>{name}</h3>
        <button onClick={toggle} className="collapse__open">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {open && <div className="collapse__content">{children}</div>}
    </article>
  );
};

export default Collapse;
