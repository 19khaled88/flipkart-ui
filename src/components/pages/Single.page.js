import { Box, Button, Divider } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import '../../css/singlePage.css'
import { offers } from '../../data/data'
import Layout from '../layouts/Layout'
import SmartNav from '../SmartNav'
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
      {params.name == 'bestOfElectronic' ? (
        <Box
          style={{
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            margin: 'auto',
            width: '98%',
            paddingBottom: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow:
                'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
              width: '98%',
              padding: '15px',
              margin: 'auto',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: '3px',
              }}
            >
              <p
                style={{
                  margin: '0px',
                  padding: '0px 0px 5px 0px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                Deals of the Day
              </p>
              <Button variant="contained">View All</Button>
            </div>

            <Divider />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: '10px',
              }}
            >
              {Object.values(offers).map((val, index) => {
                if (val.target == 'DealsOfTheDay') {
                  return (
                    <div key={val.id}>
                      <div className="img-hover-zoom">
                        <img
                          src={val.image}
                          alt="empty"
                          style={{ width: '150px', height: '150px' }}
                        />
                      </div>
                      <span>
                        <p
                          style={{
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            width: '150px',
                            height: '1.2em',
                            overflow: 'hidden',
                          }}
                        >
                          {val.name}
                        </p>
                        <p style={{ fontSize: '12px' }}>{val.offer}</p>
                      </span>
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow:
                'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
              width: '98%',
              padding: '15px',
              margin: 'auto',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: '3px',
              }}
            >
              <p
                style={{
                  margin: '0px',
                  padding: '0px 0px 5px 0px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                Fashion Top Deals
              </p>
              <Button variant="contained">View All</Button>
            </div>

            <Divider />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: '10px',
              }}
            >
              {Object.values(offers).map((val, index) => {
                if (val.target == 'FashionTopDeals') {
                  return (
                    <div key={val.id}>
                      <div className="img-hover-zoom">
                        <img
                          src={val.image}
                          alt="empty"
                          style={{ width: '150px', height: '150px' }}
                        />
                      </div>
                      <span>
                        <p
                          style={{
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            width: '150px',
                            height: '1.2em',
                            overflow: 'hidden',
                          }}
                        >
                          {val.name}
                        </p>
                        <p style={{ fontSize: '12px' }}>{val.offer}</p>
                      </span>
                    </div>
                  )
                }
              })}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow:
                'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
              width: '98%',
              padding: '15px',
              margin: 'auto',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: '3px',
              }}
            >
              <p
                style={{
                  margin: '0px',
                  padding: '0px 0px 5px 0px',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
              >
                Top Of Offers
              </p>
              <Button variant="contained">View All</Button>
            </div>
            <Divider />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: '10px',
              }}
            >
              {Object.values(offers).map((val, index) => {
                if (val.target == 'TopOfOffers') {
                  return (
                    <div key={val.id}>
                      <div className="img-hover-zoom">
                        <img
                          src={val.image}
                          alt="empty"
                          style={{ width: '150px', height: '150px' }}
                        />
                      </div>
                      <span>
                        <p
                          style={{
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            width: '150px',
                            height: '1.2em',
                            overflow: 'hidden',
                          }}
                        >
                          {val.name}
                        </p>
                        <p style={{ fontSize: '12px' }}>{val.offer}</p>
                      </span>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </Box>
      ) : null}
    </Layout>
  )
}

export default Single
