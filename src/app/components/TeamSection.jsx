import React from "react";
import Image from "next/image"; // Menggunakan next/image untuk optimasi gambar

const Team = [
  { name: "Puguh Uud Patmono, ST.", position: "Direktur" },
  { name: "Chika Dharmasanti, AMd.", position: "Finance & Adm" },
  { name: "Widi Ispono, ST.", position: "Operational" },
  { name: "Ahmad Taufik", position: "Supplying" },
  { name: "Hariyanto", position: "Servicing" },
  { name: "Jualek Sander", position: "HSE" }, // Perbaiki spasi di nama
];

const TeamSection = () => {
  return (
    <section className="bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl">
          Our Executive Team
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500">
          Tim eksekutif kami di PT. Brianov Egatara Nirbana Estu terdiri dari profesional berpengalaman yang memastikan layanan pemeliharaan dan pembersihan berkualitas tinggi untuk industri minyak dan gas. Dengan dedikasi dan keahlian, kami mendukung operasi yang aman dan efisien.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {Team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-400 rounded-xl"
            >
              <Image
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt={member.name}
                width={128} // Sesuaikan ukuran
                height={128}
              />
              <h1 className="mt-4 text-xl text-center font-semibold text-gray-700 capitalize group-hover:text-white">
                {member.name}
              </h1>
              <p className="mt-2 text-gray-500 text-center capitalize group-hover:text-gray-300">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;