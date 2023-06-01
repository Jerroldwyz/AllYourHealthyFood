import userAccount from './backend/UserAccount';

function SalesInvoicePage() {
    return (
        <div className="grid grid-cols-1 w-1/2 m-auto justify-items-center">
            <div className="m-6">
                <h1 className="text-5xl">Invoice</h1>
            </div>
            <div className="m-6">
                <table className="border-collapse border border-slate-500">
                    <tbody>
                        <tr>
                            <td className="border border-slate-700 p-4">Name</td>
                            <td className="border border-slate-700 p-4">{userAccount.salesInvoice.fullName}</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-700 p-4">Email</td>
                            <td className="border border-slate-700 p-4">{userAccount.salesInvoice.email}</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-700 p-4">address</td>
                            <td className="border border-slate-700 p-4">{userAccount.salesInvoice.address}</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-700 p-4">Method of Payment</td>
                            <td className="border border-slate-700 p-4">{userAccount.salesInvoice.paymentMethod}</td>
                        </tr>
                        <tr>
                            <td className="border border-slate-700 p-4">Date of Purchase</td>
                            <td className="border border-slate-700 p-4">{userAccount.salesInvoice.purchaseDate}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="m-6">
                <table className="border-collapse border border-slate-500">
                    <thead>
                        <tr>
                            <th className="border border-slate-600 p-4">Product</th>
                            <th className="border border-slate-600 p-4">Price</th>
                            <th className="border border-slate-600 p-4">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userAccount.salesInvoice.shoppingCart.map((item) => {
                            return(<tr key={item.item.id}>
                                <td className="border border-slate-700 p-4">{item.item.name}</td>
                                <td className="border border-slate-700 p-4">{item.item.price}</td>
                                <td className="border border-slate-700 p-4">{item.quantity}</td>
                            </tr>)
                        })}
                        <tr>
                            <td colSpan="3" className="border border-slate-700 p-4">Total Cost: {userAccount.salesInvoice.totalCost}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SalesInvoicePage;