export const TableDataCell = ({
  children,
  className,
  ...props
}: ITableCellProps) => {
  return (
    <td
      {...props}
      className={`${className} w-screen px-3 py-3 text-sm font-medium text-gray-800`}
    >
      {children}
    </td>
  );
};
