/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import {
  Wallet,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: any) => {
      if (gradientRef.current) {
        const rect = gradientRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const features = [
    {
      icon: Shield,
      text: "Bank-Level Security",
      color: "#0051e6",
    },
    {
      icon: Zap,
      text: "Instant Transfers",
      color: "#002ae6",
    },
    {
      icon: TrendingUp,
      text: "Real-Time Analytics",
      color: "#0400e6",
    },
    {
      icon: Lock,
      text: "Encrypted Transactions",
      color: "#0051e6",
    },
  ];

  return (
    <section className="relative min-h-screen w-full bg-white dark:bg-[#111] overflow-hidden">
      <div
        ref={gradientRef}
        className="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 42, 230, 0.15), transparent 70%)`,
        }}
      />

      <div
        className="absolute -top-40 -right-40 w-96 h-96 opacity-20 rounded-full blur-3xl animate-pulse"
        style={{ backgroundColor: "rgba(0, 42, 230, 0.3)" }}
      ></div>
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 opacity-15 rounded-full blur-3xl animate-pulse"
        style={{
          backgroundColor: "rgba(0, 81, 230, 0.3)",
          animationDelay: "1s",
        }}
      ></div>
      <div
        className="absolute top-1/2 right-1/4 w-64 h-64 opacity-15 rounded-full blur-3xl animate-pulse"
        style={{
          backgroundColor: "rgba(4, 0, 230, 0.3)",
          animationDelay: "0.5s",
        }}
      ></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,42,230,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,42,230,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-40"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center container px-4 py-20 mx-auto max-w-7xl">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full border backdrop-blur-md px-5 py-2.5 transition-all duration-300 group hover:scale-105"
              style={{
                borderColor: "rgba(0, 42, 230, 0.3)",
                backgroundColor: "rgba(0, 42, 230, 0.1)",
              }}
            >
              <div className="relative">
                <Wallet
                  className="h-4 w-4 group-hover:scale-110 transition-transform"
                  style={{ color: "#002ae6" }}
                />
                <div
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "#0051e6" }}
                ></div>
              </div>
              <span
                className="text-sm font-semibold"
                style={{ color: "#002ae6" }}
              >
                Trusted by 50,000+ Users Worldwide
              </span>
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h1 className="text-5xl md:text-6xl  font-black text-balance leading-tight tracking-tight">
              <span className="text-black dark:text-white">Your Digital</span>
              <br />
              <span className="relative inline-block">
                <span className="font-black bg-gradient-to-r from-[#002ae6] via-[#0051e6] to-[#0400e6] bg-clip-text text-transparent">
                  Wallet Reimagined
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#002ae6] to-transparent rounded-full blur-lg"></span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-[#666] dark:text-[#aaa] text-balance max-w-3xl mx-auto leading-relaxed">
              Experience seamless financial management with role-based
              dashboards, instant transfers, and real-time analytics. Built for
              users, agents, and admins with enterprise-grade security.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center pt-4 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <button
              className="group relative bg-gradient-to-br from-[#002ae6] to-[#0051e6] text-white text-base h-14 rounded-xl font-bold px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              style={{
                boxShadow: "0 10px 40px rgba(0, 42, 230, 0.4)",
              }}
            >
              <Link to="/signup">Get Started Free</Link>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="relative text-base h-14 border-2 rounded-xl font-semibold px-8 backdrop-blur-sm transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 bg-white dark:bg-[#1a1a1a] text-black dark:text-white hover:border-[#002ae6] hover:bg-[rgba(0,42,230,0.05)]"
              style={{
                borderColor: "rgba(0, 42, 230, 0.3)",
              }}
            >
              <Link to="/feature">Explore Features</Link>
            </button>
          </div>

          <div
            className={`flex flex-wrap justify-center gap-3 pt-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2.5 px-5 py-2.5 backdrop-blur-md border rounded-full transition-all duration-500"
                  style={{
                    backgroundColor: isActive
                      ? "rgba(0, 42, 230, 0.15)"
                      : "rgba(0, 42, 230, 0.05)",
                    borderColor: isActive
                      ? "rgba(0, 42, 230, 0.5)"
                      : "rgba(0, 42, 230, 0.2)",
                    transform: isActive ? "scale(1.05)" : "scale(1)",
                    boxShadow: isActive
                      ? "0 8px 24px rgba(0, 42, 230, 0.2)"
                      : "none",
                  }}
                >
                  <div
                    className="p-1.5 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: feature.color }}
                  >
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-black dark:text-white">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
