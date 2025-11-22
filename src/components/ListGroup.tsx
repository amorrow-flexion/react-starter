import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function handleListItemClick(listItem: HTMLLIElement) {
  listItem.classList.toggle("active");
}

function ListGroup({ items, heading }: ListGroupProps) {
  const [previousListItem, setPreviousListItem] = useState<HTMLLIElement | null>(null);

  function handlePreviousItem(listItem: HTMLLIElement) {
    if (previousListItem) {
      previousListItem.classList.remove("active");
    }
    setPreviousListItem(listItem);
  }
  
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={"list-group-item"}
            key={item}
            onClick={(event) => {
              handlePreviousItem(event.currentTarget);
              handleListItemClick(event.currentTarget);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
