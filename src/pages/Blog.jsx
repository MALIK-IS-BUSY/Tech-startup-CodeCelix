import React, { useState, useEffect } from "react";

const blogPostsData = [
  {
    id: 1,
    title: "How AI is Transforming Startups",
    category: "AI",
    description:
      "Discover how artificial intelligence is helping startups automate processes and scale faster than ever.",
  },
  {
    id: 2,
    title: "Top 5 Automation Tools for SMEs",
    category: "Automation",
    description:
      "Explore the best automation tools small businesses can use to increase efficiency and reduce costs.",
  },
  {
    id: 3,
    title: "Why Every Business Needs AI in 2026",
    category: "AI",
    description:
      "AI is no longer optional. Learn why companies must adopt AI solutions to stay competitive.",
  },
];

const Blog = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filter === "All" || post.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="min-h-screen bg-[#F9FAFB] pt-28 pb-20">

      {/* Hero Heading */}
<div
  className={`text-center mb-16 transition-all duration-700 ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
>
  <h1 className="text-5xl font-bold text-[#bf00ff]">
    Our Blogs
  </h1>
  <div className="w-24 h-1 bg-[#bf00ff] mx-auto mt-4 rounded-full"></div>

</div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-14">

          {/* Search */}
          <input
            type="text"
            placeholder="Search blog..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-5 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] transition bg-white text-[#111827]"
          />

          {/* Filters */}
<div className="flex gap-4">
  {["All", "AI", "Automation"].map((cat) => (
    <button
      key={cat}
      onClick={() => setFilter(cat)}
      className={`px-5 py-2 rounded-full transition-all duration-300 ${
        filter === cat
          ? "bg-gradient-to-r from-[#78184a] to-[#7C3AED] text-white shadow-lg scale-105"
          : "bg-gradient-to-r from-[#78184a] to-[#7C3AED] text-white hover:opacity-90"
      }`}
    >
      {cat}
    </button>
  ))}
</div>

        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className={`bg-white p-8 rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                background: "rgba(255,255,255,0.2)",
              }}
            >
              <span className="text-sm font-semibold text-[#7C3AED]">
                {post.category}
              </span>

              <h2 className="text-2xl font-semibold text-[#111827] mt-3 mb-4 group-hover:text-[#4F46E5] transition">
                {post.title}
              </h2>

              <p className="text-[#111827] mb-6">{post.description}</p>

              <button className="bg-gradient-to-r from-[#78184a] to-[#7C3AED] text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Read More →
              </button>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-500 mt-10 animate-pulse">
            No articles found.
          </p>
        )}
      </div>
    </section>
  );
};

export default Blog;
