import React from 'react'

const SinglePage = ({data,handleCheck}) => {
    // const [done,setDone] = React.useState(0);
    // const [notDone,setNotDone] = React.useState(0);
    let done = 0;
    for(let i=0;i<data.length;i++) {
        if(data[i].checked === true) {
            done+=1;
        }
    }
  return (
    <>
        {data && data.length > 0 && (<div>
            {data.map((item,index) => (
                <>
                {console.log('check', item.checked)}
                <div key={item.id}> 
                    <input
                        type="checkbox"
                        id={item.id}
                        name={item.value}
                        checked={item.checked}
                        onChange={() => handleCheck(item.id,index)}
                    />
                    <label key={item.id} className={`${!item.checked ? '' : 'cut-line'}`}>{item.value}</label>
                </div>
                </>
            ))}
            <div className='done'>
                <span><h5>Done : {done}</h5></span>{" "}
                <span><h5>Remaining : {data.length - done}</h5></span>
            </div>
            
        </div>)}
    </>
  )
}

export default SinglePage