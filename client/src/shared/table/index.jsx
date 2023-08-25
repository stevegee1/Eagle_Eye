export const TH = ({ head, length }) => {
  return (
    <th
      className={`
        ${head.id === 1 ? "text-left rounded-l-md" : "text-center"}
        ${head.id === length && "rounded-r-md"}
        px-4 font-semibold text-xs text-coolGray-500 uppercase
        `}
    >
      {head.name}
    </th>
  );
};
