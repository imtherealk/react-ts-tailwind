export const TableHeaderCell = ({
  className,
  children,
  ...props
}: ITableCellProps) => {
  return (
    <th
      {...props}
      scope="col"
      className={`${className} w-screen box-border text-left px-3 lg:px-6 py-3 text-xs lg:text-md font-bold text-gray-500 uppercase`}
    >
      {children}
    </th>
  );
};
