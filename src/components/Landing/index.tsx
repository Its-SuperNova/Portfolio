"use client";

import styles from "./style.module.scss";
import { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { slideUp } from "./animation";
import { motion } from "framer-motion";
import GridDistortion from "../GridDistortion";
const HERO_FACE_LOGOS = [
  "/images/ashhh-logos/Ashwin.png",
  "/images/ashhh-logos/artist.png",
  "/images/ashhh-logos/cap.png",
  "/images/ashhh-logos/glass.png",
  "/images/ashhh-logos/ashwin-music.png",
] as const;

const LOGO_CYCLE_MS = 3500;
const SHUFFLE_GLYPHS = "acenosuvxz*+?";
const SHUFFLE_STEP_S = 0.06;
const CLIP_SHOWN = "inset(0% 0% 0% 0%)";
const CLIP_HIDDEN_RIGHT = "inset(0% 100% 0% 0%)";
const CLIP_HIDDEN_LEFT = "inset(0% 0% 0% 100%)";
const IMG_GAP_LEFT = "0.14em";
const IMG_GAP_RIGHT = "0.03em";
const PETAL_HOLD_S = 2.5;
const PILL_HOLD_S = 2.5;
const WHEEL_SIZE = "0.54em";
const WHEEL_GAP = "0.19em";

const istFormatter = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

const IstClock: React.FC<{ className?: string }> = ({ className }) => {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <time
      className={className}
      dateTime={now?.toISOString()}
      suppressHydrationWarning
    >
      {now ? `${istFormatter.format(now).toUpperCase()} IST` : "\u00a0"}
    </time>
  );
};

