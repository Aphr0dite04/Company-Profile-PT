import React from "react";
const Testimonials= [
  { name: "Andika Prasetya", testimonial_index: "Sebagai mitra industri energi, PT Brianov Egatara Nirbana Estu selalu mengutamakan standar keselamatan dan efisiensi. Kolaborasi dengan mereka membawa dampak signifikan dalam efisiensi operasional kami di lapangan." , position: "Operational Director, Petrolink Energy" },
{ name: "Melinda Hartanto", testimonial_index: "Komitmen PT Brianov Egatara Nirbana Estu terhadap keberlanjutan dan integritas di sektor minyak dan gas sangat menginspirasi. Mereka adalah contoh nyata bahwa produktivitas tinggi bisa sejalan dengan tanggung jawab lingkungan" , position: "Chief ESG Officer, Nusantara Energy Forum" },
  // Tambahkan lebih banyak anggota di sini jika perlu
];
const TestimonialSection = () => {
  return (
    <section class="bg-white ">
    <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl  ">
            What our <span class="text-blue-500 ">clients</span> say
        </h1>

        <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 ">
            We value long-term relationships with our partners and clients. Here’s what they say about our commitment to safety, efficiency, and sustainability in the oil and gas industry.
        </p>

        <div class="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            {Testimonials.map((testimonial, index) => (
            <div key={index} class="p-6 bg-gray-100 rounded-lg  md:p-8">
                <p class="leading-loose text-gray-500">
                    “{testimonial.testimonial_index}”.
                </p>

                <div class="flex items-center mt-6">
                    <img class="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                    
                    <div class="mx-4">
                        <h1 class="font-semibold text-blue-500">{testimonial.name}</h1>
                        <span class="text-sm text-gray-500 ">{testimonial.position}</span>
                    </div>
                </div>
            </div>
            ))}



        </div>
    </div>
</section>
  );
};

export default TestimonialSection;