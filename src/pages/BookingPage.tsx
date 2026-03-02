import { TuriTopWidget } from '../components/booking/TuriTopWidget';
import { GiftVoucherButtons } from '../components/booking/GiftVoucherButtons';
import { FaClock, FaUsers, FaLanguage, FaMapMarkerAlt } from 'react-icons/fa';
import bookingContent from '../data/content/booking.json';
import siteSettings from '../data/content/site-settings.json';

export const BookingPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {bookingContent.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {bookingContent.subtitle}
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center">
            <FaClock className="text-4xl text-green-500 mx-auto mb-3" />
            <div className="text-lg font-semibold text-white mb-1">{siteSettings.experience.duration} minutos</div>
            <div className="text-sm text-gray-400">Duración</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center">
            <FaUsers className="text-4xl text-green-500 mx-auto mb-3" />
            <div className="text-lg font-semibold text-white mb-1">{siteSettings.experience.minPlayers}-{siteSettings.experience.maxPlayers} jugadores</div>
            <div className="text-sm text-gray-400">Por sesión</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center">
            <FaLanguage className="text-4xl text-green-500 mx-auto mb-3" />
            <div className="text-lg font-semibold text-white mb-1">{siteSettings.experience.language}</div>
            <div className="text-sm text-gray-400">{siteSettings.experience.altLanguage}</div>
          </div>

          <div className="p-6 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] text-center">
            <FaMapMarkerAlt className="text-4xl text-green-500 mx-auto mb-3" />
            <div className="text-lg font-semibold text-white mb-1">{siteSettings.contact.city.split(',')[0]}</div>
            <div className="text-sm text-gray-400">{siteSettings.contact.city.split(',')[1]?.trim()}</div>
          </div>
        </div>

        {/* Booking Widget */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            {bookingContent.widgetTitle}
          </h2>
          <TuriTopWidget />
        </div>

        {/* Gift Vouchers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white text-center">
            {bookingContent.giftTitle}
          </h2>
          <GiftVoucherButtons />
        </div>

        {/* Important Information */}
        <div className="p-8 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <h3 className="text-2xl font-bold mb-6 text-white">
            Información Importante
          </h3>
          
          <div className="space-y-4 text-gray-300">
            {bookingContent.importantInfo.map((info, index) => (
              <div key={index}>
                <h4 className="font-semibold text-white mb-2">{info.title}</h4>
                <p>{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
