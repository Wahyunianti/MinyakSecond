import oil from '../assets/oil_bottle.svg'
import leave from '../assets/leaves.svg'
import whatsapp from '../assets/whatsapp.svg'
import truck from '../assets/truck.svg'
import money from '../assets/money.svg'
import reservation from '../assets/reservation.svg'


export function BodyContent() {
    return (
        <>
            <div className='mt-16 relative flex flex-col bg-gradient-to-b from-white to-lime-100 h-min w-screen overflow-x-hidden right-0 left-0'>
                <div className='w-full px-40 flex flex-row pt-30 h-180 items-start'>
                    <div className='flex h-200 items-end relative pb-80'>
                        <div className='areaMinyak flex flex-row relative w-100 h-min'>
                            <img className='z-5 minyak duration-300 ease-in-out transition-all' src={oil} width={400} alt="" />
                            <img className='daun1 absolute top-0 left-0 -rotate-6 duration-300 ease-in-out transition-all' width={130} src={leave} alt="" />
                            <img className='daun2 absolute -bottom-5 right-0 rotate-45 z-6 duration-300 ease-in-out transition-all' width={200} src={leave} alt="" />
                        </div>
                        <div className='h-100 w-100 overflow-hidden absolute'>
                            <div className='rounded-full size-100 bg-white opacity-70 absolute -bottom-1/2 right-0'>
                            </div>
                        </div>
                    </div>
                    <div className='pl-10 w-full flex flex-col'>
                        <p className='text-6xl font-bold fontGede uppercase leading-normal'>Ubah Minyak Jelantah <span className='text-orange-500'>Jadi Cuan</span> & <span className='text-lime-700'>Lingkungan Lebih Bersih!</span> 🌿</p>
                        <p className='text-3xl font-bold fontText mt-4'>Punya minyak goreng bekas di rumah atau warung?
                            Jangan dibuang ke wastafel — sekarang kamu bisa jual minyak jelantahmu dan bantu selamatkan bumi 🌎</p>
                        <p className='leading-normal fontKecil w-180 mt-4 font-semibold text-xl'>Kami sudah menangani sekitar 10.000 L limbah minyak jelantah sejak pertama kali didirikan tahun 2020.
                            Kami akan selalu melayani dengan baik limbah jelantah anda,
                            dan akan terus memperbaiki pelayanan yang sustainable.</p>
                    </div>
                </div>

                <div className="w-full px-40 flex flex-col h-min items-center">
                    <button
                        className="group relative flex flex-row justify-center items-center gap-2 px-20 py-4 bg-black 
                                hover:bg-slate-900 text-white text-lg font-semibold 
                                rounded-full transform hover:scale-105 
                                transition-all duration-300 ease-in-out overflow-hidden cursor-pointer"
                    >
                        <span className="transition-all group-hover:translate-x-0 translate-x-5 text-center duration-300 ease-in-out">
                            Hubungi Kami
                        </span>
                        <img
                            src={whatsapp}
                            width={25}
                            alt="whatsapp"
                            className="ml-3 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
                        />
                    </button>
                </div>

                <div className="w-full px-70 pt-20 flex flex-col h-min items-center">
                    <p className='text-3xl font-bold text-center fontText mt-4 leading-normal uppercase'>🪙 yuk!! ubah minyakmu menjadi cuan 🪙</p>
                </div>

                <div className="w-full px-40 pt-20 flex flex-row h-min items-center gap-30 justify-center">
                    <div className='relative cursor-pointer cardBenefit h-min p-7'>
                        <div className='w-90 cardIsian duration-300 ease-in-out transition-all h-min min-h-120 bg-white rounded-xl shadow-md flex flex-col items-center justify-start p-7'>
                            <div className='h-40 grid place-items-center'>
                                <img className='' src={reservation} width={120} alt="" />
                            </div>
                            <div>
                                <p className='text-xl font-bold fontText mt-4 uppercase'>PENGUMPULAN</p>
                                <p className='leading-normal fontKecil mt-4 font-normal text-lg'>Kumpulkan minyak jelantah yang anda miliki. Setelah terkumpul anda dapat langsung menginfokan alamat dan kuantitas minyak anda kepada kami melalui telepon, atau whatsapp dibawah ini.</p>
                            </div>

                        </div>

                        <div className='size-24 bg-orange-500 rounded-full absolute top-0 left-0 grid place-items-center shadow-xl'>
                            <div className='size-17 bg-amber-300 rounded-full grid place-items-center shadow-md'>
                                <p className='text-white font-bold text-3xl fontGede'>1</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative cursor-pointer cardBenefit h-min p-7'>
                        <div className='w-90 cardIsian duration-300 ease-in-out transition-all h-min min-h-120 bg-white rounded-xl shadow-md flex flex-col items-center justify-start p-7'>
                            <div className='h-40 grid place-items-center'>
                                <img className='' src={truck} width={140} alt="" />
                            </div>
                            <div>
                                <p className='text-xl font-bold fontText mt-4 uppercase'>PENGAMBILAN</p>
                                <p className='leading-normal fontKecil mt-4 font-normal text-lg'>Setelah jadwal dan waktu pengambilan di sepakati, tim kami akan segera menuju tempat pengambilan. Pengambilan dilakukan langsung oleh pegawai kami (bukan pihak ketiga, seperti pengepul atau ekspedisi).</p>
                            </div>

                        </div>
                        <div className='size-24 bg-orange-500 rounded-full absolute top-0 left-0 grid place-items-center shadow-xl'>
                            <div className='size-17 bg-amber-300 rounded-full grid place-items-center shadow-md'>
                                <p className='text-white font-bold text-3xl fontGede'>2</p>
                            </div>
                        </div>
                    </div>

                    <div className='relative cursor-pointer cardBenefit h-min p-7'>
                        <div className='w-90 cardIsian duration-300 ease-in-out transition-all h-min min-h-120 bg-white rounded-xl shadow-md flex flex-col items-center justify-start p-7'>
                            <div className='h-40 grid place-items-center'>
                                <img className='' src={money} width={110} alt="" />
                            </div>
                            <div>
                                <p className='text-xl font-bold fontText mt-4 uppercase'>PEMBAYARAN</p>
                                <p className='leading-normal fontKecil mt-4 font-normal text-lg'>Pembayaran langsung di lokasi anda. Anda mendapat penghasilan tambahan sekaligus berpartisipasi dalam melindungi lingkungan hidup dari bahaya limbah minyak bekas.</p>
                            </div>

                        </div>
                        <div className='size-24 bg-orange-500 rounded-full absolute top-0 left-0 grid place-items-center shadow-xl'>
                            <div className='size-17 bg-amber-300 rounded-full grid place-items-center shadow-md'>
                                <p className='text-white font-bold text-3xl fontGede'>3</p>
                            </div>
                        </div>
                    </div>


                </div>



            </div>
        </>
    )
}

export default BodyContent