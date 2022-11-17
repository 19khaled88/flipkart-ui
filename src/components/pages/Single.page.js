import React from 'react'
import { useParams } from 'react-router-dom'
import '../../css/singlePage.css'
import { offers } from '../../data/data'
import Layout from '../layouts/Layout'
import SmartNav from '../SmartNav'
import Mobile from './Mobile'
import Offer from './Offer'
const Single = () => {
  const params = useParams()

  // const customFunc = (offer) => {
  //   let array = []
  //   offer.map((info) => {
  //     for (let title in info) {
  //       if (title === 'DealsOfTheDay') {
  //         array.push(
  //           <div
  //             style={{
  //               boxShadow:
  //                 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
  //               padding: '15px',
  //               margin: '10px',
  //             }}
  //           >
  //             <p style={{ fontWeight: 'bold' }}>Deal of the Day</p>
  //             <Divider />
  //             <div
  //               style={{
  //                 display: 'flex',
  //                 flexDirection: 'row',
  //                 justifyContent: 'space-between',
  //                 paddingTop: '15px',
  //               }}
  //             >
  //               {Object.values(info[title]).map((data) => (
  //                 <div
  //                   key={info.id}
  //                   style={{
  //                     display: 'flex',
  //                     flexDirection: 'column',
  //                   }}
  //                 >
  //                   <img
  //                     src={data.image}
  //                     alt="empty"
  //                     style={{
  //                       width: '150px',
  //                       height: '150px',
  //                       boxShadow:
  //                         'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
  //                     }}
  //                   />
  //                   <span>
  //                     <p
  //                       style={{
  //                         textOverflow: 'ellipsis',
  //                         whiteSpace: 'nowrap',
  //                         width: '150px',
  //                         height: '1.2em',
  //                         overflow: 'hidden',
  //                       }}
  //                     >
  //                       {data.name}
  //                     </p>
  //                     <p style={{ fontSize: '12px' }}>{data.offer}</p>
  //                   </span>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>,
  //         )
  //       } else if (title === 'FashionTopDeals') {
  //         array.push(
  //           <div
  //             key={info.id}
  //             style={{
  //               boxShadow:
  //                 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
  //               padding: '15px',
  //               margin: '10px',
  //             }}
  //           >
  //             <p style={{ fontWeight: 'bold' }}>Fashion Top Deals</p>
  //             <Divider />
  //             <div
  //               style={{
  //                 display: 'flex',
  //                 flexDirection: 'row',
  //                 justifyContent: 'space-between',
  //                 paddingTop: '15px',
  //               }}
  //             >
  //               {Object.values(info[title]).map((data) => (
  //                 <div
  //                   key={info.id}
  //                   style={{
  //                     display: 'flex',
  //                     flexDirection: 'column',
  //                   }}
  //                 >
  //                   <img
  //                     src={data.image}
  //                     alt="empty"
  //                     style={{
  //                       width: '150px',
  //                       height: '150px',
  //                       boxShadow:
  //                         'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
  //                     }}
  //                   />
  //                   <span>
  //                     <p
  //                       style={{
  //                         textOverflow: 'ellipsis',
  //                         whiteSpace: 'nowrap',
  //                         width: '150px',
  //                         height: '1.2em',
  //                         overflow: 'hidden',
  //                       }}
  //                     >
  //                       {data.name}
  //                     </p>
  //                     <p style={{ fontSize: '12px' }}>{data.offer}</p>
  //                   </span>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>,
  //         )
  //       } else if (title === 'TopOfOffers') {
  //         array.push(
  //           <div
  //             key={info.id}
  //             style={{
  //               boxShadow:
  //                 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
  //               padding: '15px',
  //               margin: '10px',
  //             }}
  //           >
  //             <p style={{ fontWeight: 'bold' }}>Fashion Top Deals</p>
  //             <Divider />
  //             <div
  //               style={{
  //                 display: 'flex',
  //                 flexDirection: 'row',
  //                 justifyContent: 'space-between',
  //                 paddingTop: '15px',
  //               }}
  //             >
  //               {Object.values(info[title]).map((data) => (
  //                 <div
  //                   key={info.id}
  //                   style={{
  //                     display: 'flex',
  //                     flexDirection: 'column',
  //                   }}
  //                 >
  //                   <img
  //                     src={data.image}
  //                     alt="empty"
  //                     style={{
  //                       width: '150px',
  //                       height: '150px',
  //                       boxShadow:
  //                         'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
  //                     }}
  //                   />
  //                   <span>
  //                     <p
  //                       style={{
  //                         textOverflow: 'ellipsis',
  //                         whiteSpace: 'nowrap',
  //                         width: '150px',
  //                         height: '1.2em',
  //                         overflow: 'hidden',
  //                       }}
  //                     >
  //                       {data.name}
  //                     </p>
  //                     <p style={{ fontSize: '12px' }}>{data.offer}</p>
  //                   </span>
  //                 </div>
  //               ))}
  //             </div>
  //           </div>,
  //         )
  //       }
  //     }
  //   })
  //   return array
  // }

  const customFunc = (offers) => {
    let data = Object.values(offers).map((val) => val.target)
    console.log(data.includes('DealsOfTheDay'))
  }
  customFunc(offers)
  return (
    <Layout>
      <SmartNav />
      {params.name == 'offer' ? (
        <Offer />
      ) : params.name == 'mobile' ? (
        <Mobile />
      ) : null}
    </Layout>
  )
}

export default Single
