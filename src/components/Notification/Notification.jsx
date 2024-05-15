
import bigLogo from '../../Images/icons/bigLogo.svg'


export default function Notification() {
    return (
        <>
            <section className="notification">
                <div className="notification-container container">
                    <div className="notification-column logo">
                        <div className="notification-logo">
                            <img src={bigLogo} alt="" />
                        </div>
                        <div className="notification-text-logo">
                            <h5>FoodStore</h5>
                            <p>
                                Получайте уведомления о новых блюдах с нашей рассылкой
                            </p>
                        </div>
                    </div>
                    <div className="notification-column">
                        <form action="" className="notification-column-form">
                            <input type="email" placeholder="Введите email"/>
                                <button>
                                    <svg width="77" height="77" viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M54.2249 40.6175L40.6151 54.237C39.6742 55.1754 38.1511 55.1754 37.2126 54.237C36.2718 53.2985 36.2718 51.7584 37.2126 50.82L47.1288 40.9062H21.6562C20.3256 40.9062 19.25 39.8234 19.25 38.5C19.25 37.1766 20.3256 36.0938 21.6562 36.0938H47.1288L37.2126 26.18C36.2718 25.2416 36.2718 23.7255 37.2126 22.763C38.1511 21.8246 39.6742 21.8246 40.6151 22.763L54.2249 36.3825C54.8024 36.96 54.9828 37.7541 54.8505 38.5C54.9828 39.2459 54.8024 40.04 54.2249 40.6175ZM38.5 0C17.236 0 0 17.2288 0 38.5C0 59.7713 17.236 77 38.5 77C59.764 77 77 59.7713 77 38.5C77 17.2288 59.764 0 38.5 0Z" fill="#EAD9B5" />
                                    </svg>
                                </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}