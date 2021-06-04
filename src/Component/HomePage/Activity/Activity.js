import React from 'react'
import { Image, ListGroup } from 'react-bootstrap'
import User from '../../../assets/user.png'
import classes from './Activity.module.css'

const Activity = ({ data }) => {
  return (
    <div>
      {data?.map(item => (
        <div key={item._id}>
          <p className={classes.Date}>{item.date}</p>
          {item?.history.map(el => (
            <ListGroup variant="flush" key={el._id}>
              <ListGroup.Item className={classes.List}>
                <div className={classes.Item}>
                  <div className={classes.Image}>
                    <Image src={User} alt='user' fluid />
                  </div>
                  <div className='ml-3'>
                    <p className={classes.ItemName}>{el.balanceType}</p>
                    <p className={classes.ItemEmail}>To: {el.email}</p>
                  </div>
                  <div className={classes.Amount}>
                    <p className={classes.ItemAmount}>+ $ {el.amount}</p>
                    <p className={classes[(el.status)] + ' ' + classes.Status}>{el.status}</p>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          ))}

        </div>
      ))}

    </div>
  )
}

export default Activity
