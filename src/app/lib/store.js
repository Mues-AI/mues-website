import { create } from 'zustand';

// 768px altında mobil görünüm olacak
const MOBILE_BREAKPOINT = 768;

// Store'u oluştur
const useStore = create((set) => ({
  isMobile: false,
  setIsMobile: (value) => set({ isMobile: value }),
  
  // Bu metodu tutuyoruz, ama artık manuel çağrılması gerekmeyecek
  initIsMobile: () => {
    if (typeof window !== 'undefined') {
      const checkIfMobileSize = () => {
        const isMobileScreen = window.innerWidth < MOBILE_BREAKPOINT;
        set({ isMobile: isMobileScreen });
      };
      
      // İlk kontrol
      checkIfMobileSize();
      
      // Event listener ekle
      window.addEventListener('resize', checkIfMobileSize);
      
      // Cleanup fonksiyonu
      return () => {
        window.removeEventListener('resize', checkIfMobileSize);
      };
    }
  }
}));

// Otomatik başlatma
if (typeof window !== 'undefined') {
  // Sayfa yüklendiğinde ekran boyutunu kontrol et
  const checkMobileAndSet = () => {
    const isMobileScreen = window.innerWidth < MOBILE_BREAKPOINT;
    useStore.setState({ isMobile: isMobileScreen });
  };

  // DOMContentLoaded event'i için - Sayfa yüklendiğinde
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkMobileAndSet);
  } else {
    checkMobileAndSet(); // Sayfa zaten yüklenmişse
  }
  
  // Resize event'i için - Ekran boyutu değiştiğinde
  window.addEventListener('resize', checkMobileAndSet);
}

export default useStore;