import React, { useEffect, useRef, useState } from "react";

const FIX_LOG = [
  {
    project: "올마켓",
    before: "결제 승인 시점에 재고를 차감하는 구조라 동시 주문 시 마지막 재고 오버셀 위험",
    after: "조건부 원자적 업데이트(UPDATE ... WHERE stock >= quantity)로 재고 부족 시 트랜잭션 롤백·결제 실패 처리",
    tag: "RESOLVED",
  },
  {
    project: "선착순 티켓 예매",
    before: "예약 저장과 재고 차감을 한 트랜잭션에 묶어 MySQL InnoDB 데드락 발생",
    after: "트랜잭션 분리 + 재시도 로직으로 동시 요청 실패 321건 → 0건 해결",
    tag: "RESOLVED",
  },
  {
    project: "ReadForce",
    before: "Gemini 응답이 마크다운·제어문자로 깨져 파싱 실패",
    after: "전처리 + 복구 fallback으로 파싱 안정화",
    tag: "RESOLVED",
  },
  {
    project: "칼로몽",
    before: "프론트 계산값(실수)과 백엔드 필드(정수) 타입 불일치",
    after: "요청 포맷 재정의로 저장 안정성 확보",
    tag: "RESOLVED",
  },
  {
    project: "칼로몽",
    before: "챌린지 완료해도 포인트가 쌓이지 않음",
    after: "완료 처리 · 점수 누적 로직 구현",
    tag: "SHIPPED",
  },
  {
    project: "ReadForce",
    before: "회원 현황을 확인할 관리자 화면이 없음",
    after: "조회 · 상태변경 · 삭제 관리자 페이지 구현",
    tag: "SHIPPED",
  },
];

function Header() {
  const [visibleCount, setVisibleCount] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          FIX_LOG.forEach((_, i) => {
            setTimeout(() => setVisibleCount((c) => Math.max(c, i + 1)), i * 220);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="hero" ref={sectionRef}>
      <div className="hero-inner">
        <div className="hero-text">
          <p className="eyebrow mono">FULL-STACK DEVELOPER</p>
          <h1>
            문제를 <em>찾아서</em>
            <br />
            끝까지 <em>고치는</em> 개발자,
            <br />
            이하늘
          </h1>
          <p className="hero-sub">
            Java · Spring Boot로 서버를 설계하고, React로 화면을 붙입니다.
            원인을 추적해 근본적으로 해결하는 쪽을 선택합니다.
          </p>
          <div className="hero-links">
            <a className="btn btn-primary" href="#projects">
              프로젝트 보기
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/LeeHaNeal"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="fixlog" aria-label="해결한 이슈 타임라인">
          <p className="fixlog-caption mono">FIXED, NOT WORKED AROUND</p>
          <ol className="fixlog-list">
            {FIX_LOG.map((entry, i) => (
              <li
                key={i}
                className={`fixlog-item ${i < visibleCount ? "is-visible" : ""}`}
              >
                <span className="fixlog-marker" />
                <div className="fixlog-content">
                  <p className="fixlog-project mono">{entry.project}</p>
                  <p className="fixlog-before">{entry.before}</p>
                  <p className="fixlog-after">
                    {entry.after}
                    <span
                      className={`fixlog-tag mono ${
                        entry.tag === "RESOLVED" ? "tag-resolved" : "tag-shipped"
                      }`}
                    >
                      {entry.tag}
                    </span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </header>
  );
}

export default Header;