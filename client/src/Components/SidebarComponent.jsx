import React from 'react'
import '../styles/sidebar.css'
import {
    ReceiptLong as InvoicesIcon,
    Person as CustomersIcon,
    BusinessCenter as BusinessIcon,
    LibraryBooks as JournalIcon,
    Sell as PriceListIcon,
    Receipt as MultiInvoiceIcon,
    HighlightOff as UnpaidIcon,
    CardGiftcard as OfferIcon,
    Inventory2 as InventoryIcon,
    Group as MemberIcon,
    ImportExport as ImportExportIcon,
    Logout as LogoutIcon
} from '@mui/icons-material';

function Sidebar() {

    const menuItems = [
        { label: 'Invoices', icon: <InvoicesIcon style={{color: '#7dd3fc'}} /> },
        { label: 'Customers', icon: <CustomersIcon style={{color: '#4ade80'}}/> },
        { label: 'My Business', icon: <BusinessIcon style={{color: '#a7f3d0'}}/> },
        { label: 'Invoice Journal', icon: <JournalIcon style={{color: '#60a5fa'}}/> },
        { label: 'Price List', icon: <PriceListIcon style={{color: '#34d399'}}/> },
        { label: 'Multiple Invoicing', icon: <MultiInvoiceIcon style={{color: '#fb923c'}}/> },
        { label: 'Unpaid Invoices', icon: <UnpaidIcon style={{color: '#67e8f9'}}/> },
        { label: 'Offer', icon: <OfferIcon style={{color: '#f472b6'}}/> },
        { label: 'Inventory Control', icon: <InventoryIcon style={{color: '#fbbf24'}}/>, disabled: true },
        { label: 'Member Invoicing', icon: <MemberIcon style={{color: '#38bdf8'}}/>, disabled: true },
        { label: 'Import/Export', icon: <ImportExportIcon style={{color: '#3b82f6'}}/> },
        { label: 'Log out', icon: <LogoutIcon style={{color: '#a78bfa'}}/> },
    ];

    return (
        <div className="sidebar">
            <div className="menu-title">

                <span>Menu</span>
            </div>

            {menuItems.map((item, idx) => (
                <div
                    key={idx}
                    className='menu-item'
                >
                    <div className={idx === 4 ? "green-dot" : "no-dot"}></div>
                    <div>{item.icon}</div>
                    <span className='menu-item-label'>{item.label}</span>
                </div>
            ))}

        </div>
    )
}

export default Sidebar