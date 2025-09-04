import Navbar from "@/layout/Navbar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SkeletonCard from "@/Pages/MYComponent/SkeletonCard";
import bannerImg from "../../../assets/banner.jpg"

const Home = () => {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero Section */}
    
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          >
            Digital Wallet Management
          </motion.h1>

          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Manage your money with elegance, speed, and security.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border border-white text-black hover:bg-primary hover:text-primary-foreground transition cursor-pointer"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            ["Fast Transactions", "Top Security", "24/7 Access"].map(
              (feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="bg-card text-card-foreground p-6 rounded-2xl shadow-md hover:shadow-xl hover:bg-secondary/80 transition"
                >
                  <h3 className="text-xl font-semibold text-primary">
                    {feature}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-snug">
                    Enjoy {feature.toLowerCase()} with Digital Wallet
                    Management.
                  </p>
                </motion.div>
              )
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
