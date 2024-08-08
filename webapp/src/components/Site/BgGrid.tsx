import React from 'react'

function BgGrid() {
  return (
    <>
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"/>
    <div className="relative h-full w-full">
      <div className="absolute bottom-0 left-[-20%] right-0 md:top-[0%] top-[-15%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,0,.15),rgba(255,255,255,0))]"/>
      <div className="absolute bottom-0 right-[-20%] md:top-[0%] top-[-15%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,0,.15),rgba(255,255,255,0))]"/>
    </div>
    </>
  )
}

export default BgGrid