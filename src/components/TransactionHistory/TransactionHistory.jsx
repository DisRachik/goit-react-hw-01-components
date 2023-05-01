import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from 'helpers/helpers';

export const TransactionHistory = ({ items }) => {
  const tableDataName = Object.keys(items[0]).filter(name => name !== 'id');
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          {tableDataName.map(name => (
            <th key={name}>{name.toUpperCase()}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{capitalizeFirstLetter(type)}</td>
            <td>{amount}</td>
            <td>{currency.toUpperCase()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
