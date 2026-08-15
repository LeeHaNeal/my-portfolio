import React from "react";

const PROJECTS = [
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
              <a
                className="btn btn-ghost btn-sm"
                href={p.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
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
