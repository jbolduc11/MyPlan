import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div>
            <div> <Link to="/"><i className="fas fa-user"></i></Link> </div>
            <div> <Link to="/products">MyPlan</Link> </div>
            <div><Link to="/cart"><i className="fas fa-money-bill-wave"></i></Link></div>
        </div>
        <div>
            <input 
            type="text"
            placeholder="Income"
            name="income"
            />
            <input 
            type="text"
            placeholder="Expenses"
            name="expenses"
            />
            <input 
            type="text"
            placeholder="Savings"
            name="savings"
            />
            
        </div>
    )
}
