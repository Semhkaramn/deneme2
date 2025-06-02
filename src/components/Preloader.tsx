export default function Preloader() {
  return (
    <div className="preloader">
      <svg height="300" width="300">
        <circle className="outer" cx="150" cy="150" r="50" />
        <circle className="inner" cx="150" cy="150" r="50">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 150 150"
            to="360 150 150"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
