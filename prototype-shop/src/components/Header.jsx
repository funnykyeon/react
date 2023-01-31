export default function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="title">Shop의 멋진 프로토타입</div>
        <div className="subtitle">
          다른 디자이너들이 ProtoPie를 사용하여 만든 것을 확인하세요. 다운로드
          이러한 예를 통해 그들이 어떻게 상호작용을 했는지 정확히 알 수 있습니다
        </div>
        <div className="btn__area">
          <a href="https://www.protopie.io" target="_BLANK" rel="noreferrer">
            <button>ProtoPie를 직접 사용해보십시오</button>
          </a>
        </div>
      </div>
    </header>
  );
}
