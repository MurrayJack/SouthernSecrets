import React from "react"

const Header = () => (
    <>
        <section>
            <header>
                <div>Francais</div>
                <div>Contact us</div>
                <div>
                    1 GALADA WAY, EAST BRUNSWICK, VICTORIA 3057. AUSTRALIA
                </div>
                <div>CALL US: (+61) 431 566 619</div>
            </header>
        </section>

        <style jsx>{`
            header {
                display: grid;
                grid-template-columns: auto auto 1fr auto;
                width: 920px;
                margin: 0 auto;
                font-size: 11px
            }
        `}</style>
    </>
)

export default Header
