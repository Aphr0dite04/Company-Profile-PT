
import AboutCompany from "../components/AboutCompany";
import TeamSection from "../components/TeamSection";

export default function About() {
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
    <h1 class="text-4xl md:text-6xl font-bold mb-6">About Brianov Egatara</h1>
    <p class="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
      Where human creativity meets to solve tomorrow&apos;s challenges
    </p>
  </div>
</header>



    <main class="container mx-auto px-6 py-16">
        
        <section class="mb-20">
            <div class="flex flex-col md:flex-row items-center gap-12">
                  <div class="md:w-1/2">
                    <h2 class="text-3xl font-bold text-dark mb-6">Our Story</h2>
                    <p class="text-gray-700 mb-4">We support oil, gas and petrochemical industries through specialized services such as tube and condenser cleaning, mechanical maintenance, and heat excanher solutions. Our expert team is committed to ensuring operational reliability, safety, and compliance in every project</p> 
                  </div>
                <div class="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="AI Neural Network Visualization" class="rounded-lg shadow-xl w-full h-auto" />
                </div>
            </div>
        </section>

        <section class="mb-20">
          <AboutCompany/>
        </section>

        <section class="bg-primary-50 rounded-xl p-12 mb-20">
            <div class="text-center max-w-4xl mx-auto">
                <h2 class="text-3xl font-bold text-dark mb-6">Our Mission</h2>
                <p class="text-xl text-gray-700 mb-8">&quot;To create symbiotic intelligence systems that amplify human potential while maintaining ethical boundaries and transparency.&quot;  </p>
                <div class="flex flex-wrap justify-center gap-8">
                    <div class="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                        <div class="text-primary-600 mb-4">
                            <i class="fas fa-lightbulb text-3xl"></i>
                        </div>
                        <h3 class="font-bold text-dark mb-2">Augmented Intelligence</h3>
                        <p class="text-gray-600">We build tools that enhance human cognition, not replace it.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                        <div class="text-primary-600 mb-4">
                            <i class="fas fa-shield-alt text-3xl"></i>
                        </div>
                        <h3 class="font-bold text-dark mb-2">Ethical Framework</h3>
                        <p class="text-gray-600">Every system undergoes rigorous ethical review before deployment.</p>
                    </div>
                    <div class="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                        <div class="text-primary-600 mb-4">
                            <i class="fas fa-project-diagram text-3xl"></i>
                        </div>
                        <h3 class="font-bold text-dark mb-2">Neural Synthesis</h3>
                        <p class="text-gray-600">Our proprietary architecture mimics human neural pathways.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-20">
        <TeamSection />
        </section>



    </main>
    </main>
  );
}