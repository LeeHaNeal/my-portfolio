import React from "react";

function About() {
  return (
    <section id="about" className="section about">
      <div className="section-head">
        <span className="section-num mono">ABOUT</span>
        <h2>서버 구조를 이해하고, 화면까지 완성합니다</h2>
      </div>
      <div className="about-body">
        <p>
          동서울대학교에서 컴퓨터정보를 전공하고, 더조은컴퓨터아카데미강남
          Java 풀스택 취업 캠프를 8개월간 거치며 백엔드부터 프론트엔드까지
          서비스 전체 흐름을 다뤄왔습니다.
        </p>
        <p>
          두 팀 프로젝트에서 모두 팀장을 맡아 Spring Boot 기반 서버 구조와
          DB 스키마를 설계하는 동시에, React로 챌린지·커뮤니티·관리자 화면
          같은 실제 사용자 접점을 직접 구현했습니다. API를 설계한 사람이
          그 API를 소비하는 화면까지 만들었을 때 나오는 디테일 — 예외
          케이스, 응답 형식, 로딩 상태 — 을 놓치지 않으려 합니다.
        </p>
        <p>
          문제가 생기면 우회하기보다 원인을 추적하는 편입니다. Gemini API의
          불규칙한 응답, 프론트-백엔드 간 타입 불일치처럼 눈에 잘 안 띄는
          지점까지 코드로 들어가 확인하고 고칩니다.
        </p>
      </div>
    </section>
  );
}

export default About;
