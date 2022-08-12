import { Component } from 'react';

class CardList extends Component {
    render() {
        
        const { monster } = this.props
        console.log(monster)
        return (
            <div className='wrap'>
                {monster.map((monster) => {
                    return (
                        <div key={monster.id} className="mb-x text-left">
                            <div className='span-style'>Name: <span className={monster.username.toLowerCase()}>{monster.name}</span> </div>
                            <div className='span-style'>Username: <span className={monster.username.toLowerCase()}>{monster.username}</span></div>
                            <div className='span-style'>Email: <span className={monster.username.toLowerCase()}>{monster.email}</span></div>
                            <div className='span-style'>Phone: <span className={monster.username.toLowerCase()}>{monster.phone}</span></div>
                            <div className='span-style'>Website: <span className={monster.username.toLowerCase()}>{monster.website}</span></div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default CardList;