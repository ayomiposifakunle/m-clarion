import React from 'react'
import KcProps from './KcProps'

const SecondCard = () => {
  return (
 <>
<div className='py-15 text-black bg-[#FADADD]'>
<h1 className='text-black text-center font-bold text-2xl'>KEY CHALLENGES GRC SEEKS TO ADDRESS</h1>
<div className='flex flex-column justify-center text-black'>
<KcProps title="INADEQUATE TRANSPARENCY" text="Inadequate transparency across multiple business units and functions, combined with a request for more timely information on risks."/>
<KcProps title="INCREASING COST OF COMPLIANCE" text="Manual processes, that are not scalable, efficient, or effective, are still being used to address expanding regulatory landscape."/>
</div>

<div className='flex flex-column justify-center'>
<KcProps title="INADEQUATE ANALYTICS AND DATA" text="Lack of risk and business information to enable data visualization, analytics, and insights for sound business decison-making."/>
<KcProps title="RELIANCE ON EXTERNAL PARTIES" text="There is greater reliance on 3rd and 4th parties that introduce several risks that can impact security, compliance, and business continuity." />
</div>
</div>
 </>
  )
}

export default SecondCard