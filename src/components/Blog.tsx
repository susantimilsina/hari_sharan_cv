import Image from "next/image";

const posts = [
  {
    img: "/img/02_koyta_img/blog/blog1.jpg",
    date: "20 Mar 2021",
    title: "How to Improved Image Web Design",
    excerpt: "I have been providing web design services with great success for 9 years. The client is very happy.",
  },
  {
    img: "/img/02_koyta_img/blog/blog2.jpg",
    date: "21 Mar 2021",
    title: "How to Improved Image Web Design",
    excerpt: "I have been providing web design services with great success for 9 years. The client is very happy.",
  },
  {
    img: "/img/02_koyta_img/blog/blog1.jpg",
    date: "22 Mar 2021",
    title: "How to Improved Image Web Design",
    excerpt: "I have been providing web design services with great success for 9 years. The client is very happy.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="sub-title">Recent News</span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#111135]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Get Update From Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <a
              href="#"
              key={p.date}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={520}
                  height={280}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-3 left-3 bg-[#2396fc] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {p.date}
                </span>
              </div>
              <div className="p-6">
                <h5
                  className="font-bold text-[#111135] mb-2 group-hover:text-[#2396fc] transition-colors"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {p.title}
                </h5>
                <p className="text-[#565656] text-sm leading-relaxed">{p.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
