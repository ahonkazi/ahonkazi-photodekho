import React, { useState } from 'react'
const Tab = () => {

    const [activeTab, setActiveTab] = useState(1)

    return (
        <div className="container">
            <div className="tab-wrapper">
                <div className="tab-buttons">
                    <button className='tab-button' onClick={() => setActiveTab(1)} id={activeTab === 1 ? 'active' : ''}>Flights</button>
                    <button className="tab-button" onClick={() => setActiveTab(2)} id={activeTab === 2 ? 'active' : ''}>Stays</button>
                    <button className="tab-button" onClick={() => setActiveTab(3)} id={activeTab === 3 ? 'active' : ''}>Water</button>
                </div>
                <div className="tab-body">
                    <div className="tab-item" id={activeTab === 1 ? 'active' : ''}>
                        <h2 className="tab-title">Tab item 1</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae saepe quis quisquam. Nihil odit omnis facilis vitae vero odio laboriosam nesciunt atque maxime laborum! Quaerat voluptatibus illum aperiam saepe aliquam. Nobis odit officiis illo nihil architecto voluptas harum ullam nam distinctio, reprehenderit quis quas minus deserunt, perferendis quae adipisci nisi consequuntur suscipit, dolor totam doloremque error? Odit, quaerat at sed magni accusantium perferendis excepturi ipsum autem officiis culpa ut. Perspiciatis saepe unde minima impedit. Non dolores saepe rem architecto autem, impedit assumenda tempora odio nemo voluptate rerum odit dolor, quaerat soluta sit pariatur omnis quisquam quam unde incidunt? Sunt sed pariatur, molestiae dicta aspernatur sit nobis. Odit, consequuntur expedita consequatur ea ratione minima, nostrum aperiam sint est vero, illum dolorem nobis eius quos suscipit deleniti pariatur! Voluptatibus placeat molestiae doloremque maxime consectetur repellat magni itaque ea, cupiditate, odio sunt fugiat fuga quas libero. Mollitia facere harum accusamus atque, eligendi deleniti explicabo distinctio minima. Dignissimos commodi velit reiciendis a quisquam, esse doloribus deleniti beatae dicta fugiat ipsa maiores accusantium saepe repellendus possimus architecto, porro optio vel excepturi similique numquam? Itaque ipsam reiciendis, aut facilis nesciunt voluptates perspiciatis sed blanditiis asperiores. Nulla eius doloremque quia ipsa porro cumque laborum aut delectus.</p>
                    </div>
                    <div className="tab-item" id={activeTab === 2 ? 'active' : ''}>
                        <h2 className="tab-title">Tab item 2</h2>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem, architecto placeat labore quisquam consequatur temporibus, doloremque molestiae earum velit sequi minima beatae, quos veritatis totam reiciendis recusandae. Ab, accusamus!</p>
                    </div>
                    <div className="tab-item" id={activeTab === 3 ? 'active' : ''}>
                        <h2 className="tab-title">Tab item 3</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae saepe quis quisquam. Nihil odit omnis facilis vitae vero odio laboriosam nesciunt atque maxime laborum! Quaerat voluptatibus illum aperiam saepe aliquam. Nobis odit officiis illo nihil architecto voluptas harum ullam nam distinctio, reprehenderit quis quas minus deserunt, perferendis quae adipisci nisi consequuntur suscipit, dolor totam doloremque error? Odit, quaerat at sed magni accusantium perferendis excepturi ipsum autem officiis culpa ut. Perspiciatis saepe unde minima impedit. Non dolores saepe rem architecto autem, impedit assumenda tempora odio nemo voluptate rerum odit dolor, quaerat soluta sit pariatur omnis quisquam quam unde incidunt? Sunt sed pariatur, molestiae dicta aspernatur sit nobis. Odit, consequuntur expedita consequatur ea ratione minima, nostrum aperiam sint est vero, illum dolorem nobis eius quos suscipit deleniti pariatur! Voluptatibus placeat molestiae doloremque maxime consectetur repellat magni itaque ea, cupiditate, odio sunt fugiat fuga quas libero. Mollitia facere harum accusamus atque, eligendi deleniti explicabo distinctio minima. Dignissimos commodi velit reiciendis a quisquam, esse doloribus deleniti beatae dicta fugiat ipsa maiores accusantium saepe repellendus possimus architecto, porro optio vel excepturi similique numquam? Itaque ipsam reiciendis, aut facilis nesciunt voluptates perspiciatis sed blanditiis asperiores. Nulla eius doloremque quia ipsa porro cumque laborum aut delectus.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tab