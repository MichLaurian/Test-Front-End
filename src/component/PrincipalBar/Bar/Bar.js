import './Bar.css'

const Bar = () => {
    return (
        <nav>
            <div className="nav__left">corebiz</div>
            <div className="nav__middle">
                <div className="input__wrapper">
                    <input type="text" placeholder='¿Qué estas buscando?' />
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="nav__right">
                <div className="cart__icon">
                <i className="far fa-user">Mi cuenta</i>
                    <i className="fa fa-shopping-cart" aria-hidden='true'></i>

                </div>
            </div>
        </nav>
    )
}

export default Bar
