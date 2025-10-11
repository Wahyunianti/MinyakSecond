export function HeaderNavbar() {
 return (
    <>
      <div className='bg-white h-18 flex flex-row justify-center w-full items-center px-7 z-10 shadow-md fixed top-0 right-0 left-0'>
        <div className=" h-full w-min flex flex-row items-center p-2">
          <div className="size-12 bg-amber-300 rounded-md items-center justify-center flex">
            <div className="rounded-full size-8 bg-orange-600"></div>
          </div>
          <div className="h-min w-min ml-4">
            <p className='text-2xl font-bold text-ellipsis fontGede'>Minyak Second</p>  
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderNavbar