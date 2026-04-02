import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'
import userIcon from '../assets/profile/user.png'
import visaIcon from '../assets/profile/visa.png'

function Profile() {
  return (
    <div className="pb-16 bg-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex justify-center items-center px-4 flex-1">
        <div className="w-full max-w-[370px] rounded-lg p-6 pt-[74px] pb-[74px] flex flex-col gap-[10px]" style={{ backgroundColor: 'rgba(242, 238, 238, 1)' }}>

          <div className="flex items-center gap-4">
            <img src={userIcon} alt="User" className="w-[80px] h-[80px]" />
            <div className="flex flex-col text-sm">
              <p><span className="font-bold">IME:</span> Example</p>
              <p><span className="font-bold">ADRESA:</span> Example</p>
              <p><span className="font-bold">ŽUPANIJA:</span> Example</p>
            </div>
          </div>

          <div className="flex items-center gap-[19px]">
            <img src={visaIcon} alt="Visa" className="w-[80px]" />
            <div className="flex flex-col text-sm">
              <p><span className="font-bold">IBAN:</span> Example</p>
              <p><span className="font-bold">DATUM ISTEKA:</span> Example</p>
              <p><span className="font-bold">ISCT KOD:</span> Example</p>
            </div>
          </div>

        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default Profile
