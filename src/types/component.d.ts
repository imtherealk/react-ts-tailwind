type TableCellBaseProps = React.ThHTMLAttributes<HTMLTableCellElement> &
  React.TdHTMLAttributes<HTMLTableCellElement>;

interface ITableCellProps extends TableCellBaseProps {
  className?: string;
  children: React.ReactNode;
}
