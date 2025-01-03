import styles from './table.module.css';
const Table = () => {

    return (
        <table className={styles['table']}>
            <thead>
                <tr>
                    <th colSpan={2}>Short Link</th>
                    <th colSpan={3}>Original Link</th>
                    <th colSpan={1}>QR</th>
                    <th colSpan={1}>Clicks</th>
                    <th colSpan={1}>Date</th>
                    <th colSpan={1}>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={2}>Data 1</td>
                    <td colSpan={3}>Data 2</td>
                    <td colSpan={1}>Data 3</td>
                    <td colSpan={1}>Data 2</td>
                    <td colSpan={1}>Data 3</td>
                    <td colSpan={1}>Data 2</td>
                </tr>

                <tr>
                    <td colSpan={2}>Data 1</td>
                    <td colSpan={3}>Data 2</td>
                    <td colSpan={1}>Data 3</td>
                    <td colSpan={1}>Data 2</td>
                    <td colSpan={1}>Data 3</td>
                    <td colSpan={1}>Data 2</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;
