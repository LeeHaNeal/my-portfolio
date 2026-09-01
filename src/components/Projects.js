import React from "react";

const PROJECTS = [
  {
    name: "선착순 티켓 예매 시스템",
    period: "2026.08 – 2026.09",
    role: "개인 프로젝트 · 풀스택 (기획 · 설계 · 구현 · AWS 배포까지 전체 수행)",
    team: "개인 프로젝트",
    summary:
      "동시 요청 1,000건이 몰려도 재고 100개는 정확히 100개만 판매되는 선착순 티켓 예매 서비스. Redis 원자적 연산으로 오버셀을 원천 차단하고, Docker Compose로 컨테이너화해 AWS EC2에 직접 배포·운영 중",
    problems: [
      {
        title: "동시 요청 시 재고 오버셀",
        detail:
          "DB 락만으로는 대량 동시 요청 처리에 한계가 있어, Redis + Lua 스크립트로 재고 차감을 하나의 원자적 연산으로 묶어 해결. 동시 요청 1,000건 테스트에서 재고 100개 중 정확히 100건만 성공(성공 100 · 매진 900 · 실패 0)하는 것을 실제로 증명.",
      },
      {
        title: "MySQL InnoDB 데드락",
        detail:
          "예약 INSERT와 재고 UPDATE를 한 트랜잭션에 묶은 것이 락 대기 사이클을 만든다는 걸 로그 분석으로 추적. 두 개의 트랜잭션으로 분리하고 재시도 로직을 추가해 동시 요청 실패 321건 → 0건으로 완전히 해결.",
      },
    ],
    stack: ["Java 17", "Spring Boot", "Spring Security", "JWT", "MySQL", "Redis", "Docker", "AWS EC2", "React", "TypeScript"],
    github: "https://github.com/LeeHaNeal/ticket-reservation",
    demo: "http://3.34.11.38",
    note: null,
  },
  {
    name: "ReadForce",
    period: "2025.05 – 2025.06",
    role: "팀장 · 백엔드 (챌린지 · 관리자 화면 프론트 병행)",
    team: "5인 팀",
    summary:
      "뉴스·문학 콘텐츠를 Gemini API로 분석해 초·중·고급 문해력 문제를 자동 생성하고, 챌린지와 랭킹으로 학습을 유도하는 웹 서비스",
    problems: [
      {
        title: "Gemini API 응답 파싱 불안정",
        detail:
          "마크다운 코드펜스·제어문자가 섞인 응답으로 JSON 파싱이 반복적으로 실패. 응답 전처리(코드펜스 제거, 경계 추출)와 파싱 실패 시 복구를 시도하는 fallback 로직을 구현하고, 필수 필드 검증으로 무효 응답을 걸러냄.",
      },
      {
        title: "관리자 화면 부재",
        detail:
          "회원 현황을 확인·관리할 방법이 없어, React로 회원 목록 조회·상태 변경·삭제·추가가 가능한 관리자 페이지를 직접 구현.",
      },
    ],
    stack: ["Java 17", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Redis", "Gemini API", "React", "axios"],
    github: "https://github.com/LeeHaNeal/ReadForce",
    note: "부트캠프 8개 팀 중 우수상(2팀 선정) 수상",
  },
  {
    name: "칼로몽",
    period: "2025.04 – 2025.05",
    role: "팀장 · 백엔드 (챌린지 · 운동 · 커뮤니티 화면 프론트 병행)",
    team: "5인 팀",
    summary:
      "식단·운동 기록과 칼로리 시각화, 챌린지를 통해 자발적인 건강관리를 돕는 웹 서비스",
    problems: [
      {
        title: "프론트-백엔드 타입 불일치",
        detail:
          "프론트에서 계산한 칼로리(실수)를 백엔드 필드(정수)가 그대로 받지 못해 식단 기록이 누락되는 문제를 발견. 요청 포맷을 재정의하고 예외 처리를 보완해 저장 안정성을 확보.",
      },
      {
        title: "챌린지 완료 처리 로직",
        detail:
          "챌린지 완료 시 리워드 포인트를 계산해 사용자 누적 점수에 반영하는 로직을 설계·구현.",
      },
    ],
    stack: ["Java", "Spring Boot", "JPA", "Oracle DB", "React", "Chart.js", "AWS"],
    github: "https://github.com/LeeHaNeal/Calomong",
    note: null,
  },
];

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-head">
        <span className="section-num mono">PROJECTS</span>
        <h2>프로젝트</h2>
      </div>
      <div className="project-list">
        {PROJECTS.map((p) => (
          <article className="project-card" key={p.name}>
            <div className="project-card-head">
              <div>
                <h3>{p.name}</h3>
                <p className="project-meta mono">
                  {p.period} · {p.team}
                </p>
              </div>
              <div className="project-links">
                {p.demo && (
                  <a
                    className="btn btn-primary btn-sm"
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    라이브 데모 ↗
                  </a>
                )}
                <a
                  className="btn btn-ghost btn-sm"
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <p className="project-role">{p.role}</p>
            <p className="project-summary">{p.summary}</p>

            <div className="project-problems">
              {p.problems.map((pr) => (
                <div className="problem" key={pr.title}>
                  <p className="problem-title">
                    <span className="signal mono">FIX</span> {pr.title}
                  </p>
                  <p className="problem-detail">{pr.detail}</p>
                </div>
              ))}
            </div>

            <div className="project-stack">
              {p.stack.map((s) => (
                <span className="tag mono" key={s}>
                  {s}
                </span>
              ))}
            </div>

            {p.note && <p className="project-note">🏆 {p.note}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
