import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function handleListItemClick(listItem: HTMLLIElement) {
  const [previousListItem, setPreviousListItem] = useState<HTMLLIElement>(null);
  if (previousListItem) {
    previousListItem.classList.toggle("active");
  }
  listItem.classList.toggle("active");
}

function ListGroup({ items, heading }: ListGroupProps) {
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
              handleListItemClick(event.currentTarget, previousListItem);
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