const Home: React.FC<{ introReady?: boolean }> = ({ introReady = false }) => {
  const heroNameBackdrop = useRef<HTMLImageElement>(null);
  const roleO = useRef<HTMLSpanElement>(null);
  const productO = useRef<HTMLSpanElement>(null);
  const productOChar = useRef<HTMLSpanElement>(null);
  const productOImg = useRef<HTMLImageElement>(null);
  const pinwheel = useRef<HTMLSpanElement>(null);
  const pinwheelImg = useRef<HTMLImageElement>(null);
  const heroLogo = useRef<HTMLImageElement>(null);
  const [logoIndex, setLogoIndex] = useState(0);
  const isFirstLogoRender = useRef(true);

  useLayoutEffect(() => {
    const el = heroNameBackdrop.current;
    const pill = roleO.current;
    const oSlot = productO.current;
    const oChar = productOChar.current;
    const oText = oChar?.firstChild;
    const oImg = productOImg.current;
    const wheelSlot = pinwheel.current;
    const wheelImg = pinwheelImg.current;
    if (
      !el ||
      !pill ||
      !oSlot ||
      !oChar ||
      !oText ||
      !oImg ||
      !wheelSlot ||
      !wheelImg ||
      typeof window === "undefined"
    ) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const finalY = window.matchMedia("(max-width: 768px)").matches
      ? "-5%"
      : "-8%";

    oText.nodeValue = "o";

    if (!introReady) {
      gsap.set(el, { y: "52vh", force3D: true });
      gsap.set(pill, { width: "0.54em" });
      gsap.set(oSlot, { marginLeft: "0em", marginRight: "0em" });
      gsap.set(oChar, { clipPath: CLIP_SHOWN });
      gsap.set(oImg, { clipPath: CLIP_HIDDEN_RIGHT });
      gsap.set(wheelSlot, { width: "0em", marginRight: "0em", overflow: "hidden" });
      gsap.set(wheelImg, { yPercent: 105, rotation: 0 });
      return;
    }

    if (reduceMotion) {
      gsap.set(el, { y: finalY });
      gsap.set(pill, { width: "1.7em" });
      gsap.set(oSlot, { marginLeft: IMG_GAP_LEFT, marginRight: IMG_GAP_RIGHT });
      gsap.set(oChar, { clipPath: CLIP_HIDDEN_LEFT });
      gsap.set(oImg, { clipPath: CLIP_SHOWN });
      gsap.set(wheelSlot, { width: WHEEL_SIZE, marginRight: WHEEL_GAP });
      gsap.set(wheelImg, { yPercent: 0 });
      return;
    }

    const shuffleGlyph = (duration: number) => {
      const progress = { t: 0 };
      let lastStep = -1;
      return gsap.to(progress, {
        t: 1,
        duration,
        ease: "none",
        onUpdate: () => {
          const step = Math.floor((progress.t * duration) / SHUFFLE_STEP_S);
          if (step === lastStep) return;
          lastStep = step;
          oText.nodeValue =
            SHUFFLE_GLYPHS[Math.floor(Math.random() * SHUFFLE_GLYPHS.length)];
        },
        onComplete: () => {
          oText.nodeValue = "o";
        },
      });
    };

    const swapToImage = () =>
      gsap
        .timeline()
        .add(shuffleGlyph(1.1), 0)
        .fromTo(
          oChar,
          { clipPath: CLIP_SHOWN },
          { clipPath: CLIP_HIDDEN_LEFT, duration: 0.7, ease: "power2.inOut" },
          0.45
        )
        .fromTo(
          oImg,
          { clipPath: CLIP_HIDDEN_RIGHT },
          { clipPath: CLIP_SHOWN, duration: 0.7, ease: "power2.inOut" },
          0.45
        )
        .fromTo(
          oSlot,
          { marginLeft: "0em", marginRight: "0em" },
          {
            marginLeft: IMG_GAP_LEFT,
            marginRight: IMG_GAP_RIGHT,
            duration: 0.7,
            ease: "power2.inOut",
          },
          0.45
        );

    const swapToChar = () =>
      gsap
        .timeline({ defaults: { immediateRender: false } })
        .add(shuffleGlyph(1.1), 0)
        .fromTo(
          oImg,
          { clipPath: CLIP_SHOWN },
          { clipPath: CLIP_HIDDEN_LEFT, duration: 0.7, ease: "power2.inOut" },
          0
        )
        .fromTo(
          oChar,
          { clipPath: CLIP_HIDDEN_RIGHT },
          { clipPath: CLIP_SHOWN, duration: 0.7, ease: "power2.inOut" },
          0
        )
        .fromTo(
          oSlot,
          { marginLeft: IMG_GAP_LEFT, marginRight: IMG_GAP_RIGHT },
          {
            marginLeft: "0em",
            marginRight: "0em",
            duration: 0.7,
            ease: "power2.inOut",
          },
          0
        );

    const petalLoop = gsap
      .timeline({ repeat: -1 })
      .add(swapToChar(), PETAL_HOLD_S)
      .add(swapToImage(), `>${PETAL_HOLD_S}`);

    const timeline = gsap.timeline({ delay: 0.4 });
    timeline
      .fromTo(
        el,
        { y: "52vh" },
        { y: finalY, duration: 1.75, ease: "power3.out" }
      )
      .addLabel("stretch", "-=0.6")
      .fromTo(
        pill,
        { width: "0.54em" },
        { width: "1.7em", duration: 1.2, ease: "power3.inOut" },
        "stretch"
      )
      .add(swapToImage(), "stretch")
      .addLabel("pinwheel", "stretch+=1.25")
      .fromTo(
        wheelSlot,
        { width: "0em", marginRight: "0em" },
        {
          width: WHEEL_SIZE,
          marginRight: WHEEL_GAP,
          duration: 0.9,
          ease: "power3.inOut",
        },
        "pinwheel"
      )
      .fromTo(
        wheelImg,
        { yPercent: 105, rotation: 0 },
        { yPercent: 0, duration: 0.8, ease: "power3.out" },
        "pinwheel+=0.3"
      )
      .set(wheelSlot, { overflow: "visible" })
      .to(wheelImg, {
        rotation: "+=90",
        duration: 1,
        ease: "back.inOut(2.2)",
        delay: 0.6,
        repeat: -1,
        repeatDelay: 1.2,
        repeatRefresh: true,
      })
      .add(petalLoop, "stretch+=1.15")
      .to(
        pill,
        {
          width: "0.54em",
          duration: 1.2,
          ease: "power3.inOut",
          delay: PILL_HOLD_S,
          repeat: -1,
          yoyo: true,
          repeatDelay: PILL_HOLD_S,
        },
        "stretch+=1.2"
      );

    return () => {
      timeline.kill();
      oText.nodeValue = "o";
    };
  }, [introReady]);

  useEffect(() => {
    HERO_FACE_LOGOS.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (!introReady) return;

    const interval = window.setInterval(() => {
      setLogoIndex((current) => (current + 1) % HERO_FACE_LOGOS.length);
    }, LOGO_CYCLE_MS);

    return () => window.clearInterval(interval);
  }, [introReady]);

  useLayoutEffect(() => {
    const el = heroLogo.current;
    if (!el || typeof window === "undefined") return;

    if (isFirstLogoRender.current) {
      isFirstLogoRender.current = false;
      gsap.set(el, { opacity: 1, scale: 1 });
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(el, { opacity: 1, scale: 1 });
      return;
    }

    const tween = gsap.fromTo(
      el,
      { opacity: 0, scale: 0.88 },
      { opacity: 1, scale: 1, duration: 0.55, ease: "power2.out" }
    );

    return () => {
      tween.kill();
    };
  }, [logoIndex]);

  return (
    <>
      <motion.div
        variants={slideUp}
        initial="initial"
        animate="enter"
        className={styles.heroBrand}
      >
        <div className={styles.heroLogoWrap}>
          <img
            ref={heroLogo}
            className={styles.heroLogo}
            src={HERO_FACE_LOGOS[logoIndex]}
            alt="Ashwin"
          />
        </div>
        <img
          className={styles.heroName}
          src="/images/logos/ashwin-name.png"
          alt=""
        />
      </motion.div>
      <motion.main
        variants={slideUp}
        initial="initial"
        animate="enter"
        className={styles.landing}
      >
        <div className={styles.heroNameBackdrop}>
          <div ref={heroNameBackdrop} className={styles.heroNameGroup}>
            <h2 className={styles.heroRole}>
              <span>
                Pr
                <span
                  ref={productO}
                  className={styles.productO}
                  aria-hidden="true"
                >
                  <span ref={productOChar} className={styles.productOChar}>
                    o
                  </span>
                  <img
                    ref={productOImg}
                    className={styles.productOImg}
                    src="/svg/four-petal.webp"
                    alt=""
                  />
                </span>
                <span className="sr-only">o</span>
                duct{" "}
                <span
                  ref={pinwheel}
                  className={styles.pinwheel}
                  aria-hidden="true"
                >
                  <img
                    ref={pinwheelImg}
                    className={styles.pinwheelImg}
                    src="/svg/Quarter-circle%20pinwheel.webp"
                    alt=""
                  />
                </span>
                Designer
              </span>
              <span>
                &amp; Devel
                <span ref={roleO} className={styles.roleO} aria-hidden="true" />
                <span className="sr-only">o</span>
                per
              </span>
            </h2>
            <p className={styles.heroTagline}>
              From the first sketch to the final line of code,
              <br />I bring ideas to life.{" "}
              <img
                className={styles.heroTaglineHeart}
                src="/svg/heart.webp"
                alt=""
              />
            </p>
          </div>
        </div>
        <div className={styles.heroLocation}>
          <p>
            [ Based In
            <br />
            Coimbatore, India ]
          </p>
          <IstClock className={styles.heroClock} />
        </div>
        <div className={styles.heroMountain}>
          <GridDistortion
            imageSrc="/images/hero/bg-mountain.png"
            grid={47}
            radius={0.05}
            strength={0.06}
            relaxation={0.96}
            mode="drag"
            softness={0.2}
            chroma={0.3}
            idle={0.3}
            clickRipple
            intro={introReady}
          />
        </div>
        <div className={styles.heroCliff}>
          <GridDistortion
            imageSrc="/images/hero/Golden%20Cliffside%20Reflection.png"
            grid={47}
            radius={0.05}
            strength={0.06}
            relaxation={0.96}
            mode="drag"
            softness={0.2}
            chroma={0.3}
            idle={0.3}
            clickRipple
            intro={introReady}
          />
        </div>
      </motion.main>
    </>
  );
};

export default Home;
