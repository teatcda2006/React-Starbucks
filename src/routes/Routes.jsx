import { Route, Routes } from 'react-router-dom'

import Main from '../pages/Main'
import Menu from '../pages/Menu'

export default function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/menu' element={<Menu />} />
        </Routes>
    )
}