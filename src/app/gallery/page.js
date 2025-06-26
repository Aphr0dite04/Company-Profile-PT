
import AboutCompany from "../components/AboutCompany";
import GallerySection from "../components/GallerySection";

export default function Gallery() {
  return (
    <main className="flex min-h-screen flex-col ">
<header class="relative w-full h-[500px] overflow-hidden">
  
  <img
    src="https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?auto=format&fit=crop&w=1950&q=80"
    alt="Background"
    class="absolute inset-0 w-full h-full object-cover z-0"
  />

  
  <div class="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

  <div class="relative z-20 container mx-auto px-6 h-full flex flex-col items-center justify-center text-white text-center">
    <h1 class="text-4xl md:text-6xl font-bold mb-6">Gallery Brianov Egatara</h1>

  </div>
</header>



    <main class="container mx-auto px-6 py-16">

        <section className="mb-20">
          <GallerySection />
        </section>


    </main>
    </main>
  );
}