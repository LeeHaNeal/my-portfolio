import React, { useEffect, useRef, useState } from "react";

/**
 * 스크롤로 들어오면 살짝 위로 떠오르며 나타나는 공용 래퍼.
 * Header의 fixlog 타임라인에 쓰던 IntersectionObserver 패턴을
 * 페이지 전체에서 재사용할 수 있게 뽑아낸 것.
 */
function Reveal({ children, as: Tag = "div", delay = 0, className = "", once = true }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(el);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
