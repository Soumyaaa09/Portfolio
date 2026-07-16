import { useEffect, useState } from "react";

function Background() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="bg-global">
      {/* Animated gradient mesh blobs */}
      <div className="bg-mesh-wrap">
        <div className="bg-mesh bg-m1" />
        <div className="bg-mesh bg-m2" />
        <div className="bg-mesh bg-m3" />
        <div className="bg-mesh bg-m4" />
        <div className="bg-mesh bg-m5" />
      </div>

      {/* Aurora bands */}
      <div className="bg-aurora-wrap">
        <div className="bg-aurora bg-a1" />
        <div className="bg-aurora bg-a2" />
      </div>

      {/* Star layers */}
      <div className="bg-stars bg-s1" />
      <div className="bg-stars bg-s2" />
      <div className="bg-stars bg-s3" />

      {/* Floating particles */}
      <div
        className="bg-particles"
        style={{
          transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)`,
        }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="bg-particle"
            style={{
              left: `${3 + Math.random() * 94}%`,
              top: `${2 + Math.random() * 96}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${5 + Math.random() * 6}s`,
              width: `${1.5 + Math.random() * 2.5}px`,
              height: `${1.5 + Math.random() * 2.5}px`,
              opacity: 0.15 + Math.random() * 0.35,
            }}
          />
        ))}
      </div>

      {/* Shooting stars (scattered across full height) */}
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className={`bg-shoot bg-shoot${i}`} />
      ))}

      {/* Grid floor that extends full page */}
      <div className="bg-grid-wrap">
        <div className="bg-grid-plane" />
      </div>

      <style>{`
        .bg-global {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
          background:
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 100%, rgba(139,92,246,0.05) 0%, transparent 50%),
            linear-gradient(180deg, #020617 0%, #04091c 40%, #0a0f23 70%, #020617 100%);
        }

        /* ═══ MESH BLOBS ═══ */
        .bg-mesh-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .bg-mesh {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.4;
          animation: bgMeshFloat 14s ease-in-out infinite alternate;
        }
        .bg-m1 {
          width: 450px; height: 450px;
          background: radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%);
          top: -5%; right: 5%;
          animation-duration: 16s;
        }
        .bg-m2 {
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%);
          top: 30%; left: -5%;
          animation-duration: 13s;
          animation-delay: -4s;
        }
        .bg-m3 {
          width: 320px; height: 320px;
          background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%);
          top: 55%; right: 15%;
          animation-duration: 18s;
          animation-delay: -8s;
        }
        .bg-m4 {
          width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%);
          top: 75%; left: 20%;
          animation-duration: 15s;
          animation-delay: -6s;
        }
        .bg-m5 {
          width: 350px; height: 350px;
          background: radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%);
          top: 90%; right: 30%;
          animation-duration: 17s;
          animation-delay: -10s;
        }
        @keyframes bgMeshFloat {
          0%   { transform: translate(0, 0) scale(1); }
          33%  { transform: translate(30px, -25px) scale(1.1); }
          66%  { transform: translate(-20px, 15px) scale(0.92); }
          100% { transform: translate(25px, -10px) scale(1.05); }
        }

        /* ═══ AURORA ═══ */
        .bg-aurora-wrap {
          position: absolute;
          inset: 0;
          overflow: hidden;
          opacity: 0.15;
        }
        .bg-aurora {
          position: absolute;
          width: 200%;
          height: 180px;
          border-radius: 50%;
          filter: blur(70px);
        }
        .bg-a1 {
          top: 25%;
          left: -40%;
          background: linear-gradient(90deg, transparent, rgba(99,102,241,0.3), rgba(139,92,246,0.25), transparent);
          animation: bgAuroraFlow 10s ease-in-out infinite;
        }
        .bg-a2 {
          top: 65%;
          left: -30%;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.2), rgba(168,85,247,0.15), transparent);
          animation: bgAuroraFlow 14s ease-in-out infinite reverse;
          animation-delay: -3s;
        }
        @keyframes bgAuroraFlow {
          0%, 100% { transform: translateX(0%) scaleY(1); }
          50%      { transform: translateX(20%) scaleY(1.3); }
        }

        /* ═══ STARS ═══ */
        .bg-stars {
          position: absolute;
          inset: 0;
        }
        .bg-s1 {
          background-image: radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px);
          background-size: 90px 90px;
          opacity: 0.08;
          animation: bgStarDrift 100s linear infinite;
        }
        .bg-s2 {
          background-image: radial-gradient(rgba(165,180,252,0.7) 1px, transparent 1px);
          background-size: 160px 160px;
          background-position: 50px 50px;
          opacity: 0.05;
          animation: bgStarDrift 140s linear infinite reverse;
        }
        .bg-s3 {
          background-image: radial-gradient(rgba(196,181,253,0.5) 1px, transparent 1px);
          background-size: 240px 240px;
          background-position: 80px 80px;
          opacity: 0.04;
          animation: bgStarDrift 180s linear infinite;
        }
        @keyframes bgStarDrift {
          from { transform: translateY(0); }
          to   { transform: translateY(-600px); }
        }

        /* ═══ PARTICLES ═══ */
        .bg-particles {
          position: absolute;
          inset: 0;
          transition: transform 0.4s ease-out;
        }
        .bg-particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(139,92,246,0.5);
          box-shadow: 0 0 6px rgba(139,92,246,0.3), 0 0 12px rgba(99,102,241,0.1);
          animation: bgParticleFloat ease-in-out infinite;
        }
        @keyframes bgParticleFloat {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.2; }
          25%      { transform: translateY(-15px) translateX(8px); opacity: 0.7; }
          50%      { transform: translateY(-8px) translateX(-6px); opacity: 0.4; }
          75%      { transform: translateY(-20px) translateX(4px); opacity: 0.8; }
        }

        /* ═══ SHOOTING STARS ═══ */
        .bg-shoot {
          position: absolute;
          width: 1.5px;
          height: 70px;
          background: linear-gradient(to bottom, rgba(165,180,252,0.9), transparent);
          border-radius: 99px;
          opacity: 0;
        }
        .bg-shoot1 { top: 12%; right: 20%; transform: rotate(35deg); animation: bgShoot 6s 1s infinite; }
        .bg-shoot2 { top: 35%; right: 60%; transform: rotate(30deg); animation: bgShoot 8s 4s infinite; }
        .bg-shoot3 { top: 50%; right: 30%; transform: rotate(38deg); animation: bgShoot 7s 6s infinite; }
        .bg-shoot4 { top: 70%; right: 50%; transform: rotate(32deg); animation: bgShoot 9s 2s infinite; }
        .bg-shoot5 { top: 85%; right: 15%; transform: rotate(28deg); animation: bgShoot 7s 7s infinite; }
        .bg-shoot6 { top: 20%; right: 80%; transform: rotate(33deg); animation: bgShoot 10s 5s infinite; }
        @keyframes bgShoot {
          0%   { opacity: 0; transform: rotate(35deg) translateY(-40px); }
          5%   { opacity: 0.8; }
          30%  { opacity: 0; transform: rotate(35deg) translateY(160px); }
          100% { opacity: 0; }
        }

        /* ═══ GRID ═══ */
        .bg-grid-wrap {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 100%;
          pointer-events: none;
          mask-image: 
            linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.03) 30%, rgba(0,0,0,0.06) 70%, rgba(0,0,0,0.12) 100%);
          -webkit-mask-image: 
            linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.03) 30%, rgba(0,0,0,0.06) 70%, rgba(0,0,0,0.12) 100%);
        }
        .bg-grid-plane {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px);
          background-size: 80px 80px;
          animation: bgGridScroll 6s linear infinite;
        }
        @keyframes bgGridScroll {
          from { background-position: 0 0, 0 0; }
          to   { background-position: 0 80px, 0 0; }
        }
      `}</style>
    </div>
  );
}

export default Background;
