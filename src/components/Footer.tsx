export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-slate-400 text-sm">
            CEVDET tüm hakları saklıdır.
          </div>

          {/* Provider Credit */}
          <a
            href="https://rxfast.co/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          >
            This App Provided By
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xs">
              RX
            </div>
          </a>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-6 border-t border-slate-700">
          <div className="text-xs text-slate-500 text-center max-w-4xl mx-auto">
            <p className="mb-2">
              Bu site yalnızca bilgilendirme amaçlıdır. 18 yaşından küçükler bahis oynayamaz.
              Bahis oynarken sorumlu olun ve bütçenizi aşmayın.
            </p>
            <p>
              Kumar bağımlılığı ile mücadele için:
              <a href="tel:444-0-336" className="text-orange-500 hover:text-orange-400 ml-1">
                444 0 336
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
